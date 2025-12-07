import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Graveler",
        "fr": "Graveur",
        "es": "Graveler",
        "it": "Graveler",
        "de": "Schotter",
        "pt-br": "Cascalho",
        "zh-tw": "隆隆石",
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 100,
    types: ["Fighting"],
    evolveFrom: {
        en: "Geodude",
        "fr": "Géodude",
        "es": "geodudo",
        "it": "Geodude",
        "de": "Geodude",
        "pt-br": "Geodude",
        "zh-tw": "小拳石",
    },
    description: {
        en: "It climbs up cliffs as it heads toward the peak\nof a mountain. As soon as it reaches the summit,\nit rolls back down the way it came.",
        "fr": "Il escalade les falaises en se dirigeant vers le sommet\nd'une montagne. Dès qu'il atteint le sommet,\nil redescend comme il est venu.",
        "es": "Sube acantilados mientras se dirige hacia la cima.\nde una montaña. Tan pronto como llegue a la cumbre,\nvuelve a rodar por donde vino.",
        "it": "Si arrampica sulle scogliere mentre si dirige verso la vetta\ndi una montagna. Non appena raggiunge la vetta,\nrotola indietro nel modo in cui è venuto.",
        "de": "Auf dem Weg zum Gipfel klettert es Klippen hinauf\neines Berges. Sobald es den Gipfel erreicht,\nes rollt wieder den Weg hinunter, den es gekommen ist.",
        "pt-br": "Ele sobe penhascos enquanto se dirige ao pico\nde uma montanha. Assim que chegar ao cume,\nele rola de volta do jeito que veio.",
        "zh-tw": "它爬上懸崖，走向頂峰\n一座山的。當它到達山頂時，\n它會沿著來時的方向滾回。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Lunge Out",
                "fr": "Foncez",
                "es": "estocada",
                "it": "Lanciati fuori",
                "de": "Ausholen",
                "pt-br": "Avançar",
                "zh-tw": "向前衝出"
            },
            damage: 40,
            cost: ["Fighting", "Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 3
};
export default card;
