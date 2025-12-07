import { Card } from "../../../interfaces";
import Set from "../Shining Revelry";
const card: Card = {
    set: Set,
    name: {
        en: "Lickitung",
        fr: "Excelangue",
        es: "Lickitung",
        it: "Lickitung",
        de: "Schlurp",
        'pt-br': "Lickitung",
        ko: "내루미",
        "zh-tw": "大舌頭"
    },
    illustrator: "Sumiyoshi Kizuki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Colorless"],
    description: {
        en: "If this Pokémon's sticky saliva gets on you and you don't clean it off, an intense itch will set in. The itch won't go away, either.",
        fr: "Si sa salive gluante entre en contact avec la peau\net qu'on ne l'essuie pas bien, elle provoque de\nterribles démangeaisons qui ne s'arrêtent jamais.",
        es: "Si sus lametones no se tratan a tiempo,\nsu saliva pegajosa y urticante puede\nprovocar picores persistentes.",
        it: "La sua saliva appiccicosa provoca\nun prurito terribile che non dà tregua\nse le parti leccate non vengono ripulite.",
        de: "Wäscht man sich nach der Berührung mit seinem\nklebrigen Speichel nicht, setzt bald ein starker\nJuckreiz ein, der nicht mehr zu stoppen ist.",
        'pt-br': "Se você entrar em contato com a saliva grudenta\ndeste Pokémon e não se limpar, sentirá uma\ncoceira intensa. E a coceira não parará.",
        ko: "끈적끈적한 타액에 접촉한 후\n그대로 방치하면 굉장히 가렵고\n급기야 멈출 수 없게 된다.",
        "zh-tw": "如果這只神奇寶貝粘稠的唾液沾到你身上而你又不把它清理掉，就會出現強烈的瘙癢感。而且瘙癢感也不會消失。"
    },
    stage: "Basic",
    attacks: [{
        name: {
            en: "Rollout",
            fr: "Roulade",
            es: "Rodar",
            it: "Rotolamento",
            de: "Walzer",
            'pt-br': "Rolagem",
            ko: "구르기",
            "zh-tw": "推出"
        },
        damage: 30,
        cost: ["Colorless", "Colorless"]
    }],
    weaknesses: [{
        type: "Fighting",
        value: "+20"
    }],
    retreat: 2
};
export default card;
