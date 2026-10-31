import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3a/099",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3a/099",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3a/099",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3a/099",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3a/099",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3a/099",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3a/099",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A3a/099",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A3a/099"
    },
    name: {
        en: "Celebi ex",
        "fr": "Celebi-ex",
        "es": "Celebi ex",
        "it": "Celebi-ex",
        "de": "Celebi-ex",
        "pt-br": "Celebi ex",
        "zh-tw": "時拉比ex",
        ja: "セレビィex",
        ko: "세레비 ex",
    },
    illustrator: "PLANETA CG Works",
    category: "Pokemon",
    hp: 130,
    types: ["Grass"],
    stage: "Basic",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Powerful Bloom",
                "fr": "Floraison puissante",
                "es": "Floración poderosa",
                "it": "Fioritura potente",
                "de": "Kraftvolle Blüte",
                "pt-br": "Flor poderosa",
                "zh-tw": "強力綻放",
                ja: "パワフルブルーム",
                ko: "파워풀블룸"
            },
            damage: "50×",
            cost: ["Grass", "Colorless"],
            effect: {
                en: "Flip a coin for each Energy attached to this Pokémon. This attack does 50 damage for each heads.",
                "fr": "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 50 dégâts pour chaque tête.",
                "es": "Lanza una moneda por cada Energía unida a este Pokémon. Este ataque hace 50 daños por cada cabeza.",
                "it": "Lancia una moneta per ogni Energia assegnata a questo Pokémon. Questo attacco infligge 50 danni per ogni testa.",
                "de": "Wirf eine Münze für jede an dieses Pokémon angelegte Energie. Dieser Angriff verursacht 50 Schaden pro Kopf.",
                "pt-br": "Jogue uma moeda para cada Energia ligada a este Pokémon. Este ataque causa 50 de dano para cada cabeça.",
                "zh-tw": "為該神奇寶貝所附加的每個能量拋一枚硬幣。這次攻擊對每個頭造成 50 點傷害。",
                ja: "このポケモンのエネルギーの数ぶんコインを投げ、オモテの数×50ダメージ。",
                ko: "이 포켓몬의 에너지의 개수만큼 동전을 던져서 앞면이 나온 수 × 50데미지를 준다."
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
    rarity: "Two Shiny"
};
export default card;
