import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/018/c3e25f0eab208a86",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/018/c3e25f0eab208a86",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/018/c3e25f0eab208a86",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/018/c3e25f0eab208a86",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/018/c3e25f0eab208a86",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/018/c3e25f0eab208a86",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/018/c3e25f0eab208a86",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/018/c3e25f0eab208a86",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/018/c3e25f0eab208a86"
    },
    name: {
        en: "Venusaur",
        fr: "Florizarre",
        es: "Venusaur",
        it: "Venusaur",
        de: "Bisaflor",
        'pt-br': "Venusaur",
        ja: "フシギバナ",
        ko: "이상해꽃",
        "zh-tw": "妙蛙花",
    },
    illustrator: "Kuroimori",
    rarity: "One Star",
    category: "Pokemon",
    types: ["Grass"],
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Mega Drain",
                fr: "Méga-Sangsue",
                es: "Megaagotar",
                it: "Megassorbimento",
                de: "Megasauger",
                'pt-br': "Megadreno",
                ja: "メガドレイン",
                ko: "메가드레인",
                "zh-tw": "超級吸取"
            },
            cost: ["Grass", "Grass", "Colorless", "Colorless"],
            damage: 80,
            effect: {
                en: "Heal 30 damage from this Pokémon.",
                fr: "Soignez 30 dégâts de ce Pokémon.",
                es: "Cura 30 puntos de daño a este Pokémon.",
                it: "Cura questo Pokémon da 30 danni.",
                de: "Heile 30 Schadenspunkte bei diesem Pokémon.",
                'pt-br': "Cure 30 pontos de dano deste Pokémon.",
                ja: "このポケモンのHPを30回復。",
                ko: "이 포켓몬의 HP를 30회복.",
                "zh-tw": "將這隻寶可夢恢復30HP。"
            }
        }],
    hp: 160,
    evolveFrom: {
        en: "Ivysaur",
        "fr": "Herbizarre",
        "es": "Ivysaur",
        "it": "Ivysaur",
        "de": "Bisaknosp",
        "pt-br": "Ivysaur",
        "zh-tw": "妙蛙草",
        ja: "フシギソウ",
        ko: "이상해풀"
    },
    description: {
        en: "Its plant blooms when it is absorbing solar\nenergy. It stays on the move to seek sunlight.",
        fr: "Sa plante donne une grosse fleur quand\nelle absorbe les rayons du soleil. Il est toujours\nà la recherche des endroits les plus ensoleillés.",
        es: "La planta florece cuando absorbe energía solar,\nlo cual le obliga a buscar siempre la luz del sol.",
        it: "Il fiore sboccia assorbendo energia solare.\nSi muove continuamente in cerca di luce.",
        de: "Es nutzt Solarenergie als Nahrung und\nbringt so seine große Blume zum Blühen.\nEs geht dorthin, wo die Sonne scheint.",
        'pt-br': "Sua planta floresce ao absorver energia solar,\npor isso este Pokémon vive em busca da luz do sol.",
        ja: "太陽エネルギーを 栄養にして 大きな花が 開く。 日なたに 引き寄せられるように 移動する。",
        ko: "태양에너지를 양분으로\n큰 꽃을 피운다. 양지를 향해\n이끌려가듯이 이동한다.",
        "zh-tw": "把太陽的能源當成養分，開出碩大的花朵。總是朝著有陽光的地方移動。"
    },
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 3,
    boosters: ["vol2"]
};
export default card;
