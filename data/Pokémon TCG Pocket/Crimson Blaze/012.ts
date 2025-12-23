import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Charmeleon",
        "fr": "Reptincel",
        "es": "Charmeleon",
        "it": "Charmeleon",
        "de": "Glutexo",
        "pt-br": "Charmeleon",
        "zh-tw": "火恐龍"
    },
    illustrator: "DOM",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fire"],
    evolveFrom: {
        en: "Charmander",
        "fr": "Salamèche",
        "es": "Charmander",
        "it": "Charmander",
        "de": "Glumanda",
        "pt-br": "Charmander",
        "zh-tw": "小火龍"
    },
    description: {
        en: "If it becomes agitated during battle, it spouts\nintense flames, incinerating its surroundings.",
        "fr": "S'il s'agite pendant le combat, il jaillit\ndes flammes intenses, incinérant ses environs.",
        "es": "Si se agita durante la batalla, escupe\nllamas intensas, incinerando sus alrededores.",
        "it": "Se si agita durante la battaglia, zampilla\nfiamme intense, incenerendo l'ambiente circostante.",
        "de": "Wenn es während des Kampfes unruhig wird, spritzt es heraus\nIntensive Flammen verbrennen die Umgebung.",
        "pt-br": "Se ficar agitado durante a batalha, ele jorra\nchamas intensas, incinerando seu entorno.",
        "zh-tw": "如果在戰鬥中變得焦躁的話，就會噴出\n猛烈的火焰，將周圍的一切都焚燒殆盡。"
    },
    stage: "Stage1",
    abilities: [{
            type: "Ability",
            name: {
                en: "Ignition",
                "fr": "Allumage",
                "es": "Encendido",
                "it": "Accensione",
                "de": "Zündung",
                "pt-br": "Ignição",
                "zh-tw": "點火"
            },
            effect: {
                en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may take a {R} Energy from your Energy Zone and attach it to your Active {R} Pokémon.",
                "fr": "Une fois pendant votre tour, lorsque vous jouez ce Pokémon depuis votre main pour faire évoluer 1 de vos Pokémon, vous pouvez prendre une Énergie {R} de votre Zone d'Énergie et l'attacher à votre Pokémon Actif {R}.",
                "es": "Una vez durante tu turno, cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes tomar una Energía {R} de tu Zona de Energía y unirla a tu Pokémon {R} Activo.",
                "it": "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi prendere un'Energia {R} dalla tua Zona Energetica e assegnarla al tuo Pokémon {R} attivo.",
                "de": "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du eine {R}-Energie aus deiner Energiezone nehmen und sie an dein aktives {R}-Pokémon anlegen.",
                "pt-br": "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá pegar uma Energia {R} da sua Zona de Energia e ligá-la aos seus Pokémon {R} Ativos.",
                "zh-tw": "在你的回合中，當你從手上使用這只神奇寶貝來進化你的一隻神奇寶貝時，你可以從你的能量區取出一個{R}能量並將其附加到你的活躍{R}神奇寶貝上。"
            }
        }],
    attacks: [{
            name: {
                en: "Steady Firebreathing",
                "fr": "Cracheur de feu constant",
                "es": "Escupe fuego constante",
                "it": "Respiro di fuoco costante",
                "de": "Ständiges Feuerspucken",
                "pt-br": "Respiração de fogo constante",
                "zh-tw": "穩定噴火"
            },
            damage: 50,
            cost: ["Fire", "Fire", "Colorless"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2
};
export default card;
