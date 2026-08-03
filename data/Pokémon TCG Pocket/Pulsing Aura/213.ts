import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/213",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/213",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/213",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/213",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/213",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/213",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/213"
    },
    name: {
        en: "Golbat",
        fr: "Nosferalto",
        es: "Golbat",
        it: "Golbat",
        de: "Golbat",
        "pt-br": "Golbat",
        "zh-tw": "大嘴蝠",
        ko: "골뱃",
        ja: "ゴルバット"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 80,
    types: ["Darkness"],
    dexId: [42],
    evolveFrom: {
        en: "Zubat",
        fr: "Nosferapti",
        es: "Zubat",
        it: "Zubat",
        de: "Zubat",
        "pt-br": "Zubat",
        "zh-tw": "超音蝠",
        ko: "주뱃",
        ja: "ズバット"
    },
    stage: "Stage1",
    description: {
        en: "Its feet are tiny, but this Pokémon walks skillfully. It sneaks up on sleeping prey before sinking in its fangs and slurping up blood.",
        fr: "Il se déplace habilement sur ses petites pattes,\ns’approche silencieusement de sa proie endormie,\net lui suce le sang à l’aide de ses crocs.",
        es: "Camina con soltura sobre sus pequeñas patas. Se\nacerca con sigilo a su presa mientras esta duerme\ny le clava los colmillos para chuparle la sangre.",
        it: "Cammina agilmente con i piccoli piedi.\nSi avvicina di soppiatto alle prede addormentate\nper azzannarle e berne il sangue.",
        de: "Golbat kann trotz seiner kleinen Beine geschickt\nlaufen. Es schleicht sich an schlafende Beute an,\nstößt seine Zähne in sie und schlürft ihr Blut.",
        "pt-br": "Seus pés são minúsculos, mas este Pokémon anda com habilidade. Ele se aproxima sorrateiramente de uma presa adormecida antes de afundar em suas presas e sugar sangue.",
        "zh-tw": "能以小小的腳靈巧地步行。\n會無聲無息地靠近沉睡中的獵物，\n用獠牙咬住對方並且吸食血液。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Cutting Wind",
                fr: "Vent Glacial",
                es: "Viento Helado",
                it: "Vento Tagliente",
                de: "Schneidender Wind",
                "pt-br": "Vento Dilacerante",
                "zh-tw": "利刃之風"
            },
            damage: 40
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
