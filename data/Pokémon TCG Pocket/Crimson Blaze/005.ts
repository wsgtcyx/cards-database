import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1a/005",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1a/005",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1a/005",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1a/005",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1a/005",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1a/005",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1a/005"
    },
    name: {
        en: "Spinarak",
        "fr": "Mimigal",
        "es": "Spinarak",
        "it": "Spinarak",
        "de": "Webarak",
        "pt-br": "Spinarak",
        "zh-tw": "圓絲蛛"
    },
    illustrator: "kodama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Grass"],
    description: {
        en: "Although the poison from its fangs isn't that\nstrong, it's potent enough to weaken prey that\ngets caught in its web.",
        "fr": "Bien que le poison de ses crocs ne soit pas ça\nfort, il est suffisamment puissant pour affaiblir les proies qui\nse laisse prendre dans sa toile.",
        "es": "Aunque el veneno de sus colmillos no es tan\nfuerte, es lo suficientemente potente como para debilitar a la presa que\nqueda atrapado en su red.",
        "it": "Anche se il veleno che esce dalle sue zanne non è quello\nforte, è abbastanza potente da indebolire la preda\nrimane intrappolato nella sua rete.",
        "de": "Obwohl das Gift seiner Reißzähne das nicht ist\nstark, es ist stark genug, um die Beute zu schwächen\nverfängt sich in seinem Netz.",
        "pt-br": "Embora o veneno de suas presas não seja esse\nforte, é potente o suficiente para enfraquecer a presa que\nfica preso em sua teia.",
        "zh-tw": "雖然它的獠牙裡的毒不是這樣的\n強大，足以削弱獵物\n被困在它的網中。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Sting",
                "fr": "Piquer",
                "es": "Picadura",
                "it": "Puntura",
                "de": "Stechen",
                "pt-br": "Picada",
                "zh-tw": "蜇"
            },
            damage: 20,
            cost: ["Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
