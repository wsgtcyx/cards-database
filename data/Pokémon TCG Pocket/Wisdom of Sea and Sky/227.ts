import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Nidorino",
        "fr": "Nidorino",
        "es": "nidorino",
        "it": "Nidorino",
        "de": "Nidorino",
        "pt-br": "Nidorino",
        "zh-tw": "尼多里諾"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 90,
    types: ["Darkness"],
    evolveFrom: {
        en: "Nidoran♂",
        "fr": "Nidoran♂",
        "es": "Nidoran♂",
        "it": "Nidoran♂",
        "de": "Nidoran♂",
        "pt-br": "Nidoran♂",
        "zh-tw": "尼多蘭♂"
    },
    description: {
        en: "With a horn that's harder than diamond, this\nPokémon goes around shattering boulders as it\nsearches for a moon stone.",
        "fr": "Avec une corne plus dure que le diamant, ce\nPokémon contourne les rochers en brisant\ncherche une pierre de lune.",
        "es": "Con un cuerno que es más duro que el diamante, este\nPokémon anda rompiendo rocas mientras\nbusca una piedra lunar.",
        "it": "Con un corno più duro del diamante, questo\nI Pokémon vanno in giro frantumando i massi\ncerca una pietra di luna.",
        "de": "Mit einem Horn, das härter als Diamant ist\nPokémon geht umher und zerschmettert dabei Felsbrocken\nsucht nach einem Mondstein.",
        "pt-br": "Com um chifre mais duro que o diamante, este\nPokémon anda quebrando pedras enquanto\nprocura por uma pedra da lua.",
        "zh-tw": "擁有比鑽石還硬的號角，這\n神奇寶貝四處走動，粉碎巨石\n尋找月光石。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Horn Attack",
                "fr": "Attaque de corne",
                "es": "Ataque de cuerno",
                "it": "Attacco di corno",
                "de": "Hornangriff",
                "pt-br": "Ataque de chifre",
                "zh-tw": "號角攻擊"
            },
            damage: 40,
            cost: ["Darkness", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["ho-oh"]
};
export default card;
