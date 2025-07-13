# Berry Avenue Idle Codes

A simple web app for browsing and copying Berry Avenue idle animation codes. Built as a Progressive Web App (PWA) for easy installation on mobile devices.

## Features

- 📱 **Mobile-friendly design** - Optimized for iOS and Android
- 🔍 **Search functionality** - Find animations quickly
- 📋 **One-tap copy** - Copy codes to clipboard instantly
- 🎨 **Modern UI** - Clean, native-looking interface
- 🌙 **Dark mode support** - Automatically adapts to system preferences
- 📱 **PWA ready** - Can be installed on home screen
- ⚡ **Offline support** - Works without internet connection

## How to Use

### On Mobile (Recommended)

1. **Open in Safari/Chrome** - Navigate to the web app URL
2. **Add to Home Screen**:
   - Tap the Share button (📤)
   - Select "Add to Home Screen"
   - Tap "Add"
3. **Use like a native app** - Tap the home screen icon to launch

### On Desktop

1. Open the web app in any modern browser
2. Use the search bar to find specific animations
3. Click "Copy" to copy codes to clipboard

## Berry Avenue Usage

1. Open Berry Avenue in Roblox
2. Go to your avatar customization
3. Navigate to **Avatar > Wearing > +**
4. Paste the copied code in the input field
5. Your avatar will now use that idle animation!

## Development

### Local Development

1. Clone or download this repository
2. Open `index.html` in a web browser
3. For full PWA features, serve via a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

### Adding New Codes

Edit `script.js` and add new entries to the `codes` array:

```javascript
{ name: "Animation Name", code: "1234567890", category: "standing" }
```

### Customization

- **Colors**: Edit CSS variables in `style.css`
- **Icons**: Replace `icon-192.png` and `icon-512.png`
- **Codes**: Update the `codes` array in `script.js`

## File Structure

```
berry-avenue-codes/
├── index.html          # Main HTML file
├── style.css           # Styles and responsive design
├── script.js           # JavaScript functionality and codes
├── manifest.json       # PWA manifest
├── sw.js              # Service worker for offline support
└── README.md          # This file
```

## Browser Support

- ✅ Chrome/Edge (full PWA support)
- ✅ Safari (iOS 11.3+)
- ✅ Firefox (full PWA support)
- ⚠️ Internet Explorer (limited support)

## PWA Features

- **Installable** - Add to home screen
- **Offline** - Works without internet
- **App-like** - Full screen, no browser UI
- **Fast** - Cached for instant loading

## Deployment

### Free Hosting Options

1. **Netlify**:
   - Drag and drop the folder to netlify.com
   - Get instant HTTPS and CDN

2. **Vercel**:
   - Connect GitHub repository
   - Automatic deployments

3. **GitHub Pages**:
   - Push to GitHub repository
   - Enable Pages in settings

### Custom Domain

After deploying, you can add a custom domain for easier sharing.

## Contributing

Feel free to:
- Add more Berry Avenue codes
- Improve the design
- Add new features
- Report bugs

## License

This project is open source and available under the MIT License.

---

**Note**: This app is not affiliated with Roblox or Berry Avenue. Codes are collected from the community and may change over time. 