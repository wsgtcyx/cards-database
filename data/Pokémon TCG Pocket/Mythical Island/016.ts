import { Card } from "../../../interfaces";
import Set from "../Mythical Island";
const card: Card = {
    set: Set,
    name: {
        en: "Salazzle",
        fr: "Malamandre",
        es: "Salazzle",
        it: "Salazzle",
        de: "Amfira",
        'pt-br': "Salazzle",
        ko: "염뉴트",
        "zh-tw": "焰后蜥",
    },
    illustrator: "Mitsuhiro Arita",
    category: "Pokemon",
    hp: 80,
    types: ["Fire"],
    evolveFrom: {
        en: "Salandit",
        "fr": "Salandit",
        "es": "Salandit",
        "it": "Salandite",
        "de": "Salandit",
        "pt-br": "Salandite",
        "zh-tw": "夜盜火蜥",
    },
    description: {
        en: "Salazzle makes its opponents light-headed with poisonous gas, then captivates them with alluring movements to turn them into loyal servants.",
        fr: "Il étourdit ses adversaires avec son gaz toxique,\npuis il les asservit en exécutant une danse envoûtante.",
        es: "Convierte a sus rivales en devotos súbditos\ntras marearlos con su gas venenoso y seducirlos\ncon los cautivadores movimientos de su cuerpo.",
        it: "Trasforma gli avversari in seguaci stordendoli con del\ngas tossico per poi sedurli con movenze ammalianti.",
        de: "Zuerst benebelt es Gegner mit Giftgas, um sie\ndanach mit fesselnden Körperbewegungen zu\nbetören und zu ergebenen Dienern zu machen.",
        'pt-br': "Salazzle deixa os oponentes zonzos com seu\ngás venenoso, depois os cativa com movimentos\nfascinantes para transformá-los em servos leais.",
        ko: "독가스에 어질어질해진 상대를\n요염한 몸놀림으로 유혹해서\n충실한 부하로 만들어 버린다.",
        "zh-tw": "薩拉茲用毒氣讓對手頭暈目眩，然後用誘人的動作迷惑他們，將他們變成忠誠的僕人。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Poison Claws",
                fr: "Griffes Empoisonnées",
                es: "Garras Venenosas",
                it: "Velenartigli",
                de: "Giftkrallen",
                'pt-br': "Garras Venenosas",
                ko: "독발톱",
                "zh-tw": "毒爪"
            },
            damage: 30,
            cost: ["Fire"],
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
                es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
                it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
                de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
                ko: "상대의 배틀 포켓몬을 독으로 만든다.",
                'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
                "zh-tw": "你對手的主動神奇寶貝現在中毒了。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1,
    rarity: "One Diamond"
};
export default card;
