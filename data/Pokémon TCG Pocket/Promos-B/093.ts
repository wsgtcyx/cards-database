import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: { en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/093", fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/093", es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/093", it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/093", de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/093", "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-B/093", "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/093" },
    name: { en: "Fennekin", fr: "Feunnec", es: "Fennekin", it: "Fennekin", de: "Fynx", "pt-br": "Fennekin", "zh-tw": "火狐狸", ko: "푸호꼬", ja: "フォッコ" },
    illustrator: "Kanako Eo",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fire"],
    dexId: [653],
    stage: "Basic",
    description: { en: "Twigs make for Fennekin's snacks. When it nibbles on twigs, it finds the courage to face strong foes.", fr: "Il adore manger des brindilles en guise de collation. En grignoter une lui donne le courage d'affronter des adversaires redoutables.", es: "Las ramitas son como un aperitivo para Fennekin. Al mordisquearlas, se arma de valor para plantar cara a enemigos temibles.", it: "I ramoscelli sono il suo spuntino preferito. Sgranocchiarli gli infonde il coraggio di affrontare i nemici più forti.", de: "Zweige sind ein Snack für Fynx. Wenn es auf ihnen herumkaut, fasst es den Mut, sich starken Gegnern entgegenzustellen.", "pt-br": "Galhos servem de lanche para Fennekin. Quando mastiga esses galhos, toma coragem para enfrentar inimigos fortes.", "zh-tw": "小樹枝是火狐狸的零食。卡滋卡滋地啃著啃著就會湧出對抗強敵的勇氣。" },
    attacks: [{ cost: ["Colorless"], name: { en: "Scratch", fr: "Griffe", es: "Arañazo", it: "Graffio", de: "Kratzer", "pt-br": "Arranhão", "zh-tw": "抓" }, damage: 10 }],
    weaknesses: [{ type: "Water", value: "+20" }],
    retreat: 1,
    boosters: []
};

export default card;
