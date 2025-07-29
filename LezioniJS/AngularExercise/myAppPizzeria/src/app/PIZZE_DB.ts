import { PizzaModel } from './pizza/pizza.model';

export const PIZZE_DB: PizzaModel[] = [
    {
        img: "/pizzaImages/margherita.jpg",
        nome: 'Margherita',
        descrizione:
            'Classica pizza italiana con pomodoro, mozzarella e basilico fresco.',
        ingredienti: ['pomodoro', 'mozzarella', 'basilico'],
    },
    {
        img: "/pizzaImages/diavola.jpg",
        nome: 'Diavola',
        descrizione: 'Pizza piccante con salame piccante, mozzarella e pomodoro.',
        ingredienti: ['pomodoro', 'mozzarella', 'salame piccante'],
    },
    {
        img: "/pizzaImages/quattroStagioni.jpg",
        nome: 'Quattro Stagioni',
        descrizione:
            'Pizza suddivisa in quattro parti con verdure, prosciutto, funghi e carciofi.',
        ingredienti: [
            'pomodoro',
            'mozzarella',
            'prosciutto cotto',
            'funghi',
            'carciofi',
            'olive',
        ],
    },
    {
        img: "/pizzaImages/capricciosa.jpg",
        nome: 'Capricciosa',
        descrizione:
            'Pizza ricca con pomodoro, mozzarella, carciofi, funghi, prosciutto cotto e olive.',
        ingredienti: [
            'pomodoro',
            'mozzarella',
            'carciofi',
            'funghi',
            'prosciutto cotto',
            'olive',
        ],
    },
    {
        img: "/pizzaImages/quattroFormaggi.jpg",
        nome: 'Quattro Formaggi',
        descrizione: 'Pizza con quattro diversi tipi di formaggi fusi.',
        ingredienti: ['mozzarella', 'gorgonzola', 'parmigiano', 'provola'],
    },
    {
        img: "/pizzaImages/marinara.jpg",
        nome: 'Marinara',
        descrizione:
            'Pizza semplice con pomodoro, aglio, origano e olio extravergine di oliva.',
        ingredienti: ['pomodoro', 'aglio', 'origano', "olio d'oliva"],
    },
    {
        img: "/pizzaImages/napoli.jpg",
        nome: 'Napoli',
        descrizione: 'Pizza con pomodoro, mozzarella, acciughe e capperi.',
        ingredienti: ['pomodoro', 'mozzarella', 'acciughe', 'capperi'],
    },
    {
        img: "/pizzaImages/salsicciaFriarielli.jpg",
        nome: 'Salsiccia e Friarielli',
        descrizione:
            'Pizza con salsiccia fresca e friarielli, tipici broccoli napoletani.',
        ingredienti: ['mozzarella', 'salsiccia', 'friarielli'],
    },
    {
        img: "/pizzaImages/prosciuttoFunghi.jpg",
        nome: 'Prosciutto e Funghi',
        descrizione: 'Pizza con prosciutto cotto e funghi champignon.',
        ingredienti: [
            'pomodoro',
            'mozzarella',
            'prosciutto cotto',
            'funghi champignon',
        ],
    },
    {
        img: "/pizzaImages/vegetariana.jpg",
        nome: 'Vegetariana',
        descrizione: 'Pizza ricca di verdure fresche e colorate.',
        ingredienti: [
            'pomodoro',
            'mozzarella',
            'zucchine',
            'melanzane',
            'peperoni',
            'cipolla',
        ],
    },
];
