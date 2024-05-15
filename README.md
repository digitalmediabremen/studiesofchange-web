### Major changes since last communication:

- Upgraded the next.js version, since there was a known bug regarding the Link component.
- Style sheet is now based on tailwind. I hope it will help you as well.
- No more table. It was a bad choice. Now everything is based on divs.
- Responsive based on css. Check out the official docs of tailwind.](https://tailwindcss.com/docs/responsive-design)
- Fetched data from our google doc. The automation script(python) is in the scripts/ folder.
- Removed the black arrows TEMPORARILY. It was for putting the big amout of texts in the main page. But now I'm thinking how to get it back.

### TODOs:
 - [ ] Make the list of texts smaller (something like collapsed list?)
 - [ ] Make language switch button in the curatorial text page.
 - [ ] Better style consistency, especially the font.
 - [ ] Clear the font copyright (is Helvetica safe?)
 - [ ] Get the animation back (didn't intended to remove though)
 - [ ] Better mobile view regarding the guide for the visitors (mobile version shall serve as a digital version of the printout)

### How to Run Locally

```bash
npm i
npm run dev
```
Then go to the `localurl`:`port`/studiesofchange-web

### Export Static Pages
```bash
npm run build
```

### Fetch Text Data
```bash
npm run fetch
```
will fetch the work descriptions from the google doc and create `.md` files in the `_text/` directory.

### On Production Build
- Remove the `basePath` in `next.config.js`
