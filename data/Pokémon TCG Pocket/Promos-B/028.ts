import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/028/9367e880b6209e43",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/028/9367e880b6209e43",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/028/9367e880b6209e43",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/028/9367e880b6209e43",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/028/9367e880b6209e43",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/028/9367e880b6209e43",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/028/9367e880b6209e43",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/028/9367e880b6209e43",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/028/9367e880b6209e43"
    },
    name: {
        en: "Ralts",
        fr: "Tarsal",
        es: "Ralts",
        it: "Ralts",
        de: "Trasla",
        "pt-br": "Ralts",
        "zh-tw": "拉魯拉絲",
        ko: "랄토스",
        ja: "ラルトス"
    },
    illustrator: "Hajime Kusajima",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    dexId: [280],
    stage: "Basic",
    description: {
        en: "It is highly attuned to the emotions of people and Pokémon. It hides if it senses hostility.",
        fr: "Très sensible aux émotions des êtres humains et des Pokémon, il se cache au moindre signe d'hostilité.",
        es: "Capta muy bien lo que sienten las personas y\nlos Pokémon. Cuando nota cierta hostilidad, se\nesconde.",
        it: "È molto sensibile all'umore delle persone e degli altri Pokémon. Non appena avverte ostilità, si nasconde subito nell'ombra.",
        de: "Es hat ein feines Gespür für die Gefühle der\nMenschen und Pokémon. Wenn es Feindseligkeit\nwahrnimmt, versteckt es sich.",
        "pt-br": "Está altamente sintonizado com as emoções das pessoas e Pokémon. Esconde-se se pressentir hostilidade.",
        "zh-tw": "能敏銳地感知人和寶可夢\n的感情。一旦感受到敵意\n就會躲進暗處。",
        ja: "人や ポケモンの 感情を 敏感に キャッチ。敵意を 感じると 物陰に 隠れる。",
        ko: "사람이나 포켓몬의 감정을\n민감하게 캐치한다.\n적의가 느껴지면 그늘로 숨는다."
    },
    attacks: [
        {
            cost: ["Psychic"],
            name: {
                en: "Draining Kiss",
                fr: "Vampibaiser",
                es: "Beso Drenaje",
                it: "Assorbibacio",
                de: "Diebeskuss",
                "pt-br": "Beijo Drenante",
                "zh-tw": "吸取之吻",
                ja: "ドレインキッス",
                ko: "드레인키스"
            },
            effect: {
                en: "Heal 10 damage from this Pokémon.",
                fr: "Soignez 10 dégâts de ce Pokémon.",
                es: "Cura 10 puntos de daño a este Pokémon.",
                it: "Cura questo Pokémon da 10 danni.",
                de: "Heile 10 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Cure 10 pontos de dano deste Pokémon.",
                "zh-tw": "將這隻寶可夢恢復10HP。",
                ja: "このポケモンのHPを10回復。",
                ko: "이 포켓몬의 HP를 10회복."
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol4"]
};

export default card;
