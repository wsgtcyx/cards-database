import { Card } from "../../../interfaces";
import Set from "../Promos-C";

const card: Card = {
    set: Set,
    name: {
        en: "Mega Mewtwo Y ex",
        fr: "Méga-Mewtwo Y-ex",
        es: "Mega-Mewtwo Y ex",
        it: "Mega Mewtwo Y-ex",
        de: "Mega-Mewtu Y-ex",
        "pt-br": "Mega Mewtwo Y ex",
        "zh-tw": "超級超夢Yex",
        ja: "メガミュウツーYex",
        ko: "메가뮤츠Y ex"
    },
    illustrator: "PLANETA Yamashita",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 170,
    types: [
        "Psychic"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Psychic Blaster",
                fr: "Explosif Psy",
                es: "Psicoestruendo",
                "pt-br": "Disparador Psíquico",
                "zh-tw": "超能爆破",
                ja: "サイキックブラスター",
                ko: "사이킥 블래스터",
                de: "Psycho-Blaster",
                it: "Detonazione Psichica"
            },
            cost: [
                "Psychic",
                "Psychic"
            ],
            damage: "60x",
            effect: {
                en: "Flip a coin for each {P} Energy attached to this Pokémon. This attack does 60 damage for each heads.",
                fr: "Lancez une pièce pour chaque Énergie {P} attachée à ce Pokémon. Cette attaque inflige 60 dégâts pour chaque côté face.",
                es: "Lanza 1 moneda por cada Energía {P} unida a este Pokémon. Este ataque hace 60 puntos de daño por cada cara.",
                "pt-br": "Jogue uma moeda para cada Energia de {P} ligada a este Pokémon. Este ataque causa 60 pontos de dano para cada cara.",
                "zh-tw": "以這隻寶可夢身上的{P}能量的數量擲硬幣,造成正面出現的次數×60點傷害。",
                ja: "このポケモンの{P}エネルギーの数ぶんコインを投げ、オモテの数×60ダメージ。",
                ko: "이 포켓몬의 {P}에너지의 개수만큼 동전을 던져서 앞면이 나온 수 × 60데미지를 준다.",
                de: "Wirf 1 Münze für jede an dieses Pokémon angelegte {P}-Energie. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu.",
                it: "Lancia una moneta per ogni Energia {P} assegnata a questo Pokémon. Questo attacco infligge 60 danni ogni volta che esce testa."
            }
        }
    ],
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-C/002/fbefab510313dc84",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-C/002/fbefab510313dc84",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-C/002/fbefab510313dc84",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-C/002/fbefab510313dc84",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-C/002/fbefab510313dc84",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-C/002/fbefab510313dc84",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-C/002/fbefab510313dc84",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-C/002/fbefab510313dc84",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-C/002/fbefab510313dc84"
    }
};

export default card;
