import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/330",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/330",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/330",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/330",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/330",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/330",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/330"
    },
    name: {
        en: "Skrelp",
        fr: "Venalgue",
        es: "Skrelp",
        it: "Skrelp",
        de: "Algitt",
        "pt-br": "Skrelp",
        "zh-tw": "垃垃藻",
        ja: "クズモー",
        ko: "수레기"
    },
    illustrator: "Mina Nakai",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: [
        "Darkness"
    ],
    description: {
        en: "This Pokémon is a poor swimmer. If it's caught in\na fierce storm, it will sometimes get washed far\naway and become unable to return to its home.",
        fr: "La nage n'est pas son fort. S'il est pris dans une tempête, il peut être emporté au loin et ne pas réussir à rejoindre son habitat d'origine.",
        es: "Es un pésimo nadador. Algunos ejemplares han sido incluso incapaces de volver a su hogar tras ser arrastrados lejos por una intensa tormenta.",
        it: "Non è molto abile a nuotare. A volte viene trascinato lontano da una tempesta e non riesce più a far ritorno a casa.",
        de: "Es ist ein miserabler Schwimmer. Gerät es in einen heftigen Sturm und wird weit weggespült, kann es mitunter nicht mehr nach Hause zurückkehren.",
        "pt-br": "Este Pokémon nada muito mal. Ao ser surpreendido por uma tempestade violenta, pode às vezes ser arrastado para longe e não conseguir mais voltar para casa.",
        "zh-tw": "不擅長游泳，一旦被捲進狂暴的海浪，就有可能被沖到遠處而無法歸巢。",
        ja: "This Pokémon is a poor swimmer. If it's caught in\na fierce storm, it will sometimes get washed far\naway and become unable to return to its home.",
        ko: "This Pokémon is a poor swimmer. If it's caught in\na fierce storm, it will sometimes get washed far\naway and become unable to return to its home."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Razor Fin",
                fr: "Aileron-Rasoir",
                es: "Aleta Afilada",
                it: "Pinnalama",
                de: "Rasierflosse",
                "pt-br": "Barbatana Cortante",
                "zh-tw": "鰭快刀",
                ja: "Razor Fin",
                ko: "Razor Fin"
            },
            damage: 40,
            cost: [
                "Darkness",
                "Colorless"
            ]
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
