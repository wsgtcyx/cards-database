import { Card } from "../../../interfaces";
import Set from "../Promos-C";

const card: Card = {
    set: Set,
    name: {
        en: "Stantler",
        fr: "Cerfrousse",
        es: "Stantler",
        it: "Stantler",
        de: "Damhirplex",
        "pt-br": "Stantler",
        "zh-tw": "驚角鹿",
        ja: "オドシシ",
        ko: "노라키"
    },
    illustrator: "OKACHEKE",
    rarity: "One Star",
    category: "Pokemon",
    hp: 80,
    types: [
        "Colorless"
    ],
    description: {
        en: "This Pokémon apparently used to live in much harsher environments, and thus it once had stronger psychic powers than it does now.",
        fr: "Il paraît qu'autrefois, il était doté de plus grands pouvoirs psychiques, car il vivait dans un environnement hostile.",
        es: "Antaño habitaba en entornos inhóspitos, por lo que sus poderes psíquicos eran supuestamente más potentes aún que en la actualidad.",
        it: "Pare che in passato vivesse in ambienti estremamente inospitali, e per questo avesse poteri psichici ancora più potenti di adesso.",
        de: "Da dieses Pokémon einst in einer unwirtlichen Umgebung lebte, verfügte es damals offenbar über stärkere Psycho-Kräfte als heutzutage.",
        "pt-br": "Aparentemente, este Pokémon vivia em ambientes muito mais hostis. Por isso, seus poderes psíquicos já foram muito mais fortes do que hoje.",
        "zh-tw": "過去生活在嚴苛的環境下，因此當時的精神力量似乎比現在還要強。",
        ja: "昔は 過酷な 環境で 暮らしていたため 今よりも サイコパワーが 強かったらしい。",
        ko: "옛날에는 가혹한 환경에서 살았기 때문에 오늘날보다도 사이코 파워가 강력했다고 전해진다."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Enhanced Horns",
                fr: "Cornes Améliorées",
                es: "Cuernos Mejorados",
                it: "Supercorna",
                de: "Spezial-Hörner",
                "pt-br": "Chifres Acentuados",
                "zh-tw": "強化角擊",
                ja: "きょうかホーン",
                ko: "강화호른"
            },
            cost: [
                "Colorless",
                "Colorless"
            ],
            damage: "20+",
            effect: {
                en: "If this Pokémon has a Pokémon Tool attached, this attack does 50 more damage.",
                fr: "Si un Outil Pokémon est attaché à ce Pokémon, cette attaque inflige 50 dégâts supplémentaires.",
                es: "Si este Pokémon tiene 1 Herramienta Pokémon unida a él, este ataque hace 50 puntos de daño más.",
                it: "Se questo Pokémon ha un Oggetto Pokémon assegnato, questo attacco infligge 50 danni in più.",
                de: "Wenn an dieses Pokémon 1 Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 50 Schadenspunkte mehr zu.",
                "pt-br": "Se este Pokémon tiver uma Ferramenta Pokémon ligada a ele, este ataque causará 50 pontos de dano a mais.",
                "zh-tw": "若這隻寶可夢身上附有「寶可夢道具」,則增加50點傷害。",
                ja: "このポケモンに「ポケモンのどうぐ」がついているなら、50ダメージ追加。",
                ko: "이 포켓몬에게 「포켓몬의 도구」가 붙어 있다면 50데미지를 추가한다."
            }
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: [],
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-C/010/99a2f238deb454ea",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-C/010/99a2f238deb454ea",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-C/010/99a2f238deb454ea",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-C/010/99a2f238deb454ea",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-C/010/99a2f238deb454ea",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-C/010/99a2f238deb454ea",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-C/010/99a2f238deb454ea",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-C/010/99a2f238deb454ea",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-C/010/99a2f238deb454ea"
    }
};

export default card;
