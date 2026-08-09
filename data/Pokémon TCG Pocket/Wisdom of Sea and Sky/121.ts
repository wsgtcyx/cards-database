import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/121",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/121",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/121",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/121",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/121",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/121",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/121"
    },
    name: {
        en: "Forretress",
        "fr": "Foretress",
        "es": "Forretress",
        "it": "Forretress",
        "de": "Forstellka",
        "pt-br": "Forretress",
        "zh-tw": "佛烈托斯",
    },
    illustrator: "Tomokazu Komiya",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Metal"],
    evolveFrom: {
        en: "Pineco",
        "fr": "Pomdepik",
        "es": "Pineco",
        "it": "Pineco",
        "de": "Tannza",
        "pt-br": "Pineco",
        "zh-tw": "榛果球",
    },
    description: {
        en: "It remains immovably rooted to its tree. It scatters\npieces of its hard shell to drive its enemies away.",
        "fr": "Il reste immobile enraciné à son arbre. Il se disperse\ndes morceaux de sa carapace dure pour chasser ses ennemis.",
        "es": "Permanece inamoviblemente arraigado a su árbol. Se dispersa\npedazos de su duro caparazón para ahuyentar a sus enemigos.",
        "it": "Rimane inamovibilmente radicato al suo albero. Si disperde\npezzi del suo duro guscio per scacciare i suoi nemici.",
        "de": "Es bleibt unbeweglich mit seinem Baum verwurzelt. Es zerstreut\nTeile seiner harten Schale, um seine Feinde zu vertreiben.",
        "pt-br": "Permanece firmemente enraizado em sua árvore. Ele se espalha\npedaços de sua casca dura para afastar seus inimigos.",
        "zh-tw": "它仍然牢牢地紮根於樹上。它散開\n其堅硬的外殼碎片可以驅趕敵人。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Shell Crash",
                "fr": "Crash d'obus",
                "es": "Accidente de caparazón",
                "it": "Crash della conchiglia",
                "de": "Shell-Absturz",
                "pt-br": "Quebra de concha",
                "zh-tw": "外殼碰撞"
            },
            damage: 80,
            cost: ["Metal", "Metal", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 3,
    boosters: ["ho-oh", "lugia"]
};
export default card;
