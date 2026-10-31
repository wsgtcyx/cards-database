import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/199",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/199",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/199",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/199",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/199",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/199",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4b/199",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4b/199",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4b/199"
    },
    name: {
        en: "Sudowoodo",
        "fr": "Simularbre",
        "es": "Sudowoodo",
        "it": "Sudowoodo",
        "de": "Mogelbaum",
        "pt-br": "Sudowoodo",
        "zh-tw": "樹才怪",
        ja: "ウソッキー",
        ko: "꼬지모",
    },
    illustrator: "Tomokazu Komiya",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fighting"],
    description: {
        en: "Although it always pretends to be a tree,\nits composition appears more similar to\nrock than to vegetation.",
        "fr": "Même s'il prétend toujours être un arbre,\nsa composition semble plus proche de\nla roche qu'à la végétation.",
        "es": "Aunque siempre finge ser un árbol,\nsu composición parece más similar a\nroca que a la vegetación.",
        "it": "Anche se finge sempre di essere un albero,\nla sua composizione appare più simile a\nroccia che alla vegetazione.",
        "de": "Obwohl es immer vorgibt, ein Baum zu sein,\nseine Zusammensetzung scheint ähnlicher zu sein\nFelsen als zur Vegetation.",
        "pt-br": "Embora sempre finja ser uma árvore,\nsua composição parece mais semelhante a\nrocha do que à vegetação.",
        "zh-tw": "雖然它總是假裝是一棵樹，\n它的組成看起來更類似於\n岩石比植被更重要。",
        ja: "いつも 木のふりを している。 体の つくりは 植物より 石や 岩などに 近いようだ。",
        ko: "항상 나무인 척하고 있다.\n몸의 구조는 식물보다\n돌이나 바위에 가까운 듯하다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Fighting Headbutt",
                "fr": "Combattre le coup de tête",
                "es": "Cabezazo de lucha",
                "it": "Combattere la testata",
                "de": "Kampf gegen den Kopfstoß",
                "pt-br": "Lutando cabeçada",
                "zh-tw": "格鬥頭撞",
                ja: "とうしのずつき",
                ko: "투지의박치기"
            },
            damage: "20+",
            cost: ["Fighting"],
            effect: {
                en: "If your opponent's Active Pokémon is a Pokémon ex, this attack does 30 more damage.",
                "fr": "Si le Pokémon Actif de votre adversaire est un ex Pokémon, cette attaque inflige 30 dégâts supplémentaires.",
                "es": "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 30 daños más.",
                "it": "Se il Pokémon attivo del tuo avversario è un Pokémon ex, questo attacco infligge 30 danni in più.",
                "de": "Wenn das Aktive Pokémon deines Gegners ein Pokémon-Ex ist, fügt dieser Angriff 30 weitere Schadenspunkte zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente for um Pokémon ex, este ataque causará 30 de dano a mais.",
                "zh-tw": "如果對手的現役神奇寶貝是前神奇寶貝，則此攻擊造成的傷害增加 30 點。",
                ja: "相手のバトルポケモンが「ポケモンex」なら、30ダメージ追加。",
                ko: "상대의 배틀 포켓몬이 「포켓몬 ex」라면 30데미지를 추가한다."
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
