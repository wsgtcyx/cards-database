import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/151",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/151",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/151",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/151",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/151",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/151",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/151"
    },
    name: {
        en: "Bombirdier",
        fr: "Lestombaile",
        es: "Bombirdier",
        it: "Bombirdier",
        de: "Adebom",
        "pt-br": "Bombirdier",
        "zh-tw": "下石鳥",
        ja: "オトシドリ",
        ko: "떨구새"
    },
    illustrator: "Sekio",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 70,
    types: [
        "Darkness"
    ],
    dexId: [
        962
    ],
    stage: "Basic",
    description: {
        en: "Bombirdier uses the apron on its chest to bundle up food, which it carries back to its nest. It enjoys dropping things that make loud noises.",
        fr: "Ce Pokémon transporte sa nourriture jusqu'à son nid grâce à son tablier. Il aime larguer des objets qui s'écrasent avec fracas.",
        es: "Usa la bolsa del pecho para envolver comida y transportarla a su nido. Le encanta dejar caer objetos que hacen mucho ruido.",
        it: "Usa il grembiule pettorale per trasportare cibo al nido. Si diverte a far precipitare oggetti che, schiantandosi, fanno un gran fracasso.",
        de: "Es wickelt Futter in seine Brustschürze und trägt es so heim ins Nest. Liebend gern lässt es Dinge herabfallen, die beim Aufprall Lärm verursachen.",
        "pt-br": "Bombirdier usa o avental em seu peitoral para carregar alimento de volta ao seu ninho. Gosta de derrubar as coisas para fazer barulho.",
        "zh-tw": "會用胸口的袋子包住食物，再攜帶回巢穴。以弄掉會發出響亮聲音的東西為樂。",
        ja: "Bombirdier uses the apron on its chest to bundle up food, which it carries back to its nest. It enjoys dropping things that make loud noises.",
        ko: "Bombirdier uses the apron on its chest to bundle up food, which it carries back to its nest. It enjoys dropping things that make loud noises."
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Villainous Delivery",
                fr: "Livraison Maléfique",
                es: "Entrega Infame",
                it: "Consegna Maligna",
                de: "Boshafte Lieferung",
                "pt-br": "Entrega Vilanesca",
                "zh-tw": "壞蛋快遞",
                ja: "Villainous Delivery",
                ko: "Villainous Delivery"
            },
            effect: {
                en: "As long as this Pokémon is on your Bench, your Active {D} Pokémon's Retreat Cost is 1 less.",
                fr: "Tant que ce Pokémon est sur votre Banc, le Coût de Retraite de votre Pokémon {D} Actif est diminué de 1.",
                es: "Mientras este Pokémon esté en tu Banca, el Coste de Retirada de tu Pokémon {D} Activo es de 1 menos.",
                it: "Fintanto che questo Pokémon è nella tua panchina, il costo di ritirata del tuo Pokémon {D} attivo è ridotto di 1.",
                de: "Solange sich dieses Pokémon auf deiner Bank befindet, verringern sich die Rückzugskosten deines Aktiven {D}-Pokémon um 1.",
                "pt-br": "Enquanto este Pokémon estiver no seu Banco, o Custo de Recuo do seu Pokémon {D} Ativo será 1 a menos.",
                "zh-tw": "只要這隻寶可夢在備戰區,自己的戰鬥場的{D}寶可夢撤退所需的能量減少1個。",
                ja: "As long as this Pokémon is on your Bench, your Active {D} Pokémon's Retreat Cost is 1 less.",
                ko: "As long as this Pokémon is on your Bench, your Active {D} Pokémon's Retreat Cost is 1 less."
            }
        }
    ],
    attacks: [
        {
            cost: [
                "Darkness"
            ],
            name: {
                en: "Dark Cutter",
                fr: "Tranch'Obscur",
                es: "Cuchilla Oscura",
                it: "Oscurotaglio",
                de: "Dunkler Zerschneider",
                "pt-br": "Cortador de Escuridão",
                "zh-tw": "暗黑利刃",
                ja: "Dark Cutter",
                ko: "Dark Cutter"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
