import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Latias",
        "fr": "Latias",
        "es": "Latías",
        "it": "Latias",
        "de": "Latias",
        "pt-br": "Lácias",
        "zh-tw": "拉蒂亞斯"
    },
    illustrator: "rika",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Psychic"],
    description: {
        en: "It communicates using telepathy. Its body is\ncovered in down that refracts light to make\nit invisible.",
        "fr": "Il communique par télépathie. Son corps est\nrecouvert de duvet qui réfracte la lumière pour faire\nc'est invisible.",
        "es": "Se comunica mediante telepatía. Su cuerpo es\ncubierto de plumón que refracta la luz para hacer\nes invisible.",
        "it": "Comunica usando la telepatia. Il suo corpo lo è\nricoperto di piumino che rifrange la luce per fare\nè invisibile.",
        "de": "Es kommuniziert mittels Telepathie. Sein Körper ist\nMit Daunen bedeckt, die das Licht brechen\nes unsichtbar.",
        "pt-br": "Ele se comunica por telepatia. Seu corpo é\ncoberto de penugem que refrata a luz para fazer\né invisível.",
        "zh-tw": "它使用心靈感應進行交流。它的身體是\n覆蓋有折射光線的羽絨\n它是看不見的。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Crossing Flights",
                "fr": "Vols de traversée",
                "es": "Vuelos de cruce",
                "it": "Voli che attraversano",
                "de": "Kreuzungsflüge",
                "pt-br": "Cruzando Voos",
                "zh-tw": "過境航班"
            },
            damage: 20,
            cost: ["Psychic"],
            effect: {
                en: "If Latios is on your Bench, this attack does 20 more damage.",
                "fr": "Si Latios est sur votre Banc, cette attaque inflige 20 dégâts supplémentaires.",
                "es": "Si Latios está en tu Banca, este ataque hace 20 daños más.",
                "it": "Se Latios è nella tua panchina, questo attacco infligge 20 danni in più.",
                "de": "Wenn Latios auf deiner Bank ist, fügt dieser Angriff 20 Schadenspunkte mehr zu.",
                "pt-br": "Se Latios estiver no seu banco, este ataque causará 20 de dano a mais.",
                "zh-tw": "如果拉帝歐斯在你的替補席上，這次攻擊會造成 20 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
