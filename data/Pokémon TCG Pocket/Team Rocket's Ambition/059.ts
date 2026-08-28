import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/059",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/059",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/059",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/059",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/059",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/059",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/059"
    },
    name: {
        en: "Team Rocket's Raticate ex",
        fr: "Rattatac-ex de la Team Rocket",
        es: "Raticate ex del Team Rocket",
        it: "Raticate-ex del Team Rocket",
        de: "Team Rockets Rattikarl-ex",
        "pt-br": "Raticate ex da Equipe Rocket",
        "zh-tw": "火箭隊的拉達ex",
        ko: "로켓단의 레트라 ex",
        ja: "ロケット団のラッタex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Colorless"],
    evolveFrom: {
        en: "Team Rocket's Rattata",
        fr: "Rattata de la Team Rocket",
        es: "Rattata del Team Rocket",
        it: "Rattata del Team Rocket",
        de: "Team Rockets Rattfratz",
        "pt-br": "Rattata da Equipe Rocket",
        "zh-tw": "火箭隊的小拉達",
        ko: "로켓단의 꼬렛",
        ja: "ロケット団のコラッタ"
    },
    stage: "Stage1",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Thieving Incisors",
                fr: "Incisives Voleuses",
                es: "Incisivos Despojadores",
                it: "Incisivi Rubacchioni",
                de: "Diebesnager",
                "pt-br": "Incisivos Bandidos",
                "zh-tw": "打劫門牙"
            },
            effect: {
                en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may move a random Energy from your opponent's Active Pokémon to this Pokémon.",
                fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer un de vos Pokémon, vous pouvez déplacer au hasard une Énergie du Pokémon Actif de votre adversaire vers ce Pokémon.",
                es: "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon, puedes mover 1 Energía aleatoria del Pokémon Activo de tu rival a este Pokémon.",
                it: "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi spostare un'Energia a caso dal Pokémon attivo del tuo avversario a questo Pokémon.",
                de: "Einmal während deines Zuges, wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du 1 zufällige Energie vom Aktiven Pokémon deines Gegners auf dieses Pokémon verschieben.",
                "pt-br": "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá mover 1 Energia aleatória do Pokémon Ativo do seu oponente a este Pokémon.",
                "zh-tw": "在自己的回合,當從手牌使出這張卡並完成進化時,可使用1次。將對手的戰鬥寶可夢身上的隨機1個能量改附於這隻寶可夢身上。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Boost Dash",
                fr: "Ruée Propulsée",
                es: "Carrera Impulso",
                it: "Scatto Caricato",
                de: "Boost-Sprint",
                "pt-br": "Impulso de Corrida",
                "zh-tw": "突進衝刺"
            },
            damage: 70
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 0
};

export default card;
