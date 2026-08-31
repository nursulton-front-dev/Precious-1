import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { PRODUCTS } from '../data/products';
import type { Product } from '../data/types';
import { compressProductImage } from '../utils/imageOptimizer';

// Map of static asset fallback images by product ID
const staticImageMap: Record<string, string> = {};
PRODUCTS.forEach((p) => {
  staticImageMap[p.id] = p.image;
});

export async function getProducts(): Promise<Product[]> {
  if (!isSupabaseConfigured) {
    return PRODUCTS;
  }

  try {
    const { data, error } = await supabase
      .from('products')
      .select('*');

    if (error || !data || data.length === 0) {
      console.warn('Supabase fetch products error or empty, using local products fallback:', error);
      return PRODUCTS;
    }

    const cleanText = (text?: any) => {
      if (!text) return { uz: '', ru: '', en: '' };
      const val = (text.uz || text.ru || text.en || '').toLowerCase();
      if (val.includes('tez orada') || val.includes('скоро') || val.includes('coming soon')) {
        return { uz: '', ru: '', en: '' };
      }
      return text;
    };

    // Merge fetched DB products with static fallback images if image_url is empty
    return data.map((item: any) => {
      const fallback = PRODUCTS.find((p) => p.id === item.id);
      return {
        id: item.id,
        category: item.category,
        model: item.model,
        image: item.image_url && item.image_url.trim() !== '' ? item.image_url : (fallback?.image || staticImageMap[item.id] || ''),
        tagline: cleanText(item.tagline || fallback?.tagline),
        description: cleanText(item.description || fallback?.description),
        specs: item.specs || fallback?.specs || [],
      };
    });
  } catch (err) {
    console.error('Error fetching products from Supabase:', err);
    return PRODUCTS;
  }
}

export async function uploadProductImage(productId: string, file: File): Promise<string> {
  if (!isSupabaseConfigured) {
    throw new Error('Supabase is not configured yet. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env.local');
  }

  // 1. Compress image to WebP (max width 1200px)
  const compressedFile = await compressProductImage(file);
  const filePath = `${productId}.webp`;

  // 2. Upload file to Supabase Storage bucket 'product-images' (upsert true to overwrite)
  const { error: uploadError } = await supabase.storage
    .from('product-images')
    .upload(filePath, compressedFile, {
      cacheControl: '3600',
      upsert: true,
      contentType: 'image/webp',
    });

  if (uploadError) {
    console.error('Error uploading product image to Supabase Storage:', uploadError);
    throw new Error(`Upload failed: ${uploadError.message}`);
  }

  // 3. Get Public URL of the uploaded image
  const { data: urlData } = supabase.storage
    .from('product-images')
    .getPublicUrl(filePath);

  // Append timestamp parameter to force browser image refresh cache breaking
  const publicUrl = `${urlData.publicUrl}?t=${Date.now()}`;

  // 4. Update image_url in Postgres products table
  const { error: dbError } = await supabase
    .from('products')
    .update({ 
      image_url: publicUrl,
      updated_at: new Date().toISOString()
    })
    .eq('id', productId);

  if (dbError) {
    console.error('Error updating image_url in products table:', dbError);
    throw new Error(`Database update failed: ${dbError.message}`);
  }

  return publicUrl;
}
