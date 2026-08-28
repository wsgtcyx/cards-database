import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/018",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/018",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/018",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/018",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/018",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/018",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/018"
    },
    name: {
        en: "Hisuian Basculegion",
        fr: "Paragruel de Hisui",
        es: "Basculegion de Hisui",
        it: "Basculegion di Hisui",
        de: "Hisui- Salmagnis",
        "pt-br": "Basculegion de Hisui",
        "zh-tw": "洗翠的幽尾玄魚",
        ko: "히스이 대쓰여너",
        ja: "ヒスイイダイトウ"
    },
    illustrator: "Akira Komayama",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Water"],
    dexId: [902],
    evolveFrom: {
        en: "Hisuian Basculin",
        fr: "Bargantua de Hisui",
        es: "Basculin de Hisui",
        it: "Basculin di Hisui",
        de: "Hisui- Barschuft",
        "pt-br": "Basculin de Hisui",
        "zh-tw": "洗翠的野蠻鱸魚",
        ko: "히스이 배쓰나이",
        ja: "ヒスイバスラオ"
    },
    stage: "Stage1",
    description: {
        en: "It can jump with incredible power. Parts of its body are tinged red by the rage of its fallen friends.",
        fr: "Ce Pokémon peut faire des bonds vertigineux. La colère de ses défunts congénères a donné à son corps une teinte rouge.",
        es: "Su capacidad de salto es asombrosa. La ira de sus camaradas caidos le confiere un tono rojizo a su cuerpo.",
        it: "Possiede un'incredibile potenza di salto. L'ira dei suoi compagni morti conferisce al suo corpo una colorazione rossa.",
        de: "Es verfügt über eine nahezu unheimliche Sprungkraft. Der Zorn von verstorbenen Artgenossen färbt seinen Körper rot.",
        "pt-br": "Consegue pular com uma potência incrivel. Partes do seu corpo são tingidas de vermelho pela raiva de amigos que padeceram.",
        "zh-tw": "擁有驚人的跳躍力。死去的夥伴們的怒火染紅了牠的身體。"
    },
    attacks: [
        {
            cost: ["Water", "Water"],
            name: {
                en: "Soul Counter",
                fr: "Riposte Spirituelle",
                es: "Contraataque Espiritual",
                it: "Contrattacco Spirituale",
                de: "Seelenkonter",
                "pt-br": "Contador de Almas",
                "zh-tw": "靈魂反擊"
            },
            effect: {
                en: "This attack does 50 more damage for each point your opponent got during their last turn.",
                fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque point que votre adversaire a gagné pendant son dernier tour.",
                es: "Este ataque hace 50 puntos de daño más por cada punto que haya conseguido tu rival durante su último turno.",
                it: "Questo attacco infligge 50 danni in più per ogni punto ottenuto dall'avversario durante il suo ultimo turno.",
                de: "Diese Attacke fügt für jeden Punkt, den dein Gegner während seines letzten Zugs erhalten hat, 50 Schadenspunkte mehr zu.",
                "pt-br": "Este ataque causa 50 pontos de dano a mais para cada ponto que seu oponente recebeu durante o último turno dele.",
                "zh-tw": "增加上個對手的回合對手獲得的分數×50點傷害。"
            },
            damage: "50+"
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
