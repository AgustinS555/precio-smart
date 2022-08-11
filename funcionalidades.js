const comercios = [
    {
        id: 1,
        nombre: "APA Supermercados",
    },
    {
        id: 2,
        nombre: "Supermercados Caceres"
    },
    {
        id: 3,
        nombre: "Supermercado Independencia"
    },
    {
        id: 4,
        nombre: "Supermercado Carrefour"
    },
    {
        id: 5,
        nombre: "Chango Mas"
    },
]

const productos = [
    //id 1= Arroz
    {
        id: 1,
        nombre: "Arroz Marolio de 1kg-",
        precio: 100,
        idComercio: 1
    },
    {
        id: 11,
        nombre: "Arroz Amanda de 1kg-",
        precio: 210,
        idComercio: 1
    },
    {
        id: 12,
        nombre: "Arroz Perbonil de 1kg-",
        precio: 210,
        idComercio: 1
    },
    {
        id: 13,
        nombre: "Arroz Itajai de 1kg-",
        precio: 115,
        idComercio: 1
    },
    {
        id: 14,
        nombre: "Arroz Luchetti de 1kg-",
        precio: 220,
        idComercio: 1
    },
    {
        id: 15,
        nombre: "Arroz Danubio de 500g-",
        precio: 80,
        idComercio: 1
    },
    {
        id: 1,
        nombre: "Arroz Marolio de 1kg",
        precio: 120,
        idComercio: 2
    },
        {
        id: 11,
        nombre: "Arroz Amanda de 1kg",
        precio: 133,
        idComercio: 2
    },
    {
        id: 16,
        nombre: "Arroz San Javier de 1kg",
        precio: 104,
        idComercio: 2
    },
    {
        id: 13,
        nombre: "Arroz Itajai de 1kg",
        precio: 89,
        idComercio: 2
    },
    {
        id: 1,
        nombre: "Arroz Marolio de 1kg",
        precio: 99.90,
        idComercio: 3
    },
    {
        id: 16,
        nombre: "Arroz San Javier de 1kg",
        precio: 170,
        idComercio: 3
    },
    {
        id: 14,
        nombre: "Arroz Luchetti de 1kg",
        precio: 210,
        idComercio: 3
    },
    {
        id: 11,
        nombre: "Arroz Amanda de 1kg",
        precio: 150,
        idComercio: 3
    },
    {
        id: 17,
        nombre: "Arroz Carrefour de 1kg",
        precio: 119,
        idComercio: 4
    },
    {
        id: 1,
        nombre: "Arroz Marolio de 1kg",
        precio: 110,
        idComercio: 5
    },
    {
        id: 18,
        nombre: "Arroz Great Value de 1kg",
        precio: 99,
        idComercio: 5
    },
    {
        id: 19,
        nombre: "Arroz Vanguardia de 1kg",
        precio: 133,
        idComercio: 5
    },

    /* --------  AZÚCARES  2   ----------------------------------------------- */
    {
        id: 2,
        nombre: "Azucar Chango de 1kg",
        precio: 145,
        idComercio: 1
    },
    {
        id: 20,
        nombre: "Azucar Los Cuatro de 1kg",
        precio: 105,
        idComercio: 1
    },
    {
        id: 21,
        nombre: "Azucar Primer precio de 1kg",
        precio: 120,
        idComercio: 1
    },
    {
        id: 2,
        nombre: "Azucar Chango de 1kg",
        precio: 145,
        idComercio: 2
    },
    {
        id: 22,
        nombre: "Azucar Diamante de 1kg",
        precio: 120,
        idComercio: 2
    },
    {
        id: 23,
        nombre: "Azucar Ledesma de 1kg",
        precio: 135,
        idComercio: 2
    },
    {
        id: 20,
        nombre: "Azucar Los Cuatro de 1kg",
        precio: 120,
        idComercio: 2
    },
    {
        id: 2,
        nombre: "Azucar Chango de 1kg",
        precio: 99.90,
        idComercio: 3
    },
    {
        id: 24,
        nombre: "Azucar La Estrella de 1kg",
        precio: 130,
        idComercio: 3
    },
    {
        id: 20,
        nombre: "Azucar Los Cuatro de 1kg",
        precio: 130,
        idComercio: 3
    },
    {
        id: 25,
        nombre: "Azucar Carrefour de 1kg",
        precio: 135,
        idComercio: 4
    },
    {
        id: 2,
        nombre: "Azucar Chango de 1kg",
        precio: 110,
        idComercio: 5
    },
    {
        id: 26,
        nombre: "Azucar Azucel de 1kg",
        precio: 130,
        idComercio: 5
    },
    {
        id: 23,
        nombre: "Azucar Ledesma de 1kg",
        precio: 139,
        idComercio: 5
    },

    /* ----   ACEITES   3    ------------------------------------ */
    {
        id: 3,
        nombre: "Aceite Cañuelas x 900ml",
        precio: 380.50,
        idComercio: 1
    },
    {
        id: 27,
        nombre: "Aceite Cocinero Mezcla 900ml",
        precio: 160,
        idComercio: 1
    },
    {
        id: 28,
        nombre: "Aceite Vicentin Girasol 900ml",
        precio: 390,
        idComercio: 1
    },
    {
        id: 3,
        nombre: "Aceite Cañuelas x 900ml",
        precio: 360.50,
        idComercio: 2
    },
    {
        id: 29,
        nombre: "Aceite Lirio Mezcla 900ml",
        precio: 168,
        idComercio: 2
    },
    {
        id: 30,
        nombre: "Aceite Cocinero Girasol 1,5l",
        precio: 528,
        idComercio: 2
    },
    {
        id: 3,
        nombre: "Aceite Cañuelas x 900ml",
        precio: 480,
        idComercio: 3
    },
    {
        id: 31,
        nombre: "Aceite Pureza Girasol x 900ml",
        precio: 480,
        idComercio: 3
    },
    {
        id: 3,
        nombre: "Aceite Cañuelas x 900ml",
        precio: 359.90,
        idComercio: 4
    },
    {
        id: 27,
        nombre: "Aceite Cocinero Mezcla 900ml",
        precio: 174,
        idComercio: 4
    },
    {
        id: 32,
        nombre: "Aceite Cocinero Girasol 900ml",
        precio: 388,
        idComercio: 4
    },
    {
        id: 33,
        nombre: "Aceite Siglo de Oro Mezcla 900ml",
        precio: 157,
        idComercio: 4
    },
    {
        id: 3,
        nombre: "Aceite Cañuelas x 900ml",
        precio: 410,
        idComercio: 5
    },
    {
        id: 34,
        nombre: "Aceite Pureza Girasol x 1,5 litro",
        precio: 625,
        idComercio: 5
    },
    {
        id: 35,
        nombre: "Aceite Cocinero Mezcla 1,5l",
        precio: 297,
        idComercio: 5
    },
    /* ---------------   FIDEOS   4   -------------------- */
    {
        id: 36,
        nombre: "Fideo Favorita tallarín x 500g",
        precio: 65,
        idComercio: 1
    },
    {
        id: 37,
        nombre: "Fideo Favorita Variados x 500g",
        precio: 80,
        idComercio: 1
    },
    {
        id: 38,
        nombre: "Fideo Canale x 500g",
        precio: 90,
        idComercio: 1
    },
    {
        id: 39,
        nombre: "Fideo Luchetti Linguine x 500g",
        precio: 160,
        idComercio: 1
    },
    {
        id: 4,
        nombre: "Fideo Favorita x 500g",
        precio: 88,
        idComercio: 2
    },
    {
        id: 40,
        nombre: "Fideo Luchetti Spaguetti x 500g",
        precio: 110.50,
        idComercio: 2
    },
    {
        id: 38,
        nombre: "Fideo Canale x 500g",
        precio: 86,
        idComercio: 2
    },
    {
        id: 41,
        nombre: "Fideo Terrabusi x 500g",
        precio: 94,
        idComercio: 2
    },
    {
        id: 4,
        nombre: "Fideo Favorita x 500g",
        precio: 109.90,
        idComercio: 3
    },
    {
        id: 40,
        nombre: "Fideo Luchetti Spaguetti x 500g",
        precio: 120,
        idComercio: 3
    },
    {
        id: 38,
        nombre: "Fideo Canale x 500g",
        precio: 110,
        idComercio: 3
    },
    {
        id: 42,
        nombre: "Fideo Canale Spaguetti x 500g",
        precio: 110,
        idComercio: 3
    },
    {
        id: 43,
        nombre: "Fideo Knnor x 500g",
        precio: 210,
        idComercio: 3
    },
    {
        id: 37,
        nombre: "Fideo Favorita Variados x 500g",
        precio: 110,
        idComercio: 3
    },
    {
        id: 4,
        nombre: "Fideo Favorita x 500g",
        precio: 95.50,
        idComercio: 4
    },
    {
        id: 44,
        nombre: "Fideo Marolio x 500g",
        precio: 76,
        idComercio: 4
    },
    {
        id: 45,
        nombre: "Fideo Marolio Tirabuzón x 500g",
        precio: 71,
        idComercio: 4
    },
    {
        id: 46,
        nombre: "Fideo Arcor Tallarín x 500g",
        precio: 113,
        idComercio: 4
    },
    {
        id: 47,
        nombre: "Fideo Luchetti Bucatini x 500g",
        precio: 118,
        idComercio: 4
    },
    {
        id: 48,
        nombre: "Fideo Matarazo Spagueti x 500g",
        precio: 119,
        idComercio: 4
    },
    {
        id: 37,
        nombre: "Fideo Favorita Variados x 500g",
        precio: 79,
        idComercio: 5
    },
    {
        id: 49,
        nombre: "Fideo Terrabusi Tirabuzón x 500g",
        precio: 84,
        idComercio: 5
    },
    {
        id: 47,
        nombre: "Fideo Luchetti Bucatini x 500g",
        precio: 120,
        idComercio: 5
    },
    /* ---------   LECHES  5   ---------------------------------------------- */
    {
        id: 5,
        nombre: "Leche Sancor x 1l",
        precio: 230,
        idComercio: 1
    },
    {
        id: 50,
        nombre: "Leche La Lechera Pvo x 800g",
        precio: 970,
        idComercio: 1
    },
    {
        id: 51,
        nombre: "Leche Purísima Pvo x 800g",
        precio: 840,
        idComercio: 1
    },
    {
        id: 52,
        nombre: "Leche Ilolay x 1l",
        precio: 175,
        idComercio: 2
    },
    {
        id: 53,
        nombre: "Leche Ilolay Pvo x 800g",
        precio: 843,
        idComercio: 2
    },
    {
        id: 54,
        nombre: "Leche Armonía Pvo x 800g",
        precio: 986,
        idComercio: 2
    },
    {
        id: 55,
        nombre: "Leche La Suipachense Pvo x 400g",
        precio: 380,
        idComercio: 2
    },
    {
        id: 56,
        nombre: "Leche Armonía Pvo x 400g",
        precio: 524,
        idComercio: 2
    },
    {
        id: 50,
        nombre: "Leche La Lechera Pvo x 800g",
        precio: 900,
        idComercio: 3
    },
    {
        id: 51,
        nombre: "Leche Purísima Pvo x 800g",
        precio: 860,
        idComercio: 3
    },
    {
        id: 52,
        nombre: "Leche Ilolay x 1l",
        precio: 250,
        idComercio: 3
    },
    {
        id: 57,
        nombre: "Leche La Serenísima x 1l",
        precio: 230,
        idComercio: 4
    },
    {
        id: 54,
        nombre: "Leche Armonía Pvo x 800g",
        precio: 809,
        idComercio: 5
    },
    {
        id: 50,
        nombre: "Leche La Lechera Pvo x 800g",
        precio: 1314,
        idComercio: 5
    },
    {
        id: 58,
        nombre: "Leche La Lechera Pvo x 400g",
        precio: 541,
        idComercio: 5
    },
    {
        id: 59,
        nombre: "Leche Check x 1l",
        precio: 129,
        idComercio: 5
    },
 
    /* -----  YERBAS 6  --------------------------------------- */
    {
        id: 6,
        nombre: "Yerba Amanda x 1kg",
        precio: 720,
        idComercio: 1
    },
    {
        id: 7,
        nombre: "Yerba Jardinera x 1kg",
        precio: 510,
        idComercio: 1
    },
    {
        id: 8,
        nombre: "Yerba Amanda x 500g",
        precio: 360,
        idComercio: 1
    },
    {
        id: 9,
        nombre: "Yerba Jardinera x 500g",
        precio: 275,
        idComercio: 1
    },
    {
        id: 10,
        nombre: "Yerba Playadito x 1kg",
        precio: 720,
        idComercio: 1
    },
    {
        id: 60,
        nombre: "Yerba Playadito x 500g",
        precio: 380,
        idComercio: 1
    },
    {
        id: 61,
        nombre: "Yerba Mañanita x 1kg",
        precio: 620,
        idComercio: 2
    },
    {
        id: 6,
        nombre: "Yerba Amanda x 1kg",
        precio: 564,
        idComercio: 2
    },
    {
        id: 62,
        nombre: "Yerba Taragui x 1kg",
        precio: 749,
        idComercio: 2
    },
    {
        id: 63,
        nombre: "Yerba Mañanita x 500g",
        precio: 361,
        idComercio: 2
    },
    {
        id: 64,
        nombre: "Yerba Taragui x 500g",
        precio: 361,
        idComercio: 2
    },
    {
        id: 60,
        nombre: "Yerba Playadito x 500g",
        precio: 300,
        idComercio: 2
    },
    {
        id: 8,
        nombre: "Yerba Amanda x 500g",
        precio: 300,
        idComercio: 2
    },
    {
        id: 6,
        nombre: "Yerba Amanda x 1kg",
        precio: 620,
        idComercio: 3
    },
    {
        id: 9,
        nombre: "Yerba Jardinera x 500g",
        precio: 320,
        idComercio: 3
    },
    {
        id: 8,
        nombre: "Yerba Amanda x 500g",
        precio: 300,
        idComercio: 3
    },
    {
        id: 60,
        nombre: "Yerba Playadito x 500g",
        precio: 341,
        idComercio: 4
    },
    {
        id: 61,
        nombre: "Yerba Mañanita x 1kg",
        precio: 543,
        idComercio: 4
    },
    {
        id: 62,
        nombre: "Yerba Taragui x 1kg",
        precio: 670,
        idComercio: 4
    },
    {
        id: 10,
        nombre: "Yerba Playadito x 1kg",
        precio: 674,
        idComercio: 4
    },
    {
        id: 10,
        nombre: "Yerba Playadito x 1kg",
        precio: 674,
        idComercio: 5
    },
    {
        id: 6,
        nombre: "Yerba Amanda x 1kg",
        precio: 628,
        idComercio: 5
    },
    {
        id: 62,
        nombre: "Yerba Taragui x 1kg",
        precio: 552,
        idComercio: 5
    },
    {
        id: 8,
        nombre: "Yerba Amanda x 500g",
        precio: 350,
        idComercio: 5
    },
    {
        id: 60,
        nombre: "Yerba Playadito x 500g",
        precio: 371,
        idComercio: 5
    },
    {
        id: 63,
        nombre: "Yerba Mañanita x 500g",
        precio: 351,
        idComercio: 5
    },
    /* -------------PURES DE TOMATES  7 ------------------------ */
    {
        id: 65,
        nombre: "Puré de tomate La Campañola x 520g",
        precio: 115,
        idComercio: 1
    },
    {
        id: 66,
        nombre: "Puré de tomate Vigente x 520g",
        precio: 70,
        idComercio: 1
    },
    {
        id: 67,
        nombre: "Puré de tomate Dulcor x 520g",
        precio: 90,
        idComercio: 1
    },
    {
        id: 68,
        nombre: "Puré de tomate Arcor x 520g",
        precio: 119,
        idComercio: 2
    },
    {
        id: 65,
        nombre: "Puré de tomate La Campañola x 520g",
        precio: 115,
        idComercio: 2
    },  {
        id: 69,
        nombre: "Puré de tomate Otito x 520g",
        precio: 74,
        idComercio: 2
    },
    {
        id: 70,
        nombre: "Puré de tomate Mora x 520g",
        precio: 76,
        idComercio: 2
    },
    {
        id: 65,
        nombre: "Puré de tomate La Campañola x 520g",
        precio: 110,
        idComercio: 3
    },
    {
        id: 68,
        nombre: "Puré de tomate Arcor x 520g",
        precio: 110,
        idComercio: 3
    },
    {
        id: 71,
        nombre: "Puré de tomate Carrefour x 520g",
        precio: 111,
        idComercio: 4
    },
    {
        id: 66,
        nombre: "Puré de tomate Vigente x 520g",
        precio: 70,
        idComercio: 5
    },
    {
        id: 72,
        nombre: "Puré de tomate Great Value x 520g",
        precio: 59,
        idComercio: 5
    },
    {
        id: 73,
        nombre: "Puré de tomate Marolio x 520g",
        precio: 72,
        idComercio: 5
    },
    
    /* ---------------HARINAS 8------------------------------------- */
    {
        id: 74,
        nombre: "Harina Favorita 000 x 1kg",
        precio: 90,
        idComercio: 1
    },
    {
        id: 75,
        nombre: "Almidón de mandioca Ranchito x 1kg",
        precio: 320,
        idComercio: 1
    },
    {
        id: 76,
        nombre: "Harina Florencia 000 x 1kg",
        precio: 111,
        idComercio: 2
    },
    {
        id: 77,
        nombre: "Harina Florencia 0000 x 1kg",
        precio: 161,
        idComercio: 2
    },
    {
        id: 78,
        nombre: "Harina Leudante Blancaflor x 1kg",
        precio: 233,
        idComercio: 2
    },
    {
        id: 75,
        nombre: "Almidón de mandioca Ranchito x 1kg",
        precio: 385,
        idComercio: 2
    },
    {
        id: 74,
        nombre: "Harina Favorita 000 x 1kg",
        precio: 130,
        idComercio: 3
    },
    {
        id: 79,
        nombre: "Harina Pureza 00000 x 1kg",
        precio: 210,
        idComercio: 3
    },
    {
        id: 75,
        nombre: "Almidón de mandioca Ranchito x 1kg",
        precio: 400,
        idComercio: 3
    },
    {
        id: 80,
        nombre: "Harina Carrefour Leudante x 1kg",
        precio: 105,
        idComercio: 4
    },
    {
        id: 77,
        nombre: "Harina Favorita 0000 x 1kg",
        precio: 134,
        idComercio: 5
    },
    {
        id: 79,
        nombre: "Harina Pureza 0000 x 1kg",
        precio: 154,
        idComercio: 5
    },
    {
        id: 81,
        nombre: "Harina Blancaflor 000 x 1kg",
        precio: 94,
        idComercio: 5
    },
    /* --------------POLENTAS  9 ------------------------------------- */
    {
        id: 82,
        nombre: "Polenta Presto Pronta x 500g",
        precio: 140,
        idComercio: 1
    },
    {
        id: 83,
        nombre: "Polenta Loponi x 500g",
        precio: 77,
        idComercio: 2
    },
    {
        id: 82,
        nombre: "Polenta Presto Pronta x 500g",
        precio: 180,
        idComercio: 3
    },
    {
        id: 82,
        nombre: "Polenta Presto Pronta x 500g",
        precio: 109,
        idComercio: 4
    },
    {
        id: 82,
        nombre: "Polenta Presto Pronta x 500g",
        precio: 259,
        idComercio: 4
    },
    /* --------------- PAN  10------------------------------ */
    {
        id: 84,
        nombre: "Pan x 1kg",
        precio: 189,
        idComercio: 2
    },
    {
        id: 84,
        nombre: "Pan x 1kg",
        precio: 240,
        idComercio: 3
    },
]

const productoNombre = [
    {
        id: 1,
        nombre: "Arroz Marolio de 1kg",
    },
    {
        id: 2,
        nombre: "Azucar Chango de 1kg",
    },
    {
        id: 3,
        nombre: "Aceite Cañuelas x 900ml",
    },
    {
        id: 4,
        nombre: "Fideo Favorita x 500g",
    },
    {
        id: 5,
        nombre: "Leche Sancor x 1l",
    },
    {
        id: 11,
        nombre: "Arroz Amanda de 1kg",
    },
    {
        id: 12,
        nombre: "Arroz Perbonil de 1kg-",
    },
    {
        id: 13,
        nombre: "Arroz Itajai de 1kg-",
    },
    {
        id: 14 ,
        nombre: "Arroz Luchetti de 1kg-",
    },
    {
        id: 15,
        nombre: "Arroz Danubio de 500g-",
    },
    {
        id: 16,
        nombre: "Arroz San Javier de 1kg",
    },
    {
        id: 17,
        nombre: "Arroz Carrefour de 1kg",
    },
    {
        id: 18,
        nombre: "Arroz Great Value de 1kg",
    },
    {
        id: 19,
        nombre: "Arroz Vanguardia de 1kg",
    },
    {
        id: 20,
        nombre: "Azucar Los Cuatro de 1kg",
    },
    {
        id: 21,
        nombre: "Azucar Primer precio de 1kg",
    },
    {
        id: 22,
        nombre: "Azucar Diamante de 1kg",
    },
    {
        id: 23,
        nombre: "Azucar Ledesma de 1kg",
    },
    {
        id: 24,
        nombre: "Azucar La Estrella de 1kg",
    },
    {
        id: 25,
        nombre: "Azucar Carrefour de 1kg",
    },
    {
        id: 26,
        nombre: "Azucar Azucel de 1kg",
    },
    {
        id: 27,
        nombre: "Aceite Cocinero Mezcla 900ml",
    },
    {
        id: 28,
        nombre: "Aceite Vicentin Girasol 900ml",
    },
    {
        id: 29,
        nombre: "Aceite Lirio Mezcla 900ml",
    },
    {
        id: 30,
        nombre: "Aceite Cocinero Girasol 1,5l",
    },
    {
        id: 31,
        nombre: "Aceite Pureza Girasol x 900ml",
    },
    {
        id: 32,
        nombre: "Aceite Cocinero Girasol 900ml",
    },
    {
        id: 33,
        nombre: "Aceite Siglo de Oro Mezcla 900ml",
    },
    {
        id: 34,
        nombre: "Aceite Pureza Girasol x 1,5 litro",
    },
    {
        id: 35,
        nombre: "Aceite Cocinero Mezcla 1,5l",
    },
    {
        id: 36,
        nombre: "Fideo Favorita tallarín x 500g",
    },
    {
        id: 37,
        nombre: "Fideo Favorita Variados x 500g",
    },
    {
        id: 38,
        nombre: "Fideo Canale x 500g",
    },
    {
        id: 39,
        nombre: "Fideo Luchetti Linguine x 500g",
    },
    {
        id: 40,
        nombre: "Fideo Luchetti Spaguetti x 500g",
    },
    {
        id: 41,
        nombre: "Fideo Terrabusi x 500g",
    },
    {
        id: 42,
        nombre: "Fideo Canale Spaguetti x 500g",
    },
    {
        id: 43,
        nombre: "Fideo Knnor x 500g",
    },
    {
        id: 44,
        nombre: "Fideo Marolio x 500g",
    },
    {
        id: 45,
        nombre: "Fideo Marolio Tirabuzón x 500g",
    },
    {
        id: 46,
        nombre: "Fideo Arcor Tallarín x 500g",
    },
    {
        id: 47,
        nombre: "Fideo Luchetti Bucatini x 500g",
    },
    {
        id: 48,
        nombre: "Fideo Matarazo Spagueti x 500g",
    },
    {
        id: 49,
        nombre: "Fideo Terrabusi Tirabuzón x 500g",
    },
    {
        id: 50,
        nombre: "Leche La Lechera Pvo x 800g",
    },
    {
        id: 51,
        nombre: "Leche Purísima Pvo x 800g",
    },
    {
        id: 52,
        nombre: "Leche Ilolay x 1l",
    },
    {
        id: 53,
        nombre: "Leche Ilolay Pvo x 800g",
    },
    {
        id: 54,
        nombre: "Leche Armonía Pvo x 800g",
    },
    {
        id: 55,
        nombre: "Leche La Suipachense Pvo x 400g",
    },
    {
        id: 56,
        nombre: "Leche Armonía Pvo x 400g",
    },
    {
        id: 57,
        nombre: "Leche La Serenísima x 1l",
    },
    {
        id: 58,
        nombre: "Leche La Lechera Pvo x 400g",
    },
    {
        id: 59,
        nombre: "Leche Check x 1l",
    },
    {
        id: 6,
        nombre: "Yerba Amanda x 1kg",
    },
    {
        id: 7,
        nombre: "Yerba Jardinera x 1kg",
    },
    {
        id: 8,
        nombre: "Yerba Amanda x 500g",
    },
    {
        id: 9,
        nombre: "Yerba Jardinera x 500g",
    },
    {
        id: 10,
        nombre: "Yerba Playadito x 1kg",
    },
    {
        id: 60,
        nombre: "Yerba Playadito x 500g",
    },
    {
        id: 61,
        nombre: "Yerba Mañanita x 1kg",
    },
    {
        id: 62,
        nombre: "Yerba Taragui x 1kg",
    },
    {
        id: 63,
        nombre: "Yerba Mañanita x 500g",
    },
    {
        id: 64,
        nombre: "Yerba Taragui x 500g",
    },
    {
        id: 65,
        nombre: "Puré de tomate La Campañola x 520g",
    },
    {
        id: 66,
        nombre: "Puré de tomate Vigente x 520g",
    },
    {
        id: 67,
        nombre: "Puré de tomate Dulcor x 520g",
    },
    {
        id: 68,
        nombre: "Puré de tomate Arcor x 520g",
    },
    {
        id: 69,
        nombre: "Puré de tomate Otito x 520g",
    },
    {
        id: 70,
        nombre: "Puré de tomate Mora x 520g",
    },
    {
        id: 71,
        nombre: "Puré de tomate Carrefour x 520g",
    },
    {
        id: 72,
        nombre: "Puré de tomate Great Value x 520g",
    },
    {
        id: 73,
        nombre: "Puré de tomate Marolio x 520g",
    },
    {
        id: 74,
        nombre: "Harina Favorita 000 x 1kg",
    },
    {
        id: 75,
        nombre: "Almidón de mandioca Ranchito x 1kg",
    },
    {
        id: 76,
        nombre: "Harina Florencia 000 x 1kg",
    },
    {
        id: 77,
        nombre: "Harina Florencia 0000 x 1kg",
    },
    {
        id: 78,
        nombre: "Harina Leudante Blancaflor x 1kg",
    },
    {
        id: 79,
        nombre: "Harina Pureza 00000 x 1kg",
    },
    {
        id: 80,
        nombre: "Harina Carrefour Leudante x 1kg",
    },
    {
        id: 81,
        nombre: "Harina Blancaflor 000 x 1kg",
    },
    {
        id: 82,
        nombre: "Polenta Presto Pronta x 500g",
    },
    {
        id: 83,
        nombre: "Polenta Loponi x 500g",
    },
    {
        id: 84,
        nombre: "Pan x 1kg",
    },
]

const registroClientes = [
    {
        id: uuid.v4(),
        usuario: "Juan10",
        email: "juan@gmail.com",
        pass: CryptoJS.SHA256('juan1234').toString(),
        tipo: "1",
        fechaAlta: "15-10-2021"
    },
    {
        id: uuid.v4(),
        usuario: "Agustin",
        email: "agus@gmail.com",
        pass: CryptoJS.SHA256('agus1234').toString(),
        tipo: "1",
        fechaAlta: "10-02-2022"
    },
    {
        id: uuid.v4(),
        usuario: "Ramon",
        email: "apa@gmail.com",
        pass: CryptoJS.SHA256('Apa1234').toString(),
        tipo: "2",
        fechaAlta: "18-01-2021"
    },
    {
        id: uuid.v4(),
        usuario: "Florinda",
        email: "si@gmail.com",
        pass: CryptoJS.SHA256('Si1234').toString(),
        tipo: "2",
        fechaAlta: "10-12-2021"
    }
]

/* Aqui se programa el buscador que filtra los productos */

let buscador = document.querySelector('#buscador');  
/* let boton = document.querySelector('#boton'); */
let select = document.querySelector('#filtro');

const filtrar = () => {
    select.innerHTML = '';                             //cada vez que se ejecute la funcion inicializamos el select vacio
    let texto = buscador.value.toLowerCase()         //se guarda en una variable lo que esta en el input y con tolowercase() se pasa el texto a minuscula para comparar mas facil con los productos
    for (let producto of productoNombre){              //se recorre el arreglo con un for, se crea una variable local "producto" donde en cada iteracion se guarda el objeto que esta dentro del arreglo "productosNombre[]" el cual contiene los nombres y los id de los prodcutos
        let nombre = producto.nombre.toLowerCase()     //guardamos en una variable lo que esta en la propiedad "nombre" del objeto
        if (nombre.indexOf(texto) !== -1) {            //indexOf() retorna el elemento si es que existe y si no existe retorna -1 por eso se hace esa condicion, busca el texto que escribio el usuario dentro de la variable nombre que contiene el nombre del producto, si lo encuentra entra por verdadero
            select.innerHTML += ` 
            <option value=${producto.id}>${producto.nombre}</option>

            `                                           
        }   //manipulamos el DOM a travez de el id"filtro" agregando etiquetas <option></option> dentro del <select></select> cada uno con los valores necesarios
    }
    if (select.innerHTML === '') {        //si no se encuentra el prodcuto muestra el siguiente mensaje
        select.innerHTML += '<option value="">Producto no encontrado..</option>'
    }
}

/* boton.addEventListener('click', filtrar)  */        //ejecutamos la funcion cada vez que hacemos click en el boton de busqueda
buscador.addEventListener('keyup', filtrar)      //ejecutamos la funcion cada vez que presionamos y soltamos una tecla
//filtrar();                                       //ejecutamos la funcion para que en un principio carge el <select></select>


//console.log(productos)

function ordenamiento(arreglo) {         //esta funcion ordena los precios de menor a mayor
    let length = arreglo.length;  
    for (let i = 0; i < length; i++) { 
        for (let j = 0; j < (length - i - 1); j++) { 
            if(arreglo[j].precio > arreglo[j+1].precio) {
                let tmp = arreglo[j]; 
                arreglo[j] = arreglo[j+1]; 
                arreglo[j+1] = tmp; 
            }
        }        
    }
}


document.querySelector('#filtro').addEventListener('click',(e) => {
    e.preventDefault()
    let producto = e.target.value
    document.getElementById('renderizartabla').innerHTML = `
        <thead>
            <tr>
            <th style="width: 22%;">Descripcion del producto</th>
            <th style="width: 22%;">Precio</th>
            <th style="width: 22%;">Comercio</th>
            </tr>
        </thead>
        <tbody>
        `;
    ordenamiento(productos)
    //console.log(productos)
    productos.forEach(prod1 => {
        //console.log(prod1)
        if (prod1.id == producto) {
            comercios.forEach(comer1 => {
                if (comer1.id==prod1.idComercio) {
                    document.getElementById('renderizarform').hidden=false;  //para que se vea el formulario
                    document.getElementById('renderizartabla').innerHTML += `
                    <tr>
                        <td>${prod1.nombre}</td>
                        <td>$${prod1.precio}</td>
                        <td>${comer1.nombre}</td>
                    </tr>
                    `
                }
            })
  
        }
    })
    document.getElementById('renderizartabla').innerHTML += `</tbody>`
})

//informacion sobre los comercios
document.querySelector('#infocomer').addEventListener('click', (e) => {
    e.preventDefault();
    let comercio = e.target.value;
    switch (comercio) {
        case "1":
            document.getElementById('divinfo').hidden = false;
            document.getElementById('divinfo').innerHTML = `
                <p>Direccion: Av 25 de Mayo 1541 <br>
                Email: ApaSup@apasup.com <br>
                Telefono:370 443-0314</p>
                <a href="https://es-la.facebook.com/pages/category/Supermarket/Apa-Supermercados-OK-112973526922764/" target="_blank">Facebook</a>

                `;
            break;
        case "2":
            document.getElementById('divinfo').hidden = false;
            document.getElementById('divinfo').innerHTML = `
                <p>Direccion: Av J. D. Perón 757 <br>
                Email: pajarito@elpajarito.com <br>
                Telefono: 4-425560</p>
                <a href="https://www.facebook.com/people/Supermercados-Cadena-Caceres/100063480551827/" target="_blank">Facebook</a>
                `;
            break;
        case "3":
            document.getElementById('divinfo').hidden = false;
            document.getElementById('divinfo').innerHTML = `
                <p>Direccion: Av Independencia 390 <br>
                Email: supsi@supsi.com <br>
                Telefono: 370 443-4751</p>
                <a href="https://www.facebook.com/people/Supermercado-Independencia/100063634927747/" target="_blank">Facebook</a>
                `;
            break;
        case "4":
            document.getElementById('divinfo').hidden = false;
            document.getElementById('divinfo').innerHTML = `
                <p>Direccion: Av Gutnisky 2090 <br>
                Email: supcarefour@carrefour.com <br>
                Telefono: 0800-444-8484</p>
                <a href="https://www.carrefour.com.ar/" target="_blank">Sitio Web</a>`;
            break;
        case "5":
            document.getElementById('divinfo').hidden = false;
            document.getElementById('divinfo').innerHTML = `
                <p>Direccion: Av Gutnisky 3350 <br>
                Email: changomas@wallmart.com <br>
                Telefono: 0800 555 2426</p><br>
                <a href="https://www.changomas.com.ar/" target="_blank">Sitio Web</a>
                `;
            break;    
    }
})

function cargarSelect() {
    document.getElementById('selectproducto').innerHTML = '<option selected disabled>Seleccione un producto</option>'
    productoNombre.forEach(producto => {
        document.getElementById('selectproducto').innerHTML += `
            <option value=${producto.id}>${producto.nombre}</option>
        `
    })
    //en la misma funcion carga tambien el select de los comercios
    document.getElementById('selectcomercio').innerHTML = '<option selected disabled>Seleccione el comercio</option>'
    comercios.forEach(comercio => {
        document.getElementById('selectcomercio').innerHTML += `
            <option value=${comercio.id}>${comercio.nombre}</option>
        `
    })

}

function cargarProducto(){
    let productoC = parseInt(document.getElementById('selectproducto').value);
    let precioC = parseInt(document.getElementById('precioinput').value);
    let comercioC = parseInt(document.getElementById('selectcomercio').value);
    let nombreC;
    //let divAlert = document.getElementById('divcarga')
    productoNombre.forEach(prod => {
        if (prod.id == productoC)
        nombreC = prod.nombre;
    })
    if ((productoC>0) && (precioC>0) && (comercioC>0)) {
        productos.push(
            {
                id: productoC,
                nombre: nombreC,
                precio: precioC,
                idComercio: comercioC
            }
        )
        alert('Producto cargado correctamente')
    }
    
}

function listarProductosComerciante(){
    document.getElementById('listartabla').innerHTML = `
        <thead>
            <tr>
            <th style="width: 22%;">Descripcion del producto</th>
            <th style="width: 22%;">Precio</th>
            <th style="width: 22%;">Comercio</th>
            </tr>
        </thead>
        <tbody>
        `;
    //ordenamiento(productos)
    //console.log(productos)
    productos.forEach(prod1 => {
        //console.log(prod1)
        comercios.forEach(comer1 => {
            if (comer1.id==prod1.idComercio) {
                document.getElementById('listarform').hidden=false;  //para que se vea el formulario
                document.getElementById('listartabla').innerHTML += `
                <tr>
                    <td>${prod1.nombre}</td>
                    <td>$${prod1.precio}</td>
                    <td>${comer1.nombre}</td>
                </tr>
                `
            }
        })
    })
    document.getElementById('listartabla').innerHTML += `</tbody>`
}
 function cargarComentario() {
    let mensaje = document.getElementById('message').value

    document.querySelector('#foro').innerHTML += `
    <div class="" style="border: 5px solid #dfdfdf; background-color: white; padding: 30px;border-radius: 15px; margin-bottom: 15px;">
    <p>${mensaje}</p>
    </div>
    `
 }