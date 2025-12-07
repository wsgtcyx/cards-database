import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Farfetch'd",
        "fr": "Farfetch'd",
        "es": "Farfetch'd",
        "it": "Inverosimile",
        "de": "Farfetch'd",
        "pt-br": "Farfetch'd",
        "zh-tw": "Farfetch'd"
    },
    illustrator: "Uninori",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    description: {
        en: "The stalk this Pokémon carries in its wings serves\nas a sword to cut down opponents. In a dire\nsituation, the stalk can also serve as food.",
        "fr": "La tige que ce Pokémon porte dans ses ailes sert\ncomme une épée pour abattre les adversaires. Dans une situation désastreuse\nDans cette situation, la tige peut également servir de nourriture.",
        "es": "El tallo que lleva este Pokémon en sus alas sirve\ncomo espada para derribar a los oponentes. en una situación terrible\nsituación, el tallo también puede servir como alimento.",
        "it": "Il gambo che questo Pokémon porta nelle sue ali serve\ncome una spada per abbattere gli avversari. In modo terribile\nsituazione, il gambo può anche servire come cibo.",
        "de": "Der Stiel, den dieses Pokémon in seinen Flügeln trägt, dient dazu\nals Schwert, um Gegner niederzuschlagen. In einer schlimmen Situation\nIn bestimmten Situationen kann der Stängel auch als Nahrung dienen.",
        "pt-br": "O talo que este Pokémon carrega em suas asas serve\ncomo uma espada para derrubar oponentes. Em uma situação terrível\nsituação, o talo também pode servir de alimento.",
        "zh-tw": "這只神奇寶貝翅膀上的莖是用來服務的\n作為砍倒對手的利劍。在一個可怕的\n這種情況下，莖也可以當食物。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Leek Slap",
                "fr": "Gifle de Poireaux",
                "es": "Bofetada de puerro",
                "it": "Schiaffo di porri",
                "de": "Lauch-Schlag",
                "pt-br": "Tapa de alho-poró",
                "zh-tw": "韭菜拍打"
            },
            damage: 40,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
