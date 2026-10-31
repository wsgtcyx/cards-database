import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/029",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/029",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/029",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/029",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/029",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/029",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/029",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4/029",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4/029"
    },
    name: {
        en: "Typhlosion",
        "fr": "Typhlosion",
        "es": "Typhlosion",
        "it": "Typhlosion",
        "de": "Tornupto",
        "pt-br": "Typhlosion",
        "zh-tw": "火爆獸",
        ja: "バクフーン",
        ko: "블레이범",
    },
    illustrator: "Hideki Ishikawa",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Fire"],
    evolveFrom: {
        en: "Quilava",
        "fr": "Feurisson",
        "es": "Quilava",
        "it": "Quilava",
        "de": "Igelavar",
        "pt-br": "Quilava",
        "zh-tw": "火岩鼠",
        ja: "マグマラシ",
        ko: "마그케인",
    },
    description: {
        en: "If its rage peaks, it becomes so hot that anything\nthat touches it will instantly go up in flames.",
        "fr": "Si sa rage atteint son paroxysme, il devient si chaud que tout\nqui le touche s’enflammera instantanément.",
        "es": "Si su furia alcanza su punto máximo, se vuelve tan caliente que cualquier cosa\nque lo toque arderá instantáneamente en llamas.",
        "it": "Se la sua rabbia raggiunge il picco, diventa così caldo che qualsiasi cosa\nchi lo tocca andrà immediatamente in fiamme.",
        "de": "Wenn seine Wut ihren Höhepunkt erreicht, wird es so heiß, dass nichts mehr passiert\nWer es berührt, geht sofort in Flammen auf.",
        "pt-br": "Se a sua raiva atingir o pico, fica tão quente que qualquer coisa\nque o tocar irá pegar fogo instantaneamente.",
        "zh-tw": "如果它的憤怒達到頂峰，它會變得如此灼熱，以至於任何東西\n觸碰到它就會立刻燃燒起來。",
        ja: "怒りが 最高潮のとき 触ったもの すべて 一瞬で 燃え上がらせるほどに 熱い。",
        ko: "분노가 정점에 달했을 때\n건드린 자를 모두 순식간에\n불태워 버릴 정도로 뜨겁다."
    },
    stage: "Stage2",
    abilities: [{
            type: "Ability",
            name: {
                en: "Fire Breath",
                "fr": "Souffle de feu",
                "es": "Aliento de fuego",
                "it": "Respiro di fuoco",
                "de": "Feueratem",
                "pt-br": "Sopro de Fogo",
                "zh-tw": "火息",
                ja: "バーニングブレス",
                ko: "버닝브레스"
            },
            effect: {
                en: "Once during your turn, you may make your opponent's Active Pokémon Burned.",
                "fr": "Une fois pendant votre tour, vous pouvez faire brûler le Pokémon Actif de votre adversaire.",
                "es": "Una vez durante tu turno, puedes hacer quemar el Pokémon Activo de tu rival.",
                "it": "Una sola volta durante il tuo turno, puoi far bruciare il Pokémon attivo del tuo avversario.",
                "de": "Einmal während deines Zuges kannst du das Aktive Pokémon deines Gegners verbrennen lassen.",
                "pt-br": "Uma vez durante o seu turno, você pode fazer com que o Pokémon Ativo do seu oponente seja Queimado.",
                "zh-tw": "在你的回合中，你可以使對手的活躍寶可夢燃燒一次。",
                ja: "自分の番に1回使える。相手のバトルポケモンをやけどにする。",
                ko: "자신의 차례에 1번 사용할 수 있다. 상대의 배틀 포켓몬을 화상으로 만든다."
            }
        }],
    attacks: [{
            name: {
                en: "Magma Punch",
                "fr": "Coup de poing magmatique",
                "es": "Puñetazo de magma",
                "it": "Pugno di magma",
                "de": "Magma-Schlag",
                "pt-br": "Soco de Magma",
                "zh-tw": "岩漿沖床",
                ja: "マグマパンチ",
                ko: "마그마펀치"
            },
            damage: 60,
            cost: ["Fire", "Fire"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["lugia"]
};
export default card;
