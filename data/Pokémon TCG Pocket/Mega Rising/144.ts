import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Palossand",
        "fr": "Palosse",
        "es": "Palossand",
        "it": "Palossand",
        "de": "Palossand",
        "pt-br": "Palossand",
        "zh-tw": "帕羅桑"
    },
    illustrator: "Shibuzoh.",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Fighting"],
    evolveFrom: {
        en: "Sandygast",
        "fr": "Sandygast",
        "es": "sandygast",
        "it": "Sandygast",
        "de": "Sandygast",
        "pt-br": "Sandygast",
        "zh-tw": "桑迪加斯特"
    },
    description: {
        en: "From the hollows in its arms, it fires the bones\nof its victims, which are all dried up after being\ndrained of their vitality.",
        "fr": "Du creux de ses bras, il tire les os\nde ses victimes, qui sont toutes desséchées après avoir été\nvidés de leur vitalité.",
        "es": "Desde los huecos de sus brazos dispara los huesos.\nde sus víctimas, que están todas secas después de ser\ndrenado de su vitalidad.",
        "it": "Dalle cavità delle sue braccia, incendia le ossa\ndelle sue vittime, che dopo essere state tutte seccate\nprosciugati della loro vitalità.",
        "de": "Aus den Hohlräumen seiner Arme feuert es die Knochen ab\nseiner Opfer, die nach dem Sein alle ausgetrocknet sind\nihrer Lebenskraft beraubt.",
        "pt-br": "Das cavidades em seus braços, ele dispara os ossos\nde suas vítimas, que ficam todas secas depois de serem\ndrenados de sua vitalidade.",
        "zh-tw": "從手臂的空洞中，它發射骨頭\n它的受害者，在被吹乾後都乾了\n耗盡了他們的活力。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Life Sucker",
                "fr": "Suceur de vie",
                "es": "Lechón de vida",
                "it": "Succhiatore di vita",
                "de": "Lebenssauger",
                "pt-br": "Sugador de vida",
                "zh-tw": "生命吸盤"
            },
            damage: 70,
            cost: ["Fighting", "Fighting", "Colorless"],
            effect: {
                en: "Heal 20 damage from this Pokémon.",
                "fr": "Soignez 20 dégâts de ce Pokémon.",
                "es": "Cura 20 puntos de daño de este Pokémon.",
                "it": "Cura questo Pokémon da 20 danni.",
                "de": "Heile 20 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Cure 20 de dano deste Pokémon.",
                "zh-tw": "治療該神奇寶貝造成的 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 3
};
export default card;
