import type { Product, SpecRow } from './types';
import imgPc9893d from '../assets/products/pc9893d.jpeg';
import imgG18d from '../assets/products/g18d.jpeg';
import imgG18d1 from '../assets/products/g18-d1.jpeg';
import imgG18d4 from '../assets/products/g18-d4.png';
import imgG18e from '../assets/products/g18e.jpeg';
import imgG212 from '../assets/products/g21-2.jpeg';
import imgV194 from '../assets/products/v19-4.jpeg';
import imgV195 from '../assets/products/v19-5.jpeg';
import imgV194u from '../assets/products/v19-4u.jpeg';
import imgV194utpcq from '../assets/products/v19-4utpcq.jpeg';
import imgV214 from '../assets/products/v21-4.jpeg';
import imgV214ut from '../assets/products/v21-4ut.png';
import imgF21 from '../assets/products/f21-501cb-502bb.jpeg';
import imgPc0303dl from '../assets/products/pc0303dl-12.jpeg';
import imgPc781et from '../assets/products/pc781et.jpeg';
import imgPc1377e from '../assets/products/pc1377e.jpeg';
import imgPc20u53d from '../assets/products/pc20u53d.jpeg';
import imgPc008d from '../assets/products/pc008d-12064p.jpeg';
import imgPc103 from '../assets/products/pc103.jpeg';
import imgPc500 from '../assets/products/pc500.png';
import imgPc600d from '../assets/products/pc600d.jpeg';
import imgPc100b from '../assets/products/pc100b.jpeg';
import imgPc100d from '../assets/products/pc100d.jpeg';
import imgPc1860a from '../assets/products/pc1860a.png';
import imgPc1900a from '../assets/products/pc1900a.jpg';
import imgPc910 from '../assets/products/pc910.jpeg';
import imgPc99b from '../assets/products/pc99b.png';
import imgG20d5 from '../assets/products/g20-d5.jpg';
import imgPc717 from '../assets/products/pc717.png';
import imgV203m from '../assets/products/v20-3m.jpeg';
import imgV19s4ut from '../assets/products/v19s-4ut.jpeg';
import imgPc0303d from '../assets/products/pc0303d.jpeg';
import imgPc2284d from '../assets/products/pc2284d.jpeg';
import imgPc20618d2 from '../assets/products/pc20618d-2.jpeg';
import imgPc1906 from '../assets/products/pc1906.jpeg';
import imgPc268d273 from '../assets/products/pc268d-273.jpeg';
import img2000cdk from '../assets/products/2000cdk.jpeg';
import imgPc787ut from '../assets/products/pc787ut.jpeg';
import img269d373 from '../assets/products/269d-373.jpeg';
import img720ut from '../assets/products/720ut.jpeg';

/* Product data sourced from the client's worksheet (real PRECIOUS catalog).
   Original text was Uzbek only; ru/en are translated for this site. */
function specs(rows: [string, string, string, string, string, string][]): SpecRow[] {
  return rows.map(([labelUz, labelRu, labelEn, valUz, valRu, valEn]) => ({
    label: { uz: labelUz, ru: labelRu, en: labelEn },
    value: { uz: valUz, ru: valRu, en: valEn },
  }));
}

/* These models are announced with a name and photo only — the client will
   provide full descriptions and specs after the site launches. */
const comingSoonTagline = {
  uz: "",
  ru: "",
  en: "",
};
const comingSoonDescription = {
  uz: "",
  ru: "",
  en: "",
};

export const PRODUCTS: Product[] = [
  {
    id: 'pc9893d', category: 'lockstitch', model: 'PC9893D', image: imgPc9893d,
    tagline: { uz: "Yuqori tezlikli bir ignali to'g'ri chok mashinasi", ru: "Высокоскоростная одноигольная прямострочная машина", en: "High-speed single-needle lockstitch machine" },
    description: {
      uz: "Yengil va o'rta qalinlikdagi matolar uchun mo'ljallangan yuqori tezlikdagi bir ignali to'g'ri chokli sanoat tikuv mashinasi. Aniq, tekis va barqaror chok hosil qiladi, servo motor esa kam shovqin va tejamkor energiya sarfini ta'minlaydi. PRECIOUS'ning eng ko'p tanlanadigan bestseller modellaridan biri.",
      ru: "Высокоскоростная одноигольная прямострочная машина для лёгких и средних тканей. Обеспечивает точную, ровную и стабильную строчку, а сервомотор — низкий уровень шума и экономичный расход энергии. Один из самых популярных бестселлеров PRECIOUS.",
      en: "A high-speed single-needle lockstitch machine for light and medium-weight fabrics. It produces a precise, even, stable stitch, while the servo motor keeps noise low and power use efficient. One of PRECIOUS's best-selling models.",
    },
    specs: specs([
      ["Ignalar soni", "Количество игл", "Needles", "1 ta", "1", "1"],
      ["Tikuv turi", "Тип строчки", "Stitch type", "bir qatorli to'g'ri chok", "однорядная прямая строчка", "single-row lockstitch"],
      ["Chok uzunligi", "Длина стежка", "Stitch length", "5 mm gacha", "до 5 мм", "up to 5 mm"],
      ["Mato turi", "Тип ткани", "Fabric type", "yengil va o'rta qalinlikdagi matolar", "лёгкие и средние ткани", "light and medium-weight fabrics"],
      ["Tikuv tezligi", "Скорость шитья", "Sewing speed", "5000 chok/daqiqa", "5000 стежков/мин", "5000 stitches/min"],
      ["Igna modeli", "Модель иглы", "Needle system", "DB×1", "DB×1", "DB×1"],
      ["Dvigatel turi", "Тип двигателя", "Motor type", "servo motor", "сервомотор", "servo motor"],
    ]),
  },
  {
    id: 'g18d', category: 'lockstitch', model: 'G18D', image: imgG18d,
    tagline: { uz: "Panelli boshqaruvga ega to'g'ri chok mashinasi", ru: "Прямострочная машина с панелью управления", en: "Lockstitch machine with control panel" },
    description: {
      uz: "Panelli boshqaruvga ega bir ignali to'g'ri chokli sanoat tikuv mashinasi. Yengil va o'rta qalinlikdagi matolar bilan ishlash uchun mo'ljallangan bestseller model — boshqaruv paneli ish jarayonini qulay va oson nazorat qilish imkonini beradi. Yuqori tikuv tezligi unumdorlikni oshiradi, servo motor esa kam shovqinli va energiya tejamkor ishlashni ta'minlaydi.",
      ru: "Одноигольная прямострочная машина с панелью управления для лёгких и средних тканей. Панель управления делает рабочий процесс удобным и простым, а высокая скорость шитья повышает производительность. Сервомотор обеспечивает низкий уровень шума и экономию энергии.",
      en: "A single-needle lockstitch machine with a control panel, built for light and medium-weight fabrics. The panel makes the workflow convenient to monitor, and high sewing speed boosts output. The servo motor keeps it quiet and energy-efficient.",
    },
    specs: specs([
      ["Ignalar soni", "Количество игл", "Needles", "1 ta", "1", "1"],
      ["Tikuv turi", "Тип строчки", "Stitch type", "bir qatorli to'g'ri chok", "однорядная прямая строчка", "single-row lockstitch"],
      ["Chok uzunligi", "Длина стежка", "Stitch length", "5 mm gacha", "до 5 мм", "up to 5 mm"],
      ["Mato turi", "Тип ткани", "Fabric type", "yengil va o'rta qalinlikdagi matolar", "лёгкие и средние ткани", "light and medium-weight fabrics"],
      ["Tikuv tezligi", "Скорость шитья", "Sewing speed", "5000 chok/daqiqa", "5000 стежков/мин", "5000 stitches/min"],
      ["Igna modeli", "Модель иглы", "Needle system", "DB×1", "DB×1", "DB×1"],
      ["Dvigatel turi", "Тип двигателя", "Motor type", "servo motor", "сервомотор", "servo motor"],
    ]),
  },
  {
    id: 'g18-d1', category: 'lockstitch', model: 'G18-D1', image: imgG18d1,
    tagline: { uz: "Avtomatik ip kesuvchili to'g'ri chok mashinasi", ru: "Прямострочная машина с автообрезкой нити", en: "Lockstitch machine with automatic thread trimmer" },
    description: {
      uz: "Avtomatik ip kesish funksiyasiga ega bir ignali to'g'ri chokli bestseller model. Yengil va o'rta qalinlikdagi matolar bilan ishlash uchun mo'ljallangan, avtomatik ip kesish tikuv jarayonini tezlashtirib, ortiqcha qo'l mehnatini kamaytiradi. Servo motor kam shovqinli, barqaror va energiya tejamkor ishlashni ta'minlaydi.",
      ru: "Бестселлер среди одноигольных прямострочных машин с функцией автоматической обрезки нити. Автообрезка ускоряет процесс шитья и снижает ручной труд оператора. Сервомотор обеспечивает стабильную, тихую и энергоэффективную работу.",
      en: "A best-selling single-needle lockstitch machine with automatic thread trimming. The auto-trim speeds up the sewing process and reduces manual work. The servo motor delivers stable, quiet, energy-efficient operation.",
    },
    specs: specs([
      ["Ignalar soni", "Количество игл", "Needles", "1 ta", "1", "1"],
      ["Avtomatik ip kesish", "Автообрезка нити", "Automatic thread trimming", "mavjud", "есть", "yes"],
      ["Tikuv turi", "Тип строчки", "Stitch type", "bir qatorli to'g'ri chok", "однорядная прямая строчка", "single-row lockstitch"],
      ["Chok uzunligi", "Длина стежка", "Stitch length", "5 mm gacha", "до 5 мм", "up to 5 mm"],
      ["Mato turi", "Тип ткани", "Fabric type", "yengil va o'rta qalinlikdagi matolar", "лёгкие и средние ткани", "light and medium-weight fabrics"],
      ["Tikuv tezligi", "Скорость шитья", "Sewing speed", "5000 chok/daqiqa", "5000 стежков/мин", "5000 stitches/min"],
      ["Igna modeli", "Модель иглы", "Needle system", "DB×5", "DB×5", "DB×5"],
      ["Dvigatel turi", "Тип двигателя", "Motor type", "servo motor", "сервомотор", "servo motor"],
    ]),
  },
  {
    id: 'g18-d4', category: 'lockstitch', model: 'G18-D4', image: imgG18d4,
    tagline: { uz: "To'liq avtomatik funksiyali to'g'ri chok mashinasi", ru: "Прямострочная машина с полным набором автофункций", en: "Lockstitch machine with full automatic functions" },
    description: {
      uz: "Avtomatik funksiyalarga ega bir ignali to'g'ri chokli bestseller model. Avtomatik ip kesish, tepki ko'tarish va chokni mustahkamlash funksiyalari tikuv jarayonini tezlashtirib, ishni yanada qulay qiladi. Yuqori tikuv tezligi va servo motor barqaror hamda energiya tejamkor ishlashni ta'minlaydi.",
      ru: "Одноигольная прямострочная машина с полным набором автофункций. Автообрезка нити, автоподъём лапки и автозакрепка стежка ускоряют работу и делают её удобнее. Высокая скорость шитья и сервомотор обеспечивают стабильную, экономичную работу.",
      en: "A single-needle lockstitch machine with a full set of automatic functions. Automatic thread trimming, presser-foot lift and stitch back-tacking speed up the workflow and make it more convenient. High sewing speed and the servo motor keep it stable and energy-efficient.",
    },
    specs: specs([
      ["Ignalar soni", "Количество игл", "Needles", "1 ta", "1", "1"],
      ["Avtomatik ip kesish", "Автообрезка нити", "Automatic thread trimming", "mavjud", "есть", "yes"],
      ["Avtomatik tepki ko'tarish", "Автоподъём лапки", "Automatic presser-foot lift", "mavjud", "есть", "yes"],
      ["Avtomatik chokni mustahkamlash", "Автозакрепка стежка", "Automatic back-tacking", "mavjud", "есть", "yes"],
      ["Chok uzunligi", "Длина стежка", "Stitch length", "5 mm gacha", "до 5 мм", "up to 5 mm"],
      ["Mato turi", "Тип ткани", "Fabric type", "yengil va o'rta qalinlikdagi matolar", "лёгкие и средние ткани", "light and medium-weight fabrics"],
      ["Tikuv tezligi", "Скорость шитья", "Sewing speed", "5000 chok/daqiqa", "5000 стежков/мин", "5000 stitches/min"],
      ["Igna modeli", "Модель иглы", "Needle system", "DB×1", "DB×1", "DB×1"],
      ["Dvigatel turi", "Тип двигателя", "Motor type", "servo motor", "сервомотор", "servo motor"],
    ]),
  },
  {
    id: 'g18e', category: 'lockstitch', model: 'G18E', image: imgG18e,
    tagline: { uz: "Step motorli avtomatik to'g'ri chok mashinasi", ru: "Автоматическая прямострочная машина с шаговым двигателем", en: "Automatic lockstitch machine with stepping motor" },
    description: {
      uz: "Step motorli avtomatik bir ignali to'g'ri chokli zamonaviy model. Avtomatik ip kesish, tepki ko'tarish va chokni mustahkamlash funksiyalari ish jarayonini tez va qulay tashkil etishga yordam beradi. 9 xil dekorativ chok imkoniyati qo'shimcha qulaylik yaratadi, step motor esa aniq va barqaror ishlashni ta'minlaydi.",
      ru: "Современная автоматическая одноигольная прямострочная машина на шаговом двигателе. Автообрезка нити, автоподъём лапки и автозакрепка ускоряют и упрощают процесс шитья. 9 видов декоративных строчек добавляют гибкости, а шаговый двигатель обеспечивает точность и стабильность.",
      en: "A modern automatic single-needle lockstitch machine driven by a stepping motor. Automatic thread trimming, presser-foot lift and back-tacking make the workflow fast and convenient. 9 decorative stitch patterns add flexibility, while the stepping motor keeps it precise and stable.",
    },
    specs: specs([
      ["Ignalar soni", "Количество игл", "Needles", "1 ta", "1", "1"],
      ["Avtomatik ip kesish", "Автообрезка нити", "Automatic thread trimming", "mavjud", "есть", "yes"],
      ["Avtomatik tepki ko'tarish", "Автоподъём лапки", "Automatic presser-foot lift", "mavjud", "есть", "yes"],
      ["Avtomatik chokni mustahkamlash", "Автозакрепка стежка", "Automatic back-tacking", "mavjud", "есть", "yes"],
      ["Dekorativ choklar", "Декоративные строчки", "Decorative stitches", "9 xil", "9 видов", "9 patterns"],
      ["Chok uzunligi", "Длина стежка", "Stitch length", "5 mm gacha", "до 5 мм", "up to 5 mm"],
      ["Mato turi", "Тип ткани", "Fabric type", "yengil va o'rta qalinlikdagi matolar", "лёгкие и средние ткани", "light and medium-weight fabrics"],
      ["Tikuv tezligi", "Скорость шитья", "Sewing speed", "5000 chok/daqiqa", "5000 стежков/мин", "5000 stitches/min"],
      ["Igna modeli", "Модель иглы", "Needle system", "DB×1", "DB×1", "DB×1"],
      ["Dvigatel turi", "Тип двигателя", "Motor type", "step motor", "шаговый двигатель", "stepping motor"],
    ]),
  },
  {
    id: 'g21-2', category: 'lockstitch', model: 'G21-2', image: imgG212,
    tagline: { uz: "Sensorli boshqaruvga ega ikki step motorli mashina", ru: "Машина с сенсорным управлением и двумя шаговыми двигателями", en: "Sensor-controlled machine with dual stepping motors" },
    description: {
      uz: "2 ta step motor va sensorli boshqaruvga ega avtomatik bir ignali to'g'ri chokli zamonaviy model. Sensorli boshqaruv tizimi tikuv jarayonida yuqori aniqlik, barqarorlik va qulay boshqaruvni ta'minlaydi. Avtomatik ip kesish, tepki ko'tarish va chokni mustahkamlash funksiyalari, shuningdek 9 xil dekorativ chok imkoniyati mavjud.",
      ru: "Современная автоматическая одноигольная прямострочная машина с двумя шаговыми двигателями и сенсорным управлением. Сенсорная система обеспечивает высокую точность, стабильность и удобство в работе. Есть автообрезка нити, автоподъём лапки, автозакрепка и 9 видов декоративных строчек.",
      en: "A modern automatic single-needle lockstitch machine with two stepping motors and sensor-based control for high precision, stability and ease of use. It includes automatic thread trimming, presser-foot lift, back-tacking, and 9 decorative stitch patterns.",
    },
    specs: specs([
      ["Ignalar soni", "Количество игл", "Needles", "1 ta", "1", "1"],
      ["Step motorlar soni", "Количество шаговых двигателей", "Stepping motors", "2 ta", "2", "2"],
      ["Boshqaruv turi", "Тип управления", "Control type", "sensorli", "сенсорное", "sensor-based"],
      ["Avtomatik ip kesish", "Автообрезка нити", "Automatic thread trimming", "mavjud", "есть", "yes"],
      ["Avtomatik tepki ko'tarish", "Автоподъём лапки", "Automatic presser-foot lift", "mavjud", "есть", "yes"],
      ["Avtomatik chokni mustahkamlash", "Автозакрепка стежка", "Automatic back-tacking", "mavjud", "есть", "yes"],
      ["Dekorativ choklar", "Декоративные строчки", "Decorative stitches", "9 xil", "9 видов", "9 patterns"],
      ["Chok uzunligi", "Длина стежка", "Stitch length", "5 mm gacha", "до 5 мм", "up to 5 mm"],
      ["Mato turi", "Тип ткани", "Fabric type", "yengil va o'rta qalinlikdagi matolar", "лёгкие и средние ткани", "light and medium-weight fabrics"],
      ["Tikuv tezligi", "Скорость шитья", "Sewing speed", "5000 chok/daqiqa", "5000 стежков/мин", "5000 stitches/min"],
      ["Igna modeli", "Модель иглы", "Needle system", "DB×1", "DB×1", "DB×1"],
      ["Dvigatel turi", "Тип двигателя", "Motor type", "step motor", "шаговый двигатель", "stepping motor"],
    ]),
  },
  {
    id: 'v19-4', category: 'overlock', model: 'V19-4', image: imgV194,
    tagline: { uz: "4 ipli sanoat overlok mashinasi", ru: "4-ниточная промышленная оверлочная машина", en: "4-thread industrial overlock machine" },
    description: {
      uz: "4 ipli sanoat overlok bestseller modeli, yengil va o'rta qalinlikdagi matolar bilan ishlash uchun mo'ljallangan. Overlok tizimi mato chetlarini sifatli tikish va puxta ishlov berish imkonini beradi. Yopiq moy tizimi tozalikni saqlaydi, servo motor esa barqaror va kam shovqinli ishlashni ta'minlaydi.",
      ru: "Бестселлер среди 4-ниточных промышленных оверлочных машин для лёгких и средних тканей. Система обеспечивает качественную обработку и обмётку края. Закрытая масляная система сохраняет чистоту, сервомотор — стабильную и тихую работу.",
      en: "A best-selling 4-thread industrial overlock machine for light and medium-weight fabrics. It finishes and secures fabric edges cleanly. The enclosed oil system keeps things clean, and the servo motor keeps it stable and quiet.",
    },
    specs: specs([
      ["Ignalar soni", "Количество игл", "Needles", "2 ta", "2", "2"],
      ["Iplar soni", "Количество нитей", "Threads", "4 ta", "4", "4"],
      ["Mato turi", "Тип ткани", "Fabric type", "yengil va o'rta qalinlikdagi matolar", "лёгкие и средние ткани", "light and medium-weight fabrics"],
      ["Tikuv tezligi", "Скорость шитья", "Sewing speed", "6000 chok/daqiqa", "6000 стежков/мин", "6000 stitches/min"],
      ["Igna modeli", "Модель иглы", "Needle system", "DC×27", "DC×27", "DC×27"],
      ["Dvigatel turi", "Тип двигателя", "Motor type", "servo motor", "сервомотор", "servo motor"],
      ["Moy idishi", "Масляный резервуар", "Oil reservoir", "yopiq", "закрытый", "enclosed"],
      ["Tepki ko'tarilish balandligi", "Высота подъёма лапки", "Presser-foot lift", "5,5 mm", "5,5 мм", "5.5 mm"],
      ["Maksimal chok uzunligi", "Макс. длина стежка", "Max stitch length", "3,6 mm", "3,6 мм", "3.6 mm"],
    ]),
  },
  {
    id: 'v19-5', category: 'overlock', model: 'V19-5', image: imgV195,
    tagline: { uz: "5 ipli sanoat overlok mashinasi", ru: "5-ниточная промышленная оверлочная машина", en: "5-thread industrial overlock machine" },
    description: {
      uz: "5 ipli sanoat overlok yuqori unumdorlikdagi model, yengil va o'rta qalinlikdagi matolar bilan ishlash uchun mo'ljallangan. Overlok tizimi mato chetlarini tikish, mustahkamlash va sifatli ishlov berish imkonini beradi. Yopiq moy tizimi va servo motor barqaror, kam shovqinli hamda samarali ishlashni ta'minlaydi.",
      ru: "Высокопроизводительная 5-ниточная промышленная оверлочная машина для лёгких и средних тканей. Система обмётывает, укрепляет и качественно обрабатывает край ткани. Закрытая масляная система и сервомотор обеспечивают стабильную, тихую и эффективную работу.",
      en: "A high-output 5-thread industrial overlock machine for light and medium-weight fabrics. It overedges, reinforces and finishes fabric edges with quality. The enclosed oil system and servo motor keep it stable, quiet and efficient.",
    },
    specs: specs([
      ["Ignalar soni", "Количество игл", "Needles", "2 ta", "2", "2"],
      ["Iplar soni", "Количество нитей", "Threads", "5 ta", "5", "5"],
      ["Mato turi", "Тип ткани", "Fabric type", "yengil va o'rta qalinlikdagi matolar", "лёгкие и средние ткани", "light and medium-weight fabrics"],
      ["Tikuv tezligi", "Скорость шитья", "Sewing speed", "6000 chok/daqiqa", "6000 стежков/мин", "6000 stitches/min"],
      ["Igna modeli", "Модель иглы", "Needle system", "DC×27", "DC×27", "DC×27"],
      ["Dvigatel turi", "Тип двигателя", "Motor type", "servo motor", "сервомотор", "servo motor"],
      ["Moy idishi", "Масляный резервуар", "Oil reservoir", "yopiq", "закрытый", "enclosed"],
      ["Tepki ko'tarilish balandligi", "Высота подъёма лапки", "Presser-foot lift", "5,5 mm", "5,5 мм", "5.5 mm"],
      ["Maksimal chok uzunligi", "Макс. длина стежка", "Max stitch length", "3,6 mm", "3,6 мм", "3.6 mm"],
    ]),
  },
  {
    id: 'v19-4u', category: 'overlock', model: 'V19-4U', image: imgV194u,
    tagline: { uz: "Avtomatik ip kesuvchili 4 ipli overlok mashinasi", ru: "4-ниточный оверлок с автообрезкой нити", en: "4-thread overlock with automatic thread trimmer" },
    description: {
      uz: "Avtomatik ip kesish funksiyasiga ega 4 ipli sanoat overlok zamonaviy modeli. Overlok tizimi mato chetlariga sifatli va puxta ishlov berish imkonini beradi, avtomatik ip kesish esa tikuvchining ishini yengillashtiradi. Yopiq moy tizimi va servo motor barqaror, kam shovqinli ishlashni ta'minlaydi.",
      ru: "Современная 4-ниточная промышленная оверлочная машина с автоматической обрезкой нити. Система качественно обрабатывает край ткани, а автообрезка облегчает работу оператора. Закрытая масляная система и сервомотор — стабильность и низкий шум.",
      en: "A modern 4-thread industrial overlock machine with automatic thread trimming. It finishes fabric edges cleanly, while the auto-trim eases the operator's work. The enclosed oil system and servo motor keep it stable and quiet.",
    },
    specs: specs([
      ["Ignalar soni", "Количество игл", "Needles", "2 ta", "2", "2"],
      ["Iplar soni", "Количество нитей", "Threads", "4 ta", "4", "4"],
      ["Avtomatik ip kesish", "Автообрезка нити", "Automatic thread trimming", "mavjud", "есть", "yes"],
      ["Mato turi", "Тип ткани", "Fabric type", "yengil va o'rta qalinlikdagi matolar", "лёгкие и средние ткани", "light and medium-weight fabrics"],
      ["Tikuv tezligi", "Скорость шитья", "Sewing speed", "6000 chok/daqiqa", "6000 стежков/мин", "6000 stitches/min"],
      ["Igna modeli", "Модель иглы", "Needle system", "DC×27", "DC×27", "DC×27"],
      ["Dvigatel turi", "Тип двигателя", "Motor type", "servo motor", "сервомотор", "servo motor"],
      ["Moy idishi", "Масляный резервуар", "Oil reservoir", "yopiq", "закрытый", "enclosed"],
      ["Tepki ko'tarilish balandligi", "Высота подъёма лапки", "Presser-foot lift", "5,5 mm", "5,5 мм", "5.5 mm"],
      ["Maksimal chok uzunligi", "Макс. длина стежка", "Max stitch length", "3,6 mm", "3,6 мм", "3.6 mm"],
    ]),
  },
  {
    id: 'v19-4utpcq', category: 'overlock', model: 'V19-4UTPCQ', image: imgV194utpcq,
    tagline: { uz: "Havo tozalash funksiyali to'liq avtomatik overlok", ru: "Полностью автоматический оверлок с очисткой воздухом", en: "Fully automatic overlock with air-blow cleaning" },
    description: {
      uz: "Havo bilan tozalash funksiyasiga ega to'liq avtomatik sanoat overlok zamonaviy modeli. Avtomatik ip kesish va tepki ko'tarish funksiyalari operator ishini yengillashtiradi, havo bilan tozalash esa yig'iladigan mayda mato qoldiqlari va changni tozalashga yordam beradi. Intensiv ishlab chiqarish jarayonlari uchun mos.",
      ru: "Полностью автоматическая современная промышленная оверлочная машина с функцией очистки воздухом. Автообрезка нити и автоподъём лапки облегчают работу оператора, а обдув воздухом удаляет мелкие обрезки ткани и пыль. Подходит для интенсивного производства.",
      en: "A fully automatic modern industrial overlock machine with air-blow cleaning. Automatic thread trimming and presser-foot lift ease the operator's work, while the air-blow clears away fabric lint and dust. Suited to intensive production.",
    },
    specs: specs([
      ["Ignalar soni", "Количество игл", "Needles", "2 ta", "2", "2"],
      ["Avtomatik ip kesish", "Автообрезка нити", "Automatic thread trimming", "mavjud", "есть", "yes"],
      ["Avtomatik tepki ko'tarish", "Автоподъём лапки", "Automatic presser-foot lift", "mavjud", "есть", "yes"],
      ["Havo bilan tozalash funksiyasi", "Функция очистки воздухом", "Air-blow cleaning function", "mavjud", "есть", "yes"],
      ["Mato turi", "Тип ткани", "Fabric type", "yengil va o'rta qalinlikdagi matolar", "лёгкие и средние ткани", "light and medium-weight fabrics"],
      ["Tikuv tezligi", "Скорость шитья", "Sewing speed", "6000 chok/daqiqa", "6000 стежков/мин", "6000 stitches/min"],
      ["Igna modeli", "Модель иглы", "Needle system", "DC×27", "DC×27", "DC×27"],
      ["Dvigatel turi", "Тип двигателя", "Motor type", "servo motor", "сервомотор", "servo motor"],
      ["Moy idishi", "Масляный резервуар", "Oil reservoir", "yopiq", "закрытый", "enclosed"],
      ["Tepki ko'tarilish balandligi", "Высота подъёма лапки", "Presser-foot lift", "5,5 mm", "5,5 мм", "5.5 mm"],
      ["Maksimal chok uzunligi", "Макс. длина стежка", "Max stitch length", "3,6 mm", "3,6 мм", "3.6 mm"],
    ]),
  },
  {
    id: 'v21-4', category: 'overlock', model: 'V21-4', image: imgV214,
    tagline: { uz: "PEGASUS turidagi 4 ipli overlok mashinasi", ru: "4-ниточный оверлок типа PEGASUS", en: "PEGASUS-type 4-thread overlock machine" },
    description: {
      uz: "PEGASUS turidagi 4 ipli sanoat overlok yuqori unumdorlikdagi modeli, yengil va o'rta qalinlikdagi matolar bilan ishlash uchun mo'ljallangan. PEGASUS turidagi konstruksiya mato chetlariga sifatli, tekis va puxta ishlov berish imkonini beradi. Yopiq moy tizimi va servo motor barqaror ishlashni ta'minlaydi.",
      ru: "Высокопроизводительная 4-ниточная промышленная оверлочная машина типа PEGASUS для лёгких и средних тканей. Конструкция типа PEGASUS даёт качественную, ровную и плотную обработку края. Закрытая масляная система и сервомотор — стабильная работа.",
      en: "A high-output PEGASUS-type 4-thread industrial overlock machine for light and medium-weight fabrics. The PEGASUS-type build gives a clean, even, secure edge finish. The enclosed oil system and servo motor keep it stable.",
    },
    specs: specs([
      ["Ignalar soni", "Количество игл", "Needles", "2 ta", "2", "2"],
      ["Iplar soni", "Количество нитей", "Threads", "4 ta", "4", "4"],
      ["Mato turi", "Тип ткани", "Fabric type", "yengil va o'rta qalinlikdagi matolar", "лёгкие и средние ткани", "light and medium-weight fabrics"],
      ["Tikuv tezligi", "Скорость шитья", "Sewing speed", "6000 chok/daqiqa", "6000 стежков/мин", "6000 stitches/min"],
      ["Igna modeli", "Модель иглы", "Needle system", "DC×27", "DC×27", "DC×27"],
      ["Dvigatel turi", "Тип двигателя", "Motor type", "servo motor", "сервомотор", "servo motor"],
      ["Moy idishi", "Масляный резервуар", "Oil reservoir", "yopiq", "закрытый", "enclosed"],
      ["Tepki ko'tarilish balandligi", "Высота подъёма лапки", "Presser-foot lift", "5,5 mm", "5,5 мм", "5.5 mm"],
      ["Maksimal chok uzunligi", "Макс. длина стежка", "Max stitch length", "3,6 mm", "3,6 мм", "3.6 mm"],
    ]),
  },
  {
    id: 'v21-4ut', category: 'overlock', model: 'V21-4UT', image: imgV214ut,
    tagline: { uz: "Avtomatik ip kesuvchili PEGASUS overlok mashinasi", ru: "Оверлок PEGASUS с автообрезкой нити", en: "PEGASUS-type overlock with automatic thread trimmer" },
    description: {
      uz: "Avtomatik ip kesish funksiyasiga ega PEGASUS turidagi 4 ipli sanoat overlok zamonaviy modeli. Overlok tizimi mato chetlariga tekis, sifatli va puxta ishlov berish imkonini beradi. Avtomatik ip kesish va tepki ko'tarish funksiyalari operator uchun qo'shimcha qulaylik yaratadi.",
      ru: "Современная 4-ниточная промышленная оверлочная машина PEGASUS с автоматической обрезкой нити. Система даёт ровную, качественную и плотную обработку края. Автообрезка нити и автоподъём лапки создают дополнительное удобство оператору.",
      en: "A modern PEGASUS-type 4-thread industrial overlock machine with automatic thread trimming. It gives an even, clean, secure edge finish. Automatic thread trimming and presser-foot lift add extra convenience for the operator.",
    },
    specs: specs([
      ["Ignalar soni", "Количество игл", "Needles", "2 ta", "2", "2"],
      ["Iplar soni", "Количество нитей", "Threads", "4 ta", "4", "4"],
      ["Avtomatik ip kesish", "Автообрезка нити", "Automatic thread trimming", "mavjud", "есть", "yes"],
      ["Avtomatik tepki ko'tarish", "Автоподъём лапки", "Automatic presser-foot lift", "mavjud", "есть", "yes"],
      ["Mato turi", "Тип ткани", "Fabric type", "yengil va o'rta qalinlikdagi matolar", "лёгкие и средние ткани", "light and medium-weight fabrics"],
      ["Tikuv tezligi", "Скорость шитья", "Sewing speed", "6000 chok/daqiqa", "6000 стежков/мин", "6000 stitches/min"],
      ["Igna modeli", "Модель иглы", "Needle system", "DC×27", "DC×27", "DC×27"],
      ["Dvigatel turi", "Тип двигателя", "Motor type", "servo motor", "сервомотор", "servo motor"],
      ["Moy idishi", "Масляный резервуар", "Oil reservoir", "yopiq", "закрытый", "enclosed"],
      ["Tepki ko'tarilish balandligi", "Высота подъёма лапки", "Presser-foot lift", "5,5 mm", "5,5 мм", "5.5 mm"],
      ["Maksimal chok uzunligi", "Макс. длина стежка", "Max stitch length", "3,6 mm", "3,6 мм", "3.6 mm"],
    ]),
  },
  {
    id: 'f21-501cb-502bb', category: 'interlock', model: 'F21-501CB/502BB', image: imgF21,
    tagline: { uz: "Rashma va beyka funksiyali 3 ignali mashina", ru: "3-игольная машина с распошивальной строчкой и обвязкой", en: "3-needle coverstitch and binding combo machine" },
    description: {
      uz: "Rashma va beyka funksiyalarini birlashtirgan 3 ignali sanoat tikuv mashinasi. Bitta mashinada bir nechta tikuv jarayonlarini bajarish imkoniyati ishlab chiqarish jarayonini yanada qulay va samarali tashkil etishga yordam beradi. 3 ignali tizim tekis va sifatli chok hosil qiladi, servo motor esa barqaror ishlashni ta'minlaydi.",
      ru: "3-игольная промышленная машина, объединяющая распошивальную строчку и обвязку края. Возможность выполнять несколько операций на одной машине делает производство удобнее и эффективнее. 3-игольная система даёт ровную, качественную строчку, сервомотор — стабильную работу.",
      en: "A 3-needle industrial machine combining coverstitch and edge-binding in one. Doing several operations on a single machine makes production more convenient and efficient. The 3-needle system produces an even, quality stitch, and the servo motor keeps it stable.",
    },
    specs: specs([
      ["Ignalar soni", "Количество игл", "Needles", "3 ta", "3", "3"],
      ["Mato turi", "Тип ткани", "Fabric type", "yengil va o'rta qalinlikdagi matolar", "лёгкие и средние ткани", "light and medium-weight fabrics"],
      ["Tikuv tezligi", "Скорость шитья", "Sewing speed", "5000 chok/daqiqa", "5000 стежков/мин", "5000 stitches/min"],
      ["Igna modeli", "Модель иглы", "Needle system", "UY 128GAS 65–80", "UY 128GAS 65–80", "UY 128GAS 65–80"],
      ["Dvigatel turi", "Тип двигателя", "Motor type", "servo motor", "сервомотор", "servo motor"],
      ["Tepki ko'tarilish balandligi", "Высота подъёма лапки", "Presser-foot lift", "5 mm", "5 мм", "5 mm"],
      ["Chok uzunligi", "Длина стежка", "Stitch length", "1,4–4,5 mm", "1,4–4,5 мм", "1.4–4.5 mm"],
    ]),
  },
  {
    id: 'pc0303dl-12', category: 'heavy', model: 'PC0303DL-12', image: imgPc0303dl,
    tagline: { uz: "Yuruvchi tepkili og'ir mato mashinasi", ru: "Машина с шагающей лапкой для плотных тканей", en: "Walking-foot machine for heavy materials" },
    description: {
      uz: "Yuruvchi tepkili sanoat tikuv mashinasi bestseller modeli, o'rta va og'ir matolar bilan ishlash uchun mo'ljallangan. Yuruvchi tepki mexanizmi qalin va bir necha qatlamli materiallarni bir tekis surib, aniq va sifatli tikish imkonini beradi. Mebel, sumka, charm buyumlar ishlab chiqarishda foydalanish uchun mos.",
      ru: "Бестселлер среди промышленных машин с шагающей лапкой для средних и тяжёлых материалов. Механизм шагающей лапки равномерно продвигает плотные многослойные материалы, обеспечивая точную и качественную строчку. Подходит для мебели, сумок и изделий из кожи.",
      en: "A best-selling walking-foot industrial machine for medium and heavy materials. The walking-foot mechanism feeds thick, multi-layer materials evenly for precise, quality stitching. Suited to furniture, bags and leather goods.",
    },
    specs: specs([
      ["Ignalar soni", "Количество игл", "Needles", "1 ta", "1", "1"],
      ["Tikuv maydoni", "Зона шитья", "Sewing area", "33 mm", "33 мм", "33 mm"],
      ["Chok uzunligi", "Длина стежка", "Stitch length", "12 mm gacha", "до 12 мм", "up to 12 mm"],
      ["Mato turi", "Тип ткани", "Fabric type", "o'rta va og'ir", "средние и тяжёлые", "medium and heavy"],
      ["Tikuv tezligi", "Скорость шитья", "Sewing speed", "2000 chok/daqiqa", "2000 стежков/мин", "2000 stitches/min"],
      ["Igna modeli", "Модель иглы", "Needle system", "DB×17", "DB×17", "DB×17"],
      ["Dvigatel turi", "Тип двигателя", "Motor type", "servo motor", "сервомотор", "servo motor"],
    ]),
  },
  {
    id: 'pc781et', category: 'special', model: 'PC781ET', image: imgPc781et,
    tagline: { uz: "Tugma iligi ochish mashinasi", ru: "Петельная машина", en: "Buttonhole machine" },
    description: {
      uz: "Tugma iligi ochish uchun mo'ljallangan maxsus sanoat tikuv mashinasi. Yengil va o'rta qalinlikdagi matolarda tugma iliklarini aniq va sifatli tikadi, turli o'lchamdagi tugmalar uchun 6,4 mm dan 25,4 mm gacha uzunlikdagi iliklarni tayyorlash imkonini beradi. Kiyim-kechak ishlab chiqarish korxonalari uchun mos.",
      ru: "Специальная промышленная машина для обработки петель под пуговицы. Точно и качественно выполняет петли на лёгких и средних тканях, длиной от 6,4 до 25,4 мм под разные размеры пуговиц. Подходит для швейных производств.",
      en: "A special industrial buttonhole machine. It sews precise, quality buttonholes on light and medium-weight fabrics, from 6.4 to 25.4 mm long to fit different button sizes. Suited to garment manufacturing.",
    },
    specs: specs([
      ["Ignalar soni", "Количество игл", "Needles", "1 ta", "1", "1"],
      ["Tugma diametri", "Диаметр пуговицы", "Button diameter", "15 mm gacha", "до 15 мм", "up to 15 mm"],
      ["Ilik uzunligi", "Длина петли", "Buttonhole length", "6,4–25,4 mm", "6,4–25,4 мм", "6.4–25.4 mm"],
      ["Mato turi", "Тип ткани", "Fabric type", "yengil va o'rta qalinlikdagi matolar", "лёгкие и средние ткани", "light and medium-weight fabrics"],
      ["Tikuv tezligi", "Скорость шитья", "Sewing speed", "3600 chok/daqiqa", "3600 стежков/мин", "3600 stitches/min"],
      ["Igna o'lchami", "Размер иглы", "Needle size", "75–90", "75–90", "75–90"],
      ["Dvigatel turi", "Тип двигателя", "Motor type", "servo motor", "сервомотор", "servo motor"],
    ]),
  },
  {
    id: 'pc1377e', category: 'special', model: 'PC1377E', image: imgPc1377e,
    tagline: { uz: "Tugma qadash mashinasi", ru: "Пуговичная машина", en: "Button-sewing machine" },
    description: {
      uz: "Tugma qadash uchun mo'ljallangan maxsus sanoat tikuv mashinasi. Yengil va o'rta qalinlikdagi matolarga tugmalarni tez, aniq va mustahkam qadaydi, 10–28 mm diametrdagi turli o'lchamli tugmalar bilan ishlash imkonini beradi. 8, 16 va 32 ta tikuv rejimi turli ishlab chiqarish talablariga moslashadi.",
      ru: "Специальная промышленная машина для пришивания пуговиц. Быстро, точно и прочно пришивает пуговицы диаметром 10–28 мм на лёгких и средних тканях. Режимы на 8, 16 и 32 стежка подстраиваются под разные производственные задачи.",
      en: "A special industrial button-sewing machine. It sews buttons from 10–28 mm quickly, precisely and securely onto light and medium-weight fabrics. 8, 16 and 32-stitch modes adapt to different production needs.",
    },
    specs: specs([
      ["Ignalar soni", "Количество игл", "Needles", "1 ta", "1", "1"],
      ["Tugma diametri", "Диаметр пуговицы", "Button diameter", "10–28 mm", "10–28 мм", "10–28 mm"],
      ["Tikuvlar soni", "Количество программ шитья", "Stitch programs", "8, 16, 32", "8, 16, 32", "8, 16, 32"],
      ["Mato turi", "Тип ткани", "Fabric type", "yengil va o'rta qalinlikdagi matolar", "лёгкие и средние ткани", "light and medium-weight fabrics"],
      ["Tikuv tezligi", "Скорость шитья", "Sewing speed", "1500 chok/daqiqa", "1500 стежков/мин", "1500 stitches/min"],
      ["Igna modeli", "Модель иглы", "Needle system", "TQ×7 №90–125", "TQ×7 №90–125", "TQ×7 #90–125"],
      ["Dvigatel turi", "Тип двигателя", "Motor type", "servo motor", "сервомотор", "servo motor"],
    ]),
  },
  {
    id: 'pc20u53d', category: 'special', model: 'PC20U53D', image: imgPc20u53d,
    tagline: { uz: "3 bosqichli zig-zag mashinasi", ru: "3-ступенчатая зигзаг-машина", en: "3-step zig-zag machine" },
    description: {
      uz: "3 bosqichli zig-zag chokli maxsus sanoat tikuv mashinasi. Yengil va o'rta qalinlikdagi matolar bilan ishlash uchun mo'ljallangan, elastik va dekorativ choklarni sifatli hamda aniq bajaradi. 12 mm gacha zig-zag kengligi turli tikuv vazifalariga moslashish imkonini beradi.",
      ru: "Специальная промышленная машина с 3-ступенчатым зигзагом для лёгких и средних тканей. Качественно и точно выполняет эластичные и декоративные строчки. Ширина зигзага до 12 мм подходит для разных задач.",
      en: "A special industrial 3-step zig-zag machine for light and medium-weight fabrics. It sews elastic, decorative stitches with precision. A zig-zag width of up to 12 mm adapts to a range of sewing tasks.",
    },
    specs: specs([
      ["Ignalar soni", "Количество игл", "Needles", "1 ta", "1", "1"],
      ["Chok uzunligi", "Длина стежка", "Stitch length", "5 mm gacha", "до 5 мм", "up to 5 mm"],
      ["Zig-zag bosqichlari", "Ступени зигзага", "Zig-zag steps", "3 ta", "3", "3"],
      ["Zig-zag kengligi", "Ширина зигзага", "Zig-zag width", "12 mm gacha", "до 12 мм", "up to 12 mm"],
      ["Mato turi", "Тип ткани", "Fabric type", "yengil va o'rta qalinlikdagi matolar", "лёгкие и средние ткани", "light and medium-weight fabrics"],
      ["Igna modeli", "Модель иглы", "Needle system", "DP×5 №75–90", "DP×5 №75–90", "DP×5 #75–90"],
      ["Dvigatel turi", "Тип двигателя", "Motor type", "servo motor", "сервомотор", "servo motor"],
    ]),
  },
  {
    id: 'pc008d-12064p', category: 'special', model: 'PC008D-12064P', image: imgPc008d,
    tagline: { uz: "12 ignali silindrsimon ko'p ignali mashina", ru: "12-игольная цилиндровая многоигольная машина", en: "12-needle cylinder-bed multi-needle machine" },
    description: {
      uz: "12 ignali silindrsimon platformali sanoat tikuv mashinasi, yengil va o'rta qalinlikdagi matolar bilan ishlash uchun mo'ljallangan. 12 ignali tikuv tizimi bir vaqtning o'zida bir nechta parallel choklarni aniq bajaradi. Silindrsimon platforma aylana shaklidagi qismlarni tikishda qulaylik yaratadi.",
      ru: "12-игольная промышленная машина на цилиндровой платформе для лёгких и средних тканей. Система из 12 игл одновременно точно выполняет несколько параллельных строчек. Цилиндровая платформа удобна для круглых и сложных деталей.",
      en: "A 12-needle industrial machine on a cylinder bed, for light and medium-weight fabrics. The 12-needle system stitches several parallel rows at once with precision. The cylinder bed makes curved and complex parts easy to sew.",
    },
    specs: specs([
      ["Ignalar soni", "Количество игл", "Needles", "12 ta", "12", "12"],
      ["Platforma turi", "Тип платформы", "Bed type", "silindrsimon", "цилиндровая", "cylinder-bed"],
      ["Tepki ko'tarilish balandligi", "Высота подъёма лапки", "Presser-foot lift", "12 mm", "12 мм", "12 mm"],
      ["Chok uzunligi", "Длина стежка", "Stitch length", "1,4–3,6 mm", "1,4–3,6 мм", "1.4–3.6 mm"],
      ["Mato turi", "Тип ткани", "Fabric type", "yengil va o'rta qalinlikdagi matolar", "лёгкие и средние ткани", "light and medium-weight fabrics"],
      ["Igna modeli", "Модель иглы", "Needle system", "UY113GS №75–90", "UY113GS №75–90", "UY113GS #75–90"],
      ["Dvigatel turi", "Тип двигателя", "Motor type", "servo motor", "сервомотор", "servo motor"],
    ]),
  },
  {
    id: 'pc103', category: 'accessories', model: 'PC103', image: imgPc103,
    tagline: { uz: "10 dyuymli vertikal mato kesish pichog'i", ru: "10-дюймовый вертикальный раскройный нож", en: "10-inch vertical fabric cutting knife" },
    description: {
      uz: "10 dyuymli, 550 W quvvatli vertikal mato kesish pichog'i. Mato qatlamlarini tez, tekis va aniq kesish uchun mo'ljallangan, 215 mm kesish balandligi bir vaqtning o'zida bir nechta qatlam bilan ishlash imkonini beradi. O'z-o'zini charxlash mexanizmi pichoqning o'tkirligini saqlashga yordam beradi.",
      ru: "Вертикальный раскройный нож 10 дюймов мощностью 550 Вт. Быстро, ровно и точно режет слои ткани, высота реза 215 мм позволяет работать с несколькими слоями одновременно. Механизм самозаточки сохраняет остроту лезвия.",
      en: "A 10-inch, 550 W vertical fabric-cutting knife. It cuts fabric layers fast, straight and precisely; a 215 mm cutting height handles multiple layers at once. A self-sharpening mechanism keeps the blade sharp.",
    },
    specs: specs([
      ["Pichoq turi", "Тип ножа", "Blade type", "vertikal", "вертикальный", "vertical"],
      ["Pichoq o'lchami", "Размер ножа", "Blade size", "10 dyuym", "10 дюймов", "10 inches"],
      ["Kesish balandligi", "Высота реза", "Cutting height", "215 mm", "215 мм", "215 mm"],
      ["O'z-o'zini charxlash mexanizmi", "Механизм самозаточки", "Self-sharpening mechanism", "mavjud", "есть", "yes"],
      ["Dvigatel aylanish tezligi", "Скорость вращения двигателя", "Motor speed", "2800 ayl/daq", "2800 об/мин", "2800 rpm"],
      ["Quvvati", "Мощность", "Power", "550 W", "550 Вт", "550 W"],
    ]),
  },
  {
    id: 'pc500', category: 'special', model: 'PC500', image: imgPc500,
    tagline: { uz: "Ko'rinmas chok mashinasi, stolsiz variant", ru: "Машина потайного стежка, вариант без стола", en: "Blind-stitch machine, tableless version" },
    description: {
      uz: "Ko'rinmas chok uchun mo'ljallangan maxsus sanoat tikuv mashinasi, stolsiz variant. Chokning tashqi tomondan deyarli sezilmasligi kiyim va boshqa tikuv mahsulotlariga toza hamda professional ko'rinish beradi. Servo motor barqaror va energiya tejamkor ishlashni ta'minlaydi.",
      ru: "Специальная промышленная машина потайного стежка, вариант без стола. Практически незаметный с лицевой стороны стежок придаёт одежде аккуратный и профессиональный вид. Сервомотор обеспечивает стабильную, энергоэффективную работу.",
      en: "A special industrial blind-stitch machine, tableless version. A nearly invisible stitch from the outside gives garments a clean, professional finish. The servo motor keeps it stable and energy-efficient.",
    },
    specs: specs([
      ["Ignalar soni", "Количество игл", "Needles", "1 ta", "1", "1"],
      ["Tikuv turi", "Тип строчки", "Stitch type", "ko'rinmas chok", "потайной стежок", "blind stitch"],
      ["Komplektatsiya", "Комплектация", "Configuration", "stolsiz", "без стола", "tableless"],
      ["Tepki ko'tarilish balandligi", "Высота подъёма лапки", "Presser-foot lift", "10 mm", "10 мм", "10 mm"],
      ["Mato turi", "Тип ткани", "Fabric type", "yengil va o'rta qalinlikdagi matolar", "лёгкие и средние ткани", "light and medium-weight fabrics"],
      ["Tikuv tezligi", "Скорость шитья", "Sewing speed", "2850 chok/daqiqa", "2850 стежков/мин", "2850 stitches/min"],
      ["Igna modeli", "Модель иглы", "Needle system", "LWx6T", "LWx6T", "LWx6T"],
      ["Dvigatel turi", "Тип двигателя", "Motor type", "servo motor", "сервомотор", "servo motor"],
    ]),
  },
  {
    id: 'pc600d', category: 'special', model: 'PC600D', image: imgPc600d,
    tagline: { uz: "Ko'rinmas chok mashinasi", ru: "Машина потайного стежка", en: "Blind-stitch machine" },
    description: {
      uz: "Ko'rinmas chok hosil qilish uchun mo'ljallangan maxsus sanoat tikuv mashinasi. Tikuv matoning tashqi tomonida deyarli sezilmaydi va tayyor mahsulotga toza hamda professional ko'rinish beradi. Servo motor barqaror, kam shovqinli va energiya tejamkor ishlashni ta'minlaydi.",
      ru: "Специальная промышленная машина потайного стежка. Строчка практически незаметна с лицевой стороны и придаёт готовому изделию аккуратный, профессиональный вид. Сервомотор обеспечивает стабильную, тихую и энергоэффективную работу.",
      en: "A special industrial blind-stitch machine. The stitch is barely visible on the outside, giving the finished product a clean, professional look. The servo motor keeps it stable, quiet and energy-efficient.",
    },
    specs: specs([
      ["Ignalar soni", "Количество игл", "Needles", "1 ta", "1", "1"],
      ["Tikuv turi", "Тип строчки", "Stitch type", "ko'rinmas chok", "потайной стежок", "blind stitch"],
      ["Tepki ko'tarilish balandligi", "Высота подъёма лапки", "Presser-foot lift", "10 mm", "10 мм", "10 mm"],
      ["Mato turi", "Тип ткани", "Fabric type", "yengil va o'rta qalinlikdagi matolar", "лёгкие и средние ткани", "light and medium-weight fabrics"],
      ["Tikuv tezligi", "Скорость шитья", "Sewing speed", "2000 chok/daqiqa", "2000 стежков/мин", "2000 stitches/min"],
      ["Igna modeli", "Модель иглы", "Needle system", "GB75", "GB75", "GB75"],
      ["Dvigatel turi", "Тип двигателя", "Motor type", "servo motor", "сервомотор", "servo motor"],
    ]),
  },
  {
    id: 'pc100b', category: 'accessories', model: 'PC100B', image: imgPc100b,
    tagline: { uz: "Batareyali simsiz mato kesish pichog'i", ru: "Аккумуляторный беспроводной раскройный нож", en: "Cordless battery-powered fabric cutter" },
    description: {
      uz: "Batareyali simsiz mato kesish uskunasi. Mato va boshqa tikuvchilik materiallarini tez, qulay va aniq kesish uchun mo'ljallangan, elektr kabeliga bog'lanmasdan erkin harakatlanish imkonini beradi. 100 mm diametrli pichoq 50 mm gacha qalinlikdagi qatlamlarni kesishga mos.",
      ru: "Аккумуляторный беспроводной раскройный инструмент. Быстро, удобно и точно режет ткань и другие материалы, позволяя свободно перемещаться без привязки к кабелю. Нож диаметром 100 мм режет слои толщиной до 50 мм.",
      en: "A cordless, battery-powered fabric-cutting tool. It cuts fabric and other materials quickly and precisely, letting the operator move freely without a power cable. A 100 mm blade cuts layers up to 50 mm thick.",
    },
    specs: specs([
      ["Pichoq diametri", "Диаметр ножа", "Blade diameter", "100 mm", "100 мм", "100 mm"],
      ["Kesish qalinligi", "Толщина реза", "Cutting thickness", "50 mm gacha", "до 50 мм", "up to 50 mm"],
      ["Aylanish tezligi", "Скорость вращения", "Rotation speed", "600 ayl/daq", "600 об/мин", "600 rpm"],
      ["Dvigatel quvvati", "Мощность двигателя", "Motor power", "255 W", "255 Вт", "255 W"],
      ["Kuchlanish", "Напряжение", "Voltage", "220 V", "220 В", "220 V"],
      ["Ishlash turi", "Режим работы", "Operation mode", "batareyali, simsiz", "аккумуляторный, беспроводной", "battery-powered, cordless"],
    ]),
  },
  {
    id: 'pc100d', category: 'accessories', model: 'PC100D', image: imgPc100d,
    tagline: { uz: "Diskli mato kesish pichog'i", ru: "Дисковый раскройный нож", en: "Round-blade fabric cutter" },
    description: {
      uz: "Diskli mato kesish uskunasi, mato va boshqa tikuvchilik materiallarini tez, tekis va aniq kesish uchun mo'ljallangan. 100 mm diametrli disk pichoq 50 mm gacha qalinlikdagi mato qatlamlari bilan samarali ishlash imkonini beradi. Ixcham konstruksiyasi kesish jarayonini osonlashtiradi.",
      ru: "Дисковый раскройный инструмент для быстрого, ровного и точного раскроя ткани и других материалов. Дисковый нож диаметром 100 мм эффективно режет слои толщиной до 50 мм. Компактная конструкция упрощает процесс раскроя.",
      en: "A round-blade fabric-cutting tool for fast, straight and precise cutting of fabric and other materials. A 100 mm round blade efficiently cuts layers up to 50 mm thick. The compact build makes cutting easier.",
    },
    specs: specs([
      ["Pichoq diametri", "Диаметр ножа", "Blade diameter", "100 mm", "100 мм", "100 mm"],
      ["Kesish qalinligi", "Толщина реза", "Cutting thickness", "50 mm gacha", "до 50 мм", "up to 50 mm"],
      ["Aylanish tezligi", "Скорость вращения", "Rotation speed", "600 ayl/daq", "600 об/мин", "600 rpm"],
      ["Dvigatel quvvati", "Мощность двигателя", "Motor power", "255 W", "255 Вт", "255 W"],
      ["Kuchlanish", "Напряжение", "Voltage", "220 V", "220 В", "220 V"],
    ]),
  },
  {
    id: 'pc1860a', category: 'special', model: 'PC1860A', image: imgPc1860a,
    tagline: { uz: "Chokni mustahkamlash mashinasi", ru: "Машина для закрепления шва", en: "Seam-reinforcing machine" },
    description: {
      uz: "Chokning muhim qismlarini mustahkamlash uchun mo'ljallangan maxsus sanoat tikuv mashinasi. Kiyim va boshqa tikuv mahsulotlarining yuqori yuklama tushadigan qismlarida zich va mustahkam chok hosil qiladi. Yuqori ish tezligi va servo motor samaradorlikni oshiradi.",
      ru: "Специальная промышленная машина для закрепления ключевых участков шва. Создаёт плотный, прочный стежок на участках изделия с высокой нагрузкой. Высокая скорость и сервомотор повышают производительность.",
      en: "A special industrial machine for reinforcing key seam points. It produces a dense, durable stitch on high-stress areas of garments. High speed and the servo motor boost productivity.",
    },
    specs: specs([
      ["Ignalar soni", "Количество игл", "Needles", "1 ta", "1", "1"],
      ["Tepki ko'tarilish balandligi", "Высота подъёма лапки", "Presser-foot lift", "12 mm", "12 мм", "12 mm"],
      ["Chok uzunligi", "Длина стежка", "Stitch length", "8–16 mm", "8–16 мм", "8–16 mm"],
      ["Maksimal tikuv kengligi", "Макс. ширина стежка", "Max stitch width", "1,5–3 mm", "1,5–3 мм", "1.5–3 mm"],
      ["Tikuv uzunligi", "Длина строчки", "Stitch length (overall)", "5 mm", "5 мм", "5 mm"],
      ["Mato turi", "Тип ткани", "Fabric type", "yengil va o'rta qalinlikdagi matolar", "лёгкие и средние ткани", "light and medium-weight fabrics"],
      ["Tikuv tezligi", "Скорость шитья", "Sewing speed", "2300 chok/daqiqa", "2300 стежков/мин", "2300 stitches/min"],
      ["Igna modeli", "Модель иглы", "Needle system", "DP×5", "DP×5", "DP×5"],
      ["Dvigatel turi", "Тип двигателя", "Motor type", "servo motor", "сервомотор", "servo motor"],
    ]),
  },
  {
    id: 'pc1900a', category: 'special', model: 'PC1900A', image: imgPc1900a,
    tagline: { uz: "Zamonaviy chok mustahkamlash mashinasi", ru: "Современная машина для закрепления шва", en: "Modern seam-reinforcing machine" },
    description: {
      uz: "Chokning yuqori yuklama tushadigan qismlarini mustahkamlash uchun mo'ljallangan zamonaviy model. Zich va aniq mustahkamlovchi chok hosil qilib, tayyor mahsulotning chidamliligini oshirishga yordam beradi. Yuqori tikuv tezligi ishlab chiqarish jarayonini samarali tashkil etadi.",
      ru: "Современная модель для закрепления участков шва с высокой нагрузкой. Формирует плотный и точный закрепляющий стежок, повышая прочность готового изделия. Высокая скорость шитья делает производство эффективнее.",
      en: "A modern machine for reinforcing high-stress seam areas. It produces a dense, precise reinforcing stitch that boosts the finished product's durability. High sewing speed keeps production efficient.",
    },
    specs: specs([
      ["Ignalar soni", "Количество игл", "Needles", "1 ta", "1", "1"],
      ["Tepki ko'tarilish balandligi", "Высота подъёма лапки", "Presser-foot lift", "12 mm", "12 мм", "12 mm"],
      ["Chok uzunligi", "Длина стежка", "Stitch length", "8–16 mm", "8–16 мм", "8–16 mm"],
      ["Maksimal tikuv kengligi", "Макс. ширина стежка", "Max stitch width", "1,5–3 mm", "1,5–3 мм", "1.5–3 mm"],
      ["Tikuv uzunligi", "Длина строчки", "Stitch length (overall)", "5 mm", "5 мм", "5 mm"],
      ["Mato turi", "Тип ткани", "Fabric type", "yengil va o'rta qalinlikdagi matolar", "лёгкие и средние ткани", "light and medium-weight fabrics"],
      ["Tikuv tezligi", "Скорость шитья", "Sewing speed", "2300 chok/daqiqa", "2300 стежков/мин", "2300 stitches/min"],
      ["Igna modeli", "Модель иглы", "Needle system", "DP×5", "DP×5", "DP×5"],
      ["Dvigatel turi", "Тип двигателя", "Motor type", "servo motor", "сервомотор", "servo motor"],
    ]),
  },
  {
    id: 'pc910', category: 'heavy', model: 'PC910', image: imgPc910,
    tagline: { uz: "Oyoq kiyim tikish uchun kolonkali mashina", ru: "Колонковая машина для пошива обуви", en: "Post-bed machine for footwear stitching" },
    description: {
      uz: "Oyoq kiyim tikish uchun mo'ljallangan kolonkali sanoat tikuv mashinasi, o'rta va og'ir materiallar bilan ishlash uchun. Kolonkali konstruksiya murakkab shakldagi qismlarga qulay ishlov berish imkonini beradi. Rolikli tepki materialni bir tekis harakatlantirib, aniq va sifatli chok hosil qiladi.",
      ru: "Промышленная колонковая машина для пошива обуви, для работы со средними и тяжёлыми материалами. Колонковая конструкция удобна для деталей сложной формы. Роликовая лапка равномерно продвигает материал, обеспечивая точную и качественную строчку.",
      en: "A post-bed industrial machine for footwear stitching, built for medium and heavy materials. The post-bed design makes complex-shaped parts easy to work with. A roller foot feeds material evenly for a precise, quality stitch.",
    },
    specs: specs([
      ["Ignalar soni", "Количество игл", "Needles", "1 ta", "1", "1"],
      ["Platforma turi", "Тип платформы", "Bed type", "kolonkali", "колонковая", "post-bed"],
      ["Tepki turi", "Тип лапки", "Foot type", "rolikli", "роликовая", "roller"],
      ["Chok uzunligi", "Длина стежка", "Stitch length", "12 mm gacha", "до 12 мм", "up to 12 mm"],
      ["Mato turi", "Тип ткани", "Fabric type", "o'rta va og'ir materiallar", "средние и тяжёлые материалы", "medium and heavy materials"],
      ["Tikuv tezligi", "Скорость шитья", "Sewing speed", "2000 chok/daqiqa", "2000 стежков/мин", "2000 stitches/min"],
      ["Igna modeli", "Модель иглы", "Needle system", "DB×17", "DB×17", "DB×17"],
      ["Dvigatel turi", "Тип двигателя", "Motor type", "servo motor", "сервомотор", "servo motor"],
    ]),
  },
  {
    id: 'pc-99b', category: 'accessories', model: 'PC-99B', image: imgPc99b,
    tagline: { uz: "Bug'li sanoat dazmoli", ru: "Промышленный паровой утюг", en: "Industrial steam iron" },
    description: {
      uz: "Tikuvchilik mahsulotlarini professional dazmollash va yakuniy ishlov berish uchun mo'ljallangan sanoat bug'li dazmoli. Bug' bilan ishlash tizimi matodagi burmalarni samarali tekislab, mahsulotga saranjom ko'rinish beradi. 5 bosqichli harorat sozlagichi turli matolar uchun mos haroratni tanlash imkonini beradi.",
      ru: "Промышленный паровой утюг для профессиональной глажки и финишной обработки швейных изделий. Отпаривание эффективно разглаживает складки, придавая изделию аккуратный вид. Регулятор температуры на 5 ступеней подбирает режим под разные ткани.",
      en: "An industrial steam iron for professional finishing and pressing of sewn goods. The steam function smooths creases efficiently, giving products a neat finish. A 5-step temperature control matches the setting to different fabrics.",
    },
    specs: specs([
      ["Dazmol turi", "Тип утюга", "Iron type", "sanoat bug'li dazmol", "промышленный паровой утюг", "industrial steam iron"],
      ["Bug' bilan ishlash", "Отпаривание", "Steam function", "mavjud", "есть", "yes"],
      ["Dazmol og'irligi", "Вес утюга", "Iron weight", "1,5 kg", "1,5 кг", "1.5 kg"],
      ["Quvvati", "Мощность", "Power", "800 W", "800 Вт", "800 W"],
      ["Harorat sozlamasi", "Регулировка температуры", "Temperature settings", "5 bosqichli", "5 ступеней", "5-step"],
    ]),
  },
  {
    id: 'g20-d5', category: 'lockstitch', model: 'G20-D5', image: imgG20d5,
    tagline: comingSoonTagline, description: comingSoonDescription, specs: [],
  },
  {
    id: 'pc717', category: 'overlock', model: 'PC717', image: imgPc717,
    tagline: comingSoonTagline, description: comingSoonDescription, specs: [],
  },
  {
    id: 'v20-3m', category: 'overlock', model: 'V20-3M', image: imgV203m,
    tagline: comingSoonTagline, description: comingSoonDescription, specs: [],
  },
  {
    id: 'v19s-4ut', category: 'overlock', model: 'V19S-4UT', image: imgV19s4ut,
    tagline: comingSoonTagline, description: comingSoonDescription, specs: [],
  },
  {
    id: 'pc0303d', category: 'heavy', model: 'PC0303D', image: imgPc0303d,
    tagline: comingSoonTagline, description: comingSoonDescription, specs: [],
  },
  {
    id: 'pc2284d', category: 'heavy', model: 'PC2284D', image: imgPc2284d,
    tagline: comingSoonTagline, description: comingSoonDescription, specs: [],
  },
  {
    id: 'pc20618d-2', category: 'heavy', model: 'PC20618D-2', image: imgPc20618d2,
    tagline: comingSoonTagline, description: comingSoonDescription, specs: [],
  },
  {
    id: 'pc1906', category: 'special', model: 'PC1906 LCD screen', image: imgPc1906,
    tagline: comingSoonTagline, description: comingSoonDescription, specs: [],
  },
  {
    id: 'pc268d-273', category: 'heavy', model: 'PC268D-273', image: imgPc268d273,
    tagline: comingSoonTagline, description: comingSoonDescription, specs: [],
  },
  {
    id: '2000cdk', category: 'interlock', model: '2000CDk', image: img2000cdk,
    tagline: comingSoonTagline, description: comingSoonDescription, specs: [],
  },
  {
    id: 'pc787ut', category: 'interlock', model: 'PC787UT', image: imgPc787ut,
    tagline: comingSoonTagline, description: comingSoonDescription, specs: [],
  },
  {
    id: '269d-373', category: 'heavy', model: '269D-373', image: img269d373,
    tagline: comingSoonTagline, description: comingSoonDescription, specs: [],
  },
  {
    id: '720ut', category: 'interlock', model: '720UT', image: img720ut,
    tagline: comingSoonTagline, description: comingSoonDescription, specs: [],
  },
];

export function getProductById(id: string | undefined): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, limit);
}
