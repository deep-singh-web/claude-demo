# Jodha’s Hospitality coming soon page

Static page (HTML, CSS and JavaScript). No build step.

```
index.html
css/style.css
js/main.js
images/   entrance.jpg, exterior.jpg, terrace.jpg, logo-mark.png
```

## Upload to a server

Upload the contents of this folder so `index.html` sits in the web root (or in the folder you want to serve).

## Things to edit

- **Launch date:** `LAUNCH` at the top of `js/main.js` (currently 27 December 2026, midnight India time).
- **Newsletter:** set `NEWSLETTER_URL` in `js/main.js` to a form service address (for example a Formspree endpoint). While it is empty, Send opens the visitor's email app addressed to the contact email.
- **Social links:** the Facebook, X and Instagram buttons in `index.html` use `href="#"`. Replace each with the profile address and remove the `data-social` attribute so the link works.
- **Book a room:** the button in `index.html` opens WhatsApp. Change its `href` to a booking page if there is one.
- **Contact details:** phone, email and location are in the right-hand panel of `index.html`.
- **Photos and logo:** replace the files in `images/` with the same names. `logo-mark.png` is the J-and-peacock mark rebuilt from a photo of the logo; swap in the original logo file when available.
- **Colours:** set at the top of `css/style.css` (`--teal`, `--gold`, `--maroon`, `--orange`, `--card`, `--ground`), taken from the logo.
