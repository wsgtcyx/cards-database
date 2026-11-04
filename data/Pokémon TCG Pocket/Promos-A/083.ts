import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/083/16cb9c93da7bdba9",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/083/16cb9c93da7bdba9",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/083/16cb9c93da7bdba9",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/083/16cb9c93da7bdba9",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/083/16cb9c93da7bdba9",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/083/16cb9c93da7bdba9",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/083/16cb9c93da7bdba9",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/083/16cb9c93da7bdba9",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/083/16cb9c93da7bdba9"
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
        "fr": "Sa fourrure duveteuse est très agréable à caresser, mais ceux qui la touchent sans prévenir s'exposent à une correction brutale.",
        "it": "Il suo soffice manto è molto piacevole da accarezzare, ma se lo si sfiora inavvertitamente si rischia di venire attaccati.",
        "de": "Sein Pelz ist wunderbar flauschig. Wagt man es jedoch, diesen zu berühren, setzt es sich ohne Rücksicht auf Verluste zur Wehr.",
        "pt-br": "O seu pelo fofinho é uma delícia de acariciar, mas tocá-lo sem muito cuidado pode resultar em uma retaliação dolorosa.",
        "zh-tw": "毛茸茸的毛皮摸起來觸感超群，但粗心大意地向牠伸出手的人基本上都會遭到牠的劇烈反擊。",
        ja: "ふわふわの 毛並みは 触り心地が 抜群だが うかつに 手を だすと 手痛い 反撃を 受けてしまう。",
        ko: "푹신푹신한 털은 감촉이\n뛰어나지만 섣불리 손을 댔다간\n호되게 반격을 당하고 만다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Ram",
                es: "Apisonar",
                "fr": "Collision",
                "it": "Carica",
                "de": "RAM",
                "pt-br": "Aríete",
                "zh-tw": "衝撞",
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
