module.exports = {
    title: 'PHP OOP mokymai',
    description: 'Pavyzdžiai ir užduotys',
    themeConfig: {
        // displayAllHeaders: true,
        sidebar: 'auto',
        // nav: [
        //     { text: "Pradžia", link: "/" }
        // ],
        sidebar: [
            '/',
            '01-apie-mokymus/',
            '02-rekomendacijos-uzduociu-kodo-issisaugojimui/',
            {
                title: 'OOP sąvokos',
                children: [
                    '03-oop-savokos/',
                    '03-oop-savokos/klase/',
                    '03-oop-savokos/klases-kurimas/',
                    '03-oop-savokos/objektas/',
                ]
            },
            // '04-duomenu-ir-metodu-pasiekiamumas/',
            // '05-pavyzdys1/',
            {
                title: 'Pavyzdys',
                children: [
                    '10-pavyzdys/',
                    '10-pavyzdys/apie-uzduoti/',
                    '10-pavyzdys/projekto-pavyzdys-tema-knygynas/',
                ]
            },
        ]
    }
}
