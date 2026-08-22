import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProductCard } from '../components/ProductCard';
import { Icon } from '../components/icons';
import { useLanguage } from '../i18n/LanguageContext';
import { CATEGORIES } from '../data/categories';
import { getProductById, getRelatedProducts } from '../data/products';

export function ProductDetail() {
  const { id } = useParams();
  const { t, lang } = useLanguage();
  const [tab, setTab] = useState<'description' | 'specs'>('description');

  const product = getProductById(id);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTab('description');
  }, [id]);

  if (!product) return <Navigate to="/" replace />;

  const category = CATEGORIES.find((c) => c.id === product.category);
  const related = getRelatedProducts(product);

  return (
    <>
      <Header />

      <div className="mx-auto max-w-[1220px] px-6 pt-[82px]">
        <div className="flex items-center gap-2 py-5.5 text-[13.5px] text-gray-600">
          <Link to="/" className="hover:text-brand-red">{t('breadcrumb_home')}</Link>
          <Icon name="chevron" className="h-2.5 w-2.5 -rotate-90 text-gray-400" />
          <Link to="/#hits" className="hover:text-brand-red">{category ? t(category.nameKey) : ''}</Link>
          <Icon name="chevron" className="h-2.5 w-2.5 -rotate-90 text-gray-400" />
          <span>{product.model}</span>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1220px] grid-cols-1 gap-14 px-6 pb-20 lg:grid-cols-[.85fr_1.15fr]">
        <div className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-100 to-white">
          <img src={product.image} alt={product.model} className="h-full w-full object-contain p-8" />
        </div>

        <div>
          <span className="mb-2.5 block text-[13px] font-bold uppercase tracking-wide text-brand-red">
            {category ? t(category.nameKey) : ''}
          </span>
          <h1 className="font-head text-[26px] font-semibold uppercase leading-tight tracking-wide sm:text-[34px]">
            {product.model}
          </h1>
          <p className="mt-3 mb-6.5 text-[16px] text-gray-600">{product.tagline[lang] ?? product.tagline.uz}</p>

          <div className="mb-8.5 flex flex-wrap gap-3.5">
            <Link
              to="/#contacts"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-transparent bg-brand-red px-7 py-3.5 text-[15px] font-semibold text-white transition hover:bg-brand-red-dark"
            >
              {t('pd_btn_quote')}
            </Link>
            <Link
              to="/#hits"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-gray-200 bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition hover:border-black"
            >
              {t('pd_btn_back')}
            </Link>
          </div>

          {product.specs.length > 0 && (
            <div className="mb-6.5 flex gap-7 border-b border-gray-200">
              <button
                onClick={() => setTab('description')}
                className={`-mb-px border-b-2 pb-3 text-[14px] font-bold uppercase tracking-wide ${
                  tab === 'description' ? 'border-brand-red text-black' : 'border-transparent text-gray-400'
                }`}
              >
                {t('pd_tab_desc')}
              </button>
              <button
                onClick={() => setTab('specs')}
                className={`-mb-px border-b-2 pb-3 text-[14px] font-bold uppercase tracking-wide ${
                  tab === 'specs' ? 'border-brand-red text-black' : 'border-transparent text-gray-400'
                }`}
              >
                {t('pd_tab_specs')}
              </button>
            </div>
          )}

          {tab === 'description' || product.specs.length === 0 ? (
            <p className="text-[15px] text-gray-600">{product.description[lang] ?? product.description.uz}</p>
          ) : (
            <table className="w-full border-collapse">
              <tbody>
                {product.specs.map((row, i) => (
                  <tr key={i} className="border-b border-gray-200 last:border-0">
                    <td className="w-[45%] py-3 text-[14.5px] font-semibold text-gray-600">{row.label[lang] ?? row.label.uz}</td>
                    <td className="py-3 text-[14.5px] font-semibold text-black">{row.value[lang] ?? row.value.uz}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {related.length > 0 && (
        <section className="bg-gray-100 py-20">
          <div className="mx-auto max-w-[1220px] px-6">
            <h2 className="mb-10 text-center font-head text-[26px] font-semibold uppercase tracking-wide sm:text-[32px]">
              {t('pd_related_title')}
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
