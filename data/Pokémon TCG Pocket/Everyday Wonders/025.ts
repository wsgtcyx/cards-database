import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/025",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/025",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/025",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/025",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/025",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/025"
    },
    name: {
        en: "Yamper",
        fr: "Voltoutou",
        es: "Yamper",
        it: "Yamper",
        de: "Voldi",
        "pt-br": "Yamper",
        "zh-tw": "來電汪",
        ko: "멍파치",
        ja: "ワンパチ"
    },
    illustrator: "Jerky",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    dexId: [835],
    stage: "Basic",
    description: {
        en: "This gluttonous Pokémon only assists people with their work because it wants treats. As it runs, it crackles with electricity.",
        fr: "Ce glouton assiste les humains dans leur travail\nen échange de friandises. Il court sans arrêt,\nle corps enveloppé d’électricité.",
        es: "Son muy glotones, por lo que ayudan a la gente\na cambio de comida. Echan chispas al correr.",
        it: "È un golosone e aiuta gli uomini in cambio\ndi ghiottonerie. Corre di qua e di là\nemettendo scintille da tutto il corpo.",
        de: "Im Austausch gegen Leckerlis hilft dieser kleine\nVielfraß Menschen bei der Arbeit. Beim Rennen\nwird es von knisternder Elektrizität umhüllt.",
        "pt-br": "Este Pokémon guloso só ajuda as pessoas no seu trabalho porque quer guloseimas. Enquanto funciona, ele estala com eletricidade.",
        "zh-tw": "因為想要得到零食而\n幫助人類工作的貪吃鬼。\n總是帶著電火花跑來跑去。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Puppy Pile",
                fr: "Chiots à Gogo",
                es: "Camada",
                it: "Cucciolata",
                de: "Welpenhaufen",
                "pt-br": "Pilha de Filhotes",
                "zh-tw": "小狗滿地跑"
            },
            effect: {
                en: "Reveal all of your Pokémon in play and in your hand that have the Puppy Pile attack, and this attack does 20 damage for each Pokémon you revealed in this way.",
                fr: "Révélez tous vos Pokémon en jeu et dans votre main qui ont l'attaque Puppy Pile, et cette attaque inflige 20 dégâts pour chaque Pokémon que vous avez révélé de cette manière.",
                es: "Revela todos tus Pokémon en juego y en tu mano que tengan el ataque Puppy Pile, y este ataque hace 20 daños por cada Pokémon que revelaste de esta manera.",
                it: "Rivela tutti i tuoi Pokémon in gioco e nella tua mano che hanno l'attacco Cuccioli Pile, e questo attacco infligge 20 danni per ogni Pokémon che hai rivelato in questo modo.",
                de: "Zeige alle deine Pokémon im Spiel und auf deiner Hand vor, die über die Attacke „Welpenhaufen“ verfügen. Diese Attacke verursacht 20 Schadenspunkte für jedes Pokémon, das du auf diese Weise aufgedeckt hast.",
                "pt-br": "Revele todos os seus Pokémon em jogo e na sua mão que tenham o ataque Puppy Pile, e esse ataque causa 20 de dano para cada Pokémon que você revelou dessa forma.",
                "zh-tw": "展示你場上和手中所有具有小狗堆攻擊的寶可夢，此攻擊對你以這種方式展示的每隻寶可夢造成 20 點傷害。"
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
