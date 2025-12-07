import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Glaceon ex",
        "fr": "Glaceon ex",
        "es": "Glaceon ex",
        "it": "Glaceon es",
        "de": "Glaceon ex",
        "pt-br": "Glaceon ex",
        "zh-tw": "冰精靈 ex",
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Water"],
    evolveFrom: {
        en: "Eevee",
        "fr": "Évoli",
        "es": "Eevee",
        "it": "Eevee",
        "de": "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布"
    },
    stage: "Stage1",
    suffix: "EX",
    abilities: [{
            type: "Ability",
            name: {
                en: "Snowy Terrain",
                "fr": "Terrain enneigé",
                "es": "Terreno nevado",
                "it": "Terreno innevato",
                "de": "Verschneites Gelände",
                "pt-br": "Terreno Nevado",
                "zh-tw": "雪地"
            },
            effect: {
                en: "During Pokémon Checkup, if this Pokémon is in the Active Spot, do 10 damage to your opponent's Active Pokémon.",
                "fr": "Lors du Checkup Pokémon, si ce Pokémon est dans le Spot Actif, infligez 10 dégâts au Pokémon Actif de votre adversaire.",
                "es": "Durante el Chequeo de Pokémon, si este Pokémon está en el Punto Activo, haz 10 puntos de daño al Pokémon Activo de tu rival.",
                "it": "Durante il Controllo Pokémon, se questo Pokémon è in posizione attiva, infliggi 10 danni al Pokémon attivo del tuo avversario.",
                "de": "Wenn sich dieses Pokémon während des Pokémon-Checkups an der aktiven Stelle befindet, füge dem aktiven Pokémon deines Gegners 10 Schadenspunkte zu.",
                "pt-br": "Durante o Pokémon Checkup, se este Pokémon estiver no Active Spot, cause 10 pontos de dano ao Pokémon Ativo do seu oponente.",
                "zh-tw": "寶可夢檢查時，如果該寶可夢位於活躍位置，則對對手的活躍寶可夢造成 10 點傷害。"
            }
        }],
    attacks: [{
            name: {
                en: "Freezing Wind",
                "fr": "Vent glacial",
                "es": "Viento helado",
                "it": "Vento gelido",
                "de": "Eisiger Wind",
                "pt-br": "Vento Congelante",
                "zh-tw": "冰冷的風"
            },
            damage: 90,
            cost: ["Water", "Water", "Colorless"]
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1
};
export default card;
