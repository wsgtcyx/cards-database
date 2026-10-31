import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/088",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/088",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/088",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/088",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/088",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/088",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/088",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/088"
    },
    name: {
        en: "Zoroark",
        fr: "Zoroark",
        es: "Zoroark",
        "pt-br": "Zoroark",
        "zh-tw": "索羅亞克",
        ja: "ゾロアーク",
        ko: "조로아크",
        it: "Zoroark",
        de: "Zoroark"
    },
    illustrator: "Naoki Saito",
    rarity: "Three Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 100,
    types: [
        "Darkness"
    ],
    stage: "Stage1",
    retreat: 1,
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Zorua",
        fr: "Zorua",
        es: "Zorua",
        it: "Zorua",
        de: "Zorua",
        "pt-br": "Zorua",
        "zh-tw": "索羅亞",
        ja: "ゾロア",
        ko: "Zorua"
    },
    attacks: [
        {
            name: {
                en: "Foul Play",
                fr: "Tricherie",
                es: "Juego Sucio",
                it: "Ripicca",
                de: "Schmarotzer",
                "pt-br": "Jogo Sujo",
                "zh-tw": "欺詐",
                ja: "イカサマ",
                ko: "Foul Play"
            },
            cost: [
                "Colorless",
                "Colorless"
            ],
            effect: {
                en: "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack.",
                fr: "Choisissez l'une des attaques du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque.",
                es: "Elige 1 de los ataques del Pokémon Activo de tu rival y úsalo para este ataque.",
                it: "Scegli un attacco del Pokémon attivo del tuo avversario e usalo al posto di questo attacco.",
                de: "Wähle 1 Attacke des Aktiven Pokémon deines Gegners und setze sie als diese Attacke ein.",
                "pt-br": "Escolha 1 dos ataques do Pokémon Ativo do seu oponente e use-o como este ataque.",
                "zh-tw": "選擇1個對手的戰鬥寶可夢持有的招式,作為這個招式使用。",
                ja: "相手のバトルポケモンが持っているワザを1つ選び、このワザとして使う。",
                ko: "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack."
            }
        }
    ],
    abilities: [],
    description: {
        en: "Stories say those who tried to catch Zoroark were trapped in an illusion and punished.",
        fr: "On dit que ceux qui osent tenter de le capturer restent prisonniers des paysages illusoires qu’il peut créer.",
        es: "Se dice que Zoroark atrapa en un mundo de ilusiones a quien lo intenta capturar y que, de esta manera, lo castiga.",
        it: "Gira voce che quelli che osano cercare di catturarlo restino imprigionati dentro mondi di fantasia che lui stesso crea.",
        de: "Es heißt, Zoroark verbanne jeden, der es zu fangen versucht, zur Strafe in eine Welt der Illusionen.",
        "pt-br": "Rezam as lendas que aqueles que tentaram capturar Zoroark foram aprisionados em uma ilusão e punidos.",
        "zh-tw": "據說索羅亞克會把企圖捕捉牠的人困在虛幻的景色裡給予懲罰。",
        ja: "ゾロアークを 捕らえようとした 人を 幻の 景色の中に 閉じこめ こらしめた といわれる。",
        ko: "Stories say those who tried to catch Zoroark were trapped in an illusion and punished."
    }
};

export default card;
