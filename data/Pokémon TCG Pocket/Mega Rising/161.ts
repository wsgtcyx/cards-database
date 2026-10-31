import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/161",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/161",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/161",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/161",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/161",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/161",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/161",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/161",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/161"
    },
    name: {
        en: "Mareanie",
        "fr": "Vorastérie",
        "es": "Mareanie",
        "it": "Mareanie",
        "de": "Garstella",
        "pt-br": "Mareanie",
        "zh-tw": "好壞星",
        ja: "ヒドイデ",
        ko: "시마사리",
    },
    illustrator: "Aya Kusube",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    description: {
        en: "It has excellent regenerative capabilities. Legs\nthat a Mareanie has lost have a very bitter,\nastringent flavor—they're not suitable as food.",
        "fr": "Il possède d’excellentes capacités de régénération. Jambes\nqu'une Mareanie a perdu a un très amer,\nsaveur astringente – ils ne conviennent pas comme aliment.",
        "es": "Tiene excelentes capacidades regenerativas. Piernas\nque una Mareanie ha perdido tiene una muy amarga,\nsabor astringente: no son adecuados como alimento.",
        "it": "Ha eccellenti capacità rigenerative. Gambe\nche un Mareanie ha perso ha un sapore molto amaro,\nsapore astringente: non sono adatti come cibo.",
        "de": "Es verfügt über hervorragende Regenerationsfähigkeiten. Beine\nDass eine Mareanie verloren hat, hat einen sehr bitteren,\nadstringierender Geschmack – sie sind nicht als Lebensmittel geeignet.",
        "pt-br": "Possui excelentes capacidades regenerativas. Pernas\nque uma Mareanie perdeu é muito amarga,\nsabor adstringente - eles não são adequados como alimento.",
        "zh-tw": "它具有出色的再生能力。腿\nMareanie 失去了一個非常痛苦的人，\n味道澀，不適合作為食品。",
        ja: "再生力が とても 強い。 ちぎれた 脚は 苦味と 渋味が 強く 食材には むかない。",
        ko: "재생력이 매우 강하다.\n뜯어진 다리는 쓴맛과 떫은맛이 강해서\n식재료로는 적합하지 않다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Poison Sting",
                "fr": "Piqûre de poison",
                "es": "Picadura de veneno",
                "it": "Puntura di veleno",
                "de": "Giftstich",
                "pt-br": "Picada Venenosa",
                "zh-tw": "毒刺",
                ja: "どくばり",
                ko: "독침"
            },
            cost: ["Darkness"],
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Empoisonné.",
                "es": "El Pokémon Activo de tu rival ahora está Envenenado.",
                "it": "Il Pokémon attivo del tuo avversario ora è avvelenato.",
                "de": "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Envenenado.",
                "zh-tw": "你對手的主動神奇寶貝現在中毒了。",
                ja: "相手のバトルポケモンをどくにする。",
                ko: "상대의 배틀 포켓몬을 독으로 만든다."
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
	boosters: [
		"mega-altaria",
		"mega-blaziken",
		"mega-gyarados"
	]
};
export default card;
