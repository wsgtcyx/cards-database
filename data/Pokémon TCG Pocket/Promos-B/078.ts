import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/078/05306c1680bf1e9b",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/078/05306c1680bf1e9b",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/078/05306c1680bf1e9b",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/078/05306c1680bf1e9b",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/078/05306c1680bf1e9b",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/078/05306c1680bf1e9b",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/078/05306c1680bf1e9b",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/078/05306c1680bf1e9b",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/078/05306c1680bf1e9b"
    },
    name: {
        en: "Emolga",
        fr: "Emolga",
        es: "Emolga",
        it: "Emolga",
        de: "Emolga",
        "pt-br": "Emolga",
        "zh-tw": "電飛鼠",
        ko: "에몽가",
        ja: "エモンガ"
    },
    illustrator: "Akira Komayama",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Lightning"],
    dexId: [587],
    stage: "Basic",
    description: {
        en: "This Pokémon absolutely loves sweet berries. Sometimes it stuffs its cheeks full of so much food that it can’t fly properly.",
        fr: "Les Baies sucrées sont son péché mignon.\nIl lui arrive d’en conserver beaucoup trop dans\nses bajoues, ce qui l’empêche de bien planer.",
        es: "Le encantan las bayas dulces. A veces almacena\ntanta comida en los carrillos que no puede volar\nbien.",
        it: "Va ghiotto di bacche dolci. A volte accumula\ntroppo cibo nelle guance e fa fatica a volare.",
        de: "Emolga liebt süße Beeren. Manchmal hortet es\nso viel Futter in seinen Backentaschen, dass es\nnicht mehr richtig fliegen kann.",
        "pt-br": "Esse Pokémon adora frutas doces. Às vezes, ele fica com as bochechas tão cheias de comida que mal consegue voar direito.",
        "zh-tw": "最喜歡甜甜的樹果。有時會\n因為在頰囊裡儲存了太多食物，\n結果讓自己無法好好飛行。",
        ja: "甘い 木の実が 大好物。 頬袋に エサを 溜めすぎ うまく 飛べないときも ある。",
        ko: "달콤한 나무열매를 매우 좋아한다.\n볼주머니에 먹이를 너무 많이 넣어\n잘 날지 못할 때도 있다."
    },
    attacks: [
        {
            cost: ["Lightning", "Lightning"],
            name: {
                en: "Windup Thunder",
                fr: "Tonnerre Mécanique",
                es: "Trueno a Cuerda",
                it: "Tuono Caricato",
                de: "Aufziehdonner",
                "pt-br": "Trovão de Corda",
                "zh-tw": "機關閃電",
                ja: "からくりサンダー",
                ko: "기계장치썬더"
            },
            effect: {
                en: "This attack does 30 damage for each Pokémon Tool attached to all of your Pokémon.",
                fr: "Cette attaque inflige 30 dégâts pour chaque Outil Pokémon attaché à tous vos Pokémon.",
                es: "Este ataque hace 30 puntos de daño por cada Herramienta Pokémon unida a todos tus Pokémon.",
                it: "Questo attacco infligge 30 danni per ogni carta Oggetto Pokémon assegnata ai tuoi Pokémon.",
                de: "Diese Attacke fügt für jede an alle deine Pokémon angelegte Pokémon-Ausrüstung 30 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 30 pontos de dano para cada Ferramenta Pokémon ligada a todos os seus Pokémon.",
                "zh-tw": "造成自己的所有寶可夢身上的「寶可夢道具」卡的數量×30點傷害。",
                ja: "自分のポケモン全員の「ポケモンのどうぐ」の数×30ダメージ。",
                ko: "자신의 포켓몬 전원의 「포켓몬의 도구」의 수 × 30데미지를 준다."
            },
            damage: "30x"
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: []
};

export default card;
