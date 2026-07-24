import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/188",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/188"
    },
    name: {
        en: "Flygon ex",
        fr: "Libégon-ex",
        es: "Flygon ex",
        it: "Flygon-ex",
        de: "Libelldra-ex",
        "pt-br": "Flygon ex",
        "zh-tw": "沙漠蜻蜓ex",
        ko: "플라이곤 ex",
        ja: "フライゴンex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 180,
    types: ["Dragon"],
    dexId: [330],
    evolveFrom: {
        en: "Vibrava",
        fr: "Vibraninf",
        es: "Vibrava",
        it: "Vibrava",
        de: "Vibrava",
        "pt-br": "Vibrava",
        "zh-tw": "超音波幼蟲",
        ko: "비브라바",
        ja: "ビブラーバ"
    },
    stage: "Stage2",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Sand Slammer",
                fr: "Sable Slammer",
                es: "Golpe de arena",
                it: "Sbattitore di sabbia",
                de: "Sand-Slammer",
                "pt-br": "Batedor de Areia",
                "zh-tw": "沙宰"
            },
            effect: {
                en: "During Pokémon Checkup, if this Pokémon is in the Active Spot, do 10 damage to each of your opponent's Pokémon.",
                fr: "Lors du Checkup Pokémon, si ce Pokémon est dans le Spot Actif, infligez 10 dégâts à chacun des Pokémon de votre adversaire.",
                es: "Durante el Chequeo Pokémon, si este Pokémon está en el Punto Activo, haz 10 puntos de daño a cada uno de los Pokémon de tu rival.",
                it: "Durante il Controllo Pokémon, se questo Pokémon è in posizione attiva, infliggi 10 danni a ciascuno dei Pokémon del tuo avversario.",
                de: "Wenn sich dieses Pokémon während des Pokémon-Checkups an der aktiven Stelle befindet, füge jedem Pokémon deines Gegners 10 Schadenspunkte zu.",
                "pt-br": "Durante o Pokémon Checkup, se este Pokémon estiver no Active Spot, cause 10 pontos de dano a cada um dos Pokémon do seu oponente.",
                "zh-tw": "寶可夢檢查時，如果該寶可夢在活動位置，則對對手的每隻寶可夢造成 10 點傷害。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Grass", "Fighting", "Colorless"],
            name: {
                en: "Dragon Pulse",
                fr: "Draco-Choc",
                es: "Pulso Dragón",
                it: "Dragopulsar",
                de: "Drachenpuls",
                "pt-br": "Pulso do Dragão",
                "zh-tw": "龍之波動"
            },
            effect: {
                en: "Discard the top card of your deck.",
                fr: "Défaussez la carte du dessus de votre deck.",
                es: "Descarta la carta superior de tu mazo.",
                it: "Scarta la prima carta del tuo mazzo.",
                de: "Lege die oberste Karte deines Decks ab.",
                "pt-br": "Descarte a carta do topo do seu baralho.",
                "zh-tw": "棄掉你牌組最上面的牌。"
            },
            damage: 140
        }
    ],
    retreat: 2
};

export default card;
