# The Bromine Chronicles — Website 10

A standalone, three-page pop-art birthday countdown site.

## Files
- `index.html` — the three screens and secret/birthday overlays
- `style.css` — all visual styling and responsive layout
- `script.js` — navigation, live countdown, secrets and birthday mode
- `assets/images/shinchan.png` — optional Shin-chan sticker image

## Run it
1. Keep the folder structure intact.
2. Double-click `index.html` to preview it, or use VS Code Live Server.
3. To share it online, upload the whole folder to a static host such as GitHub Pages or Netlify.

## Personalise it
Open `script.js` and edit the `CONFIG` object at the top:
- `letter`: the personal message on page 3
- `signoff`: the sign-off
- `everydaySecret`: the everyday secret button message
- `birthdaySecret`: the birthday-only surprise
- `birthdayDate`: the birthday date in `YYYY-MM-DD` format

The countdown is pinned to midnight India Standard Time (IST). Birthday mode runs for the full Nov 20 in IST and ends when Nov 21 begins.

## Shin-chan sticker
Put your image at `assets/images/shinchan.png`. A small text fallback appears if the image is missing. Use a transparent PNG for the cleanest sticker effect.

## Notes
- No JavaScript libraries are required.
- Google Fonts are used when internet access is available; fallback fonts will be used offline.
- The birthday date is currently set to `2026-11-20`.
