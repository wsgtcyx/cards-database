import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/076",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/076",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/076",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/076",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/076",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/076",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/076"
    },
    name: {
        en: "Inteleon",
        fr: "Lézargus",
        es: "Inteleon",
        it: "Inteleon",
        de: "Intelleon",
        "pt-br": "Inteleon",
        "zh-tw": "千面避役",
        ja: "インテレオン",
        ko: "인텔리레온"
    },
    illustrator: "Krgc",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: [
        "Water"
    ],
    dexId: [
        818
    ],
    evolveFrom: {
        en: "Drizzile",
        fr: "Arrozard",
        es: "Drizzile",
        it: "Drizzile",
        de: "Phlegleon",
        "pt-br": "Drizzile",
        "zh-tw": "變澀蜥",
        ja: "Drizzile",
        ko: "Drizzile"
    },
    stage: "Stage2",
    description: {
        en: "It may present itself as being well-mannered, but deep down, it still has a lazy side. It will slack off when its Trainer isn’t looking.",
        fr: "Il agit de manière distinguée, mais c'est en réalité un partenaire toujours aussi paresseux qui flâne dès qu'on a le dos tourné.",
        es: "Muestra un comportamiento educado, pero en el fondo sigue siendo perezoso. En cuanto su Entrenador se gira, se pone a holgazanear.",
        it: "Sfoggia modi signorili, ma in realtà è un pigrone che approfitta di ogni distrazione di chi lo allena per battere la fiacca.",
        de: "Es präsentiert sich gern gesittet, aber im Herzen ist und bleibt es ein Faulpelz. Lässt sein Trainer es aus den Augen, gönnt es sich eine Auszeit.",
        "pt-br": "Aparenta ter boas maneiras, mas, no fundo, tem um lado preguiçoso. Vai mandriar quando seu Treinador não estiver de olho.",
        "zh-tw": "雖然表現得很有紳士風度，但生性懶惰的部分依舊沒變，因此在訓練家沒看著牠時就會偷懶。",
        ja: "It may present itself as being well-mannered, but deep down, it still has a lazy side. It will slack off when its Trainer isn’t looking.",
        ko: "It may present itself as being well-mannered, but deep down, it still has a lazy side. It will slack off when its Trainer isn’t looking."
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Swift Shot",
                fr: "Tir Soudain",
                es: "Disparo Dinámico",
                it: "Sparo Rapido",
                de: "Schneller Schuss",
                "pt-br": "Disparo Diligente",
                "zh-tw": "快攻",
                ja: "Swift Shot",
                ko: "Swift Shot"
            },
            effect: {
                en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may do 30 damage to your opponent's Active Pokémon.",
                fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer un de vos Pokémon, vous pouvez infliger 30 dégâts au Pokémon Actif de votre adversaire.",
                es: "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon, puedes hacer 30 puntos de daño al Pokémon Activo de tu rival.",
                it: "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi infliggere 30 danni al Pokémon attivo del tuo avversario.",
                de: "Einmal während deines Zuges, wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du dem Aktiven Pokémon deines Gegners 30 Schadenspunkte zufügen.",
                "pt-br": "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá causar 30 pontos de dano ao Pokémon Ativo do seu oponente.",
                "zh-tw": "在自己的回合,當從手牌使出這張卡並完成進化時,可使用1次。對手的戰鬥寶可夢受到30點傷害。",
                ja: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may do 30 damage to your opponent's Active Pokémon.",
                ko: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may do 30 damage to your opponent's Active Pokémon."
            }
        }
    ],
    attacks: [
        {
            cost: [
                "Water",
                "Water"
            ],
            name: {
                en: "Aqua Edge",
                fr: "Aqua-Dague",
                es: "Filo Agua",
                it: "Acquataglio",
                de: "Aquaschneide",
                "pt-br": "Aqua Gume",
                "zh-tw": "水之刀鋒",
                ja: "Aqua Edge",
                ko: "Aqua Edge"
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
