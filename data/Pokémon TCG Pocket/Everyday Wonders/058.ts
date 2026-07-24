import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/058",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/058"
    },
    name: {
        en: "Ursaluna",
        fr: "Ursaking",
        es: "Ursaluna",
        it: "Ursaluna",
        de: "Ursaluna",
        "pt-br": "Ursaluna",
        "zh-tw": "月月熊",
        ko: "다투곰",
        ja: "ガチグマ"
    },
    illustrator: "Hitoshi Ariga",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 160,
    types: ["Colorless"],
    dexId: [901],
    evolveFrom: {
        en: "Ursaring",
        fr: "Ursaring",
        es: "Ursaring",
        it: "Ursaring",
        de: "Ursaring",
        "pt-br": "Ursaring",
        "zh-tw": "圈圈熊",
        ko: "링곰",
        ja: "リングマ"
    },
    stage: "Stage2",
    description: {
        en: "I believe it was Hisui’s swampy terrain that gave Ursaluna its burly physique and newfound capacity to manipulate peat at will.",
        fr: "Je crois que c'est le terrain marécageux d'Hisui qui a donné à Ursaking son physique robuste et sa nouvelle capacité à manipuler la tourbe à volonté.",
        es: "Creo que fue el terreno pantanoso de Hisui lo que le dio a Ursaluna su físico corpulento y su nueva capacidad para manipular la turba a voluntad.",
        it: "Credo che sia stato il terreno paludoso di Hisui a conferire a Ursaluna il suo fisico corpulento e la ritrovata capacità di manipolare la torba a piacimento.",
        de: "Ich glaube, es war Hisuis sumpfiges Gelände, das Ursaluna seinen kräftigen Körperbau und die neu entdeckte Fähigkeit verlieh, Torf nach Belieben zu manipulieren.",
        "pt-br": "Acredito que foi o terreno pantanoso de Hisui que deu ao Ursaluna seu físico corpulento e sua nova capacidade de manipular turfa à vontade.",
        "zh-tw": "我相信翡翠的沼澤地形賦予了 月月熊 魁梧的體格和隨意操縱泥炭的新能力。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Guts",
                fr: "Cran",
                es: "Agallas",
                it: "Dentistretti",
                de: "Adrenalin",
                "pt-br": "Tenacidade",
                "zh-tw": "毅力"
            },
            effect: {
                en: "If this Pokémon would be Knocked Out by damage from an attack, flip a coin. If heads, this Pokémon is not Knocked Out, and its remaining HP becomes 10.",
                fr: "Si ce Pokémon doit être mis K.O. par les dégâts d'une attaque, lancez une pièce. Si c'est face, ce Pokémon n'est pas mis K.O. et il lui reste 10 PV.",
                es: "Si este Pokémon fuese a quedar Fuera de Combate por el daño de un ataque, lanza 1 moneda. Si sale cara, este Pokémon no queda Fuera de Combate, y sus PS restantes pasan a ser 10.",
                it: "Se questo Pokémon sta per essere messo KO dai danni di un attacco, lancia una moneta. Se esce testa, il Pokémon non viene messo KO e i suoi PS rimanenti diventano 10.",
                de: "Wenn dieses Pokémon durch Schaden einer Attacke kampfunfähig würde, wirf 1 Münze. Bei Kopf wird dieses Pokémon nicht kampfunfähig und seine verbleibenden KP sind gleich 10.",
                "pt-br": "Se este Pokémon estiver prestes a ser Nocauteado pelo dano de um ataque, jogue uma moeda. Se sair cara, este Pokémon não será Nocauteado e o PS restante dele será 10.",
                "zh-tw": "如果這只寶可夢因攻擊造成的傷害而被擊倒，則擲硬幣。如果正面，則該寶可夢不會被擊倒，其剩餘 HP 變為 10。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
            name: {
                en: "Hammer Arm",
                fr: "Marto-Poing",
                es: "Machada",
                it: "Martelpugno",
                de: "Hammerarm",
                "pt-br": "Braço de Martelo",
                "zh-tw": "臂錘"
            },
            effect: {
                en: "Discard the top card of your opponent's deck.",
                fr: "Défaussez la carte du dessus du deck de votre adversaire.",
                es: "Descarta la carta superior del mazo de tu oponente.",
                it: "Scarta la prima carta del mazzo del tuo avversario.",
                de: "Wirf die oberste Karte des Decks deines Gegners ab.",
                "pt-br": "Descarte a carta do topo do baralho do seu oponente.",
                "zh-tw": "丟棄對手牌組頂牌。"
            },
            damage: 110
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
