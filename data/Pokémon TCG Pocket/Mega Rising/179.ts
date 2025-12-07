import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Goodra",
        "fr": "Goodra",
        "es": "buenara",
        "it": "Goodra",
        "de": "Goodra",
        "pt-br": "Goodra",
        "zh-tw": "黏美露龍",
    },
    illustrator: "Nagomi Nijo",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Dragon"],
    evolveFrom: {
        en: "Sliggoo",
        "fr": "Sliggoo",
        "es": "Sliggoo",
        "it": "Sligoo",
        "de": "Sliggoo",
        "pt-br": "Sliggoo",
        "zh-tw": "黏美伊兒",
    },
    description: {
        en: "This Pokémon is uncontrollable when enraged.\nIt rampages on and on, lashing its tail with\nenough power to send a dump truck flying.",
        "fr": "Ce Pokémon est incontrôlable lorsqu'il est enragé.\nIl se déchaîne encore et encore, fouettant sa queue avec\nassez de puissance pour faire voler un camion-benne.",
        "es": "Este Pokémon es incontrolable cuando está enfurecido.\nSe enfurece una y otra vez, azotando su cola con\nsuficiente potencia para hacer volar un camión volquete.",
        "it": "Questo Pokémon è incontrollabile quando è arrabbiato.\nSi scatena continuamente, sferzando la coda\npotenza sufficiente per far volare un autocarro con cassone ribaltabile.",
        "de": "Dieses Pokémon ist unkontrollierbar, wenn es wütend ist.\nEs tobt immer weiter und peitscht mit dem Schwanz\ngenug Leistung, um einen Muldenkipper in die Luft zu jagen.",
        "pt-br": "Este Pokémon é incontrolável quando enfurecido.\nEle ataca sem parar, chicoteando sua cauda com\nenergia suficiente para fazer um caminhão basculante voar.",
        "zh-tw": "該寶可夢在憤怒時無法控制。\n它不斷地狂暴，用尾巴鞭打著\n足夠的動力讓自卸卡車飛起來。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Spiral Drain",
                "fr": "Drain en spirale",
                "es": "Drenaje en espiral",
                "it": "Scarico a spirale",
                "de": "Spiralablauf",
                "pt-br": "Dreno Espiral",
                "zh-tw": "螺旋排水管"
            },
            damage: 100,
            cost: ["Water", "Psychic", "Colorless"],
            effect: {
                en: "Heal 40 damage from this Pokémon.",
                "fr": "Soignez 40 dégâts de ce Pokémon.",
                "es": "Cura 40 puntos de daño de este Pokémon.",
                "it": "Cura questo Pokémon da 40 danni.",
                "de": "Heile 40 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Cure 40 de dano deste Pokémon.",
                "zh-tw": "治療該神奇寶貝造成的 40 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Colorless",
            value: "+20"
        }],
    retreat: 3
};
export default card;
