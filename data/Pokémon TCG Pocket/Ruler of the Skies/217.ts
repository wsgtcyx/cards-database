import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/217"
    },
    name: {
        en: "Weezing",
        fr: "Smogogo",
        es: "Weezing",
        it: "Weezing",
        de: "Smogmog",
        "pt-br": "Weezing",
        "zh-tw": "雙彈瓦斯",
        ko: "또도가스",
        ja: "マタドガス"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 110,
    types: ["Darkness"],
    dexId: [110],
    evolveFrom: {
        en: "Koffing",
        fr: "Smogo",
        es: "Koffing",
        it: "Koffing",
        de: "Smogon",
        "pt-br": "Koffing",
        "zh-tw": "瓦斯彈",
        ko: "또가스",
        ja: "ドガース"
    },
    stage: "Stage1",
    description: {
        en: "When it inhales poisonous gases from garbage, its body expands, and its insides smell much worse.",
        fr: "Lorsqu’il inhale les gaz toxiques des déchets, son corps se dilate et son intérieur sent bien pire.",
        es: "Cuando inhala los gases venenosos de la basura, su cuerpo se expande y su interior huele mucho peor.",
        it: "Quando inala gas velenosi dalla spazzatura, il suo corpo si espande e il suo interno ha un odore molto peggiore.",
        de: "Wenn es giftige Gase aus dem Müll einatmet, dehnt sich sein Körper aus und sein Inneres riecht viel schlimmer.",
        "pt-br": "Quando inala gases venenosos do lixo, seu corpo se expande e seu interior cheira muito pior.",
        "zh-tw": "當它吸入垃圾中的有毒氣體時，它的身體會膨脹，裡面的氣味也會變得更難聞。"
    },
    attacks: [
        {
            cost: ["Darkness", "Darkness"],
            name: {
                en: "Sludge Bomb",
                fr: "Bombe Beurk",
                es: "Bomba Lodo",
                it: "Fangobomba",
                de: "Matschbombe",
                "pt-br": "Bomba de Lodo",
                "zh-tw": "污泥炸彈"
            },
            damage: 70
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
