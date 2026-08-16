import type { Product } from './types';
import imgPrs8000d from '../assets/products/prs-8000d.jpg';
import imgPrsG25 from '../assets/products/prs-g25.jpg';
import imgPrsV21 from '../assets/products/prs-v21.jpg';
import imgPrsF20 from '../assets/products/prs-f20.jpg';
import imgPrs6200d from '../assets/products/prs-6200d.jpg';
import imgPrs3020 from '../assets/products/prs-3020.jpg';
import imgPrs1900a from '../assets/products/prs-1900a.jpg';
import imgPrs787d from '../assets/products/prs-787d.jpg';

/* Product taglines/descriptions are original text; photos sourced from the manufacturer's catalog (same PRECIOUS brand this business distributes). */
export const PRODUCTS: Product[] = [
  {
    id: 'prs-8000d', category: 'lockstitch', model: 'PRS-8000D', image: imgPrs8000d,
    tagline: { uz: "Avtomat ip kesuvchili yuqori tezlikli tikuv mashinasi", ru: "Автоматическая высокоскоростная машина с обрезкой нити", en: "High-speed automatic machine with thread trimmer" },
    description: {
      uz: "Yengil va o'rta qalinlikdagi matolar uchun mo'ljallangan, avtomatik ip kesish va tikuv oyoqchasini ko'tarish funksiyasiga ega yuqori tezlikli ignali tikuv mashinasi. Barqaror tikuv sifati va past shovqin darajasi bilan ajralib turadi.",
      ru: "Высокоскоростная прямострочная машина с автоматической обрезкой нити и подъёмом лапки, предназначена для лёгких и средних тканей. Отличается стабильным качеством строчки и низким уровнем шума.",
      en: "A high-speed lockstitch machine with automatic thread trimming and presser-foot lifting, built for light and medium-weight fabrics. Known for consistent stitch quality and low noise.",
    },
    specs: { speed: '5000 rpm', needle: '31 mm', stitch: '5 mm', system: 'DB×1', lube: 'Semi-dry', motor: 'Servo, integrated', weight: '38 kg' },
  },
  {
    id: 'prs-g25', category: 'lockstitch', model: 'PRS-G25', image: imgPrsG25,
    tagline: { uz: "Ikkilangan qadamli motorli aqlli ignali mashina", ru: "Интеллектуальная машина с двойным шаговым двигателем", en: "Smart lockstitch machine with dual stepping motor" },
    description: {
      uz: "Ochiq turdagi, ikkita qadamli motor bilan jihozlangan aqlli ignali tikuv mashinasi. Boshqaruv paneli orqali tikuv parametrlarini aniq sozlash imkonini beradi, yuqori unumdorlikni ta'minlaydi.",
      ru: "Прямострочная машина открытого типа с двумя шаговыми двигателями и интеллектуальной панелью управления. Позволяет точно настраивать параметры строчки и обеспечивает высокую производительность.",
      en: "An open-type intelligent lockstitch machine fitted with two stepping motors and a digital control panel for precise stitch settings and high productivity.",
    },
    specs: { speed: '4500 rpm', needle: '31 mm', stitch: '5 mm', system: 'DB×1', lube: 'Oil-free', motor: 'Dual stepping', weight: '40 kg' },
  },
  {
    id: 'prs-v21', category: 'overlock', model: 'PRS-V21', image: imgPrsV21,
    tagline: { uz: "Ip kesuvchili yuqori tezlikli overlok mashinasi", ru: "Высокоскоростной оверлок с обрезкой нити", en: "High-speed overlock with thread trimmer" },
    description: {
      uz: "Trikotaj va tabiiy matolar chekkasini pishiq va tekis qirqib-tikuvchi overlok mashinasi. Qadamli motor tufayli tikuv tezligi va uzunligini aniq boshqarish mumkin.",
      ru: "Оверлочная машина для аккуратной обработки края трикотажных и натуральных тканей. Шаговый двигатель обеспечивает точный контроль скорости и длины стежка.",
      en: "An overlock machine that delivers clean, durable edge finishing on knit and natural fabrics. The stepping motor enables precise control over speed and stitch length.",
    },
    specs: { speed: '7000 rpm', needle: '2.2–4.8 mm', stitch: '4 mm', system: 'DCx27', lube: 'Semi-dry', motor: 'Stepping', weight: '32 kg' },
  },
  {
    id: 'prs-f20', category: 'interlock', model: 'PRS-F20', image: imgPrsF20,
    tagline: { uz: "Super yuqori tezlikli interlok mashinasi", ru: "Сверхбыстрая интерлочная машина", en: "Super high-speed interlock machine" },
    description: {
      uz: "Trikotaj mahsulotlarni tikish uchun mo'ljallangan, mexanik-elektr integratsiyalangan super tezkor interlok mashinasi. Yuqori elastiklikdagi tikuvni ta'minlaydi.",
      ru: "Электромеханически интегрированная сверхбыстрая интерлочная машина для трикотажных изделий, обеспечивающая эластичный и прочный шов.",
      en: "A mechanically and electrically integrated super high-speed interlock machine for knitwear, producing an elastic, durable seam.",
    },
    specs: { speed: '6000 rpm', needle: '3.0 mm', stitch: '3.6 mm', system: 'UY128', lube: 'Auto-lube', motor: 'Servo, integrated', weight: '35 kg' },
  },
  {
    id: 'prs-6200d', category: 'interlock', model: 'PRS-6200D', image: imgPrs6200d,
    tagline: { uz: "4 ignali 6 ipli maxsus yenglik mashinasi", ru: "4-игольная 6-ниточная фидофф-арм машина", en: "4-needle 6-thread feed-off-the-arm machine" },
    description: {
      uz: "Sport kiyimlari va trikotaj mahsulotlarning yengini tikish uchun mo'ljallangan kompyuter boshqaruvli maxsus mashina. Bir vaqtning o'zida bir necha ip qatorini barqaror tikadi.",
      ru: "Компьютеризированная специализированная машина для обработки рукавов спортивной и трикотажной одежды, обеспечивающая стабильную многорядную строчку.",
      en: "A computer-controlled specialty machine for sleeve seaming on sportswear and knitwear, stitching multiple thread rows with consistent tension.",
    },
    specs: { speed: '5500 rpm', needle: '2 mm gauge', stitch: '3.2 mm', system: 'UY179', lube: 'Auto-lube', motor: 'Servo, integrated', weight: '48 kg' },
  },
  {
    id: 'prs-3020', category: 'special', model: 'PRS-3020', image: imgPrs3020,
    tagline: { uz: "Elektron dasturlanadigan tikuv mashinasi", ru: "Электронная программируемая швейная машина", en: "Electronic programmable pattern machine" },
    description: {
      uz: "Murakkab naqshli tikuvlarni avtomatik bajarish uchun mo'ljallangan, dasturlash paneli orqali yuzlab tikuv shablonlarini saqlash imkonini beruvchi elektron mashina.",
      ru: "Электронная машина для автоматического выполнения сложных декоративных строчек с возможностью сохранения сотен программируемых шаблонов.",
      en: "An electronic pattern machine that automates complex decorative stitching, with a programmable panel that stores hundreds of stitch templates.",
    },
    specs: { speed: '2000 rpm', needle: 'flat-bed', stitch: '0.1–10 mm', system: 'DP×5', lube: 'Oil-free', motor: 'Servo', weight: '55 kg' },
  },
  {
    id: 'prs-1900a', category: 'special', model: 'PRS-1900A', image: imgPrs1900a,
    tagline: { uz: "Yuqori tezlikli elektron mahkamlovchi mashina", ru: "Высокоскоростная электронная закрепочная машина", en: "High-speed electronic bartacking machine" },
    description: {
      uz: "Cho'ntak burchaklari, kamar halqalari va boshqa mustahkamlash nuqtalarini tez va aniq mahkamlovchi elektron bartek mashinasi.",
      ru: "Электронная закрепочная машина для быстрого и точного укрепления карманов, шлёвок и других нагруженных участков изделия.",
      en: "An electronic bartacking machine for fast, precise reinforcement of pocket corners, belt loops and other stress points.",
    },
    specs: { speed: '2700 rpm', needle: 'flat-bed', stitch: 'up to 40×30 mm', system: 'DP×17', lube: 'Oil-free', motor: 'Servo', weight: '45 kg' },
  },
  {
    id: 'prs-787d', category: 'heavy', model: 'PRS-787D', image: imgPrs787d,
    tagline: { uz: "Og'ir turdagi silindr platформali interlok mashinasi", ru: "Тяжёлая цилиндровая интерлочная машина", en: "Heavy-duty cylinder-bed interlock machine" },
    description: {
      uz: "Qalin trikotaj va texnik matolar bilan ishlash uchun mo'ljallangan, avtomatik ip kesuvchili og'ir turdagi silindr platформali interlok mashinasi.",
      ru: "Тяжёлая цилиндровая интерлочная машина с автоматической обрезкой нити для работы с плотным трикотажем и техническими тканями.",
      en: "A heavy-duty cylinder-bed interlock machine with automatic thread trimming, built for thick knits and technical fabrics.",
    },
    specs: { speed: '5000 rpm', needle: '3.0 mm', stitch: '3.6 mm', system: 'UY128', lube: 'Auto-lube', motor: 'Servo, integrated', weight: '52 kg' },
  },
];

export function getProductById(id: string | undefined): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, limit);
}
