import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: { en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/090", fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/090", es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/090", it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/090", de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/090", "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-B/090", "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/090" },
    name: { en: "Wingull", fr: "Goélise", es: "Wingull", it: "Wingull", de: "Wingull", "pt-br": "Wingull", "zh-tw": "長翅鷗", ko: "갈모매", ja: "キャモメ" },
    illustrator: "Midori Harada",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    dexId: [278],
    stage: "Basic",
    description: { en: "It rides upon ocean winds as if it were a glider. In the winter, it hides food around its nest.", fr: "Il utilise les vents marins comme un planeur En hiver, il cache de la nourriture autour de son nid.", es: "Vuela y planea siguiendo la brisa marina. En invierno esconde comida cerca de su nido.", it: "Vola scivolando sulla brezza marina come un aliante. D'inverno, nasconde il cibo attorno al nido.", de: "Es nutzt den Seewind, um wie ein Segelflugzeug durch die Lüfte zu gleiten. Im Winter versteckt es Nahrung bei seinem Nest.", "pt-br": "Pega carona com os ventos oceânicos como se fosse um planador. No inverno, esconde alimento ao redor do seu ninho.", "zh-tw": "會迎著海風如滑翔機般滑翔。到了冬天就會將食物藏在巢的周圍。" },
    attacks: [{ cost: ["Colorless"], name: { en: "Flap", fr: "Battement", es: "Aleteo", it: "Alabattito", de: "Flattern", "pt-br": "Asa", "zh-tw": "羽擊" }, damage: 10 }],
    weaknesses: [{ type: "Lightning", value: "+20" }],
    retreat: 1,
    boosters: ["vol12"]
};

export default card;
