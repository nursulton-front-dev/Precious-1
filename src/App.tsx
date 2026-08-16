import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { FloatingContacts } from './components/FloatingContacts';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <FloatingContacts />
      </BrowserRouter>
    </LanguageProvider>
  );
}
