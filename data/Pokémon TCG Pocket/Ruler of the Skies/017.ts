import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/017",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/017",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/017",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/017",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/017",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/017",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/017"
    },
    name: {
        en: "Poltchageist",
        fr: "Poltchageist",
        es: "Poltchageist",
        it: "Poltchageist",
        de: "Mortcha",
        "pt-br": "Poltchageist",
        "zh-tw": "斯魔茶",
        ko: "차데스",
        ja: "チャデス"
    },
    illustrator: "Miki Tanaka",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 40,
    types: ["Grass"],
    dexId: [1012],
    stage: "Basic",
    description: {
        en: "Poltchageist looks like a regional form of Sinistea, but it was recently discovered that the two Pokémon are entirely unrelated."
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Hospitality",
                fr: "Aux Petits Soins",
                es: "Hospitalidad",
                it: "Ospitalità",
                de: "Gastlichkeit",
                "zh-tw": "款待",
                "pt-br": "Hospitalidade"
            },
            effect: {
                en: "Once during your turn, when you put this Pokémon from your hand onto your Bench, you may heal 20 damage from your Active {G} Pokémon.",
                fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez soigner 20 dégâts de votre Pokémon {G} Actif.",
                es: "Una vez durante tu turno, cuando juegas este Pokémon de tu mano a tu Banca, puedes curar 20 puntos de daño a tu Pokémon {G} Activo.",
                "pt-br": "Uma vez durante o seu turno, quando você colocar este Pokémon da sua mão no seu Banco, você poderá curar 20 pontos de dano do seu Pokémon {G} Ativo.",
                "zh-tw": "在自己的回合,當從手牌將這張卡放置於備戰區時,可使用1次。將自己的戰鬥場的{G}寶可夢恢復20HP。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Grass"],
            name: {
                en: "Spray Fluid",
                fr: "Fluide Éclaboussant",
                es: "Fluido Rociado",
                it: "Fluido spray",
                de: "Sprühflüssigkeit",
                "pt-br": "Fluido Spray",
                "zh-tw": "噴汁"
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
