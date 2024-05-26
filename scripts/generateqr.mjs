import QRCode from 'qrcode'
import PNG from 'pngjs/browser.js';
import fs from 'fs'

const png = PNG.PNG;

const saveQR = async (text, filename) => {
    try {
        const qrCodeDataURL = await QRCode.toDataURL(text, {
            errorCorrectionLevel: 'M',
            version: 6,
        });
        const base64Data = qrCodeDataURL.replace(/^data:image\/png;base64,/, '');
        fs.writeFileSync(filename, base64Data, 'base64');
    } catch (err) {
        console.error(err);
        console.error(text);
    }
}
const getNames = (folderPath) => {
    try {
        const files = fs.readdirSync(folderPath);
        return files;
    } catch (err) {
        console.error(err);
        return [];
    }
}

const names = getNames('_texts');
names.forEach(name => {
    const txt = `https://studiesofchange.hfk-bremen.de/texts/${name.replace('.md', '.html')}`;
    saveQR(txt, `qrcode/${name.replace('.md','')}.png`);
    toTransparent(`qrcode/${name.replace('.md','')}.png`, `qrcode/${name.replace('.md','')}.png`);
});



// PNG = require("pngjs").PNG;




function toTransparent(imagePath, outputPath) {
    fs.createReadStream(imagePath)
  .pipe(
    new png({
      filterType: 4,
    })
  )
  .on("parsed", function () {
    for (var y = 0; y < this.height; y++) {
      for (var x = 0; x < this.width; x++) {
        var idx = (this.width * y + x) << 2;

        // invert color

        if(this.data[idx]>250){
            this.data[idx] = 0;
            this.data[idx + 1] = 0;
            this.data[idx + 2] = 0;
            this.data[idx + 3] = 0;
        }
      }
    }

    this.pack().pipe(fs.createWriteStream(outputPath));
  });
}

