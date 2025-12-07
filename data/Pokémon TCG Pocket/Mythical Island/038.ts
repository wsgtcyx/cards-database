import { Card } from "../../../interfaces";
import Set from "../Mythical Island";
const card: Card = {
    set: Set,
    name: {
        en: "Florges",
        fr: "Florges",
        es: "Florges",
        it: "Florges",
        de: "Florges",
        'pt-br': "Florges",
        ko: "플라제스",
        "zh-tw": "花潔夫人",
    },
    illustrator: "Cona Nitanda",
    category: "Pokemon",
    hp: 120,
    types: ["Psychic"],
    evolveFrom: {
        en: "Floette",
        "fr": "Floette",
        "es": "flotador",
        "it": "Flotta",
        "de": "Floette",
        "pt-br": "Floeta",
        "zh-tw": "花葉蒂",
    },
    description: {
        en: "This Pokémon creates an impressive flower garden in its territory. It draws forth the power of the red flowers around its neck.",
        fr: "Ce Pokémon transforme son territoire en\nmagnifique jardin fleuri. Il tire sa puissance\ndes fleurs rouges qui ornent son cou.",
        es: "Hace de su territorio un jardín esplendoroso.\nExtrae su poder de las flores rojas que lleva\nen torno al cuello.",
        it: "Questo Pokémon trasforma il proprio territorio\nin uno splendido giardino fiorito. I suoi poteri\nderivano dai fiori rossi che ha attorno al collo.",
        de: "In seinem Revier legt Florges einen prächtigen\nBlumengarten an. Es schöpft seine Kraft aus\nden roten Blumen um seinen Hals.",
        'pt-br': "Este Pokémon cria um jardim de flores impressionante em seu território.\nTraz consigo o poder das flores vermelhas ao redor do seu pescoço.",
        ko: "자신의 영역에 멋진 화원을 만든다.\n목을 감싸고 있는\n빨간 꽃의 파워를 끌어낸다.",
        "zh-tw": "這只神奇寶貝在它的領土上創造了一個令人印象深刻的花園。引出脖子上的紅色花朵的力量。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Bloomshine",
                fr: "Éclobrillance",
                es: "Resplandeflor",
                it: "Fioritura Splendente",
                de: "Blütenglanz",
                'pt-br': "Brilho Florido",
                ko: "블룸샤인",
                "zh-tw": "布盧姆希恩"
            },
            damage: 80,
            cost: ["Psychic", "Psychic"],
            effect: {
                en: "Heal 20 damage from each of your Pokémon.",
                fr: "Soignez 20 dégâts de chacun de vos Pokémon.",
                es: "Cura 20 puntos de daño a cada uno de tus Pokémon.",
                it: "Cura ciascuno dei tuoi Pokémon da 20 danni.",
                de: "Heile 20 Schadenspunkte bei jedem deiner Pokémon.",
                'pt-br': "Cure 20 pontos de dano de cada um dos seus Pokémon.",
                ko: "자신의 포켓몬 전원의 HP를 20회복.",
                "zh-tw": "治療每隻神奇寶貝造成的 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1,
    rarity: "Two Diamond"
};
export default card;
