import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/080/ee92566d3217a5b2",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/080/ee92566d3217a5b2",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/080/ee92566d3217a5b2",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/080/ee92566d3217a5b2",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/080/ee92566d3217a5b2",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/080/ee92566d3217a5b2",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/080/ee92566d3217a5b2",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/080/ee92566d3217a5b2",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/080/ee92566d3217a5b2"
    },
    name: {
        en: "Mega Houndoom ex", fr: "Méga-Démolosse-ex", es: "Mega-Houndoom ex", it: "Mega Houndoom-ex", de: "Mega-Hundemon-ex",
        "pt-br": "Mega Houndoom ex", "zh-tw": "超級黑魯加ex", ko: "메가헬가 ex", ja: "メガヘルガーex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 190,
    types: ["Fire"],
    dexId: [229],
    evolveFrom: {
        en: "Houndour", fr: "Malosse", es: "Houndour", it: "Houndour", de: "Hunduster",
        "pt-br": "Houndour", "zh-tw": "戴魯比", ko: "델빌", ja: "デルビル"
    },
    stage: "Stage1",
    attacks: [{
        cost: ["Colorless", "Fire", "Fire"],
        name: {
            en: "Grimhound Flare", fr: "Feu du Molosse Infernal", es: "Llamarada del Cerbero", it: "Fiammatetra del Segugio", de: "Schattenhund-Fackel",
            "pt-br": "Chama Malévola", "zh-tw": "地獄犬閃焰",
            ja: "ヘルハウンドフレア",
            ko: "헬하운드 플레어"
        },
        effect: {
            en: "Flip 3 coins. This attack does 80 damage for each heads.",
            fr: "Lancez 3 pièces. Cette attaque inflige 80 dégâts pour chaque côté face.",
            es: "Lanza 3 monedas. Este ataque hace 80 puntos de daño por cada cara.",
            it: "Lancia 3 volte una moneta. Questo attacco infligge 80 danni ogni volta che esce testa.",
            de: "Wirf 3 Münzen. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu.",
            "pt-br": "Jogue 3 moedas. Este ataque causa 80 pontos de dano para cada cara.",
            "zh-tw": "擲3次硬幣，造成正面出現的次數×80點傷害。",
            ja: "コインを3回投げ、オモテの数×80ダメージ。",
            ko: "동전을 3번 던져서 앞면이 나온 수 × 80데미지를 준다."
        },
        damage: "80×"
    }],
    weaknesses: [{ type: "Water", value: "+20" }],
    retreat: 2,
    boosters: ["vol11"]
};

export default card;
