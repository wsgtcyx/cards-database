import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4a/006",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4a/006",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4a/006",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4a/006",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4a/006",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4a/006",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4a/006",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4a/006",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4a/006"
    },
    name: {
        en: "Celebi",
        "fr": "Celebi",
        "es": "Celebi",
        "it": "Celebi",
        "de": "Celebi",
        "pt-br": "Celebi",
        "zh-tw": "時拉比",
        ja: "セレビィ",
        ko: "세레비",
    },
    illustrator: "Yuu Nishida",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Grass"],
    description: {
        en: "This Pokémon wanders across time. Grass and trees\nflourish in the forests in which it has appeared.",
        "fr": "Ce Pokémon erre dans le temps. Herbe et arbres\nprospérer dans les forêts dans lesquelles il est apparu.",
        "es": "Este Pokémon viaja a través del tiempo. Hierba y árboles\nflorecer en los bosques en los que ha aparecido.",
        "it": "Questo Pokémon vaga nel tempo. Erba e alberi\nfiorire nelle foreste in cui è apparso.",
        "de": "Dieses Pokémon wandert durch die Zeit. Gras und Bäume\ngedeihen in den Wäldern, in denen es aufgetaucht ist.",
        "pt-br": "Este Pokémon vagueia no tempo. Grama e árvores\nflorescer nas florestas em que apareceu.",
        "zh-tw": "這只神奇寶貝穿越時空。草和樹\n在它出現的森林中繁盛。",
        ja: "時間を超えて あちこち さまよう。 セレビィが 姿を 現した 森は 草木が 生い茂るという。",
        ko: "시간을 넘어 여기저기를 방황한다.\n세레비가 모습을 나타낸\n숲은 초목이 무성해진다고 한다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Temporal Leaves",
                "fr": "Feuilles temporelles",
                "es": "Hojas Temporales",
                "it": "Foglie temporali",
                "de": "Temporale Blätter",
                "pt-br": "Folhas Temporais",
                "zh-tw": "顳葉",
                ja: "ときのこのは",
                ko: "시간의나뭇잎"
            },
            damage: 40,
            cost: ["Grass", "Grass"],
            effect: {
                en: "If your opponent's Active Pokémon is an evolved Pokémon, devolve it by putting the highest Stage Evolution card on it into your opponent's hand.",
                "fr": "Si le Pokémon Actif de votre adversaire est un Pokémon évolué, transférez-le en mettant la carte d'Évolution la plus élevée sur lui dans la main de votre adversaire.",
                "es": "Si el Pokémon Activo de tu oponente es un Pokémon evolucionado, transmítelo poniendo la carta de Etapa de Evolución más alta en la mano de tu oponente.",
                "it": "Se il Pokémon attivo del tuo avversario è un Pokémon evoluto, devoluzione mettendo la carta Evoluzione di Fase più alta nella mano del tuo avversario.",
                "de": "Wenn das Aktive Pokémon deines Gegners ein entwickeltes Pokémon ist, devolviere es, indem du die Karte mit der höchsten Entwicklungsstufe darauf auf die Hand deines Gegners nimmst.",
                "pt-br": "Se o Pokémon Ativo do seu oponente for um Pokémon evoluído, devolva-o colocando a carta de Evolução de Estágio mais alta dele na mão do seu oponente.",
                "zh-tw": "如果對手的活躍寶可夢是進化寶可夢，則將其進化階段最高的卡放入對手手牌，將其移交。",
                ja: "相手の進化しているバトルポケモンから、「進化カード」を1枚はがして退化させる。はがしたカードは、相手の手札にもどす。",
                ko: "상대의 진화한 배틀 포켓몬으로부터 「진화카드」를 1장 떼어내서 퇴화시킨다. 떼어낸 카드는 상대의 패로 되돌린다."
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
