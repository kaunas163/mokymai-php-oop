# Kas yra klasė?

Klasę galite įsivaizduoti kaip brėžinį, planą, šabloną.

![Brėžinys](./blueprint.jpg)

## Apie klasę

- Kuriant klasę, jūs apibrėžiate šabloną naujam duomenų tipui. Tokiu būdu apibūdinate iš ko bus sudarytas jūsų naujai sukurtas duomenų tipas.
- Klasėje nėra realių duomenų, nes klasė yra tik šablonas pagal kurį bus galima surašyti duomenis.
- Klasė apibūdins kokie duomenys bus priskiriami objektams, bei kokius veiksmus bus galima atlikti su objektais.
- Klasę galima įsivaizduoti kaip kažką kas gali apibūdinti visų to paties tipo objektų bendrus atributus, t. y. kažką ką galima pasakyti apie kiekvieną tam tikro tipo objektą. Pavyzdžiui: visų automobilių bendri atributai - markė, modelis, metai, rida, spalva...

## Pavyzdžiai

Šiek tiek klasių pavyzdžių.

### Automobilis

![Automobilio paveiksliukas](./car.png)

Kokie bendri atributai sieja kiekvieną automobilį?

- Markė.
- Modelis.
- Pagaminimo metai.
- Rida.
- Darbinis tūris.
- …

Kokius veiksmus gali kiekvienas automobilis:

- Užsikurti.
- Važiuoti.
- ...

### Žmogus

![Žmogaus paveiksliukas](./human.png)

Kokie bendri atributai sieja kiekvieną žmogų?
- Vardas.
- Pavardė.
- Amžius.
- Ūgis.
- Lytis.
- Profesija.
- …

Kokius veiksmus gali atlikti kiekvienas žmogus?
- Eiti į darbą.
- Valgyti.
- Vaikščioti
- ...

### Medis

![Medžio paveiksliukas](./tree.png)

Bendri kiekvieno medžio atributai:
- Pavadinimas.
- Aukštis.
- Amžius.
- Rūšis.
- …

Medžių galimi atlikti veiksmai:
- Numesti lapus.
- ...

### Prekė

![Prekės paveiksliukas](./product.png)

Kiekvienos prekės bendri atributai:
- Pavadinimas.
- Kaina.
- Savikaina.
- Brūkšninis kodas.
- Kiekis.
- …

### Jūsų pavyzdys

![Klaustuko paveiksliukas](./question.png)

Jūsų eilė: sugalvokite dar bent po vieną klasės pavyzdį, apibūdinant kokie atributai sieja kiekvieną iš tų objektų, bei kokius veiksmus jie gali atlikti.

## Kas sudaro klasę?

- Duomenys (kintamieji).
- Algoritmai (funkcijos / metodai).

## Klasės kūrimas

- Klasė rašoma kuriamos programos namespace ribose. Tačiau, jei reikia, galima rašyti ir už namescape ribų.
- Dažniausiai kiekviena klasė būna iškeliama į atskirą failą.
- Kuriant klasę, jos pavadinimas turėtų būti vienaskaita.
- Kuriamoje klasėje galima aprašyti kiekvieną bendrą objektų atributą per kintamuosius, bei jų atliekamus veiksmus per funkcijas (metodus).
- Patogiausia būna kai klasės kintamieji yra surašomi klasės viršuje, o funkcijos (metodai) iškart po jų.

## Duomenų ir metodų pasiekiamumas

- Prie kiekvieno kintamojo ar metodo reiktų nurodyti access specifier (public, private arba protected). Nenurodžius, automatiškai laikoma, kad tas kintamasis ar metodas yra private, t. y. pasiekiamas tik tos klasės ribose.
- Klasėje esantys metodai pasiekia visus duomenis esančius klasės lygyje, nepriklausomai nuo jų access specifier.

