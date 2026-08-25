import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { getProducts, uploadProductImage } from '../services/productService';
import type { Product } from '../data/types';
import { CATEGORIES } from '../data/categories';
import logoImg from '../assets/logo-white.png';

export function AdminDashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('all');
  const [uploadingId, setUploadingId] = useState<string | null>(null);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    setLoading(true);
    const data = await getProducts();
    setProducts(data);
    setLoading(false);
  }

  async function handleSignOut() {
    if (isSupabaseConfigured) {
      await supabase.auth.signOut();
    }
    navigate('/admin/login');
  }

  async function handleFileChange(productId: string, e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingId(productId);
    setMessage(null);

    try {
      const newImageUrl = await uploadProductImage(productId, file);
      
      // Update local state with new image URL
      setProducts((prev) =>
        prev.map((p) => (p.id === productId ? { ...p, image: newImageUrl } : p))
      );

      setMessage({ type: 'success', text: `Фотография для модели ${productId.toUpperCase()} успешно обновлена!` });
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message || 'Ошибка при загрузке изображения' });
    } finally {
      setUploadingId(null);
      // Reset input value so re-selecting same file triggers change
      e.target.value = '';
    }
  }

  const filteredProducts = products.filter((p) => {
    const matchCat = selectedCat === 'all' || p.category === selectedCat;
    const matchSearch = p.model.toLowerCase().includes(search.toLowerCase()) || p.id.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Top Header */}
      <header className="sticky top-0 z-30 border-b border-gray-800 bg-brand-black/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-6">
            <Link to="/">
              <img src={logoImg} alt="Precious" className="h-8 object-contain" />
            </Link>
            <div className="hidden h-5 w-px bg-gray-800 sm:block" />
            <h1 className="hidden font-head text-lg font-bold uppercase tracking-wider text-white sm:block">
              Управление фото товаров
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="rounded-md border border-gray-700 px-3.5 py-1.5 text-xs font-semibold text-gray-300 transition hover:border-gray-500 hover:text-white"
            >
              На сайт →
            </Link>
            <button
              onClick={handleSignOut}
              className="rounded-md bg-brand-red px-3.5 py-1.5 text-xs font-semibold text-white transition hover:bg-brand-red-dark"
            >
              Выйти
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto max-w-7xl px-6 py-8">
        {!isSupabaseConfigured && (
          <div className="mb-6 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4 text-sm text-yellow-300">
            <strong>Обратите внимание:</strong> Добавьте ключи <code>VITE_SUPABASE_URL</code> и <code>VITE_SUPABASE_ANON_KEY</code> в файл <code>.env.local</code> и перезапустите локальный сервер, чтобы сохранять фото в облаке Supabase.
          </div>
        )}

        {message && (
          <div
            className={`mb-6 flex items-center justify-between rounded-xl border p-4 text-sm font-medium ${
              message.type === 'success'
                ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                : 'border-red-500/30 bg-red-500/10 text-red-400'
            }`}
          >
            <span>{message.text}</span>
            <button onClick={() => setMessage(null)} className="ml-4 text-xs font-bold uppercase hover:opacity-75">
              ✕
            </button>
          </div>
        )}

        {/* Filters and Search Bar */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedCat('all')}
              className={`rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
                selectedCat === 'all'
                  ? 'bg-brand-red text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              Все ({products.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`rounded-lg px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition ${
                  selectedCat === cat.id
                    ? 'bg-brand-red text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {cat.id}
              </button>
            ))}
          </div>

          <div className="w-full sm:w-64">
            <input
              type="text"
              placeholder="Поиск модели..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-gray-800 bg-brand-dark px-4 py-2 text-sm text-white placeholder-gray-500 transition focus:border-brand-red focus:outline-none"
            />
          </div>
        </div>

        {/* Product Cards Grid */}
        {loading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-72 animate-pulse rounded-2xl border border-gray-800 bg-gray-800/40" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((p) => {
              const isUploading = uploadingId === p.id;
              return (
                <div
                  key={p.id}
                  className="flex flex-col justify-between rounded-2xl border border-gray-800 bg-brand-dark p-5 transition hover:border-gray-700"
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <span className="rounded bg-brand-black px-2.5 py-1 text-[11px] font-bold uppercase text-brand-red">
                        {p.category}
                      </span>
                      <span className="text-xs text-gray-500">ID: {p.id}</span>
                    </div>

                    <h3 className="font-head text-lg font-bold text-white">{p.model}</h3>

                    {/* Image Preview Container */}
                    <div className="relative my-4 flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl border border-gray-800 bg-brand-black/50 p-4">
                      {p.image ? (
                        <img
                          src={p.image}
                          alt={p.model}
                          className="h-full w-full object-contain transition group-hover:scale-105"
                        />
                      ) : (
                        <div className="text-center text-xs text-gray-600">Нет фото</div>
                      )}

                      {isUploading && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-brand-black/80 backdrop-blur-sm">
                          <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-red border-t-transparent" />
                          <span className="text-xs font-semibold text-white">Сжатие и загрузка...</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* File input button */}
                  <div>
                    <label className="block w-full cursor-pointer rounded-xl border border-dashed border-gray-700 bg-brand-black/40 py-2.5 text-center text-xs font-semibold text-gray-300 transition hover:border-brand-red hover:bg-brand-red/10 hover:text-white">
                      <span>{isUploading ? 'Загрузка...' : 'Заменить фото'}</span>
                      <input
                        type="file"
                        accept="image/*"
                        disabled={isUploading}
                        onChange={(e) => handleFileChange(p.id, e)}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
