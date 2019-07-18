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
            {
                title: 'OOP sąvokos',
                children: [
                    '02-oop-savokos/',
                    '02-oop-savokos/klase/',
                    '02-oop-savokos/klases-kurimas/',
                    '02-oop-savokos/objektas/',
                ]
            },
            '03-duomenu-ir-metodu-pasiekiamumas/'
        ]
    }
}
