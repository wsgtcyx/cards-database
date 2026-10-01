import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/097",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/097",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/097",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/097",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/097",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/097",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/097"
    },
    name: {
        en: "Yamper",
        fr: "Voltoutou",
        es: "Yamper",
        it: "Yamper",
        de: "Voldi",
        "pt-br": "Yamper",
        "zh-tw": "來電汪",
        ja: "ワンパチ",
        ko: "멍파치"
    },
    illustrator: "Jerky",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: [
        "Lightning"
    ],
    dexId: [
        835
    ],
    stage: "Basic",
    description: {
        en: "This gluttonous Pokémon only assists people with their work because it wants treats. As it runs, it crackles with electricity.",
        fr: "Ce glouton assiste les humains dans leur travail en échange de friandises. Il court sans arrêt, le corps enveloppé d'électricité.",
        es: "Son muy glotones, por lo que ayudan a la gente a cambio de comida. Echan chispas al correr.",
        it: "È un golosone e aiuta gli uomini in cambio di ghiottonerie. Corre di qua e di là emettendo scintille da tutto il corpo.",
        de: "Im Austausch gegen Leckerlis hilft dieser kleine Vielfraß Menschen bei der Arbeit. Beim Rennen wird es von knisternder Elektrizität umhüllt.",
        "pt-br": "Este Pokémon comilão só ajuda as pessoas porque quer petiscos. Ao correr, Yamper estala com eletricidade.",
        "zh-tw": "因為想要得到零食而幫助人類工作的貪吃鬼。總是帶著電火花跑來跑去。",
        ja: "This gluttonous Pokémon only assists people with their work because it wants treats. As it runs, it crackles with electricity.",
        ko: "This gluttonous Pokémon only assists people with their work because it wants treats. As it runs, it crackles with electricity."
    },
    attacks: [
        {
            cost: [
                "Colorless",
                "Colorless"
            ],
            name: {
                en: "Puppy Pile",
                fr: "Chiots à Gogo",
                es: "Camada",
                it: "Cucciolata",
                de: "Welpenhaufen",
                "pt-br": "Pilha de Filhotes",
                "zh-tw": "小狗滿地跑",
                ja: "Puppy Pile",
                ko: "Puppy Pile"
            },
            effect: {
                en: "Reveal all of your Pokémon in play and in your hand that have the Puppy Pile attack, and this attack does 20 damage for each Pokémon you revealed in this way.",
                fr: "Montrez tous vos Pokémon en jeu et dans votre main dotés de l'attaque Chiots à Gogo. Cette attaque inflige 20 dégâts pour chaque Pokémon montré de cette façon.",
                es: "Enseña todos tus Pokémon en juego y en tu mano que tengan el ataque Camada, y este ataque hace 20 puntos de daño por cada Pokémon que hayas enseñado de esta manera.",
                it: "Mostra tutti i Pokémon in gioco e nella tua mano che hanno l'attacco Cucciolata. Questo attacco infligge 20 danni per ogni Pokémon rivelato in questo modo.",
                de: "Zeige deinem Gegner alle deine Pokémon im Spiel und auf deiner Hand mit der Attacke Welpenhaufen. Diese Attacke fügt für jedes auf diese Weise gezeigte Pokémon 20 Schadenspunkte mehr zu.",
                "pt-br": "Revele todos os seus Pokémon em jogo e na sua mão que tenham o ataque Pilha de Filhotes, e este ataque causa 20 pontos de dano para cada Pokémon que você revelou dessa forma.",
                "zh-tw": "在給對手看過自己的場上與手牌所有持有「小狗滿地跑」招式的寶可夢後,造成給對手看過的寶可夢的數量×20點傷害。",
                ja: "Reveal all of your Pokémon in play and in your hand that have the Puppy Pile attack, and this attack does 20 damage for each Pokémon you revealed in this way.",
                ko: "Reveal all of your Pokémon in play and in your hand that have the Puppy Pile attack, and this attack does 20 damage for each Pokémon you revealed in this way."
            },
            damage: "20x"
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
