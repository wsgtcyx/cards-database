import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/092",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/092",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/092",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/092",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/092",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/092",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/092"
    },
    name: {
        en: "Team Rocket's Weezing ex",
        fr: "Smogogo-ex de la Team Rocket",
        es: "Weezing ex del Team Rocket",
        it: "Weezing-ex del Team Rocket",
        de: "Team Rockets Smogmog-ex",
        "pt-br": "Weezing ex da Equipe Rocket",
        "zh-tw": "火箭隊的雙彈瓦斯ex",
        ko: "로켓단의 또도가스 ex",
        ja: "ロケット団のマタドガスex"
    },
    illustrator: "Shimaris Yukichi",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 140,
    types: ["Darkness"],
    evolveFrom: {
        en: "Team Rocket's Koffing",
        fr: "Smogo de la Team Rocket",
        es: "Koffing del Team Rocket",
        it: "Koffing del Team Rocket",
        de: "Team Rockets Smogon",
        "pt-br": "Koffing da Equipe Rocket",
        "zh-tw": "火箭隊的瓦斯彈",
        ko: "로켓단의 또가스",
        ja: "ロケット団のドガース"
    },
    stage: "Stage1",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Boiler Smog",
                fr: "Dégazage Bouillonnant",
                es: "Esmog de Caldera",
                it: "Smog Ustionante",
                de: "Siedender Smog",
                "pt-br": "Fumaça Escaldante",
                "zh-tw": "蒸騰濁霧"
            },
            effect: {
                en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may make your opponent's Active Pokémon Poisoned and Burned.",
                fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer un de vos Pokémon, vous pouvez laisser le Pokémon Actif de votre adversaire Empoisonné et Brûlé.",
                es: "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon, puedes dejar al Pokémon Activo de tu rival Envenenado y Quemado.",
                it: "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi lasciare il Pokémon attivo del tuo avversario avvelenato e bruciato.",
                de: "Einmal während deines Zuges, wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du entscheiden, ob das Aktive Pokémon deines Gegners nun vergiftet ist und verbrannt ist.",
                "pt-br": "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá deixar o Pokémon Ativo do seu oponente Envenenado e Queimado.",
                "zh-tw": "在自己的回合,當從手牌使出這張卡並完成進化時,可使用1次。將對手的戰鬥寶可夢中毒與灼傷。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Darkness", "Darkness"],
            name: {
                en: "Confusion Gas",
                fr: "Confu-Gaz",
                es: "Gas Desconcertante",
                it: "Gas Stordente",
                de: "Verwirrgas",
                "pt-br": "Gás de Confusão",
                "zh-tw": "混亂瓦斯"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Confused.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
                es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
                it: "Il Pokémon attivo del tuo avversario viene confuso.",
                de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Confuso.",
                "zh-tw": "將對手的戰鬥寶可夢混亂。"
            },
            damage: 60
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
