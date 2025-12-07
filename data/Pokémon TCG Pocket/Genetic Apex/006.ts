import { Card } from "../../../interfaces";
import Set from "../Genetic Apex";
const card: Card = {
    set: Set,
    name: {
        en: "Metapod",
        fr: "Chrysacier",
        es: "Metapod",
        it: "Metapod",
        de: "Safcon",
        'pt-br': "Metapod",
        ko: "단데기",
        "zh-tw": "元足"
    },
    illustrator: "Yuka Morii",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    stage: "Stage1",
    evolveFrom: {
        en: "Caterpie",
        "fr": "Chenille",
        "es": "oruga",
        "it": "Caterpie",
        "de": "Raupe",
        "pt-br": "gato",
        "zh-tw": "毛毛蟲"
    },
    attacks: [{
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Bug Bite",
                fr: "Piqûre",
                es: "Picadura",
                it: "Coleomorso",
                de: "Käferbiss",
                'pt-br': "Picada",
                ko: "벌레먹기",
                "zh-tw": "蟲咬"
            },
            damage: "30"
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2,
    rarity: "One Diamond",
    description: {
        en: "It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.",
        fr: "En attendant sa prochaine évolution, il ne peut que durcir\nsa carapace et rester immobile pour éviter de se faire attaquer.",
        es: "Como en este estado solo puede\nendurecer su coraza, permanece\ninmóvil a la espera de evolucionar.",
        it: "In attesa di evolversi, l'unica cosa che può\nfare è indurire la sua corazza, quindi rimane\nimmobile per evitare di essere attaccato.",
        de: "In diesem Zustand wartet es auf die Entwicklung.\nEs kann nur seinen Panzer erhärten, daher bewegt\nes sich nicht, um nicht angegriffen zu werden.",
        'pt-br': "Metapod está aguardando o momento certo para\nevoluir. Neste estágio, só consegue endurecer,\nentão permanece imóvel para evitar ataques.",
        ko: "진화를 기다리고 있는 상태다.\n단단해지는 것밖에 할 수 없어서\n공격받지 않도록 꿈쩍 않고 있다.",
        "zh-tw": "它正在等待進化的時刻。在這個階段，它只能變硬，所以它保持不動以避免攻擊。"
    },
    boosters: ["pikachu"]
};
export default card;
