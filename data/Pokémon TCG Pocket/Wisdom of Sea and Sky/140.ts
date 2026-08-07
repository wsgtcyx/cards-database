import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/140",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/140",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/140",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/140",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/140",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/140",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/140"
    },
    name: {
        en: "Hoothoot",
        "fr": "Hoothoot",
        "es": "Hoothoot",
        "it": "Hoothoot",
        "de": "Hoothoot",
        "pt-br": "Hoothoot",
        "zh-tw": "咕咕",
    },
    illustrator: "Yumi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Colorless"],
    description: {
        en: "It always stands on one foot. It changes feet so\nfast, the movement can rarely be seen.",
        "fr": "Il se tient toujours sur un pied. Ça change de pied donc\nrapide, le mouvement est rarement visible.",
        "es": "Siempre se apoya en un pie. Cambia de pie así\nrápido, el movimiento rara vez se puede ver.",
        "it": "Sta sempre su un piede. Cambia piede così\nveloce, il movimento raramente può essere visto.",
        "de": "Es steht immer auf einem Bein. Es verändert die Füße so\nschnell, die Bewegung ist selten zu sehen.",
        "pt-br": "Ele sempre fica em um pé só. Ele muda os pés então\nrápido, o movimento raramente pode ser visto.",
        "zh-tw": "它總是用一隻腳站立。它改變腳所以\n速度很快，很難看到動靜。"
    },
    stage: "Basic",
    abilities: [{
            type: "Ability",
            name: {
                en: "Insomnia",
                "fr": "Insomnie",
                "es": "Insomnio",
                "it": "Insonnia",
                "de": "Schlaflosigkeit",
                "pt-br": "Insônia",
                "zh-tw": "失眠"
            },
            effect: {
                en: "This Pokémon can't be Asleep.",
                "fr": "Ce Pokémon ne peut pas dormir.",
                "es": "Este Pokémon no puede estar Dormido.",
                "it": "Questo Pokémon non può essere addormentato.",
                "de": "Dieses Pokémon kann nicht schlafen.",
                "pt-br": "Este Pokémon não pode estar dormindo.",
                "zh-tw": "該寶可夢無法休眠。"
            }
        }],
    attacks: [{
            name: {
                en: "Wing Attack",
                "fr": "Attaque d'aile",
                "es": "Ataque de ala",
                "it": "Attacco d'ala",
                "de": "Flügelangriff",
                "pt-br": "Ataque de asa",
                "zh-tw": "翼攻擊"
            },
            damage: 30,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
