import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Magneton",
        "fr": "Magnéton",
        "es": "Magnetón",
        "it": "Magnetone",
        "de": "Magneton",
        "pt-br": "Magnetão",
        "zh-tw": "三合一磁怪",
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 80,
    types: ["Lightning"],
    evolveFrom: {
        en: "Magnemite",
        "fr": "Magnétie",
        "es": "magnemita",
        "it": "Magnemite",
        "de": "Magnemit",
        "pt-br": "Magnemite",
        "zh-tw": "小磁怪",
    },
    description: {
        en: "Three Magnemite are linked by a strong magnetic\nforce. Earaches will occur if you get too close.",
        "fr": "Trois Magnéties sont liées par un fort pouvoir magnétique\nforcer. Des maux d’oreilles surviendront si vous vous approchez trop près.",
        "es": "Tres magnemita están unidas por un fuerte imán.\nfuerza. Se producirán dolores de oído si te acercas demasiado.",
        "it": "Tre Magnemite sono legati da un forte magnetismo\nforza. Se ti avvicini troppo ti verranno mal d'orecchi.",
        "de": "Drei Magnemite sind durch einen starken Magneten verbunden\nKraft. Wenn Sie zu nahe kommen, treten Ohrenschmerzen auf.",
        "pt-br": "Três Magnemite estão ligadas por um forte campo magnético\nforça. Dores de ouvido ocorrerão se você chegar muito perto.",
        "zh-tw": "三個磁鐵礦通過強磁性連接在一起\n力。如果距離太近，就會出現耳痛。"
    },
    stage: "Stage1",
    abilities: [{
            type: "Ability",
            name: {
                en: "Volt Charge",
                "fr": "Charge en volts",
                "es": "Carga de voltios",
                "it": "Carica Volt",
                "de": "Volt-Ladung",
                "pt-br": "Carga Volt",
                "zh-tw": "電壓充電"
            },
            effect: {
                en: "Once during your turn, you may take a {L} Energy from your Energy Zone and attach it to this Pokémon.",
                "fr": "Une fois pendant votre tour, vous pouvez prendre une Énergie {L} de votre Zone d'Énergie et l'attacher à ce Pokémon.",
                "es": "Una vez durante tu turno, puedes tomar una Energía {L} de tu Zona de Energía y unirla a este Pokémon.",
                "it": "Una sola volta durante il tuo turno, puoi prendere un'Energia {L} dalla tua Zona Energetica e assegnarla a questo Pokémon.",
                "de": "Einmal während deines Zuges kannst du eine {L}-Energie aus deiner Energiezone nehmen und sie an dieses Pokémon anlegen.",
                "pt-br": "Uma vez durante o seu turno, você pode pegar uma Energia {L} da sua Zona de Energia e associá-la a este Pokémon.",
                "zh-tw": "在你的回合中，你可以從你的能量區取出一個{L}能量並將其附加到這只神奇寶貝身上。"
            }
        }],
    attacks: [{
            name: {
                en: "Spinning Attack",
                "fr": "Attaque tournoyante",
                "es": "Ataque giratorio",
                "it": "Attacco rotante",
                "de": "Spinnangriff",
                "pt-br": "Ataque giratório",
                "zh-tw": "旋轉攻擊"
            },
            damage: 60,
            cost: ["Lightning", "Colorless", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["lugia"]
};
export default card;
