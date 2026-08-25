import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import logoImg from '../assets/logo-white.png';

export function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isSupabaseConfigured) {
      setError('Supabase не настроен (.env.local не содержит ключей VITE_SUPABASE_URL и VITE_SUPABASE_ANON_KEY).');
      return;
    }

    setLoading(true);
    setError(null);

    const { error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (loginError) {
      setError(loginError.message === 'Invalid login credentials' 
        ? 'Неверный email или пароль' 
        : loginError.message);
      setLoading(false);
    } else {
      navigate('/admin');
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-black px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-gray-800 bg-brand-dark p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <Link to="/" className="inline-block">
            <img src={logoImg} alt="Precious" className="mx-auto h-12 object-contain" />
          </Link>
          <h1 className="mt-6 font-head text-2xl font-bold uppercase tracking-wider text-white">
            Админ-панель Precious
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Вход для управления фотографиями каталога
          </p>
        </div>

        {!isSupabaseConfigured && (
          <div className="mb-6 rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4 text-sm text-yellow-300">
            <strong>Внимание:</strong> Добавьте <code>VITE_SUPABASE_URL</code> и <code>VITE_SUPABASE_ANON_KEY</code> в файл <code>.env.local</code> или Vercel Dashboard.
          </div>
        )}

        {error && (
          <div className="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 p-3.5 text-sm text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-300">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@precious.uz"
              className="w-full rounded-lg border border-gray-700 bg-brand-black px-4 py-3 text-sm text-white placeholder-gray-500 transition focus:border-brand-red focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-300">
              Пароль
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-lg border border-gray-700 bg-brand-black px-4 py-3 text-sm text-white placeholder-gray-500 transition focus:border-brand-red focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-brand-red py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-brand-red-dark disabled:opacity-50"
          >
            {loading ? 'Вход...' : 'Войти в панель'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link to="/" className="text-xs text-gray-500 hover:text-gray-300 transition">
            ← Вернуться на главный сайт
          </Link>
        </div>
      </div>
    </div>
  );
}
