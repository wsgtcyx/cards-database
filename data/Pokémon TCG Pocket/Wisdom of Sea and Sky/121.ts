import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Forretress",
        "fr": "Forteresse",
        "es": "fortaleza",
        "it": "Fortezza",
        "de": "Festung",
        "pt-br": "Fortaleza",
        "zh-tw": "佛烈托斯",
    },
    illustrator: "Tomokazu Komiya",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Metal"],
    evolveFrom: {
        en: "Pineco",
        "fr": "Pinéco",
        "es": "pineco",
        "it": "Pineco",
        "de": "Pineco",
        "pt-br": "Pinho",
        "zh-tw": "松果"
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
