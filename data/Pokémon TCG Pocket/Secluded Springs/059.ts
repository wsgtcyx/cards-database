import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Igglybuff",
        "fr": "Igglybuff",
        "es": "Igglybuff",
        "it": "Igglybuff",
        "de": "Igglybuff",
        "pt-br": "Igglybuff",
        "zh-tw": "寶寶丁",
    },
    illustrator: "Miki Tanaka",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 30,
    types: ["Colorless"],
    description: {
        en: "Its body has a faintly sweet scent and is bouncy\nand soft. If it bounces even once, it cannot stop.",
        "fr": "Son corps a un parfum légèrement sucré et est rebondissant\net doux. S'il rebondit ne serait-ce qu'une seule fois, il ne peut pas s'arrêter.",
        "es": "Su cuerpo tiene un aroma ligeramente dulce y es animado.\ny suave. Si rebota aunque sea una vez, no puede detenerse.",
        "it": "Il suo corpo ha un profumo leggermente dolce ed è rimbalzante\ne morbido. Se rimbalza anche una volta, non può fermarsi.",
        "de": "Sein Körper hat einen leicht süßlichen Duft und ist federnd\nund weich. Wenn es auch nur einmal abprallt, kann es nicht aufhören.",
        "pt-br": "Seu corpo tem um aroma levemente adocicado e é saltitante\ne macio. Se saltar pelo menos uma vez, não poderá parar.",
        "zh-tw": "它的身體有淡淡的甜味，而且有彈性\n和柔軟的。即使彈起一次，也無法停止。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Sleepy Lullaby",
                "fr": "Berceuse endormie",
                "es": "Canción de cuna para dormir",
                "it": "Ninna nanna assonnata",
                "de": "Verschlafenes Schlaflied",
                "pt-br": "Canção de ninar sonolenta",
                "zh-tw": "昏昏欲睡的搖籃曲"
            },
            damage: 10,
            effect: {
                en: "Your opponent's Active Pokémon is now Asleep.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Endormi.",
                "es": "El Pokémon Activo de tu rival ahora está Dormido.",
                "it": "Il Pokémon attivo del tuo avversario è addormentato.",
                "de": "Das aktive Pokémon deines Gegners schläft jetzt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Adormecido.",
                "zh-tw": "你對手的活躍神奇寶貝現在處於睡眠狀態。"
            }
        }],
    weaknesses: [{
            type: "Colorless",
            value: "+20"
        }],
    retreat: 0
};
export default card;
