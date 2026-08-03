import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/027",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/027",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/027",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/027",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/027",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/027",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/027"
    },
    name: {
        en: "Pignite",
        fr: "Grotichon",
        es: "Pignite",
        it: "Pignite",
        de: "Ferkokel",
        "pt-br": "Pignite",
        "zh-tw": "炒炒豬",
        ko: "차오꿀",
        ja: "チャオブー"
    },
    illustrator: "Shin Nagasawa",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fire"],
    dexId: [499],
    evolveFrom: {
        en: "Tepig",
        fr: "Gruikui",
        es: "Tepig",
        it: "Tepig",
        de: "Floink",
        "pt-br": "Tepig",
        "zh-tw": "暖暖豬",
        ko: "뚜꾸리",
        ja: "ポカブ"
    },
    stage: "Stage1",
    description: {
        en: "When defending its friends, Pignite will stand up to any opponent, no matter how strong. But it’s powerless when faced with an empty stomach.",
        fr: "Lorsqu'il défend ses amis, Grotichon tiendra tête à n'importe quel adversaire, quelle que soit sa force. Mais il est impuissant face à un estomac vide.",
        es: "Al defender a sus amigos, Pignite se enfrentará a cualquier oponente, sin importar cuán fuerte sea. Pero es impotente ante el estómago vacío.",
        it: "Quando difende i suoi amici, Pignite resiste a qualsiasi avversario, non importa quanto sia forte. Ma è impotente di fronte allo stomaco vuoto.",
        de: "Bei der Verteidigung seiner Freunde hält Ferkokel jedem Gegner stand, egal wie stark er ist. Aber mit leerem Magen ist es machtlos.",
        "pt-br": "Ao defender seus amigos, Pignite enfrentará qualquer oponente, por mais forte que seja. Mas é impotente quando confrontado com o estômago vazio.",
        "zh-tw": "當捍衛朋友時，炒炒豬將對抗任何對手，無論對手有多強大。但面對空腹時卻無能為力。"
    },
    attacks: [
        {
            cost: ["Fire", "Fire", "Colorless"],
            name: {
                en: "Magma Punch",
                fr: "Poing Magma",
                es: "Puño de Magma",
                it: "Magma-Pugno",
                de: "Magmahieb",
                "pt-br": "Soco de Magma",
                "zh-tw": "熔岩拳"
            },
            damage: 60
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
