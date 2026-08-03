import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/142",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/142",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/142",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/142",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/142",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/142",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/142"
    },
    name: {
        en: "Minccino",
        fr: "Chinchidou",
        es: "Minccino",
        it: "Minccino",
        de: "Picochilla",
        "pt-br": "Minccino",
        "zh-tw": "泡沫栗鼠",
        ko: "치라미",
        ja: "チラーミィ"
    },
    illustrator: "kodama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Colorless"],
    dexId: [572],
    stage: "Basic",
    description: {
        en: "These Pokémon like things neat and tidy. They are always sweeping and dusting their habitat, using their tails as brooms.",
        fr: "Ces Pokémon aiment les choses propres et bien rangées. Ils balayent et époussetent toujours leur habitat, utilisant leur queue comme balai.",
        es: "A estos Pokémon les gustan las cosas limpias y ordenadas. Siempre están barriendo y quitando el polvo de su hábitat, usando sus colas como escobas.",
        it: "A questi Pokémon piacciono le cose pulite e ordinate. Spazzano e spolverano continuamente il loro habitat, usando la coda come scopa.",
        de: "Diese Pokémon mögen es ordentlich und ordentlich. Sie fegen und stauben ständig ihren Lebensraum und benutzen ihre Schwänze als Besen.",
        "pt-br": "Esses Pokémon gostam de coisas limpas e organizadas. Eles estão sempre varrendo e tirando o pó de seu habitat, usando suas caudas como vassouras.",
        "zh-tw": "這些寶可夢喜歡乾淨整齊的東西。它們總是用尾巴當掃帚來清掃和撣掉棲息地的灰塵。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Fluffy Tail",
                fr: "Queue Touffue",
                es: "Cola Sedosa",
                it: "Codamorbida",
                de: "Schlummerschweif",
                "pt-br": "Cauda Felpuda",
                "zh-tw": "蓬鬆之尾"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Asleep.",
                fr: "Le Pokémon Actif de votre adversaire est désormais Endormi.",
                es: "El Pokémon Activo de tu rival ahora está Dormido.",
                it: "Il Pokémon attivo del tuo avversario è addormentato.",
                de: "Das aktive Pokémon deines Gegners schläft jetzt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Adormecido.",
                "zh-tw": "你對手的活躍寶可夢現在處於睡眠狀態。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
