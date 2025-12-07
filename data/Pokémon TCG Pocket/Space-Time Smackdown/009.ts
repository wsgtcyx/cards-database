import { Card } from "../../../interfaces";
import Set from "../Space-Time Smackdown";
const card: Card = {
    set: Set,
    name: {
        en: "Roserade",
        fr: "Roserade",
        es: "Roserade",
        it: "Roserade",
        de: "Roserade",
        'pt-br': "Roserade",
        ko: "로즈레이드",
        "zh-tw": "羅絲雷朵",
    },
    illustrator: "Masakazu Fukuda",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Grass"],
    evolveFrom: {
        en: "Roselia",
        "fr": "Rosélia",
        "es": "rosalia",
        "it": "Roselia",
        "de": "Roselia",
        "pt-br": "Rosélia",
        "zh-tw": "毒薔薇",
    },
    description: {
        en: "After captivating opponents with its sweet scent, it lashes them with its thorny whips.",
        fr: "Après avoir troublé les sens de ses adversaires\navec le parfum exquis de ses fleurs, il les frappe\nviolemment avec ses fouets ornés d'épines.",
        es: "Aturde a los rivales con la fragancia de sus flores para\nluego azotarlos sin piedad con sus cepas espinosas.",
        it: "Stordisce l'avversario con il profumo intenso dei suoi\nfiori e lo colpisce con le sue fruste piene di spine.",
        de: "Mit dem süßlichen Duft seiner Blüten betört es\nseine Gegner, bevor es sie mit dornigen Ranken\nheftig auspeitscht.",
        'pt-br': "Depois de cativar seus oponentes com seu aroma doce,\ngolpeia-os com seus chicotes espinhosos.",
        ko: "향긋한 꽃향기로\n상대를 혼란스럽게 한 다음\n가시 채찍으로 세차게 때린다.",
        "zh-tw": "用甜美的氣味迷惑對手後，用帶刺的鞭子抽打他們。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Poisonous Whip",
                fr: "Fouet Empoisonné",
                es: "Látigo Venenoso",
                it: "Frustata Velenosa",
                de: "Giftpeitsche",
                'pt-br': "Chicote Venenoso",
                ko: "독채찍",
                "zh-tw": "毒鞭"
            },
            damage: 50,
            cost: ["Grass", "Colorless"],
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
            type: "Fire",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["dialga", "palkia"]
};
export default card;
