https://choiharam.github.io/studiesofchange-web

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
