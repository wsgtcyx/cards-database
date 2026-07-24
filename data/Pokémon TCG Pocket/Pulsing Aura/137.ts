import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/137",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/137"
    },
    name: {
        en: "Lillipup",
        fr: "Ponchiot",
        es: "Lillipup",
        it: "Lillipup",
        de: "Yorkleff",
        "pt-br": "Lillipup",
        "zh-tw": "小約克",
        ko: "요테리",
        ja: "ヨーテリー"
    },
    illustrator: "Natsumi Yoshida",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    dexId: [506],
    stage: "Basic",
    description: {
        en: "This Pokémon is far brighter than the average child, and Lillipup won’t forget the love it receives or any abuse it suffers.",
        fr: "Ce Pokémon est plus intelligent que la plupart\ndes enfants. Il n’oublie ni l’affection qu’il a reçue\nni les mauvais traitements qu’il a pu subir.",
        es: "Muestra una inteligencia muy superior a la media\nde los niños humanos. No olvida ni el amor ni los\nmalos tratos que recibe.",
        it: "È molto più intelligente di un bambino. Non\nscorda né l’affetto ricevuto né i maltrattamenti\nsubiti.",
        de: "Yorkleff ist deutlich intelligenter als die meisten\nKinder und vergisst nie, wenn man ihm Zuneigung\nentgegenbringt oder es schlecht behandelt.",
        "pt-br": "Este Pokémon é muito mais inteligente do que uma criança comum e Lillipup não esquecerá o amor que recebe ou qualquer abuso que sofre.",
        "zh-tw": "比一般的小孩子都還要聰明。\n對於自己得到的關愛，\n或是受到的傷害牠都不會忘記。"
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
