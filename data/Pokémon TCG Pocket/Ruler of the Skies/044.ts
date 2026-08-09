import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/044",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/044",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/044",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/044",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/044",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/044",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/044"
    },
    name: {
        en: "Samurott",
        fr: "Clamiral",
        es: "Samurott",
        it: "Samurott",
        de: "Admurai",
        "pt-br": "Samurott",
        "zh-tw": "大劍鬼",
        ko: "대검귀",
        ja: "ダイケンキ"
    },
    illustrator: "Masakazu Fukuda",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Water"],
    dexId: [503],
    evolveFrom: {
        en: "Dewott",
        fr: "Mateloutre",
        es: "Dewott",
        it: "Dewott",
        de: "Zwottronin",
        "pt-br": "Dewott",
        "zh-tw": "雙刃丸",
        ko: "쌍검자비",
        ja: "フタチマル"
    },
    stage: "Stage2",
    description: {
        en: "Samurott leads its group strictly. Those who do not follow its rules receive a merciless thrashing.",
        fr: "Ce Pokémon dirige son groupe d'une main de fer. Il punit sans pitié quiconque ne respecte pas ses règles.",
        es: "Su personalidad estricta lo lleva a castigar sin piedad a todo aquel que ose infringir las reglas en el grupo que dirige.",
        it: "Ha un carattere intransigente e picchia senza pietà chi non rispetta le regole del gruppo che comanda.",
        de: "Es ist ein strenger Anführer. Wer die Regeln der Gruppe nicht befolgt, wird erbarmungslos niedergeschlagen.",
        "pt-br": "Samurott lidera seu grupo rigorosamente. Aqueles que não seguem suas regras recebem pancadas sem dó.",
        "zh-tw": "統率群體且性情嚴格，\n會毫不留情地教訓\n不遵守規矩的傢伙。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Stance",
                fr: "Position",
                es: "Afirmación",
                "pt-br": "Em Posição",
                "zh-tw": "試探",
                "it": "In Guardia",
                "de": "Abwehrhaltung"
            },
            effect: {
                en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may prevent all damage from—and effects of—attacks from your opponent's Pokémon done to this Pokémon until the end of your opponent's next turn.",
                fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer un de vos Pokémon, vous pouvez éviter tous les dégâts et les effets d'attaques infligés à ce Pokémon par les Pokémon de votre adversaire jusqu'à la fin du prochain tour de votre adversaire.",
                es: "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon, puedes evitar todo el daño y todos los efectos de los ataques de los Pokémon de tu rival infligidos a este Pokémon hasta el final del próximo turno de tu rival.",
                it: "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi prevenire sia i danni che gli effetti degli attacchi inflitti a questo Pokémon dai Pokémon del tuo avversario fino alla fine del prossimo turno del tuo avversario.",
                de: "Einmal während deines Zuges, wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du bis zum Ende des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken von Pokémon deines Gegners, die diesem Pokémon zugefügt werden, verhindern.",
                "pt-br": "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá prevenir todo o dano e os efeitos de ataques dos Pokémon do seu oponente causados a este Pokémon até o final do próximo turno do seu oponente.",
                "zh-tw": "在自己的回合,當從手牌使出這張卡並完成進化時,可使用1次。在下個對手的回合結束前,這隻寶可夢不會受到對手的寶可夢招式的傷害與效果的影響。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Water", "Water"],
            name: {
                en: "Pike",
                fr: "Javelot",
                es: "Lanza",
                it: "Picca",
                de: "Langspieß",
                "pt-br": "Lança",
                "zh-tw": "長槍"
            },
            effect: {
                en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon.",
                fr: "Cette attaque inflige aussi 20 dégâts à un20 des Pokémon de Banc de votre adversaire.",
                es: "Este ataque también hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
                it: "Questo attacco infligge anche 20 danni a 1 dei Pokémon nella panchina del tuo avversario.",
                de: "Dieser Angriff fügt außerdem 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
                "zh-tw": "對手的1隻備戰寶可夢也受到20點傷害。"
            },
            damage: 60
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
