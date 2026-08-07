import { Card } from "../../../interfaces";
import Set from "../Celestial Guardians";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3/057",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3/057",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3/057",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3/057",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3/057",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3/057",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3/057"
    },
    name: {
        en: "Pikachu",
        fr: "Pikachu",
        es: "Pikachu",
        it: "Pikachu",
        de: "Pikachu",
        'pt-br': "Pikachu",
        ko: "피카츄",
        "zh-tw": "皮卡丘"
    },
    illustrator: "Naoyo Kimura",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    description: {
        en: "When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.",
        fr: "Quand il s'énerve, il libère instantanément\nl'énergie emmagasinée dans les poches de\nses joues.",
        es: "Cuando se enfada, este Pokémon\ndescarga la energía que almacena en\nel interior de las bolsas de las mejillas.",
        it: "Quando s'arrabbia, libera subito l'energia\naccumulata nelle sacche sulle guance.",
        de: "Ist es wütend, entlädt sich augenblicklich die\nElektrizität, die es in seinen Backentaschen\ngespeichert hat.",
        'pt-br': "Quando está com raiva, descarrega\nimediatamente a energia armazenada\nnas bolsas em suas bochechas.",
        ko: "양 볼에는 전기를 저장하는 주머니가 있다.\n화가 나면 저장한 전기를 단숨에 방출한다.",
        "zh-tw": "當它被激怒時，它會立即釋放臉頰眼袋中儲存的能量。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Tail Smack",
                fr: "Coup de Queue",
                es: "Bofetón Cola",
                it: "Codasberla",
                de: "Schweifschlag",
                'pt-br': "Ataque de Cauda",
                ko: "꼬리로때리기",
                "zh-tw": "尾巴拍打"
            },
            damage: 30,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["solgaleo"]
};
export default card;
