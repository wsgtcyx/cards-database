import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/055",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/055"
    },
    name: {
        en: "Snorlax",
        fr: "Ronflex",
        es: "Snorlax",
        it: "Snorlax",
        de: "Relaxo",
        "pt-br": "Snorlax",
        "zh-tw": "卡比獸",
        ko: "잠만보",
        ja: "カビゴン"
    },
    illustrator: "Atsuko Nishida",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Colorless"],
    dexId: [143],
    stage: "Basic",
    description: {
        en: "Its stomach’s digestive juices can dissolve any kind of poison. Eating things off the ground doesn’t bother it at all.",
        fr: "Les sucs digestifs de son estomac peuvent dissoudre toute sorte de poison. Manger des choses par terre ne le dérange pas du tout.",
        es: "Los jugos digestivos de su estómago pueden disolver cualquier tipo de veneno. Comer cosas del suelo no le molesta en absoluto.",
        it: "I succhi digestivi del suo stomaco possono dissolvere qualsiasi tipo di veleno. Mangiare cose da terra non dà alcun fastidio.",
        de: "Die Verdauungssäfte seines Magens können jede Art von Gift auflösen. Es stört ihn überhaupt nicht, Dinge vom Boden zu fressen.",
        "pt-br": "Os sucos digestivos do estômago podem dissolver qualquer tipo de veneno. Comer coisas do chão não incomoda em nada.",
        "zh-tw": "它胃裡的消化液可以溶解任何毒物。吃地上的東西根本不會打擾它。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Massive Body",
                fr: "Corps massif",
                es: "cuerpo masivo",
                it: "Corpo massiccio",
                de: "Massiver Körper",
                "pt-br": "Corpo Enorme",
                "zh-tw": "爆大身軀"
            },
            effect: {
                en: "As long as this Pokémon is in the Active Spot, your opponent can't play any Stadium cards from their hand.",
                fr: "Tant que ce Pokémon est dans le Point Actif, votre adversaire ne peut jouer aucune carte Stade de sa main.",
                es: "Mientras este Pokémon esté en el Punto Activo, tu oponente no puede jugar ninguna carta de Estadio de su mano.",
                it: "Fintanto che questo Pokémon è in posizione attiva, il tuo avversario non può giocare nessuna carta Stadio dalla sua mano.",
                de: "Solange sich dieses Pokémon an der aktiven Stelle befindet, kann dein Gegner keine Stadionkarten aus seiner Hand spielen.",
                "pt-br": "Enquanto este Pokémon estiver no Active Spot, seu oponente não poderá jogar nenhuma carta de Estádio da mão dele.",
                "zh-tw": "只要這隻寶可夢在活動位置，對手就不能從手牌中打出任何體育場卡。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Mega Punch",
                fr: "Ultimapoing",
                es: "Megapuño",
                it: "Megapugno",
                de: "Megahieb",
                "pt-br": "Megassoco",
                "zh-tw": "百萬噸重拳"
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
    retreat: 3
};

export default card;
