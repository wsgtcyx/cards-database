import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/055",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/055"
    },
    name: {
        en: "Fraxure",
        fr: "Incisache",
        es: "Fraxure",
        it: "Fraxure",
        de: "Sharfax",
        "pt-br": "Fraxure",
        "zh-tw": "斧牙龍",
        ko: "액슨도",
        ja: "オノンド"
    },
    illustrator: "Hataya",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Dragon"],
    dexId: [611],
    evolveFrom: {
        en: "Axew",
        fr: "Coupenotte",
        es: "Axew",
        it: "Axew",
        de: "Milza",
        "pt-br": "Axew",
        "zh-tw": "牙牙",
        ko: "터검니",
        ja: "キバゴ"
    },
    stage: "Stage1",
    description: {
        en: "Fraxure uses its thick tusks to neatly cut prey into two portions—one to eat now and one to save for later.",
        fr: "Incisache utilise ses défenses épaisses pour couper soigneusement ses proies en deux portions : une à manger maintenant et une à conserver pour plus tard.",
        es: "Fraxure usa sus gruesos colmillos para cortar cuidadosamente a sus presas en dos porciones: una para comer ahora y otra para guardar para más tarde.",
        it: "Fraxure usa le sue spesse zanne per tagliare con precisione la preda in due porzioni: una da mangiare subito e l'altra da conservare per dopo.",
        de: "Sharfax nutzt seine dicken Stoßzähne, um die Beute sauber in zwei Portionen zu schneiden – eine zum sofortigen Verzehr und eine zum Aufbewahren für später.",
        "pt-br": "Fraxure usa suas presas grossas para cortar cuidadosamente a presa em duas porções – uma para comer agora e outra para guardar para mais tarde.",
        "zh-tw": "斧牙龍 使用其粗大的獠牙將獵物整齊地切成兩部分——一份現在吃，一份留著以後吃。"
    },
    attacks: [
        {
            cost: ["Fighting", "Metal"],
            name: {
                en: "Dragon Claw",
                fr: "Draco-Griffe",
                es: "Garra Dragón",
                it: "Dragartigli",
                de: "Drachenklaue",
                "pt-br": "Garra de Dragão",
                "zh-tw": "龍爪"
            },
            damage: 60
        }
    ],
    retreat: 2
};

export default card;
