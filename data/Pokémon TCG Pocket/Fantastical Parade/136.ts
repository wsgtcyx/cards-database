import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/136"
    },
    name: {
        en: "Slaking",
        "fr": "L'extinction",
        "es": "Apagar",
        "it": "Schiacciamento",
        "de": "Löschen",
        "pt-br": "Abrandamento",
        "zh-tw": "熟化"
    },
    illustrator: "Masakazu Fukuda",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 160,
    types: ["Colorless"],
    evolveFrom: {
        en: "Vigoroth",
        "fr": "Vigoroth",
        "es": "Vigorot",
        "it": "Vigoroth",
        "de": "Vigoroth",
        "pt-br": "Vigoroth",
        "zh-tw": "維戈羅斯"
    },
    description: {
        en: "This Pokémon lives lying on its side. It only\nrolls over and moves when there is no more\ngrass to eat.",
        "fr": "Ce Pokémon vit couché sur le côté. C'est seulement\nse retourne et bouge quand il n'y en a plus\nde l'herbe à manger.",
        "es": "Este Pokémon vive tumbado de lado. solo\nse da vuelta y se mueve cuando ya no hay más\nhierba para comer.",
        "it": "Questo Pokémon vive sdraiato su un fianco. Solo\nsi ribalta e si muove quando non c'è più\nerba da mangiare.",
        "de": "Dieses Pokémon liegt auf der Seite. Es nur\nrollt um und bewegt sich, wenn nichts mehr da ist\nGras zum Essen.",
        "pt-br": "Este Pokémon vive deitado de lado. É apenas\nrola e se move quando não há mais\ngrama para comer.",
        "zh-tw": "這只寶可夢側躺著生活。它僅\n當沒有更多的時候翻滾並移動\n草來吃。"
    },
    stage: "Stage2",
    abilities: [{
            type: "Ability",
            name: {
                en: "Snoozing Habit",
                "fr": "Habitude de dormir",
                "es": "Hábito de dormir",
                "it": "Abitudine al sonnellino",
                "de": "Schlafgewohnheit",
                "pt-br": "Hábito de cochilar",
                "zh-tw": "打瞌睡的習慣"
            },
            effect: {
                en: "As long as this Pokémon is in the Active Spot, whenever you attach an Energy from your Energy Zone to it, it is now Asleep.",
                "fr": "Tant que ce Pokémon est sur le Poste Actif, lorsque vous lui attachez une Énergie de votre zone Énergie, il est désormais Endormi.",
                "es": "Mientras este Pokémon esté en el Puesto Activo, cada vez que le unas 1 Energía de tu área de Energía, pasa a estar Dormido.",
                "it": "Fintanto che questo Pokémon è in posizione attiva, ogni volta che gli assegni un'Energia dalla tua Zona Energia, il Pokémon viene addormentato.",
                "de": "Jedes Mal, wenn du 1 Energie aus dem Energiebereich an dieses Pokémon anlegst und es sich in der Aktiven Position befindet, ist dieses Pokémon jetzt schläft.",
                "pt-br": "Enquanto este Pokémon estiver no Campo Ativo, sempre que você ligar uma Energia da sua Zona de Energia a ele, ele agora estará Adormecido.",
                "zh-tw": "只要該神奇寶貝位於活動點，每當您從能量區向其附加能量時，它就會處於睡眠狀態。"
            }
        }],
    attacks: [{
            name: {
                en: "Knuckle Sandwich",
                "fr": "Sandwich aux jarrets",
                "es": "Sándwich de nudillos",
                "it": "Panino alle nocche",
                "de": "Knuckle-Sandwich",
                "pt-br": "Sanduíche de junta",
                "zh-tw": "指節三明治"
            },
            damage: 150,
            cost: ["Colorless", "Colorless", "Colorless"],
            effect: {
                en: "Discard a random Energy from this Pokémon.",
                "fr": "Défaussez une Énergie aléatoire de ce Pokémon.",
                "es": "Descarta una Energía aleatoria de este Pokémon.",
                "it": "Scarta un'Energia casuale da questo Pokémon.",
                "de": "Lege eine zufällige Energie von diesem Pokémon ab.",
                "pt-br": "Descarte uma Energia aleatória deste Pokémon.",
                "zh-tw": "丟棄該神奇寶貝的隨機能量。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 4
};
export default card;
