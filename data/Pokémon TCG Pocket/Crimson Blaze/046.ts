import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Muk",
        "fr": "Grotadmorv",
        "es": "Muk",
        "it": "Muk",
        "de": "Sleimok",
        "pt-br": "Muk",
        "zh-tw": "臭臭泥"
    },
    illustrator: "Scav",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Darkness"],
    evolveFrom: {
        en: "Grimer",
        "fr": "Tadmorv",
        "es": "Grimer",
        "it": "Grimer",
        "de": "Sleima",
        "pt-br": "Grimer",
        "zh-tw": "臭泥"
    },
    description: {
        en: "They love to gather in smelly areas where sludge\naccumulates, making the stench around\nthem worse.",
        "fr": "Ils adorent se rassembler dans les zones malodorantes où les boues\ns'accumule, rendant la puanteur autour\neux pire.",
        "es": "Les encanta reunirse en áreas malolientes donde el lodo\nse acumula, haciendo que el hedor alrededor\nellos peores.",
        "it": "Amano riunirsi in zone maleodoranti dove si depositano i fanghi\nsi accumula, facendo fetore in giro\nloro peggio.",
        "de": "Sie lieben es, sich an stinkenden Orten zu versammeln, wo es Schlamm gibt\nsammelt sich an und macht den Gestank überall\nsie schlimmer.",
        "pt-br": "Eles adoram se reunir em áreas malcheirosas onde o lodo\nacumula, fazendo o fedor ao redor\neles piores.",
        "zh-tw": "它們喜歡聚集在有污泥、有臭味的地方\n積聚，使周圍惡臭\n他們更糟。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Gunk Shot",
                "fr": "Tir de crasse",
                "es": "Disparo de mugre",
                "it": "Colpo di Gunk",
                "de": "Gunk Shot",
                "pt-br": "Tiro de gosma",
                "zh-tw": "垃圾射擊"
            },
            damage: 70,
            cost: ["Darkness", "Darkness", "Darkness"],
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Empoisonné.",
                "es": "El Pokémon Activo de tu rival ahora está Envenenado.",
                "it": "Il Pokémon attivo del tuo avversario ora è avvelenato.",
                "de": "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Envenenado.",
                "zh-tw": "你對手的主動神奇寶貝現在中毒了。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 3
};
export default card;
