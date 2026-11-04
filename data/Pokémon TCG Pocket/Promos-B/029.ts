import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/029/9b619bd5ec992faa",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/029/9b619bd5ec992faa",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/029/9b619bd5ec992faa",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/029/9b619bd5ec992faa",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/029/9b619bd5ec992faa",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/029/9b619bd5ec992faa",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/029/9b619bd5ec992faa",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/029/9b619bd5ec992faa",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/029/9b619bd5ec992faa"
    },
    name: {
        en: "Mega Medicham ex",
        fr: "Méga-Charmina-ex",
        es: "Mega-Medicham ex",
        it: "Mega Medicham-ex",
        de: "Mega-Meditalis-ex",
        "pt-br": "Mega Medicham ex",
        "zh-tw": "超級恰雷姆ex",
        ko: "메가요가램 ex",
        ja: "メガチャーレムex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 180,
    types: ["Fighting"],
    dexId: [308],
    evolveFrom: {
        en: "Meditite",
        fr: "Méditikka",
        es: "Meditite",
        it: "Meditite",
        de: "Meditie",
        "pt-br": "Meditite",
        "zh-tw": "瑪沙那",
        ko: "요가랑",
        ja: "アサナン"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: ["Fighting", "Colorless", "Colorless"],
            name: {
                en: "Chakra Fist",
                fr: "Poing Chakra",
                es: "Puño Chakra",
                it: "Pugno Chakra",
                de: "Chakrafaust",
                "pt-br": "Punho de Chakra",
                "zh-tw": "脈輪拳",
                ja: "チャクラフィスト",
                ko: "차크라피스트"
            },
            effect: {
                en: "If this Pokémon has any {P} Energy attached, this attack does 40 more damage. This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
                fr: "Si de l'Énergie {P} est attachée à ce Pokémon, cette attaque inflige 40 dégâts supplémentaires. Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
                es: "Si este Pokémon tiene alguna Energía {P} unida a él, este ataque hace 40 puntos de daño más. El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
                it: "Se questo Pokémon ha delle Energie {P} assegnate, questo attacco infligge 40 danni in più. I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
                de: "Wenn an dieses Pokémon mindestens 1 {P}-Energie angelegt ist, fügt diese Attacke 40 Schadenspunkte mehr zu. Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert.",
                "pt-br": "Se este Pokémon tiver alguma Energia {P} ligada a ele, este ataque causará 40 pontos de dano a mais. O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
                "zh-tw": "若這隻寶可夢身上附有{P}能量,則增加40點傷害。這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。",
                ja: "このポケモンに{P}エネルギーがついているなら、40ダメージ追加。このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
                ko: "이 포켓몬에게 {P}에너지가 붙어 있다면 40데미지를 추가한다. 이 기술의 데미지는 상대의 배틀 포켓몬에게 걸려 있는 효과를 계산하지 않는다."
            },
            damage: "100+"
        }
    ],
    weaknesses: [
        {
            type: "Psychic",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol4"]
};

export default card;
