import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Tangela",
        "fr": "Tangela",
        "es": "Tangela",
        "it": "Tangela",
        "de": "Tangela",
        "pt-br": "Tangela",
        "zh-tw": "坦格拉"
    },
    illustrator: "OOYAMA",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    description: {
        en: "Hidden beneath a tangle of vines that grows\nnonstop even if the vines are torn off, this\nPokémon's true appearance remains a mystery.",
        "fr": "Caché sous un enchevêtrement de vignes qui poussent\nnon-stop même si les vignes sont arrachées, cela\nLa véritable apparence de Pokémon reste un mystère.",
        "es": "Escondido debajo de una maraña de enredaderas que crece\nsin parar incluso si las enredaderas son arrancadas, esto\nLa verdadera apariencia de Pokémon sigue siendo un misterio.",
        "it": "Nascosto sotto un groviglio di viti che cresce\nsenza sosta anche se le viti vengono strappate, questo\nIl vero aspetto dei Pokémon rimane un mistero.",
        "de": "Versteckt unter einem Gewirr von Weinreben, das wächst\nununterbrochen, auch wenn die Reben abgerissen werden\nDas wahre Aussehen des Pokémon bleibt ein Rätsel.",
        "pt-br": "Escondido sob um emaranhado de vinhas que cresce\nsem parar, mesmo que as vinhas sejam arrancadas, isso\nA verdadeira aparência do Pokémon permanece um mistério.",
        "zh-tw": "隱藏在生長的藤蔓下面\n即使藤蔓被扯斷也不停歇，這\n神奇寶貝的真實面貌仍然是個謎。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Sleep Powder",
                "fr": "Poudre de sommeil",
                "es": "Polvo para dormir",
                "it": "Polvere per dormire",
                "de": "Schlafpulver",
                "pt-br": "Pó para dormir",
                "zh-tw": "睡眠粉"
            },
            damage: 20,
            cost: ["Grass", "Colorless"],
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
            type: "Fire",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["ho-oh"]
};
export default card;
