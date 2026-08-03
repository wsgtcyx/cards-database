import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/051",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/051",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/051",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/051",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/051",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/051",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/051"
    },
    name: {
        en: "Rapid Strike Urshifu",
        fr: "Shifours Mille Poings",
        es: "Urshifu Golpe Fluido",
        it: "Urshifu Stile Pluricolpo",
        de: "Wulaosu Fließender Stil",
        "pt-br": "Urshifu Golpe Fluido",
        "zh-tw": "連擊武道熊師",
        ko: "연격 우라오스",
        ja: "れんげきウーラオス"
    },
    illustrator: "nagimiso",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Water"],
    dexId: [892],
    evolveFrom: {
        en: "Kubfu",
        fr: "Wushours",
        es: "Kubfu",
        it: "Kubfu",
        de: "Dakuma",
        "pt-br": "Kubfu",
        "zh-tw": "熊徒弟",
        ko: "치고마",
        ja: "ダクマ"
    },
    stage: "Stage1",
    description: {
        en: "This form of Urshifu is a strong believer in defeating foes by raining many blows down on them. Its strikes are nonstop, flowing like a river.",
        fr: "Cette forme de Shifours croit fermement à la nécessité de vaincre les ennemis en leur faisant pleuvoir de nombreux coups. Ses frappes sont incessantes, coulant comme une rivière.",
        es: "Esta forma de Urshifu cree firmemente en derrotar a los enemigos lanzándoles muchos golpes. Sus ataques son incesantes y fluyen como un río.",
        it: "Questa forma di Urshifu crede fermamente nello sconfiggere i nemici facendo piovere su di loro molti colpi. I suoi colpi sono continui e scorrono come un fiume.",
        de: "Diese Form von Wulaosu glaubt fest daran, Feinde zu besiegen, indem man viele Schläge auf sie niederprasselt. Seine Schläge sind ununterbrochen und fließen wie ein Fluss.",
        "pt-br": "Esta forma de Urshifu acredita firmemente em derrotar os inimigos desferindo muitos golpes sobre eles. Seus ataques são ininterruptos, fluindo como um rio.",
        "zh-tw": "這種形式的 武道熊師 堅信透過對敵人進行大量打擊來擊敗他們。其攻擊連綿不絕，如河水般流淌。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Double Type",
                fr: "Type double",
                es: "Tipo doble",
                it: "Doppio tipo",
                de: "Doppelter Typ",
                "pt-br": "Tipo Duplo",
                "zh-tw": "雙重屬性"
            },
            effect: {
                en: "As long as this Pokémon is in play, it is {W} and {F} type.",
                fr: "Tant que ce Pokémon est en jeu, il est de type {W} et {F}.",
                es: "Mientras este Pokémon esté en juego, es de tipo {W} y {F}.",
                it: "Finché questo Pokémon è in gioco, è di tipo {W} e {F}.",
                de: "Solange dieses Pokémon im Spiel ist, ist es vom Typ {W} und {F}.",
                "pt-br": "Enquanto este Pokémon estiver em jogo, ele será do tipo {W} e {F}.",
                "zh-tw": "只要這隻寶可夢在場，它就是{W}和{F}類型。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Water", "Colorless"],
            name: {
                en: "Tornado Shot",
                fr: "Tir Tornade",
                es: "Disparo Tornado",
                it: "Colpo Tornado",
                de: "Tornadoschuss",
                "pt-br": "Disparo de Tornado",
                "zh-tw": "龍捲射擊"
            },
            effect: {
                en: "Discard a {W} Energy from this Pokémon, and this attack also does 40 damage to 1 of your opponent's Benched Pokémon.",
                fr: "Défaussez une Énergie {W} de ce Pokémon, et cette attaque inflige également 40 dégâts à l'un des Pokémon de Banc de votre adversaire.",
                es: "Descarta una Energía {W} de este Pokémon, y este ataque también hace 40 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
                it: "Scarta un'Energia {W} da questo Pokémon e questo attacco infligge anche 40 danni a 1 dei Pokémon nella panchina del tuo avversario.",
                de: "Wirf eine {W}-Energie von diesem Pokémon ab und dieser Angriff fügt außerdem 1 Pokémon auf der Bank deines Gegners 40 Schadenspunkte zu.",
                "pt-br": "Descarte uma Energia {W} deste Pokémon e este ataque também causará 40 de dano a 1 dos Pokémon no Banco do seu oponente.",
                "zh-tw": "丟棄這隻寶可夢的 {W} 能量，而此攻擊還會對對手後備的 1 隻寶可夢造成 40 點傷害。"
            },
            damage: 40
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
