import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/034",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/034",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/034",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/034",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/034",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/034",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2b/034"
    },
    name: {
        en: "Dugtrio",
        fr: "Triopikeur",
        es: "Dugtrio",
        it: "Dugtrio",
        de: "Digdri",
        "pt-br": "Dugtrio",
        "zh-tw": "三地鼠",
        ko: "닥트리오",
        ja: "ダグトリオ"
    },
    illustrator: "Kyoko Umemoto",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fighting"],
    dexId: [51],
    evolveFrom: {
        en: "Diglett",
        fr: "Taupiqueur",
        es: "Diglett",
        it: "Diglett",
        de: "Digda",
        "pt-br": "Diglett",
        "zh-tw": "地鼠",
        ko: "디그다",
        ja: "ディグダ"
    },
    stage: "Stage1",
    description: {
        en: "In battle, it digs through the ground and strikes the unsuspecting foe from an unexpected direction.",
        fr: "Au combat, il s’enfouit sous terre pour pouvoir frapper\nses adversaires depuis n’importe quelle direction.",
        es: "En combate, cava la tierra, se esconde y sale de\nrepente para golpear a su rival. Nunca se sabe por\ndónde puede aparecer.",
        it: "Nella lotta, scava tunnel nel terreno per sorprendere\nil nemico attaccandolo da una direzione imprevedibile.",
        de: "Im Kampf gräbt es sich ein und attackiert den\nGegner aus einer unvorhersehbaren Richtung.",
        "pt-br": "Na batalha, ele escava o solo e ataca o inimigo desavisado de uma direção inesperada.",
        "zh-tw": "在戰鬥中，它會挖掘地面並從意想不到的方向攻擊毫無戒心的敵人。"
    },
    attacks: [
        {
            cost: ["Fighting", "Colorless"],
            name: {
                en: "Mud Bomb",
                fr: "Boue-Bombe",
                es: "Bomba Fango",
                it: "Pantanobomba",
                de: "Schlammbombe",
                "pt-br": "Bomba de Lama",
                "zh-tw": "泥巴炸彈"
            },
            damage: 60
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 0
};

export default card;
