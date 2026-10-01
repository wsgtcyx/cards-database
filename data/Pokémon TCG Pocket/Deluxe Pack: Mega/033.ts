import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/033",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/033",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/033",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/033",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/033",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/033",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/033"
    },
    name: {
        en: "Growlithe",
        fr: "Caninos",
        es: "Growlithe",
        it: "Growlithe",
        de: "Fukano",
        "pt-br": "Growlithe",
        "zh-tw": "卡蒂狗",
        ja: "ガーディ",
        ko: "가디"
    },
    illustrator: "Makura Tami",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: [
        "Fire"
    ],
    dexId: [
        58
    ],
    stage: "Basic",
    description: {
        en: "It’s very friendly and faithful to people. It will try to repel enemies by barking and biting.",
        fr: "Ce Pokémon est particulièrement affectueux et loyal. Il aboie et mord pour se débarrasser de ses adversaires.",
        es: "Un Pokémon afectuoso y leal por naturaleza. Para ahuyentar al enemigo, se pone a ladrar y a dar bocados.",
        it: "È un Pokémon molto socievole e fedele. Allontana i nemici abbaiando e mordendoli.",
        de: "Es ist sehr freundlich und treu. Durch Bellen und Beißen versucht es, Feinde zu verscheuchen.",
        "pt-br": "É muito amigável e fiel às pessoas. Tentará repelir inimigos com latidos e mordidas.",
        "zh-tw": "性格誠實，容易和人親近。遇到敵人時牠會吼叫並咬，試著把敵人趕走。",
        ja: "It’s very friendly and faithful to people. It will try to repel enemies by barking and biting.",
        ko: "It’s very friendly and faithful to people. It will try to repel enemies by barking and biting."
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
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
