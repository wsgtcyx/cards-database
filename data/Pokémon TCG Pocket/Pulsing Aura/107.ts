import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/107",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/107"
    },
    name: {
        en: "Foongus",
        fr: "Trompignon",
        es: "Foongus",
        it: "Foongus",
        de: "Tarnpignon",
        "pt-br": "Foongus",
        "zh-tw": "哎呀球菇",
        ko: "깜놀버슬",
        ja: "タマゲタケ"
    },
    illustrator: "Saya Tsuruta",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    dexId: [590],
    stage: "Basic",
    description: {
        en: "This Pokémon prefers damp places. It spurts out poison spores to repel approaching enemies.",
        fr: "Ce Pokémon préfère les endroits humides. Il projette des spores empoisonnées pour repousser les ennemis qui s'approchent.",
        es: "Este Pokémon prefiere los lugares húmedos. Lanza esporas de veneno para repeler a los enemigos que se acercan.",
        it: "Questo Pokémon preferisce i luoghi umidi. Emette spore velenose per respingere i nemici in avvicinamento.",
        de: "Dieses Pokémon bevorzugt feuchte Orte. Es stößt Giftsporen aus, um sich nähernde Feinde abzuwehren.",
        "pt-br": "Este Pokémon prefere lugares úmidos. Ele jorra esporos venenosos para repelir os inimigos que se aproximam.",
        "zh-tw": "該寶可夢喜歡潮濕的地方。它會噴出有毒孢子來擊退接近的敵人。"
    },
    attacks: [
        {
            cost: ["Darkness"],
            name: {
                en: "Ram",
                fr: "Collision",
                es: "Apisonar",
                it: "Carica",
                de: "Ramme",
                "pt-br": "Aríete",
                "zh-tw": "衝撞"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
