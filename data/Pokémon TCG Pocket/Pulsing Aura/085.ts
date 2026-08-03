import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/085",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/085",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/085",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/085",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/085",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/085",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/085"
    },
    name: {
        en: "Throh",
        fr: "Judokrak",
        es: "Throh",
        it: "Throh",
        de: "Jiutesto",
        "pt-br": "Throh",
        "zh-tw": "投摔鬼",
        ko: "던지미",
        ja: "ナゲキ"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fighting"],
    dexId: [538],
    stage: "Basic",
    description: {
        en: "It performs throwing moves with first-rate skill. Over the course of many battles, Throh’s belt grows darker as it absorbs its wearer’s sweat.",
        fr: "Ses techniques de projection sont sans égal.\nQuand il se bat, sa sueur coule sur sa ceinture\net lui donne une teinte plus foncée.",
        es: "Su técnica de lanzamiento es formidable. El\nsudor que exhala durante el combate impregna\nsu cinturón, cuyo color se vuelve más intenso.",
        it: "È molto bravo nelle tecniche di lancio.\nIl sudore prodotto durante la lotta impregna\nla sua cintura da karate e la rende più scura.",
        de: "Es verfügt über ein exzellentes Repertoire an\nWurftechniken. Sein Gürtel färbt sich dunkler,\nje mehr Schweiß er bei Kämpfen in sich aufsaugt.",
        "pt-br": "Ele executa movimentos de arremesso com habilidade de primeira linha. Ao longo de muitas batalhas, o cinto de Throh fica mais escuro à medida que absorve o suor do usuário.",
        "zh-tw": "能使出一流的投摔招式。\n帶子被戰鬥時流下的汗水\n浸濕，顏色越變越深。"
    },
    attacks: [
        {
            cost: ["Fighting", "Fighting", "Fighting"],
            name: {
                en: "Circle Throw",
                fr: "Projection",
                es: "Llave Giro",
                it: "Ribaltiro",
                de: "Überkopfwurf",
                "pt-br": "Arremesso Circular",
                "zh-tw": "巴投"
            },
            effect: {
                en: "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
                fr: "Remplacez le Pokémon Actif de votre adversaire par le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
                es: "Cambia el Pokémon Activo de tu rival a la Banca. (Tu oponente elige el nuevo Pokémon Activo).",
                it: "Scambia il Pokémon attivo del tuo avversario nella panchina. (Il tuo avversario sceglie il nuovo Pokémon attivo.)",
                de: "Tauschen Sie das aktive Pokémon Ihres Gegners auf die Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)",
                "pt-br": "Troque o Pokémon Ativo do seu oponente para o Banco. (Seu oponente escolhe o novo Pokémon Ativo.)",
                "zh-tw": "將對手的活躍寶可夢移至替補席。 （你的對手選擇新的活躍寶可夢。）"
            },
            damage: 70
        }
    ],
    weaknesses: [
        {
            type: "Psychic",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
