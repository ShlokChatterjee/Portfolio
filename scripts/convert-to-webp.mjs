import sharp from 'sharp';
import { readdirSync, existsSync, mkdirSync } from 'fs';
import { join, basename } from 'path';

const inputDir = join(process.cwd(), 'public', 'sequence');
const outputDir = join(process.cwd(), 'public', 'sequence-webp');

if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

const files = readdirSync(inputDir).filter(f => f.endsWith('.png')).sort();
console.log(`Converting ${files.length} PNG frames to WebP...`);

let done = 0;
const promises = files.map(async (file) => {
  const inputPath = join(inputDir, file);
  const outputName = basename(file, '.png') + '.webp';
  const outputPath = join(outputDir, outputName);

  await sharp(inputPath)
    .webp({ quality: 82, effort: 4 })
    .toFile(outputPath);

  done++;
  if (done % 20 === 0 || done === files.length) {
    console.log(`  ${done}/${files.length} converted...`);
  }
});

await Promise.all(promises);
console.log(`\n✅ Done! WebP frames saved to: public/sequence-webp/`);

// Print size comparison
const { statSync } = await import('fs');
let pngTotal = 0;
let webpTotal = 0;
for (const file of files) {
  pngTotal += statSync(join(inputDir, file)).size;
  webpTotal += statSync(join(outputDir, basename(file, '.png') + '.webp')).size;
}
console.log(`\n📦 Size comparison:`);
console.log(`   PNG total:  ${(pngTotal / 1024 / 1024).toFixed(1)} MB`);
console.log(`   WebP total: ${(webpTotal / 1024 / 1024).toFixed(1)} MB`);
console.log(`   Savings:    ${(((pngTotal - webpTotal) / pngTotal) * 100).toFixed(1)}%`);
