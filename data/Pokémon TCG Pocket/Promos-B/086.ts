import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/086/14e7f559cd3104a0",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/086/14e7f559cd3104a0",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/086/14e7f559cd3104a0",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/086/14e7f559cd3104a0",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/086/14e7f559cd3104a0",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/086/14e7f559cd3104a0",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/086/14e7f559cd3104a0",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/086/14e7f559cd3104a0",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/086/14e7f559cd3104a0"
    },
    name: { en: "Beldum", fr: "Terhal", es: "Beldum", it: "Beldum", de: "Tanhel", "pt-br": "Beldum", "zh-tw": "鐵啞鈴", ko: "메탕", ja: "ダンバル" },
    illustrator: "Naoyo Kimura",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Metal"],
    dexId: [374],
    stage: "Basic",
    abilities: [{
        type: "Ability",
        name: { en: "Conductive Body", fr: "Corps Conducteur", es: "Cuerpo Conductor", it: "Corpo Conduttivo", de: "Leitender Körper", "pt-br": "Corpo Condutor", "zh-tw": "牽引身軀", ja: "ひきあうからだ", ko: "인력의 몸" },
        effect: {
            en: "If you have another Beldum in play, this Pokémon's Retreat Cost is 2 less.",
            fr: "Si vous avez un autre Terhal en jeu, le Coût de Retraite de ce Pokémon est diminué de 2.",
            es: "Si tienes otro Beldum en juego, el Coste de Retirada de este Pokémon es de 2 menos.",
            it: "Se hai un altro Beldum in gioco, il costo di ritirata di questo Pokémon è ridotto di 2.",
            de: "Wenn du ein weiteres Tanhel im Spiel hast, verringern sich die Rückzugskosten dieses Pokémon um 2.",
            "pt-br": "Se você tiver outro Beldum em jogo, o Custo de Recuo deste Pokémon será 2 a menos.",
            "zh-tw": "若自己的場上有其他的「鐵啞鈴」，則這隻寶可夢撤退所需的能量減少2個。",
            ja: "自分の場に別の「ダンバル」がいるなら、このポケモンのにげるためのエネルギーを、2個少なくする。",
            ko: "자신의 필드에 다른 「메탕」이 있다면 이 포켓몬의 후퇴에 필요한 에너지를 2개 적게 만든다."
        }
    }],
    attacks: [{
        cost: ["Metal"],
        name: { en: "Ram", fr: "Collision", es: "Apisonar", it: "Carica", de: "Ramme", "pt-br": "Aríete", "zh-tw": "衝撞", ja: "ぶつかる", ko: "부딪치기" },
        damage: 10
    }],
    weaknesses: [{ type: "Fire", value: "+20" }],
    retreat: 2,
    boosters: []
};

export default card;
