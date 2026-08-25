import imageCompression from 'browser-image-compression';

export async function compressProductImage(file: File): Promise<File> {
  const options = {
    maxSizeMB: 0.5,
    maxWidthOrHeight: 1200,
    useWebWorker: true,
    fileType: 'image/webp',
    initialQuality: 0.8,
  };

  try {
    const compressedBlob = await imageCompression(file, options);
    // Return a File object with .webp extension
    const fileName = file.name.substring(0, file.name.lastIndexOf('.')) || 'product';
    return new File([compressedBlob], `${fileName}.webp`, { type: 'image/webp' });
  } catch (error) {
    console.error('Error optimizing image, using original file:', error);
    return file;
  }
}
