import { Card } from "../../../interfaces";
import Set from "../Mythical Island";
const card: Card = {
    set: Set,
    name: {
        en: "Venipede",
        fr: "Venipatte",
        es: "Venipede",
        it: "Venipede",
        de: "Toxiped",
        'pt-br': "Venipede",
        ko: "마디네",
        "zh-tw": "韋尼足蟲"
    },
    illustrator: "Yukiko Baba",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    description: {
        en: "Venipede and Sizzlipede are similar species, but when the two meet, a huge fight ensues.",
        fr: "Bien qu'appartenant à des espèces similaires,\nles Venipatte et les Grillepattes se livrent\nà des conflits violents lorsqu'ils se croisent.",
        es: "Aunque se trata de una especie emparentada\ncon los Sizzlipede, si se encuentran ejemplares\nde ambas, entablarán una lucha encarnizada.",
        it: "Appartiene a una specie simile a quella di Sizzlipede, ma\nse le loro strade si incrociano si scatena il finimondo.",
        de: "Es ist zwar artverwandt mit Thermopod, aber\njedes Mal, wenn sich die beiden über den Weg\nkrabbeln, streiten sie erbittert miteinander.",
        'pt-br': "Venipede e Sizzlipede são espécies similares, mas,\nquando se encontram, travam uma briga daquelas.",
        ko: "태우지네와는 종류가 다른\n동료지만 서로 만나면\n큰 싸움이 된다.",
        "zh-tw": "斑足蟲和西足足蟲是相似的物種，但當兩者相遇時，就會發生一場激烈的戰鬥。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Ram",
                fr: "Collision",
                es: "Apisonar",
                it: "Carica",
                de: "Ramme",
                'pt-br': "Aríete",
                ko: "부딪치기",
                "zh-tw": "內存"
            },
            damage: 20,
            cost: ["Darkness"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    rarity: "One Diamond"
};
export default card;
