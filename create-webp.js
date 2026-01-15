const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "public");

// Get all JPEG/PNG image files
const imageFiles = fs.readdirSync(publicDir).filter((file) => {
  return /\.(jpg|jpeg|png)$/i.test(file);
});

console.log(`Converting ${imageFiles.length} images to WebP...`);

imageFiles.forEach(async (file) => {
  const inputPath = path.join(publicDir, file);
  const outputPath = path.join(
    publicDir,
    file.replace(/\.(jpg|jpeg|png)$/i, ".webp")
  );

  try {
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size;

    // Convert to WebP with quality 80
    await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);

    const newStats = fs.statSync(outputPath);
    const newSize = newStats.size;
    const reduction = (((originalSize - newSize) / originalSize) * 100).toFixed(
      2
    );

    console.log(
      `✓ ${file} → ${path.basename(outputPath)}: ${(
        originalSize / 1024
      ).toFixed(1)}KB → ${(newSize / 1024).toFixed(
        1
      )}KB (${reduction}% smaller)`
    );
  } catch (error) {
    console.error(`✗ Error processing ${file}:`, error.message);
  }
});

console.log(
  "WebP conversion complete! You can now use these files as alternatives to JPEG."
);
