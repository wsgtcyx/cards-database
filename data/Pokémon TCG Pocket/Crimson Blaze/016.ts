import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1a/016",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1a/016",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1a/016",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1a/016",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1a/016",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1a/016",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1a/016",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1a/016",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1a/016"
    },
    name: {
        en: "Houndoom",
        "fr": "Démolosse",
        "es": "Houndoom",
        "it": "Houndoom",
        "de": "Hundemon",
        "pt-br": "Houndoom",
        "zh-tw": "黑魯加",
        ja: "ヘルガー",
        ko: "헬가"
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
        "zh-tw": "戴魯比",
        ja: "デルビル",
        ko: "델빌"
    },
    description: {
        en: "Upon hearing its eerie howls, other Pokémon get\nthe shivers and head straight back to their nests.",
        "fr": "En entendant ses hurlements étranges, d'autres Pokémon\nles frissons et retournent directement à leurs nids.",
        "es": "Al escuchar sus espeluznantes aullidos, otros Pokémon se asustan.\nlos escalofríos y regresan directamente a sus nidos.",
        "it": "Dopo aver sentito i suoi ululati inquietanti, altri Pokémon ottengono\ni brividi e tornano dritti ai loro nidi.",
        "de": "Als sie sein unheimliches Heulen hören, werden andere Pokémon erschrocken\ndie Schauer und kehren direkt zu ihren Nestern zurück.",
        "pt-br": "Ao ouvir seus uivos misteriosos, outros Pokémon ficam\nos arrepios e voltam direto para seus ninhos.",
        "zh-tw": "當其他神奇寶貝聽到它怪異的嚎叫聲時\n瑟瑟發抖，徑直返回自己的巢穴。",
        ja: "不気味な 遠吠えを 聞いた ポケモンは 震え 一目散に 自分の 巣に 戻る。",
        ko: "기분 나쁜 울음소리를 들은 포켓몬은\n겁이 나서 그대로 곧장\n자신의 둥지로 돌아간다."
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
                "zh-tw": "尖牙",
                ja: "するどいキバ",
                ko: "예리한이빨"
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
