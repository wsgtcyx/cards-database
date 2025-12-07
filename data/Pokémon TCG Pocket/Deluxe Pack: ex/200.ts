import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Phanpy",
        "fr": "Phanpy",
        "es": "fanpy",
        "it": "Fanpy",
        "de": "Phanpy",
        "pt-br": "Fanpy",
        "zh-tw": "小小象",
    },
    illustrator: "Midori Harada",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    description: {
        en: "This Pokémon lives and nests on a riverbank.\nAfter playing in the mud, it won't be able to\nsettle down unless it washes its body.",
        "fr": "Ce Pokémon vit et niche au bord d'une rivière.\nAprès avoir joué dans la boue, il ne pourra plus\ns'installer à moins qu'il ne lave son corps.",
        "es": "Este Pokémon vive y anida en la orilla de un río.\nDespués de jugar en el barro, no podrá\ncalmarse a menos que se lave el cuerpo.",
        "it": "Questo Pokémon vive e nidifica sulla riva di un fiume.\nDopo aver giocato nel fango, non sarà in grado di farlo\nsistemarsi a meno che non si lavi il corpo.",
        "de": "Dieses Pokémon lebt und nistet an einem Flussufer.\nNach dem Spielen im Schlamm wird es nicht mehr möglich sein\nBeruhige dich, es sei denn, es wäscht seinen Körper.",
        "pt-br": "Este Pokémon vive e nidifica nas margens de um rio.\nDepois de brincar na lama, não conseguirá\nacalme-se a menos que lave seu corpo.",
        "zh-tw": "這只神奇寶貝在河岸上生活和築巢。\n玩泥巴之後就不行了\n除非它清洗身體，否則就安定下來。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Reckless Charge",
                "fr": "Charge imprudente",
                "es": "Cargo imprudente",
                "it": "Carica spericolata",
                "de": "Rücksichtsloser Angriff",
                "pt-br": "Carga imprudente",
                "zh-tw": "魯莽衝鋒"
            },
            damage: 30,
            cost: ["Fighting"],
            effect: {
                en: "This Pokémon also does 10 damage to itself.",
                "fr": "Ce Pokémon s'inflige également 10 dégâts.",
                "es": "Este Pokémon también se hace 10 daños a sí mismo.",
                "it": "Questo Pokémon infligge anche 10 danni a se stesso.",
                "de": "Dieses Pokémon fügt sich selbst außerdem 10 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 10 de dano a si mesmo.",
                "zh-tw": "該神奇寶貝也會對其自身造成 10 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
