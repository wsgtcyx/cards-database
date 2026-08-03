import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/020",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/020",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/020",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/020",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/020",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/020",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3b/020"
    },
    name: {
        en: "Iron Bundle",
        fr: "Hotte-de-Fer",
        es: "Ferrosaco",
        it: "Saccoferreo",
        de: "Eisenbündel",
        "pt-br": "Pacote Férreo",
        "zh-tw": "鐵包袱",
        ko: "무쇠보따리",
        ja: "テツノツツミ"
    },
    illustrator: "Lee HyunJung",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Water"],
    dexId: [991],
    stage: "Basic",
    description: {
        en: "It resembles a mysterious object mentioned in an old book. There are only two reported sightings of this Pokémon.",
        fr: "Cela ressemble à un objet mystérieux mentionné dans un vieux livre. Il n'y a que deux observations signalées de ce Pokémon.",
        es: "Parece un objeto misterioso mencionado en un libro antiguo. Sólo hay dos avistamientos reportados de este Pokémon.",
        it: "Assomiglia ad un oggetto misterioso menzionato in un vecchio libro. Sono stati segnalati solo due avvistamenti di questo Pokémon.",
        de: "Es ähnelt einem mysteriösen Objekt, das in einem alten Buch erwähnt wird. Es gibt nur zwei gemeldete Sichtungen dieses Pokémon.",
        "pt-br": "Assemelha-se a um objeto misterioso mencionado em um livro antigo. Existem apenas dois avistamentos relatados deste Pokémon.",
        "zh-tw": "它就像一本舊書中提到的神秘物體。據報道，這隻寶可夢的目擊事件只有兩次。"
    },
    attacks: [
        {
            cost: ["Water", "Colorless"],
            name: {
                en: "Bundled Pump",
                fr: "Pompe groupée",
                es: "Bomba incluida",
                it: "Pompa in bundle",
                de: "Gebündelte Pumpe",
                "pt-br": "Bomba empacotada",
                "zh-tw": "整合泵"
            },
            effect: {
                en: "Flip a coin. If heads, this attack does 50 more damage. If tails, this Pokémon also does 50 damage to itself.",
                fr: "Lancez une pièce de monnaie. Si c’est face, cette attaque inflige 50 dégâts supplémentaires. Si c'est pile, ce Pokémon s'inflige également 50 dégâts.",
                es: "Lanza una moneda. Si sale cara, este ataque hace 50 puntos de daño más. Si sale cruz, este Pokémon también se hace 50 puntos de daño a sí mismo.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 50 danni in più. Se esce croce, questo Pokémon infligge anche 50 danni a se stesso.",
                de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 50 Schadenspunkte mehr zu. Bei „Zahl“ fügt sich dieses Pokémon außerdem selbst 50 Schadenspunkte zu.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque causa 50 de dano a mais. Se sair coroa, este Pokémon também causa 50 de dano a si mesmo.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 50 點額外傷害。如果是反面，這隻寶可夢也會對自己造成 50 點傷害。"
            },
            damage: "50+"
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
