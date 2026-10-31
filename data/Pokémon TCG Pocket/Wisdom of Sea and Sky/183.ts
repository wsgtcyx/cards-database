import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/183",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/183",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/183",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/183",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/183",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/183",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/183",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4/183",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4/183"
    },
    name: {
        en: "Stantler",
        "fr": "Cerfrousse",
        "es": "Stantler",
        "it": "Stantler",
        "de": "Damhirplex",
        "pt-br": "Stantler",
        "zh-tw": "驚角鹿",
        ja: "オドシシ",
        ko: "노라키",
    },
    illustrator: "Noriaki Tanimura",
    rarity: "One Star",
    category: "Pokemon",
    hp: 80,
    types: ["Colorless"],
    description: {
        en: "This Pokémon apparently used to live in much\nharsher environments, and thus it once had\nstronger psychic powers than it does now.",
        "fr": "Ce Pokémon vivait apparemment dans de nombreux\ndes environnements plus difficiles, et donc il avait autrefois\ndes pouvoirs psychiques plus forts qu'aujourd'hui.",
        "es": "Al parecer, este Pokémon solía vivir en muchas\nentornos más duros y, por lo tanto, alguna vez tuvo\npoderes psíquicos más fuertes que los que tiene ahora.",
        "it": "Sembra che questo Pokémon vivesse in molte zone\nambienti più difficili, come accadeva una volta\npoteri psichici più forti di quelli attuali.",
        "de": "Dieses Pokémon lebte offenbar früher in vielen Gegenden\nraueren Umgebungen, und so war es auch einmal\nstärkere psychische Kräfte als jetzt.",
        "pt-br": "Este Pokémon aparentemente vivia em muito\nambientes mais severos e, portanto, já teve\npoderes psíquicos mais fortes do que agora.",
        "zh-tw": "這只神奇寶貝顯然曾經生活在很多地方\n環境更加惡劣，因此它曾經有過\n比現在更強的精神力量。",
        ja: "昔は 過酷な 環境で 暮らしていたため 今よりも サイコパワーが 強かったらしい。",
        ko: "옛날에는 가혹한 환경에서 살았기 때문에\n오늘날보다도 사이코 파워가\n강력했다고 전해진다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Enhanced Horns",
                "fr": "Cornes améliorées",
                "es": "Cuernos mejorados",
                "it": "Corni migliorati",
                "de": "Verbesserte Hörner",
                "pt-br": "Chifres aprimorados",
                "zh-tw": "增強號角",
                ja: "きょうかホーン",
                ko: "강화호른"
            },
            damage: "20+",
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "If this Pokémon has a Pokémon Tool attached, this attack does 50 more damage.",
                "fr": "Si ce Pokémon est attaché à un Outil Pokémon, cette attaque inflige 50 dégâts supplémentaires.",
                "es": "Si este Pokémon tiene una Herramienta Pokémon adjunta, este ataque hace 50 puntos de daño más.",
                "it": "Se questo Pokémon ha un Oggetto Pokémon assegnato, questo attacco infligge 50 danni in più.",
                "de": "Wenn an dieses Pokémon ein Pokémon-Werkzeug angelegt ist, fügt dieser Angriff 50 weitere Schadenspunkte zu.",
                "pt-br": "Se este Pokémon tiver uma Ferramenta Pokémon anexada, este ataque causará 50 de dano a mais.",
                "zh-tw": "如果該神奇寶貝附加了神奇寶貝工具，則此攻擊造成的傷害增加 50 點。",
                ja: "このポケモンに「ポケモンのどうぐ」がついているなら、50ダメージ追加。",
                ko: "이 포켓몬에게 「포켓몬의 도구」가 붙어 있다면 50데미지를 추가한다."
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
