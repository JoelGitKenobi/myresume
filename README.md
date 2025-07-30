# JSON Resume with Custom Theme

A modern, responsive resume built with JSON Resume and a custom theme featuring banner images and dark mode support.

## Features

- 🎨 **Custom Theme**: Based on Stack Overflow theme with custom modifications
- 🌙 **Dark Mode**: Automatic dark/light mode switching with neon accents
- 🖼️ **Banner Images**: Support for light and dark mode banner backgrounds
- 📱 **Responsive**: Works on all devices
- 🎯 **Professional**: Clean, modern design perfect for tech professionals

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Generate your resume**:
   ```bash
   resume export resume.html --resume resume.json --theme ./theme/moonoverflow
   ```

3. **View your resume**:
   Open `resume.html` in your browser

## Project Structure

```
├── assets/                 # Images (profile, banners)
├── theme/moonoverflow/     # Custom theme
│   ├── src/               # React components
│   ├── style.css          # Styling with dark mode
│   └── package.json       # Theme dependencies
├── resume.json            # Your resume data
├── resume.html            # Generated resume
└── package.json           # Project dependencies
```

## Customization

### Resume Data
Edit `resume.json` to update your information. The resume follows the [JSON Resume schema](https://jsonresume.org/schema/).

### Banner Images
Add banner images to the `assets/` folder and reference them in `resume.json`:
```json
{
  "meta": {
    "bannerLight": "assets/banner-light.png",
    "bannerDark": "assets/banner-dark.png"
  }
}
```

### Theme Customization
The custom theme is in `theme/moonoverflow/`. Key files:
- `src/Resume.tsx` - Main component structure
- `style.css` - All styling including dark mode

### Dark Mode Colors
The theme features:
- Neon cyan accents for links (`#00d4ff`)
- Hot pink section headers (`#ff69b4`)
- Magenta job titles (`#ff5edc`)
- High contrast backgrounds and text

## Development

To modify the theme:

1. **Edit theme files** in `theme/moonoverflow/`
2. **Build the theme**:
   ```bash
   cd theme/moonoverflow
   npm run build
   ```
3. **Generate updated resume**:
   ```bash
   cd ../..
   resume export resume.html --resume resume.json --theme ./theme/moonoverflow
   ```

## Dependencies

- [JSON Resume CLI](https://github.com/jsonresume/resume-cli)
- Custom theme based on [@jsonresume/theme-stackoverflow](https://github.com/francescoes/jsonresume-theme-stackoverflow)

## License

MIT License - feel free to use this for your own resume!

## Version

v1.0.0 - Initial release with banner support and enhanced dark mode
