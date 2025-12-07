import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
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
    illustrator: "OKACHEKE",
    rarity: "One Star",
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
                en: "Flail",
                "fr": "Fléau",
                "es": "Mayal",
                "it": "Flagello",
                "de": "Dreschflegel",
                "pt-br": "Mangual",
                "zh-tw": "連枷"
            },
            cost: ["Fighting"],
            effect: {
                en: "This attack does damage to your opponent's Active Pokémon equal to the damage this Pokémon has on it.",
                "fr": "Cette attaque inflige au Pokémon Actif de votre adversaire des dégâts égaux aux dégâts que ce Pokémon lui inflige.",
                "es": "Este ataque hace un daño al Pokémon Activo de tu rival igual al daño que este Pokémon tiene sobre él.",
                "it": "Questo attacco infligge al Pokémon attivo del tuo avversario un danno pari al danno che questo Pokémon ha su di sé.",
                "de": "Dieser Angriff fügt dem Aktiven Pokémon deines Gegners Schaden in Höhe des Schadens zu, den dieses Pokémon ihm zufügt.",
                "pt-br": "Este ataque causa dano ao Pokémon Ativo do seu oponente igual ao dano que este Pokémon causa nele.",
                "zh-tw": "這次攻擊對對手的活躍寶可夢造成的傷害等於該寶可夢對其造成的傷害。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
