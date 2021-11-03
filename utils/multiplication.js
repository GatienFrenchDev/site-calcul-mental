function getRandomInt(max) {
    return (Math.floor(Math.random() * max))+1
}

async function multiplication() {
    const data = {
        content: [
            {
                text: 'TABLES DE MULTIPLICATION',
                style: 'header',
                decoration: 'underline',
                alignment: 'center',
                margin: [0, 10]
            },
            {
                text: 'Répondez à ces calculs sur votre feuille :',
                margin: [0, 40],
                italics: true
            },
            {
                text: [
                    `${getRandomInt(8)} x ${getRandomInt(8)} = .....\n`,
                    `${getRandomInt(8)} x ${getRandomInt(8)} = .....\n`,
                    `${getRandomInt(8)} x ${getRandomInt(8)} = .....\n`,
                    `${getRandomInt(8)} x ${getRandomInt(8)} = .....\n`,
                    `${getRandomInt(8)} x ${getRandomInt(8)} = .....\n`,
                    `${getRandomInt(8)} x ${getRandomInt(8)} = .....\n`,
                    `${getRandomInt(8)} x ${getRandomInt(8)} = .....\n`,
                    `${getRandomInt(8)} x ${getRandomInt(8)} = .....\n`,
                    `${getRandomInt(8)} x ${getRandomInt(8)} = .....\n`,
                    `${getRandomInt(8)} x ${getRandomInt(8)} = .....\n`,
                    `${getRandomInt(8)} x ${getRandomInt(8)} = .....\n`,
                    `${getRandomInt(8)} x ${getRandomInt(8)} = .....\n`,
                ],
                style: 'texte',
            }
        ],
        styles: {
            header: {
                fontSize: 20,
                bold: true,
                alignment: 'justify'
            },
            texte: {
                lineHeight: 3,
                fontSize: 14,
            }
        }
    }

    return data
}

module.exports = multiplication