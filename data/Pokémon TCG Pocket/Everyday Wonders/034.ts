import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/034",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/034",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/034",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/034",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/034",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/034",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3b/034"
    },
    name: {
        en: "Fidough",
        fr: "Pâtachiot",
        es: "Fidough",
        it: "Fidough",
        de: "Hefel",
        "pt-br": "Fidough",
        "zh-tw": "狗仔包",
        ko: "쫀도기",
        ja: "パピモッチ"
    },
    illustrator: "Shimaris Yukichi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 40,
    types: ["Psychic"],
    dexId: [926],
    stage: "Basic",
    description: {
        en: "The yeast in Fidough’s breath is useful for cooking, so this Pokémon has been protected by people since long ago.",
        fr: "La levure contenue dans l'haleine de Pâtachiot est utile pour la cuisine, ce Pokémon est donc protégé par les humains depuis longtemps.",
        es: "La levadura en el aliento de Fidough es útil para cocinar, por lo que este Pokémon ha estado protegido por la gente desde hace mucho tiempo.",
        it: "Il lievito nell'alito di Fidough è utile per cucinare, quindi questo Pokémon è protetto dagli esseri umani da molto tempo.",
        de: "Die Hefe im Atem von Hefel eignet sich zum Kochen, daher wurde dieses Pokémon schon vor langer Zeit von Menschen geschützt.",
        "pt-br": "O fermento no hálito de Fidough é útil para cozinhar, então este Pokémon é protegido pelas pessoas há muito tempo.",
        "zh-tw": "狗仔包呼吸中的酵母對於烹飪很有用，所以這隻寶可夢很早以前就受到了人們的保護。"
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
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 0
};

export default card;
