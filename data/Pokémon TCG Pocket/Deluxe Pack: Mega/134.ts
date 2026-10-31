import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/134",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/134",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/134",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/134",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/134",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/134",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/134",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4b/134",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4b/134"
    },
    name: {
        en: "Rockruff",
        fr: "Rocabot",
        es: "Rockruff",
        it: "Rockruff",
        de: "Wuffels",
        "pt-br": "Rockruff",
        "zh-tw": "岩狗狗",
        ja: "イワンコ",
        ko: "암멍이"
    },
    illustrator: "MINAMINAMI Take",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: [
        "Fighting"
    ],
    dexId: [
        744
    ],
    stage: "Basic",
    description: {
        en: "This Pokémon travels in a pack with others until it grows up. When its mood turns sour, it starts striking the ground with the rocks on its neck.",
        fr: "Il vit en meute jusqu'à ce qu'il grandisse. Lorsqu'il est de mauvaise humeur, il frappe le sol avec les rochers qui ornent son cou.",
        es: "Se mueven en manada hasta que son adultos. Cuando están de mal humor, golpean el suelo con las rocas que tienen en el cuello.",
        it: "I Rockruff rimangono nel branco fin quando non diventano adulti. Quando sono di cattivo umore, battono a terra le rocce che hanno sul collo.",
        de: "Sie leben in Rudeln, bis sie ausgewachsen sind. Wenn sie schlecht gelaunt sind, schlagen sie mit ihrem steinernen Fellkragen auf den Boden.",
        "pt-br": "Este Pokémon anda em bandos até ficar adulto. Quando está de mau humor, começa a bater no chão com as pedras do seu pescoço.",
        "zh-tw": "在長大前總是集體行動，心情變差時會用脖子上的岩石開始敲打地面。",
        ja: "大きくなるまで 群れで 行動。 機嫌が 悪くなると 首の 岩で 地面を 叩きはじめる。",
        ko: "다 클 때까지 무리 지어 행동한다.\n기분이 나쁘면 목에 달린 바위로\n땅을 두드리기 시작한다."
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
                ja: "こいぬまみれ",
                ko: "강아지투성이"
            },
            effect: {
                en: "Reveal all of your Pokémon in play and in your hand that have the Puppy Pile attack, and this attack does 20 damage for each Pokémon you revealed in this way.",
                fr: "Montrez tous vos Pokémon en jeu et dans votre main dotés de l'attaque Chiots à Gogo. Cette attaque inflige 20 dégâts pour chaque Pokémon montré de cette façon.",
                es: "Enseña todos tus Pokémon en juego y en tu mano que tengan el ataque Camada, y este ataque hace 20 puntos de daño por cada Pokémon que hayas enseñado de esta manera.",
                it: "Mostra tutti i Pokémon in gioco e nella tua mano che hanno l'attacco Cucciolata. Questo attacco infligge 20 danni per ogni Pokémon rivelato in questo modo.",
                de: "Zeige deinem Gegner alle deine Pokémon im Spiel und auf deiner Hand mit der Attacke Welpenhaufen. Diese Attacke fügt für jedes auf diese Weise gezeigte Pokémon 20 Schadenspunkte mehr zu.",
                "pt-br": "Revele todos os seus Pokémon em jogo e na sua mão que tenham o ataque Pilha de Filhotes, e este ataque causa 20 pontos de dano para cada Pokémon que você revelou dessa forma.",
                "zh-tw": "在給對手看過自己的場上與手牌所有持有「小狗滿地跑」招式的寶可夢後,造成給對手看過的寶可夢的數量×20點傷害。",
                ja: "自分の場と手札にあるワザ「こいぬまみれ」を持つポケモンをすべて相手に見せ、見せたポケモンの数×20ダメージ。",
                ko: "자신의 필드와 패에 있는 기술 「강아지투성이」를 가진 포켓몬을 모두 상대에게 보여주고 보여준 포켓몬의 수 × 20데미지를 준다."
            },
            damage: "20x"
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
