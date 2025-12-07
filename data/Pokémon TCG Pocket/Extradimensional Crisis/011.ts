import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Carvanha",
        "fr": "Carvanha",
        "es": "Carvanha",
        "it": "Carvanha",
        "de": "Carvanha",
        "pt-br": "Carvanha",
        "zh-tw": "卡瓦尼亞"
    },
    illustrator: "Hideki Ishikawa",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "It won't attack while it's alone—not even if it\nspots prey. Instead, it waits for other Carvanha to\njoin it, and then the Pokémon attack as a group.",
        "fr": "Il n'attaquera pas tant qu'il est seul, même s'il\nrepère des proies. Au lieu de cela, il attend que d'autres Carvanha\nrejoignez-le, puis les Pokémon attaquent en groupe.",
        "es": "No atacará mientras esté solo, ni siquiera si\ndetecta presas. En cambio, espera a que otros Carvanha\núnete a él y luego los Pokémon atacan como grupo.",
        "it": "Non attaccherà mentre è da solo, nemmeno se lo fosse\nindividua la preda. Invece, aspetta che lo facciano altri Carvanha\nunisciti ad esso, quindi i Pokémon attaccano in gruppo.",
        "de": "Es greift nicht an, solange es alleine ist – nicht einmal wenn es so ist\nentdeckt Beute. Stattdessen wartet es darauf, dass andere Carvanha es tun\nSchließen Sie sich ihm an und dann greifen die Pokémon als Gruppe an.",
        "pt-br": "Ele não atacará enquanto estiver sozinho – nem mesmo se\navista a presa. Em vez disso, espera que outro Carvanha\njunte-se a ele e então os Pokémon atacam como um grupo.",
        "zh-tw": "當它獨自一人時它不會攻擊——即使它\n斑點獵物。相反，它會等待其他 Carvanha 來\n加入它，然後神奇寶貝就會集體攻擊。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Bite",
                "fr": "Mordre",
                "es": "Morder",
                "it": "Morso",
                "de": "Beißen",
                "pt-br": "Morder",
                "zh-tw": "咬"
            },
            damage: 20,
            cost: ["Water"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
