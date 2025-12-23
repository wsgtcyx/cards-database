import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Houndoom",
        "fr": "Démolosse",
        "es": "Houndoom",
        "it": "Houndoom",
        "de": "Hundemon",
        "pt-br": "Houndoom",
        "zh-tw": "黑魯加"
    },
    illustrator: "Midori Harada",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Fire"],
    evolveFrom: {
        en: "Houndour",
        "fr": "Malosse",
        "es": "Houndour",
        "it": "Houndour",
        "de": "Hunduster",
        "pt-br": "Houndour",
        "zh-tw": "戴魯比"
    },
    description: {
        en: "Upon hearing its eerie howls, other Pokémon get\nthe shivers and head straight back to their nests.",
        "fr": "En entendant ses hurlements étranges, d'autres Pokémon\nles frissons et retournent directement à leurs nids.",
        "es": "Al escuchar sus espeluznantes aullidos, otros Pokémon se asustan.\nlos escalofríos y regresan directamente a sus nidos.",
        "it": "Dopo aver sentito i suoi ululati inquietanti, altri Pokémon ottengono\ni brividi e tornano dritti ai loro nidi.",
        "de": "Als sie sein unheimliches Heulen hören, werden andere Pokémon erschrocken\ndie Schauer und kehren direkt zu ihren Nestern zurück.",
        "pt-br": "Ao ouvir seus uivos misteriosos, outros Pokémon ficam\nos arrepios e voltam direto para seus ninhos.",
        "zh-tw": "當其他神奇寶貝聽到它怪異的嚎叫聲時\n瑟瑟發抖，徑直返回自己的巢穴。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Sharp Fang",
                "fr": "Croc acéré",
                "es": "Colmillo afilado",
                "it": "Zanna affilata",
                "de": "Scharfer Fangzahn",
                "pt-br": "Presa Afiada",
                "zh-tw": "尖牙"
            },
            damage: 50,
            cost: ["Fire"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1
};
export default card;
