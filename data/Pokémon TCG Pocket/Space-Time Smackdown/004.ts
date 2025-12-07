import { Card } from "../../../interfaces";
import Set from "../Space-Time Smackdown";
const card: Card = {
    set: Set,
    name: {
        en: "Tangela",
        fr: "Saquedeneu",
        es: "Tangela",
        it: "Tangela",
        de: "Tangela",
        'pt-br': "Tangela",
        ko: "덩쿠리",
        "zh-tw": "蔓藤怪",
    },
    illustrator: "Narumi Sato",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Grass"],
    description: {
        en: "Hidden beneath a tangle of vines that grows nonstop even if the vines are torn off, this Pokémon's true appearance remains a mystery.",
        fr: "On ne sait toujours pas ce qui se cache sous ses lianes.\nMême si on les coupe, elles repoussent à l'infini.",
        es: "Sus lianas no dejan de crecer aunque se le desprendan.\nAún se desconoce qué aspecto tiene sin ellas.",
        it: "Non è ancora chiaro quale sia il vero aspetto\ncelato dietro alle sue liane, che crescono\nall'infinito anche dopo essere state recise.",
        de: "Seine wahre Gestalt ist weiterhin ein Mysterium,\nda sie von Ranken verdeckt wird, die unaufhörlich\nnachwachsen, selbst wenn sie abreißen.",
        'pt-br': "Esconde-se sob um emaranhado de trepadeiras que\ncrescem sem parar mesmo se forem arrancadas.\nA verdadeira aparência deste Pokémon permanece um mistério.",
        ko: "잘려도 잘려도 무한으로 늘어나는\n덩굴 속의 정체는\n아직 밝혀지지 않았다.",
        "zh-tw": "隱藏在纏結的藤蔓之下，即使藤蔓被扯斷，藤蔓也會不停地生長，這只神奇寶貝的真實面貌仍然是個謎。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Vine Whip",
                fr: "Fouet Lianes",
                es: "Látigo Cepa",
                it: "Frustata",
                de: "Rankenhieb",
                'pt-br': "Chicote de Vinha",
                ko: "덩굴채찍",
                "zh-tw": "藤鞭"
            },
            damage: 30,
            cost: ["Grass", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["dialga"]
};
export default card;
