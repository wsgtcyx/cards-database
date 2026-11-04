import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/039/95cce9a7975b60fc",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/039/95cce9a7975b60fc",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/039/95cce9a7975b60fc",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/039/95cce9a7975b60fc",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/039/95cce9a7975b60fc",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/039/95cce9a7975b60fc",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/039/95cce9a7975b60fc",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/039/95cce9a7975b60fc",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/039/95cce9a7975b60fc"
    },
    name: {
        en: "Skarmory",
        fr: "Airmure",
        es: "Skarmory",
        it: "Skarmory",
        de: "Panzaeron",
        'pt-br': "Skarmory",
        ja: "エアームド",
        ko: "무장조",
        "zh-tw": "盔甲鳥",
    },
    illustrator: "Anesaki Dynamic",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Metal"],
    description: {
        en: "People fashion swords from Skarmory's shed\nfeathers, so this Pokémon is a popular element\nin heraldic designs.",
        fr: "Ce Pokémon orne souvent les blasons, car les plumes\nqu'il perd sont utilisées pour forger des épées.",
        es: "Aparece a menudo en escudos heráldicos, pues se\npueden forjar espadas a partir de las plumas que pierde.",
        it: "Le piume perse da Skarmory sono utilizzate\nper produrre spade. Per questo è molto\napprezzato come motivo degli stemmi nobiliari.",
        de: "Es wird gern als Vorlage für Wappenmotive\ngenutzt, da aus den Federn, die ihm ausfallen,\nSchwerter hergestellt werden.",
        'pt-br': "As pessoas forjam espadas com as penas que caíram\nde Skarmory, por isso, a imagem deste Pokémon é\num elemento popular em brasões.",
        ja: "抜け落ちた 羽根から 剣が 作られることから 紋章の 図案として 人気が 高い。",
        ko: "빠진 깃털로 검을\n만들 수 있어서 문장\n도안으로 인기가 많다.",
        "zh-tw": "由於牠脫落下來的羽毛能夠製成劍，因此作為家徽的圖案也很有人氣。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Metal Arms",
                fr: "Bras Métalliques",
                es: "Extremidades Metálicas",
                it: "Arti Metallici",
                de: "Metallarme",
                'pt-br': "Braços Metálicos",
                ja: "メタルアームズ",
                ko: "메탈암즈",
                "zh-tw": "金屬武裝"
            },
            damage: "20+",
            cost: ["Metal"],
            effect: {
                en: "If this Pokémon has a Pokémon Tool attached, this attack does 30 more damage.",
                fr: "Si un Outil Pokémon est attaché à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires.",
                es: "Si este Pokémon tiene 1 Herramienta Pokémon unida a él, este ataque hace 30 puntos de daño más.",
                it: "Se questo Pokémon ha un Oggetto Pokémon assegnato, questo attacco infligge 30 danni in più.",
                de: "Wenn an dieses Pokémon 1 Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 30 Schadenspunkte mehr zu.",
                'pt-br': "Se este Pokémon tiver uma Ferramenta Pokémon ligada a ele, este ataque causará 30 pontos de dano a mais.",
                ja: "このポケモンに「ポケモンのどうぐ」がついているなら、30ダメージ追加。",
                ko: "이 포켓몬에게 「포켓몬의 도구」가 붙어 있다면 30데미지를 추가한다.",
                "zh-tw": "若這隻寶可夢身上附有「寶可夢道具」,則增加30點傷害。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["vol4"]
};
export default card;
