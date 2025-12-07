import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Alolan Diglett",
        "fr": "Alolan Diglett",
        "es": "Diglett de Alola",
        "it": "Diglett di Alola",
        "de": "Alolan Diglett",
        "pt-br": "Alola Diglett",
        "zh-tw": "阿羅蘭·迪格利特"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 50,
    types: ["Metal"],
    description: {
        en: "The metal-rich geology of this Pokémon's habitat\ncaused it to develop steel whiskers on its head.",
        "fr": "La géologie riche en métaux de l'habitat de ce Pokémon\nlui a fait développer des moustaches d'acier sur la tête.",
        "es": "La geología rica en metales del hábitat de este Pokémon\nle hizo desarrollar bigotes de acero en la cabeza.",
        "it": "La geologia ricca di metalli dell'habitat di questo Pokémon\ngli ha fatto sviluppare baffi d'acciaio sulla testa.",
        "de": "Die metallreiche Geologie des Lebensraums dieses Pokémon\nverursachte, dass es stählerne Barthaare auf seinem Kopf entwickelte.",
        "pt-br": "A geologia rica em metais do habitat deste Pokémon\nfez com que desenvolvesse bigodes de aço em sua cabeça.",
        "zh-tw": "該神奇寶貝棲息地富含金屬的地質\n導致它的頭上長出了鋼須。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Headbutt",
                "fr": "Coup de tête",
                "es": "cabezazo",
                "it": "Testata",
                "de": "Kopfstoß",
                "pt-br": "Cabeçada",
                "zh-tw": "頭撞"
            },
            damage: 20,
            cost: ["Metal"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
