import { Card } from "../../../interfaces";
import Set from "../Shining Revelry";
const card: Card = {
    set: Set,
    name: {
        en: "Bibarel ex",
        fr: "Castorno-ex",
        es: "Bibarel ex",
        it: "Bibarel-ex",
        de: "Bidifas-ex",
        'pt-br': "Bibarel ex",
        ko: "비버통 ex",
        "zh-tw": "比巴雷爾EX"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 160,
    types: ["Colorless"],
    evolveFrom: {
        en: "Bidoof",
        "fr": "Bidoof",
        "es": "Bidoof",
        "it": "Bidoof",
        "de": "Bidoof",
        "pt-br": "Bidoof",
        "zh-tw": "比杜夫"
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Carefree Press",
                fr: "Pression Insouciante",
                es: "Presión Despreocupada",
                it: "Pressa Spensierata",
                de: "Entspannter Druck",
                'pt-br': "Aperto Despreocupado",
                ko: "유유자적 프레스",
                "zh-tw": "無憂出版社"
            },
            damage: 100,
            cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
            effect: {
                en: "Heal 30 damage from this Pokémon.",
                fr: "Soignez 30 dégâts de ce Pokémon.",
                es: "Cura 30 puntos de daño a este Pokémon.",
                it: "Cura questo Pokémon da 30 danni.",
                de: "Heile 30 Schadenspunkte bei diesem Pokémon.",
                'pt-br': "Cure 30 pontos de dano deste Pokémon.",
                ko: "이 포켓몬의 HP를 30회복.",
                "zh-tw": "治療該神奇寶貝造成的 30 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 3
};
export default card;
