import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/037",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/037"
    },
    name: {
        en: "Vaporeon ex",
        fr: "Aquali-ex",
        es: "Vaporeon ex",
        it: "Vaporeon-ex",
        de: "Aquana-ex",
        "pt-br": "Vaporeon ex",
        "zh-tw": "水伊布ex",
        ko: "샤미드 ex",
        ja: "シャワーズex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 160,
    types: ["Water"],
    dexId: [134],
    evolveFrom: {
        en: "Eevee",
        fr: "Évoli",
        es: "Eevee",
        it: "Eevee",
        de: "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布",
        ko: "이브이",
        ja: "イーブイ"
    },
    stage: "Stage1",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Frozen Flow",
                fr: "Flux gelé",
                es: "Flujo congelado",
                it: "Flusso congelato",
                de: "Gefrorener Fluss",
                "pt-br": "Fluxo Congelado",
                "zh-tw": "嚴寒水流"
            },
            effect: {
                en: "Once during your turn, if this Pokémon is in the Active Spot, you may switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
                fr: "Une fois pendant votre tour, si ce Pokémon est sur le Point Actif, vous pouvez transférer le Pokémon Actif de votre adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
                es: "Una vez durante tu turno, si este Pokémon está en el Punto Activo, puedes cambiar el Pokémon Activo de tu rival a la Banca. (Tu oponente elige el nuevo Pokémon Activo).",
                it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi mettere in panchina il Pokémon attivo del tuo avversario. (Il tuo avversario sceglie il nuovo Pokémon attivo.)",
                de: "Wenn sich dieses Pokémon einmal während deines Zuges an der aktiven Stelle befindet, kannst du das aktive Pokémon deines Gegners auf die Bank tauschen. (Dein Gegner wählt das neue Aktive Pokémon.)",
                "pt-br": "Uma vez durante o seu turno, se este Pokémon estiver no Ponto Ativo, você poderá trocar o Pokémon Ativo do seu oponente para o Banco. (Seu oponente escolhe o novo Pokémon Ativo.)",
                "zh-tw": "在你的回合中，如果這隻寶可夢位於活躍位置，你可以將對手的活躍寶可夢切換到替補席。 （你的對手選擇新的活躍寶可夢。）"
            }
        }
    ],
    attacks: [
        {
            cost: ["Water", "Water"],
            name: {
                en: "Wave Splash",
                fr: "Grosse Vague",
                es: "Chapoteo Ondulante",
                it: "Schizzi d'Onda",
                de: "Wellenplatscher",
                "pt-br": "Onda Borrifante",
                "zh-tw": "飛濺"
            },
            damage: 80
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
