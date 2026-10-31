import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3a/071",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3a/071",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3a/071",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3a/071",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3a/071",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3a/071",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3a/071",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A3a/071",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A3a/071"
    },
    name: {
        en: "Pheromosa",
        "fr": "Cancrelove",
        "es": "Pheromosa",
        "it": "Pheromosa",
        "de": "Schabelle",
        "pt-br": "Pheromosa",
        "zh-tw": "費洛美螂",
        ja: "フェローチェ",
        ko: "페로코체",
    },
    illustrator: "matazo",
    rarity: "One Star",
    category: "Pokemon",
    hp: 70,
    types: ["Grass"],
    description: {
        en: "A life-form that lives in another world, its body\nis thin and supple, but it also possesses\ngreat power.",
        "fr": "Une forme de vie qui vit dans un autre monde, son corps\nest fin et souple, mais il possède aussi\ngrande puissance.",
        "es": "Una forma de vida que vive en otro mundo, su cuerpo.\nes delgado y flexible, pero también posee\ngran poder.",
        "it": "Una forma di vita che vive in un altro mondo, il suo corpo\nè sottile ed elastica, ma possiede anche\ngrande potere.",
        "de": "Eine Lebensform, die in einer anderen Welt lebt, ihrem Körper\nist dünn und geschmeidig, besitzt aber auch\ngroße Macht.",
        "pt-br": "Uma forma de vida que vive em outro mundo, seu corpo\né fino e flexível, mas também possui\ngrande poder.",
        "zh-tw": "生活在異世界的生命體，其身體\n薄而柔軟，但它還具有\n偉大的力量。",
        ja: "別世界に 棲む 生命体。 細く しなやかな 身体 だが 強いパワーを 秘めている 様子。",
        ko: "다른 세계에 사는 생명체다.\n가늘고 부드러운 몸이지만,\n강한 파워를 간직하고 있는 듯하다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Jump Blues",
                "fr": "Sauter le blues",
                "es": "Saltar blues",
                "it": "Salta il blues",
                "de": "Jump Blues",
                "pt-br": "Salto Azul",
                "zh-tw": "跳躍藍調",
                ja: "ジャンプブルース",
                ko: "점프블루스"
            },
            damage: 20,
            cost: ["Grass"],
            effect: {
                en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon.",
                "fr": "Cette attaque inflige également 20 dégâts à l'un des Pokémon de Banc de votre adversaire.",
                "es": "Este ataque también hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
                "it": "Questo attacco infligge anche 20 danni a 1 dei Pokémon nella panchina del tuo avversario.",
                "de": "Dieser Angriff fügt außerdem 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
                "zh-tw": "這次攻擊也會對對手後備的 1 只神奇寶貝造成 20 點傷害。",
                ja: "相手のベンチポケモン1匹にも20ダメージ。",
                ko: "상대의 벤치 포켓몬 1마리에게도 20데미지를 준다."
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
