import { useRef, useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Categories } from '../components/Categories';
import { Service } from '../components/Service';
import { ProductsSection } from '../components/ProductsSection';
import { Blog } from '../components/Blog';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  const productsRef = useRef<HTMLDivElement>(null);

  function handleCategorySelect(id: string) {
    setActiveCategory(id);
    productsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Categories onSelect={handleCategorySelect} />
      <ProductsSection ref={productsRef} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      <Service />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
