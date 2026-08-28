import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/058",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/058",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/058",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/058",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/058",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/058",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/058"
    },
    name: {
        en: "Team Rocket's Rattata",
        fr: "Rattata de la Team Rocket",
        es: "Rattata del Team Rocket",
        it: "Rattata del Team Rocket",
        de: "Team Rockets Rattfratz",
        "pt-br": "Rattata da Equipe Rocket",
        "zh-tw": "火箭隊的小拉達",
        ko: "로켓단의 꼬렛",
        ja: "ロケット団のコラッタ"
    },
    illustrator: "cochi8i",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 40,
    types: ["Colorless"],
    stage: "Basic",
    description: {
        en: "With their strong capacity for survival, they can live in dirty places without concern. Left unchecked, their numbers multiply rapidly.",
        fr: "Un Pokémon très résistant, capable de survivre même dans des milieux très insalubres. Il prolifère si l'on n'y prend pas garde.",
        es: "Su gran resistencia le permite vivir en los lugares más insalubres. Su población puede crecer rápidamente.",
        it: "La sua straordinaria resistenza gli permette di adattarsi anche ad habitat insalubri. Se lasciato indisturbato, si riproduce in gran numero.",
        de: "Sie strotzen vor Lebenskraft und können selbst an schmutzigen Orten problemlos überleben. Bleiben sie ungestört, vermehren sie sich rasch.",
        "pt-br": "Graças à sua grande capacidade de sobrevivência, pode viver em lugares sujos sem preocupação. Se não houver controle, sua população se multiplica rapidamente.",
        "zh-tw": "生命力很強，即使在骯髒的地方也能安然生活。放任不管的話會不停繁殖。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Ambush",
                fr: "Embuscade",
                es: "Emboscada",
                it: "Imboscata",
                de: "Hinterhalt",
                "pt-br": "Emboscada",
                "zh-tw": "伏擊"
            },
            effect: {
                en: "Flip a coin. If heads, this attack does 20 more damage.",
                fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts de plus.",
                es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
                de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu.",
                "pt-br": "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
                "zh-tw": "擲1次硬幣若為正面,則增加20點傷害。"
            },
            damage: "20+"
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
