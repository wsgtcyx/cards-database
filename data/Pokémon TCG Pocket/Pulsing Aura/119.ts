import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/119",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/119",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/119",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/119",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/119",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/119",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/119"
    },
    name: {
        en: "Pawniard",
        fr: "Scalpion",
        es: "Pawniard",
        it: "Pawniard",
        de: "Gladiantri",
        "pt-br": "Pawniard",
        "zh-tw": "駒刀小兵",
        ko: "자망칼",
        ja: "コマタナ"
    },
    illustrator: "Hitoshi Ariga",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Metal"],
    dexId: [624],
    stage: "Basic",
    description: {
        en: "It uses river stones to maintain the cutting edges of the blades covering its body. These sharpened blades allow it to bring down opponents.",
        fr: "Il accule ses ennemis en jouant de ses lames\nacérées, qu’il aiguise sur les pierres des berges.",
        es: "Acorrala a los enemigos con las cuchillas de su\ncuerpo, que afila usando cantos rodados a la\norilla del río.",
        it: "Incalza il nemico con le lame che ha sul corpo,\ne le mantiene sempre taglienti affilandole con\npietre di fiume.",
        de: "Es treibt Gegner mit seinen scharfen Klingen in\ndie Ecke. Diese schärft es an den Felsen eines\nFlussbettes.",
        "pt-br": "Ele usa pedras de rio para manter as pontas das lâminas cobrindo seu corpo. Essas lâminas afiadas permitem derrubar oponentes.",
        "zh-tw": "揮舞銳利的刀刃將敵人\n逼向絕境。會用河灘的\n石頭來精心保養刀刃。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Cut Up",
                fr: "Découpage",
                es: "Trocear",
                it: "Tagliuzzamento",
                de: "Zerhäckseln",
                "pt-br": "Dilacerar",
                "zh-tw": "切"
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
