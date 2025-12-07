import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Exeggcute",
        "fr": "Oeuf mignon",
        "es": "Ejecutar",
        "it": "Exeggcute",
        "de": "Exeggcute",
        "pt-br": "Exeggcute",
        "zh-tw": "蛋蛋可愛"
    },
    illustrator: "kawayoo",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Grass"],
    description: {
        en: "Though it may look like it's just a bunch of eggs,\nit's a proper Pokémon. Exeggcute communicates\nwith others of its kind via telepathy, apparently.",
        "fr": "Même si on dirait qu'il ne s'agit que d'un tas d'œufs,\nc'est un vrai Pokémon. Exeggcute communique\navec d'autres de son espèce par télépathie, apparemment.",
        "es": "Aunque parezca que son sólo un montón de huevos,\nes un Pokémon apropiado. Exeggcute se comunica\naparentemente con otros de su tipo a través de la telepatía.",
        "it": "Anche se può sembrare solo un mucchio di uova,\nè un vero Pokémon. Exeggcute comunica\ncon altri della sua specie tramite telepatia, a quanto pare.",
        "de": "Auch wenn es vielleicht so aussieht, als wäre es nur ein Haufen Eier,\nEs ist ein richtiges Pokémon. Exeggcute kommuniziert\nmit anderen seiner Art offenbar über Telepathie.",
        "pt-br": "Embora possa parecer apenas um monte de ovos,\né um Pokémon adequado. Exeggcute se comunica\ncom outros de sua espécie via telepatia, aparentemente.",
        "zh-tw": "雖然看起來只是一堆雞蛋，\n這是一隻真正的神奇寶貝。 Exeggcute 溝通\n顯然，是通過心靈感應與其他同類進行交流。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Seed Bomb",
                "fr": "Bombe à graines",
                "es": "Bomba de semillas",
                "it": "Bomba di semi",
                "de": "Samenbombe",
                "pt-br": "Bomba de sementes",
                "zh-tw": "種子炸彈"
            },
            damage: 20,
            cost: ["Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
