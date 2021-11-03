const express = require('express')
const pdfmake = require('pdfmake')
const fs = require('fs')

const pdf = require('./utils/multiplication')

const fonts = {
    Roboto: {
        normal: `fonts/Roboto-Regular.ttf`,
        bold: `fonts/Roboto-Bold.ttf`,
        italics: `fonts/Roboto-Italic.ttf`,
    }
}

const printer = new pdfmake(fonts)

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use('/', express.static(__dirname + '/public/'));

app.listen(80, () => {
    console.log('🚀 serveur lancé ! http://127.0.0.1:80')
})

app.post('/new', async (req, res) => {
    const pdfDoc = printer.createPdfKitDocument(await pdf())
    pdfDoc.pipe(fs.createWriteStream('doc.pdf'))
    pdfDoc.end()
    pdfDoc.on('end', ()=>{
            const file = fs.createReadStream('./doc.pdf')
            res.setHeader('Content-Type', 'application/pdf')
            res.setHeader('Content-Disposition', 'attachment; filename=Multiplication.pdf')
            file.pipe(res)
    })
})