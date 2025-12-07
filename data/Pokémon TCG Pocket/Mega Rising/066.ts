import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Tirtouga",
        "fr": "Tirtouga",
        "es": "Tirtuga",
        "it": "Tirtouga",
        "de": "Tirtouga",
        "pt-br": "Tirtouga",
        "zh-tw": "原蓋海龜",
    },
    illustrator: "HYOGONOSUKE",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Water"],
    evolveFrom: {
        en: "Cover Fossil",
        "fr": "Couverture Fossile",
        "es": "Cubrir Fósil",
        "it": "Copertina Fossile",
        "de": "Fossil abdecken",
        "pt-br": "Capa Fóssil",
        "zh-tw": "背蓋化石",
    },
    description: {
        en: "Tirtouga is considered to be the ancestor of\nmany turtle Pokémon. It was restored to life\nfrom a fossil.",
        "fr": "Tirtouga est considéré comme l'ancêtre de\nde nombreux Pokémon tortue. Il a repris vie\nà partir d'un fossile.",
        "es": "Tirtouga es considerado el antepasado de\nMuchos Pokémon tortuga. Fue devuelto a la vida\nde un fósil.",
        "it": "Tirtouga è considerato l'antenato di\nmolti Pokémon tartaruga. È stato riportato in vita\nda un fossile.",
        "de": "Tirtouga gilt als der Vorfahre von\nviele Schildkröten-Pokémon. Es wurde wieder zum Leben erweckt\naus einem Fossil.",
        "pt-br": "Tirtouga é considerado o ancestral de\nmuitos Pokémon tartaruga. Foi restaurado à vida\nde um fóssil.",
        "zh-tw": "蒂爾圖加 (Tirtouga) 被認為是\n許多烏龜神奇寶貝。它又恢復了生機\n來自化石。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Shell Attack",
                "fr": "Attaque d'obus",
                "es": "Ataque de proyectil",
                "it": "Attacco con proiettili",
                "de": "Granatenangriff",
                "pt-br": "Ataque de concha",
                "zh-tw": "砲彈攻擊"
            },
            damage: 50,
            cost: ["Water", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2
};
export default card;
