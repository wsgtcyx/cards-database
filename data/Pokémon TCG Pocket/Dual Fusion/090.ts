import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/090",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/090",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/090",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/090",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/090",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/090",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/090"
    },
    name: {
        en: "Thievul",
        fr: "Roublenard",
        es: "Thievul",
        "pt-br": "Thievul",
        "zh-tw": "狐大盜",
        ja: "フォクスライ",
        ko: "폭슬라이",
        it: "Thievul",
        de: "Gaunux"
    },
    illustrator: "SIE NANAHARA",
    rarity: "Two Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 100,
    types: [
        "Darkness"
    ],
    stage: "Stage1",
    retreat: 1,
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Nickit",
        fr: "Goupilou",
        es: "Nickit",
        it: "Nickit",
        de: "Kleptifux",
        "pt-br": "Nickit",
        "zh-tw": "偷兒狐",
        ja: "Nickit",
        ko: "Nickit"
    },
    attacks: [
        {
            name: {
                en: "Claw Slash",
                fr: "Tranch'Griffe",
                es: "Cuchillada Garra",
                it: "Lacerartigli",
                de: "Klauenschlitzer",
                "pt-br": "Golpe de Garra",
                "zh-tw": "利爪劈擊",
                ja: "Claw Slash",
                ko: "Claw Slash"
            },
            cost: [
                "Darkness",
                "Darkness"
            ],
            damage: 70
        }
    ],
    abilities: [],
    description: {
        en: "It secretly marks potential targets with a scent. By following the scent, it stalks its targets and steals from them when they least expect it.",
        fr: "Il marque sa victime potentielle à l’odeur. Suivant qu’elle est distraite, il s’empresse de lui voler ses biens.",
        es: "Marca a su presa sin ser advertido. Sigue el olor y, cuando el otro Pokémon baja la guardia, aprovecha para robarle.",
        it: "Marca di nascosto le prede interessanti, ne segue l’odore per rintracciarle e approfitta di una loro distrazione per rubare nelle loro tane.",
        de: "Es markiert heimlich die Beute, auf die es ein Auge geworfen hat. Dann folgt es dem Geruch und stiehlt sie, wenn sich die Gelegenheit bietet.",
        "pt-br": "Usa um odor para marcar suas possíveis vítimas. Depois, fareja-as e rouba seus pertences quando elas menos esperam.",
        "zh-tw": "會偷偷在看中的獵物身上留下標記，追蹤目標的氣味，在對方放鬆警戒時偷盜。",
        ja: "It secretly marks potential targets with a scent. By following the scent, it stalks its targets and steals from them when they least expect it.",
        ko: "It secretly marks potential targets with a scent. By following the scent, it stalks its targets and steals from them when they least expect it."
    }
};

export default card;
