import QRCode from 'qrcode'
import fs from 'fs'

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
});