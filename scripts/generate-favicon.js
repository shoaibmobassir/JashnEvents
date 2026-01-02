const { createCanvas, registerFont } = require('canvas');
const fs = require('fs');
const path = require('path');
const https = require('https');

// Function to download font if not exists
async function ensureFont() {
  const fontDir = path.join(__dirname, '..', 'fonts');
  const fontPath = path.join(fontDir, 'PlayfairDisplay-SemiBold.ttf');
  
  if (fs.existsSync(fontPath)) {
    try {
      registerFont(fontPath, { family: 'Playfair Display', weight: '600' });
      return true;
    } catch (e) {
      console.log('Could not register font file, using system font');
    }
  }
  return false;
}

// Function to generate favicon
async function generateFavicon(size, outputPath) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Black background
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, size, size);

  // Try to use Playfair Display, fallback to system serif
  const fontLoaded = await ensureFont();
  const fontSize = size * 0.7;
  const fontFamily = fontLoaded ? 'Playfair Display' : 'serif';
  ctx.font = `600 ${fontSize}px "${fontFamily}"`;
  ctx.fillStyle = '#edca65'; // Gold color
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Draw the letter 'J'
  ctx.fillText('J', size / 2, size / 2);

  // Save as PNG
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outputPath, buffer);
  console.log(`Generated ${outputPath} (${size}x${size})`);
}

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate all favicons
(async () => {
  await generateFavicon(16, path.join(publicDir, 'favicon-16.png'));
  await generateFavicon(32, path.join(publicDir, 'favicon-32.png'));
  await generateFavicon(180, path.join(publicDir, 'favicon-180.png'));
  await generateFavicon(192, path.join(publicDir, 'favicon-192.png'));
  await generateFavicon(512, path.join(publicDir, 'favicon-512.png'));

  // Generate ICO file (using 32x32 as base)
  const fontLoaded = await ensureFont();
  const ico32 = createCanvas(32, 32);
  const ctx32 = ico32.getContext('2d');
  ctx32.fillStyle = '#000000';
  ctx32.fillRect(0, 0, 32, 32);
  const fontFamily = fontLoaded ? 'Playfair Display' : 'serif';
  ctx32.font = `600 22px "${fontFamily}"`;
  ctx32.fillStyle = '#edca65';
  ctx32.textAlign = 'center';
  ctx32.textBaseline = 'middle';
  ctx32.fillText('J', 16, 16);
  const icoBuffer = ico32.toBuffer('image/png');
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('Generated favicon.ico');

  // Also update logo.png with a larger version
  await generateFavicon(512, path.join(publicDir, 'logo.png'));

  console.log('All favicons generated successfully!');
})();

