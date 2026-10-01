import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/121",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/121",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/121",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/121",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/121",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/121",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/121"
    },
    name: {
        en: "Gimmighoul",
        fr: "Mordudor",
        es: "Gimmighoul",
        it: "Gimmighoul",
        de: "Gierspenst",
        "pt-br": "Gimmighoul",
        "zh-tw": "索財靈",
        ja: "コレクレー",
        ko: "모으령"
    },
    illustrator: "Mizue",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: [
        "Psychic"
    ],
    dexId: [
        999
    ],
    description: {
        en: "It lives inside an old treasure chest. Sometimes it gets left in shop corners since no one realizes it’s actually a Pokémon.",
        fr: "Il vit dans un vieux coffre au trésor. On le trouve parfois dans un coin chez l'antiquaire, quand personne ne s'est aperçu que c'était un Pokémon.",
        es: "Vive en el interior de un viejo cofre desgastado. Al no tomarlo por un Pokémon, a veces termina a la venta por error en tiendas de antigüedades.",
        it: "Vive dentro un vecchio forziere. Non sembrando affatto un Pokémon, a volte finisce in un angolo nei negozi di strumenti.",
        de: "Es haust in einer alten Schatztruhe und landet manchmal bei Antiquitätenhändlern in der Ladenecke, da man es nicht als Pokémon erkennt.",
        "pt-br": "Vive dentro de um velho baú de tesouro. Às vezes, fica esquecido nos cantos das lojas porque ninguém percebe que, na verdade, é um Pokémon.",
        "zh-tw": "棲息在老舊的寶箱中，有時會因沒人注意到自己是寶可夢，而被擱置在道具店的角落。",
        ja: "It lives inside an old treasure chest. Sometimes it gets left in shop corners since no one realizes it’s actually a Pokémon.",
        ko: "It lives inside an old treasure chest. Sometimes it gets left in shop corners since no one realizes it’s actually a Pokémon."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Continuous Coin Toss",
                fr: "Lancer de Pièce Continu",
                es: "Lanzamiento Incesante de Monedas",
                it: "Lanciomoneta Continuo",
                de: "Dauermünzwurf",
                "pt-br": "Jogadas de Moeda Contínuas",
                "zh-tw": "連續擲幣",
                pt: "Jogadas de Moeda Contínuas",
                ja: "Continuous Coin Toss",
                ko: "Continuous Coin Toss"
            },
            damage: "20x",
            cost: [
                "Colorless"
            ],
            effect: {
                en: "Flip a coin until you get tails. This attack does 20 damage for each heads.",
                fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 20 dégâts pour chaque côté face.",
                es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 20 puntos de daño por cada cara.",
                it: "Lancia una moneta finché non esce croce. Questo attacco infligge 20 danni ogni volta che esce testa.",
                de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu.",
                "pt-br": "Jogue uma moeda até sair coroa. Este ataque causa 20 pontos de dano para cada cara.",
                "zh-tw": "擲硬幣直到出現反面,造成正面出現的次數×20點傷害。",
                pt: "Jogue uma moeda até sair coroa. Este ataque causa 20 pontos de dano para cada cara.",
                ja: "Flip a coin until you get tails. This attack does 20 damage for each heads.",
                ko: "Flip a coin until you get tails. This attack does 20 damage for each heads."
            }
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
