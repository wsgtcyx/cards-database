import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/094",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/094",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/094",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/094",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/094",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/094",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/094"
    },
    name: {
        en: "Mightyena",
        fr: "Grahyèna",
        es: "Mightyena",
        it: "Mightyena",
        de: "Magnayen",
        "pt-br": "Mightyena",
        "zh-tw": "大狼犬",
        ko: "그라에나",
        ja: "グラエナ"
    },
    illustrator: "Aya Kusube",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Darkness"],
    dexId: [262],
    evolveFrom: {
        en: "Poochyena",
        fr: "Medhyèna",
        es: "Poochyena",
        it: "Poochyena",
        de: "Fiffyen",
        "pt-br": "Poochyena",
        "zh-tw": "土狼犬",
        ko: "포챠나",
        ja: "ポチエナ"
    },
    stage: "Stage1",
    description: {
        en: "Once it's caught the scent of faraway prey, the leader gives a sign, and its whole pack moves out.",
        fr: "Quand des Grahyèna flairent l'odeur d'une proie lointaine, toute leur meute se met en mouvement sous les ordres du chef.",
        es: "Cuando detectan el olor de una presa lejana, toda la jauría se pone en movimiento a las órdenes del líder.",
        it: "Quando fiuta l'odore di una preda in lontananza, il branco si muove unito seguendo gli ordini del capobranco.",
        de: "Sobald es Beute in großer Entfernung wittert, setzt sich das gesamte Rudel auf Befehl des Anführers hin sofort in Bewegung.",
        "pt-br": "Assim que sente o cheiro de uma presa distante, o líder dá um sinal e todo o bando parte em busca dela.",
        "zh-tw": "當嗅到遠處有獵物的氣味，\n就會聽從領頭者吼叫的指示，\n一起展開行動。"
    },
    attacks: [
        {
            cost: ["Darkness"],
            name: {
                en: "Bite",
                fr: "Morsure",
                es: "Mordisco",
                it: "Morso",
                de: "Biss",
                "pt-br": "Mordida",
                "zh-tw": "咬住"
            },
            damage: 50
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
