import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/026",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/026",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/026",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/026",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/026",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/026",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2a/026",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2a/026",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2a/026"
    },
    name: {
        en: "Wugtrio",
        fr: "Triopikeau",
        es: "Wugtrio",
        it: "Wugtrio",
        de: "Schligdri",
        "pt-br": "Wugtrio",
        "zh-tw": "三海地鼠",
        ja: "ウミトリオ",
        ko: "바닥트리오",
        pt: "Wugtrio"
    },
    illustrator: "Kouki Saitou",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Water"],
    dexId: [961],
    evolveFrom: {
        en: "Wiglett",
        fr: "Taupikeau",
        es: "Wiglett",
        it: "Wiglett",
        de: "Schligda",
        "pt-br": "Wiglett",
        "zh-tw": "海地鼠",
        ja: "ウミディグダ",
        ko: "바다그다",
        pt: "Wiglett"
    },
    description: {
        en: "A variety of fish Pokémon, Wugtrio was once considered to be a regional form of Dugtrio.",
        "fr": "Variété de Pokémon Poisson, Triopikeau était autrefois considérée comme une forme régionale de Triopikeur.",
        "es": "Wugtrio, una variedad de Pokémon pez, alguna vez fue considerado una forma regional de Dugtrio.",
        "it": "Una varietà di Pokémon pesce, Wugtrio una volta era considerato una forma regionale di Dugtrio.",
        "de": "Schligdri, eine Art Fisch-Pokémon, galt einst als regionale Form von Digdri.",
        "pt-br": "Uma variedade de Pokémon peixes, Wugtrio já foi considerado uma forma regional de Dugtrio.",
        "zh-tw": "魚類寶可夢的變種，三海地鼠曾被認為是三地鼠的區域型態。",
        ja: "魚ポケモンの 一種。 ダグトリオの リージョンフォームと 考えられていたことも あった。",
        ko: "물고기포켓몬의 일종.\n닥트리오의 리전폼인 것으로\n여겨지던 시기도 있었다."
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Triple Whip",
                fr: "Triple Fouet",
                es: "Triple Latigazo",
                it: "Triplafrustata",
                de: "Tripelpeitsche",
                "pt-br": "Chicote Triplo",
                "zh-tw": "三重鞭子",
                ja: "さんれんのムチ",
                ko: "삼연속채찍",
                pt: "Chicote Triplo"
            },
            damage: "30×",
            cost: ["Water"],
            effect: {
                en: "Flip 3 coins. This attack does 30 damage for each heads.",
                fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
                es: "Lanza 3 monedas. Este ataque hace 30 puntos de daño por cada cara.",
                it: "Lancia tre volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
                de: "Wirf 3 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu.",
                "pt-br": "Jogue 3 moedas. Este ataque causa 30 de dano para cada cabeça.",
                "zh-tw": "翻轉 3 個硬幣。這次攻擊對每個頭造成 30 點傷害。",
                ja: "コインを3回投げ、オモテの数×30ダメージ。",
                ko: "동전을 3번 던져서 앞면이 나온 수 × 30데미지를 준다.",
                pt: "Jogue 3 moedas. Este ataque causa 30 pontos de dano para cada cara."
            },
        },
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
