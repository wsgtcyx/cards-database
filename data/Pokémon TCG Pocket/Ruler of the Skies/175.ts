import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/175",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/175",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/175",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/175",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/175"
    },
    name: {
        en: "Dragonair",
        fr: "Draco",
        es: "Dragonair",
        it: "Dragonair",
        de: "Dragonir",
        "pt-br": "Dragonair",
        "zh-tw": "哈克龍",
        ko: "신뇽",
        ja: "ハクリュー"
    },
    illustrator: "rika",
    rarity: "One Star",
    category: "Pokemon",
    hp: 80,
    types: ["Dragon"],
    dexId: [148],
    evolveFrom: {
        en: "Dratini",
        fr: "Minidraco",
        es: "Dratini",
        it: "Dratini",
        de: "Dratini",
        "pt-br": "Dratini",
        "zh-tw": "迷你龍",
        ko: "미뇽",
        ja: "ミニリュウ"
    },
    stage: "Stage1",
    description: {
        en: "It is called the divine POKéMON. When its entire body brightens slightly, the weather changes."
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Dragon's Blessing",
                fr: "Bénédiction du Dragon",
                es: "Bendición Dragontina",
                "pt-br": "Bênção do Dragão",
                "zh-tw": "龍恩"
            },
            effect: {
                en: "Once during your turn, if this Pokémon is on your Bench, you may attach an Energy from your discard pile to your Active Dragon Pokémon.",
                fr: "Une fois pendant votre tour, si ce Pokémon est sur votre Banc, vous pouvez attacher une Énergie de votre pile de défausse à votre Pokémon Dragon Actif.",
                es: "Una vez durante tu turno, si este Pokémon está en tu Banca, puedes unir 1 Energía de tu pila de descartes a tu Pokémon Dragón Activo.",
                "pt-br": "Uma vez durante o seu turno, se este Pokémon estiver no seu Banco, você poderá ligar 1 Energia da sua pilha de descarte ao seu Pokémon Dragão Ativo.",
                "zh-tw": "若這隻寶可夢在備戰區,則在自己的回合時可使用1次。從自己的棄牌區選擇1個能量,附於戰鬥場的龍寶可夢身上。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Draconic Whip",
                fr: "Fouet Draconien",
                es: "Látigo Dracónico",
                it: "Frustata del Drago",
                de: "Drachenpeitsche",
                "pt-br": "Chicote Dracônico",
                "zh-tw": "龍之鞭打"
            },
            damage: 40
        }
    ],
    retreat: 2
};

export default card;
