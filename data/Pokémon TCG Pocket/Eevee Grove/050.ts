import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Melmetal",
        "fr": "Melmétal",
        "es": "Melmetal",
        "it": "Melmetal",
        "de": "Melmetal",
        "pt-br": "Melmetálico",
        "zh-tw": "美錄梅塔",
    },
    illustrator: "NC Empire",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Metal"],
    evolveFrom: {
        en: "Meltan",
        "fr": "Meltan",
        "es": "Meltán",
        "it": "Meltano",
        "de": "Meltan",
        "pt-br": "Meltan",
        "zh-tw": "美錄坦",
    },
    description: {
        en: "At the end of its life-span, Melmetal will rust and\nfall apart. The small shards left behind will\neventually be reborn as Meltan.",
        "fr": "À la fin de sa durée de vie, Melmetal rouillera et\ns'effondrer. Les petits fragments laissés derrière\nrenaîtra finalement sous le nom de Meltan.",
        "es": "Al final de su vida útil, Melmetal se oxidará y\ndesmoronarse. Los pequeños fragmentos que queden\neventualmente renacerá como Meltan.",
        "it": "Alla fine della sua vita, Melmetal si arrugginisce e\ncadere a pezzi. I piccoli frammenti lasciati lo faranno\nalla fine rinascerà come Meltan.",
        "de": "Am Ende seiner Lebensdauer wird Melmetal rosten und\nauseinanderfallen. Die kleinen Scherben, die zurückbleiben, werden es tun\nschließlich als Meltan wiedergeboren werden.",
        "pt-br": "No final da sua vida útil, o Melmetal enferrujará e\ndesmoronar. Os pequenos fragmentos deixados para trás\neventualmente renascer como Meltan.",
        "zh-tw": "在其使用壽命結束時，Melmetal 會生鏽並\n分崩離析。留下的小碎片會\n最終重生為美錄坦。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Mega Punch",
                "fr": "Méga coup de poing",
                "es": "Mega puñetazo",
                "it": "Megapugno",
                "de": "Mega-Schlag",
                "pt-br": "Mega Soco",
                "zh-tw": "超級沖床"
            },
            damage: 90,
            cost: ["Metal", "Metal", "Metal"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 4
};
export default card;
