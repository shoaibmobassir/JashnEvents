# Favicon/Logo Setup Instructions

## Step 1: Prepare Your Logo Image

You need to create different sizes of your logo for the browser tab:

1. **Main logo** (512x512px) - `logo.png`
2. **Small favicon** (32x32px) - `logo-32.png`
3. **Medium favicon** (192x192px) - `logo-192.png`
4. **Apple touch icon** (180x180px) - `logo-180.png`
5. **Favicon.ico** (16x16px or 32x32px) - `favicon.ico`

## Step 2: Place Images in Public Folder

Place all logo files in the `/public` folder:

```
/public/
  ├── favicon.ico
  ├── logo.png (512x512)
  ├── logo-32.png (32x32)
  ├── logo-192.png (192x192)
  └── logo-180.png (180x180)
```

## Step 3: Image Requirements

### Recommended Sizes:
- **favicon.ico**: 32x32 pixels (or 16x16)
- **logo.png**: 512x512 pixels (main logo)
- **logo-32.png**: 32x32 pixels
- **logo-192.png**: 192x192 pixels
- **logo-180.png**: 180x180 pixels (for Apple devices)

### Format:
- PNG format for all images (except .ico)
- ICO format for favicon.ico
- Transparent background recommended
- Square aspect ratio

## Step 4: Quick Setup (If You Have One Image)

If you only have one logo image:

1. **Resize your logo** to create different sizes:
   - Use an online tool like: https://www.favicon-generator.org/
   - Or use image editing software

2. **Generate favicon.ico**:
   - Use: https://favicon.io/favicon-converter/
   - Upload your logo
   - Download the generated favicon.ico

3. **Place all files** in the `/public` folder

## Step 5: Verify

After placing the images:

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Check the browser tab - you should see your logo

3. Deploy to see it live:
   ```bash
   git add public/*.png public/*.ico
   git commit -m "Add favicon and logo files"
   git push origin main
   ```

## Online Tools for Creating Favicons

1. **Favicon Generator**: https://www.favicon-generator.org/
   - Upload your logo
   - Generates all sizes automatically

2. **Favicon.io**: https://favicon.io/favicon-converter/
   - Converts PNG to ICO
   - Generates all required sizes

3. **RealFaviconGenerator**: https://realfavicongenerator.net/
   - Comprehensive favicon generator
   - Supports all platforms

## Current Configuration

The website is already configured to use:
- `/favicon.ico` - Standard favicon
- `/logo.png` - Main logo (512x512)
- `/logo-32.png` - Small favicon (32x32)
- `/logo-192.png` - Medium favicon (192x192)
- `/logo-180.png` - Apple touch icon (180x180)

Just place the image files in the `/public` folder and they will work automatically!

