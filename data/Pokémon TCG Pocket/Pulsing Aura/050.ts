import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/050",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/050",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/050",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/050",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/050",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/050"
    },
    name: {
        en: "Inteleon",
        fr: "Lézargus",
        es: "Inteleon",
        it: "Inteleon",
        de: "Intelleon",
        "pt-br": "Inteleon",
        "zh-tw": "千面避役",
        ko: "인텔리레온",
        ja: "インテレオン"
    },
    illustrator: "Krgc",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Water"],
    dexId: [818],
    evolveFrom: {
        en: "Drizzile",
        fr: "Arrozard",
        es: "Drizzile",
        it: "Drizzile",
        de: "Phlegleon",
        "pt-br": "Drizzile",
        "zh-tw": "變澀蜥",
        ko: "누겔레온",
        ja: "ジメレオン"
    },
    stage: "Stage2",
    description: {
        en: "It may present itself as being well-mannered, but deep down, it still has a lazy side. It will slack off when its Trainer isn’t looking.",
        fr: "Il a beau se présenter comme étant bien élevé, il a néanmoins au fond un côté paresseux. Il se relâchera lorsque son dresseur ne le regardera pas.",
        es: "Puede parecer educado, pero en el fondo todavía tiene un lado perezoso. Se aflojará cuando su entrenador no esté mirando.",
        it: "Può sembrare educato, ma nel profondo ha ancora un lato pigro. Si rallenterà quando il suo Allenatore non lo guarderà.",
        de: "Es mag sich als gut erzogen präsentieren, aber tief im Inneren hat es immer noch eine faule Seite. Es lässt nach, wenn sein Trainer nicht hinschaut.",
        "pt-br": "Pode se apresentar como bem-educado, mas no fundo ainda tem um lado preguiçoso. Ele irá relaxar quando seu Treinador não estiver olhando.",
        "zh-tw": "它可能表面上表現得彬彬有禮，但內心深處仍然有懶惰的一面。當訓練家不注意時，它就會懈怠。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Swift Shot",
                fr: "Tir rapide",
                es: "Disparo rápido",
                it: "Tiro rapido",
                de: "Schneller Schuss",
                "pt-br": "Tiro Rápido",
                "zh-tw": "快攻"
            },
            effect: {
                en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may do 30 damage to your opponent's Active Pokémon.",
                fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon depuis votre main pour faire évoluer 1 de vos Pokémon, vous pouvez infliger 30 dégâts au Pokémon Actif de votre adversaire.",
                es: "Una vez durante tu turno, cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes hacer 30 puntos de daño al Pokémon Activo de tu rival.",
                it: "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi infliggere 30 danni al Pokémon attivo del tuo avversario.",
                de: "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du dem Aktiven Pokémon deines Gegners 30 Schadenspunkte zufügen.",
                "pt-br": "Uma vez durante a sua vez de jogar, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá causar 30 de dano ao Pokémon Ativo do seu oponente.",
                "zh-tw": "在你的回合中，當你從手牌中使用這隻寶可夢來進化你的一隻寶可夢時，你可以對對手的活躍寶可夢造成30點傷害。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Water", "Water"],
            name: {
                en: "Aqua Edge",
                fr: "Aqua-Dague",
                es: "Filo Agua",
                it: "Acquataglio",
                de: "Aquaschneide",
                "pt-br": "Aqua Gume",
                "zh-tw": "水之刀鋒"
            },
            damage: 70
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
