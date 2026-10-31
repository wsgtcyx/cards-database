import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/084",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/084",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/084",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/084",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/084",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/084",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/084",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2/084",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2/084"
    },
    name: {
        en: "Medicham",
        "fr": "Charmina",
        "es": "Medicham",
        "it": "Medicham",
        "de": "Meditalis",
        "pt-br": "Medicham",
        "zh-tw": "恰雷姆",
        ja: "チャーレム",
        ko: "요가램"
    },
    illustrator: "Shigenori Negishi",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fighting"],
    evolveFrom: {
        en: "Meditite",
        "fr": "Méditikka",
        "es": "Meditite",
        "it": "Meditite",
        "de": "Meditie",
        "pt-br": "Meditite",
        "zh-tw": "瑪沙那",
        ja: "アサナン",
        ko: "요가랑"
    },
    description: {
        en: "It elegantly avoids attacks with dance-like\nsteps, then launches a devastating blow in\nthe same motion.",
        "fr": "Il évite élégamment les attaques avec des mouvements de danse\nétapes, puis lance un coup dévastateur dans\nle même mouvement.",
        "es": "Evita elegantemente los ataques con movimientos parecidos a los de un baile.\npasos, luego lanza un golpe devastador en\nel mismo movimiento.",
        "it": "Evita elegantemente gli attacchi con una danza\npassi, poi sferra un colpo devastante\nlo stesso movimento.",
        "de": "Es vermeidet elegant tänzerisch Angriffe\nSchritte, dann führt er einen verheerenden Schlag aus\ndie gleiche Bewegung.",
        "pt-br": "Ele elegantemente evita ataques com movimentos de dança\npassos, então lança um golpe devastador em\no mesmo movimento.",
        "zh-tw": "它以舞蹈般的方式優雅地躲避攻擊\n步，然後發動毀滅性的打擊\n同一個動作。",
        ja: "ダンスの ような 優雅な 動きで 攻撃を 交わして 強烈な 一撃を 相手に お見舞いする。",
        ko: "춤추는 듯한 우아한 움직임으로\n공격을 피하며 상대에게\n강력한 일격을 선사한다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Psykick",
                "fr": "Coup Psy",
                "es": "Psicopatada",
                "it": "Psichico",
                "de": "Psychokick",
                "pt-br": "Chute Psíquico",
                "zh-tw": "心靈踢球",
                ja: "サイコキック",
                ko: "사이코킥"
            },
            damage: "50+",
            cost: ["Fighting", "Colorless"],
            effect: {
                en: "If this Pokémon has any {P} Energy attached, this attack does 50 more damage.",
                "fr": "Si ce Pokémon a une Énergie {P} attachée, cette attaque inflige 50 dégâts supplémentaires.",
                "es": "Si este Pokémon tiene alguna Energía {P} unida, este ataque hace 50 puntos de daño más.",
                "it": "Se questo Pokémon ha delle Energie {P} assegnate, questo attacco infligge 50 danni in più.",
                "de": "Wenn an dieses Pokémon {P}-Energie angelegt ist, fügt dieser Angriff 50 weitere Schadenspunkte zu.",
                "pt-br": "Se este Pokémon tiver alguma Energia {P} anexada, este ataque causará 50 de dano a mais.",
                "zh-tw": "如果這只神奇寶貝附加了任何{P}能量，則該攻擊造成的傷害增加 50 點。",
                ja: "このポケモンに{P}エネルギーがついているなら、50ダメージ追加。",
                ko: "이 포켓몬에게 {P}에너지가 붙어 있다면 50데미지를 추가한다."
            }
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 1
};
export default card;
