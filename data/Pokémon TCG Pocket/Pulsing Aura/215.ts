import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/215",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/215"
    },
    name: {
        en: "Grimer",
        fr: "Tadmorv",
        es: "Grimer",
        it: "Grimer",
        de: "Sleima",
        "pt-br": "Grimer",
        "zh-tw": "臭泥",
        ko: "질퍽이",
        ja: "ベトベター"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 80,
    types: ["Darkness"],
    dexId: [88],
    stage: "Basic",
    description: {
        en: "Appears in filthy areas. It thrives by sucking up polluted sludge that is pumped out of factories.",
        fr: "Vivant dans des tas d’ordures, il se nourrit des\ndéchets polluants rejetés par les usines.",
        es: "Aparece en zonas asquerosas. Crece absorbiendo los\nresiduos tóxicos expulsados por las fábricas.",
        it: "Prospera in zone paludose. Cresce nutrendosi dei\nliquami di scarico delle fabbriche.",
        de: "Dieses Pokémon lebt vorwiegend in schmutzigen\nGebieten und ernährt sich von Industrieabfällen.",
        "pt-br": "Aparece em áreas sujas. Ela prospera sugando o lodo poluído que é bombeado para fora das fábricas.",
        "zh-tw": "出現在骯髒的地方。它透過吸收從工廠抽出的污染污泥而茁壯成長。"
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
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
