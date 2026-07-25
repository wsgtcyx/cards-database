import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/032",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/032",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/032",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/032",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/032",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/032"
    },
    name: {
        en: "Grumpig",
        fr: "Groret",
        es: "Grumpig",
        it: "Grumpig",
        de: "Groink",
        "pt-br": "Grumpig",
        "zh-tw": "噗噗豬",
        ko: "피그킹",
        ja: "ブーピッグ"
    },
    illustrator: "Sanosuke Sakuma",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Psychic"],
    dexId: [326],
    evolveFrom: {
        en: "Spoink",
        fr: "Spoink",
        es: "Spoink",
        it: "Spoink",
        de: "Spoink",
        "pt-br": "Spoink",
        "zh-tw": "跳跳豬",
        ko: "피그점프",
        ja: "バネブー"
    },
    stage: "Stage1",
    description: {
        en: "It uses black pearls to amplify its psychic power. It does a strange dance to control foes’ minds.",
        fr: "Les perles noires amplifient ses pouvoirs psychiques,\nlui permettant de contrôler ses ennemis avec sa danse\nétrange.",
        es: "Las perlas negras aumentan sus poderes psíquicos.\nControla las mentes de sus rivales con un extraño\nbaile.",
        it: "Amplifica i suoi poteri psichici con le sue perle nere.\nSi esibisce anche in danze bizzarre per controllare\ni suoi nemici.",
        de: "Mit schwarzen Perlen verstärkt es seine Psycho-Kräfte.\nMit einem Tanz kontrolliert es seine Gegner.",
        "pt-br": "Ele usa pérolas negras para amplificar seu poder psíquico. Faz uma dança estranha para controlar as mentes dos inimigos.",
        "zh-tw": "它使用黑珍珠來增強自己的精神力量。它透過一種奇怪的舞蹈來控制敵人的思想。"
    },
    attacks: [
        {
            cost: ["Psychic"],
            name: {
                en: "Swaying Dance",
                fr: "Danse Oscillante",
                es: "Danzarandeante",
                it: "Danza Bizzarra",
                de: "Wiegender Tanz",
                "pt-br": "Dança Oscilante",
                "zh-tw": "晃晃舞"
            },
            effect: {
                en: "If your opponent has exactly 2, 4, or 6 cards in their hand, this attack does 40 more damage.",
                fr: "Si votre adversaire a exactement 2, 4 ou 6 cartes en main, cette attaque inflige 40 dégâts supplémentaires.",
                es: "Si tu oponente tiene exactamente 2, 4 o 6 cartas en la mano, este ataque hace 40 daños más.",
                it: "Se il tuo avversario ha esattamente 2, 4 o 6 carte in mano, questo attacco infligge 40 danni in più.",
                de: "Wenn Ihr Gegner genau 2, 4 oder 6 Karten auf der Hand hat, verursacht dieser Angriff 40 weitere Schadenspunkte.",
                "pt-br": "Se o seu oponente tiver exatamente 2, 4 ou 6 cartas na mão, este ataque causa 40 de dano a mais.",
                "zh-tw": "如果對手的手牌剛好有 2、4 或 6 張，則此攻擊造成的傷害增加 40 點。"
            },
            damage: "40+"
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
