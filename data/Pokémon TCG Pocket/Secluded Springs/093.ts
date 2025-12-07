import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Psyduck",
        "fr": "Psycanard",
        "es": "Psyduck",
        "it": "Psyduck",
        "de": "Psyduck",
        "pt-br": "Psicoduck",
        "zh-tw": "迷幻鴨"
    },
    illustrator: "Scav",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "It is constantly wracked by a headache. When the\nheadache turns intense, it begins using mysterious\npowers.",
        "fr": "Il est constamment ravagé par un mal de tête. Quand le\nle mal de tête devient intense, il commence à utiliser un mystérieux\npouvoirs.",
        "es": "Está constantemente atormentado por un dolor de cabeza. cuando el\nEl dolor de cabeza se vuelve intenso, comienza a usar misteriosos.\npoderes.",
        "it": "È costantemente tormentato dal mal di testa. Quando il\nil mal di testa diventa intenso, inizia a essere misterioso\npoteri.",
        "de": "Es wird ständig von Kopfschmerzen geplagt. Wenn die\nDer Kopfschmerz wird intensiv, es beginnt geheimnisvoll zu wirken\nBefugnisse.",
        "pt-br": "É constantemente assolado por uma dor de cabeça. Quando o\ndor de cabeça fica intensa, começa a usar misteriosos\npoderes.",
        "zh-tw": "它經常被頭痛所折磨。當\n頭痛變得劇烈，它開始使用神秘\n權力。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Headache",
                "fr": "Mal de tête",
                "es": "Dolor de cabeza",
                "it": "Mal di testa",
                "de": "Kopfschmerzen",
                "pt-br": "Dor de cabeça",
                "zh-tw": "頭痛"
            },
            damage: 10,
            cost: ["Colorless"],
            effect: {
                en: "Your opponent can't use any Supporter cards from their hand during their next turn.",
                "fr": "Votre adversaire ne peut utiliser aucune carte Supporter de sa main lors de son prochain tour.",
                "es": "Tu oponente no puede usar ninguna carta de Partidario de su mano durante su próximo turno.",
                "it": "Il tuo avversario non può utilizzare alcuna carta Aiuto dalla sua mano durante il suo prossimo turno.",
                "de": "Dein Gegner kann in seinem nächsten Zug keine Unterstützerkarten aus seiner Hand verwenden.",
                "pt-br": "Seu oponente não pode usar nenhuma carta de Apoiador de sua mão durante o próximo turno.",
                "zh-tw": "你的對手在下回合中不能使用手上的任何支持者卡。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
