import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Hoothoot",
        "fr": "Hulu",
        "es": "silbido",
        "it": "Che schifo",
        "de": "Hurra",
        "pt-br": "Uau",
        "zh-tw": "咕咕",
    },
    illustrator: "Uninori",
    rarity: "One Star",
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
