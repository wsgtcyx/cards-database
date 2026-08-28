import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/008",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/008",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/008",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/008",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/008",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/008",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/008"
    },
    name: {
        en: "Team Rocket's Houndour",
        fr: "Malosse de la Team Rocket",
        es: "Houndour del Team Rocket",
        it: "Houndour del Team Rocket",
        de: "Team Rockets Hunduster",
        "pt-br": "Houndour da Equipe Rocket",
        "zh-tw": "火箭隊的戴魯比",
        ko: "로켓단의 델빌",
        ja: "ロケット団のデルビル"
    },
    illustrator: "Mina Nakai",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fire"],
    stage: "Basic",
    description: {
        en: "It uses different kinds of cries for communicating with others of its kind and for pursuing its prey.",
        fr: "Quand il communique avec ses semblables, il ne pousse pas les mêmes cris que quand il poursuit une proie.",
        es: "Usa diferentes tipos de aullidos para comunicarse con los de su especie o para perseguir a su presa.",
        it: "Usa versi differenti per comunicare con i suoi simili e per braccare la preda.",
        de: "Sein Ruf bei der Beutejagd unterscheidet sich von dem Ruf, den es zum Kommunizieren mit Artgenossen verwendet.",
        "pt-br": "Usa diferentes tipos de chamados para se comunicar com outros de sua espécie e para perseguir sua presa.",
        "zh-tw": "聯絡夥伴和追趕獵物的時候，會分別發出不同種類的叫聲。"
    },
    attacks: [
        {
            cost: ["Fire"],
            name: {
                en: "Live Coal",
                fr: "Charbon Mutant",
                es: "Carbón Activado",
                it: "Carboni Ardenti",
                de: "Glühende Kohlen",
                "pt-br": "Carvão Vivo",
                "zh-tw": "火種"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
