import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/026",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/026",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/026",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/026",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/026",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/026",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/026"
    },
    name: {
        en: "Team Rocket's Slowking ex",
        fr: "Roigada-ex de la Team Rocket",
        es: "Slowking ex del Team Rocket",
        it: "Slowking-ex del Team Rocket",
        de: "Team Rockets Laschoking-ex",
        "pt-br": "Slowking ex da Equipe Rocket",
        "zh-tw": "火箭隊的呆呆王ex",
        ko: "로켓단의 야도킹 ex",
        ja: "ロケット団のヤドキングex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Psychic"],
    evolveFrom: {
        en: "Team Rocket's Slowpoke",
        fr: "Ramoloss de la Team Rocket",
        es: "Slowpoke del Team Rocket",
        it: "Slowpoke del Team Rocket",
        de: "Team Rockets Flegmon",
        "pt-br": "Slowpoke da Equipe Rocket",
        "zh-tw": "火箭隊的呆呆獸",
        ko: "로켓단의 야돈",
        ja: "ロケット団のヤドン"
    },
    stage: "Stage1",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Evil Inspiration",
                fr: "Inspiration Maléfique",
                es: "Inspiración Maligna",
                it: "Ispirazione Maligna",
                de: "Boshafte Inspiration",
                "pt-br": "Inspiração Maligna",
                "zh-tw": "邪惡點子"
            },
            effect: {
                en: "Once during your turn, if this Pokémon is in the Active Spot, you may draw a card.",
                fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez piocher une carte.",
                es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes robar 1 carta.",
                it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi pescare una carta.",
                de: "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du 1 Karte ziehen.",
                "pt-br": "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá comprar 1 carta.",
                "zh-tw": "若這隻寶可夢在戰鬥場上,則在自己的回合時可使用1次。從自己的牌庫抽出1張卡。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Psychic", "Colorless"],
            name: {
                en: "Hand Kinesis",
                fr: "Télékinésie en Main",
                es: "Manoquinesis",
                it: "Manocinèsi",
                de: "Handkinese",
                "pt-br": "Cinese de Mão",
                "zh-tw": "手中強念"
            },
            effect: {
                en: "This attack does 20 damage for each card in your hand.",
                fr: "Cette attaque inflige 20 dégâts pour chaque carte dans votre main.",
                es: "Este ataque hace 20 puntos de daño por cada carta en tu mano.",
                it: "Questo attacco infligge 20 danni per ogni carta che hai in mano.",
                de: "Diese Attacke fügt für jede Karte auf deiner Hand 20 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 20 pontos de dano para cada carta na sua mão.",
                "zh-tw": "造成自己的手牌的張數×20點傷害。"
            },
            damage: "20x"
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
