# Contributing to AIteacher

Thank you for your interest in contributing to AIteacher!

## Project Philosophy

This is a static website project designed for simplicity and accessibility.

## Key Requirements

### 1. Keep It Simple

This project must work in two ways:
- As a GitHub repository (with GitHub Pages or similar hosting)
- Directly from Windows File Explorer by double clicking index.html

This means:
- No build tools required
- No npm, webpack, or bundlers
- No server side code
- All paths must be relative (not absolute)
- All assets must be local or from trusted CDNs

### 2. File Structure

```
AIteacher/
├── index.html          # Main entry (always in root)
├── css/                # All stylesheets
├── js/                 # All JavaScript
├── pages/              # Supporting HTML pages
├── assets/             # Images, fonts, icons
│   ├── images/
│   └── fonts/
└── reference/          # Research documentation
```

### 3. Linking Rules

- Use relative paths: `href="pages/about.html"` not `href="/pages/about.html"`
- CSS links: `href="css/styles.css"` from root, `href="../css/styles.css"` from pages/
- Same pattern for JavaScript and images

### 4. Testing Your Changes

Before submitting:
1. Open index.html directly in your browser from File Explorer
2. Click through all navigation links
3. Verify all styles and scripts load correctly
4. Test on both Chrome and Firefox if possible

## Code Style

### HTML
- Use semantic elements (header, nav, main, section, footer)
- Include proper accessibility attributes (aria labels, alt text)
- Keep indentation consistent (4 spaces)

### CSS
- Use CSS custom properties for colors and spacing
- Mobile responsive design is required
- Comment major sections

### JavaScript
- Vanilla JS only (no frameworks unless discussed)
- Use modern ES6+ syntax
- Keep it minimal and purposeful

## Submitting Changes

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally by opening files directly
5. Submit a pull request with a clear description

## Questions?

Open an issue for discussion before major changes.
