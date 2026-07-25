import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/089",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/089",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/089",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/089",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/089",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/089"
    },
    name: {
        en: "Meloetta",
        fr: "Meloetta",
        es: "Meloetta",
        it: "Meloetta",
        de: "Meloetta",
        "pt-br": "Meloetta",
        "zh-tw": "美洛耶塔",
        ko: "메로엣타",
        ja: "メロエッタ"
    },
    illustrator: "sowsow",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    dexId: [648],
    stage: "Basic",
    description: {
        en: "The melodies sung by Meloetta have the power to make Pokémon that hear them happy or sad.",
        fr: "Les mélodies enivrantes de Meloetta touchent les Pokémon,\npouvant les rendre heureux ou tristes.",
        es: "Las melodías que canta Meloetta tienen el poder de hacer\nsentir felicidad a los Pokémon que hay a su alrededor.",
        it: "Canta una melodia che ha il potere di portare la gioia o\nla tristezza nel cuore dei Pokémon che l’ascoltano.",
        de: "Es besitzt die Macht, Pokémon, die sich in seiner Nähe\naufhalten, mit seinen Melodien froh oder traurig zu stimmen.",
        "pt-br": "As melodias cantadas por Meloetta têm o poder de deixar os Pokémon que as ouvem felizes ou tristes.",
        "zh-tw": "美洛耶塔 所唱的旋律有能力讓聽到它們的寶可夢感到高興或悲傷。"
    },
    attacks: [
        {
            cost: ["Fighting", "Colorless"],
            name: {
                en: "Inspiring Dance",
                fr: "Danse Motivante",
                es: "Danza Inspiradora",
                it: "Danza della Potenza",
                de: "Motivierender Tanz",
                "pt-br": "Dança Inspiradora",
                "zh-tw": "舞力聲援"
            },
            effect: {
                en: "During your next turn, attacks used by your {F} Pokémon do +30 damage to your opponent's Active Pokémon.",
                fr: "Lors de votre prochain tour, les attaques utilisées par votre Pokémon {F} infligent +30 dégâts au Pokémon Actif de votre adversaire.",
                es: "Durante tu próximo turno, los ataques utilizados por tu Pokémon {F} hacen +30 de daño al Pokémon Activo de tu rival.",
                it: "Durante il tuo prossimo turno, gli attacchi usati dai tuoi Pokémon {F} infliggono +30 danni al Pokémon attivo del tuo avversario.",
                de: "Während deines nächsten Zuges fügen Angriffe deines {F}-Pokémon dem Aktiven Pokémon deines Gegners +30 Schaden zu.",
                "pt-br": "Durante o seu próximo turno, os ataques usados ​​pelos seus Pokémon {F} causarão +30 de dano ao Pokémon Ativo do seu oponente.",
                "zh-tw": "在你的下一個回合中，你的{F}寶可夢使用的攻擊對對手的活躍寶可夢造成+30傷害。"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Psychic",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
