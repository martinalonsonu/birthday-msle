const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

// Get all image files
const imageFiles = fs.readdirSync(publicDir).filter(file => {
  return /\.(jpg|jpeg|png|webp)$/i.test(file);
});

console.log(`Optimizing ${imageFiles.length} images...`);

imageFiles.forEach(async (file) => {
  const inputPath = path.join(publicDir, file);
  const outputPath = inputPath;
  
  try {
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size;
    
    // Optimize with quality 80 for JPEG/WebP
    await sharp(inputPath)
      .withMetadata()
      .toFormat('jpeg', { quality: 80, progressive: true })
      .toFile(outputPath + '.tmp');
    
    const newStats = fs.statSync(outputPath + '.tmp');
    const newSize = newStats.size;
    const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(2);
    
    fs.renameSync(outputPath + '.tmp', outputPath);
    
    console.log(`✓ ${file}: ${(originalSize / 1024).toFixed(1)}KB → ${(newSize / 1024).toFixed(1)}KB (${reduction}% smaller)`);
  } catch (error) {
    console.error(`✗ Error processing ${file}:`, error.message);
  }
});

console.log('Image optimization complete!');
