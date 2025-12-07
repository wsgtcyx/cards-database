import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Tinkatink",
        "fr": "Tinkatink",
        "es": "tinkatink",
        "it": "Tinkatink",
        "de": "Tinkatink",
        "pt-br": "Tinkatink",
        "zh-tw": "小鍛匠",
    },
    illustrator: "miki kudo",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Metal"],
    description: {
        en: "It swings its handmade hammer around to protect\nitself, but the hammer is often stolen by Pokémon\nthat eat metal.",
        "fr": "Il fait pivoter son marteau fait main pour protéger\nlui-même, mais le marteau est souvent volé par Pokémon\nqui mangent du métal.",
        "es": "Mueve su martillo hecho a mano para proteger\nsí mismo, pero el martillo a menudo es robado por Pokémon\nque comen metal.",
        "it": "Fa oscillare il suo martello fatto a mano per proteggere\nstesso, ma il martello viene spesso rubato dai Pokémon\nche mangiano il metallo.",
        "de": "Zum Schutz schwingt es seinen handgefertigten Hammer herum\nselbst, aber der Hammer wird oft von Pokémon gestohlen\ndie Metall fressen.",
        "pt-br": "Ele balança seu martelo artesanal para proteger\nem si, mas o martelo é frequentemente roubado por Pokémon\nque comem metal.",
        "zh-tw": "它揮舞著手工製作的錘子來保護\n本身，但錘子經常被神奇寶貝偷走\n吃金屬的。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Corkscrew Punch",
                "fr": "Poinçon tire-bouchon",
                "es": "Sacacorchos",
                "it": "Punzone per cavatappi",
                "de": "Korkenzieherstanze",
                "pt-br": "Furador de saca-rolhas",
                "zh-tw": "螺旋沖頭"
            },
            damage: 20,
            cost: ["Metal"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
