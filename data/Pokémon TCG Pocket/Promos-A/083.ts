import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-A/083",
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-A/083",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-A/083",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-A/083",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-A/083",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-A/083",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/083",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/P-A/083",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/P-A/083"
    },
    name: {
        en: "Stufful",
        es: "Stufful",
        "fr": "Nounourson",
        "it": "Stufful",
        "de": "Velursi",
        "pt-br": "Stufful",
        "zh-tw": "童偶熊",
        ja: "ヌイコグマ",
        ko: "포곰곰",
    },
    illustrator: "Kanako Eo",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Colorless"],
    description: {
        en: "Its fluffy fur is a delight to pet, but carelessly reaching out\nto touch this Pokémon could result in painful retaliation.",
        es: "Su suave pelaje invita a acariciarlo, pero quien cometa\nsemejante temeridad recibirá un severo escarmiento.",
        "fr": "Sa fourrure duveteuse est un plaisir à caresser, mais à tendre la main avec insouciance\ntoucher ce Pokémon pourrait entraîner des représailles douloureuses.",
        "it": "La sua soffice pelliccia è un piacere da accarezzare, ma si allunga con noncuranza\ntoccare questo Pokémon potrebbe provocare dolorose ritorsioni.",
        "de": "Es ist eine Freude, sein flauschiges Fell zu streicheln, wenn man es jedoch achtlos ausstreckt\nDas Berühren dieses Pokémon könnte zu einer schmerzhaften Vergeltung führen.",
        "pt-br": "Seu pelo fofo é uma delícia para acariciar, mas estende a mão descuidadamente\ntocar neste Pokémon pode resultar em retaliação dolorosa.",
        "zh-tw": "它蓬鬆的皮毛讓寵物很高興，但不小心伸出手\n觸摸這只神奇寶貝可能會導致痛苦的報復。",
        ja: "ふわふわの 毛並みは 触り心地が 抜群だが うかつに 手を だすと 手痛い 反撃を 受けてしまう。",
        ko: "푹신푹신한 털은 감촉이\n뛰어나지만 섣불리 손을 댔다간\n호되게 반격을 당하고 만다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Ram",
                es: "Apisonar",
                "fr": "Bélier",
                "it": "Ram",
                "de": "RAM",
                "pt-br": "Bater",
                "zh-tw": "內存",
                ja: "ぶつかる",
                ko: "부딪치기"
            },
            damage: 40,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2,
    boosters: []
};
export default card;
