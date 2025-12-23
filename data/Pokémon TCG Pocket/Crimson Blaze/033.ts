import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Duosion",
        "fr": "Méios",
        "es": "Duosion",
        "it": "Duosion",
        "de": "Mitodos",
        "pt-br": "Duosion",
        "zh-tw": "雙卵細胞球"
    },
    illustrator: "Pani Kobayashi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Psychic"],
    evolveFrom: {
        en: "Solosis",
        "fr": "Nucléos",
        "es": "Solosis",
        "it": "Solosis",
        "de": "Monozyto",
        "pt-br": "Solosis",
        "zh-tw": "單卵細胞球"
    },
    description: {
        en: "Its brain has split into two, and the two\nhalves rarely think alike. Its actions are\nutterly unpredictable.",
        "fr": "Son cerveau s'est divisé en deux, et les deux\nles moitiés pensent rarement la même chose. Ses actions sont\ntout à fait imprévisible.",
        "es": "Su cerebro se ha dividido en dos, y los dos\nLas mitades rara vez piensan igual. Sus acciones son\nabsolutamente impredecible.",
        "it": "Il suo cervello si è diviso in due, e i due\nle metà raramente pensano allo stesso modo. Le sue azioni sono\nassolutamente imprevedibile.",
        "de": "Sein Gehirn hat sich in zwei Teile gespalten, und zwar in die beiden\nHälften denken selten gleich. Seine Aktionen sind\nvöllig unvorhersehbar.",
        "pt-br": "Seu cérebro se dividiu em dois, e os dois\nmetades raramente pensam da mesma forma. Suas ações são\ntotalmente imprevisível.",
        "zh-tw": "它的大腦一分為二，而這兩個\n一半的人很少有相同的想法。其動作是\n完全無法預測。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Psyshot",
                "fr": "Tir psychologique",
                "es": "Psicodisparo",
                "it": "Psicocolpo",
                "de": "Psyshot",
                "pt-br": "Psyshot",
                "zh-tw": "心理射擊"
            },
            damage: 50,
            cost: ["Psychic", "Colorless"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
