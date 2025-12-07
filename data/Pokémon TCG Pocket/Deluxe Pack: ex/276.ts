import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Pidgeot ex",
        "fr": "ex Pidgeot",
        "es": "ex pidgeot",
        "it": "Pidgeot es",
        "de": "Pidgeot ex",
        "pt-br": "ex-pidgeot",
        "zh-tw": "大比鳥 ex",
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 170,
    types: ["Colorless"],
    evolveFrom: {
        en: "Pidgeotto",
        "fr": "Piègeotto",
        "es": "Pidgeotto",
        "it": "Pidgeotto",
        "de": "Pidgeotto",
        "pt-br": "Pidgeotto",
        "zh-tw": "比比鳥"
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Scattering Cyclone",
                "fr": "Cyclone de diffusion",
                "es": "Ciclón de dispersión",
                "it": "Ciclone di dispersione",
                "de": "Zerstreuender Zyklon",
                "pt-br": "Ciclone de dispersão",
                "zh-tw": "散射旋風分離器"
            },
            damage: 80,
            cost: ["Colorless", "Colorless", "Colorless"],
            effect: {
                en: "This attack does 20 more damage for each of your opponent's Benched Pokémon.",
                "fr": "Cette attaque inflige 20 dégâts supplémentaires pour chacun des Pokémon de Banc de votre adversaire.",
                "es": "Este ataque hace 20 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
                "it": "Questo attacco infligge 20 danni in più per ciascuno dei Pokémon nella panchina del tuo avversario.",
                "de": "Dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners 20 weitere Schadenspunkte zu.",
                "pt-br": "Este ataque causa 20 pontos de dano a mais para cada Pokémon no Banco do seu oponente.",
                "zh-tw": "這次攻擊對對手的後備神奇寶貝每造成 20 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
