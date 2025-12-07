import { Card } from "../../../interfaces";
import Set from "../Genetic Apex";
const card: Card = {
    set: Set,
    name: {
        en: "Grimer",
        fr: "Tadmorv",
        es: "Grimer",
        it: "Grimer",
        de: "Sleima",
        'pt-br': "Grimer",
        ko: "질퍽이",
        "zh-tw": "臭泥",
    },
    illustrator: "Pani Kobayashi",
    category: "Pokemon",
    hp: 70,
    types: ["Darkness"],
    stage: "Basic",
    attacks: [{
            cost: ["Darkness"],
            name: {
                en: "Poison Gas",
                fr: "Gaz Toxik",
                es: "Gas Venenoso",
                it: "Velenogas",
                de: "Giftwolke",
                'pt-br': "Gás Venenoso",
                ko: "독가스",
                "zh-tw": "毒氣"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
                es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
                it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
                de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
                ko: "상대의 배틀 포켓몬을 독으로 만든다.",
                'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
                "zh-tw": "你對手的主動神奇寶貝現在中毒了。"
            },
            damage: "10"
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 3,
    rarity: "One Diamond",
    description: {
        en: "Born from sludge, these Pokémon now gather in polluted places and increase the bacteria in their bodies.",
        fr: "Torrent de boue devenu Pokémon, il vit dans\nles lieux les plus insalubres pour que le nombre\nde microbes qu'il héberge augmente.",
        es: "Formados a partir de lodo, los Grimer se\njuntan en lugares sucios para aumentar\nel número de gérmenes de su cuerpo.",
        it: "Un Pokémon nato dalla melma. Predilige\ni posti sporchi perché gli permettono\ndi aumentare la sua carica batterica.",
        de: "Diese aus Schlamm entstandenen Pokémon\nscharen sich an dreckigen Orten, um ihre\nkörpereigenen Bakterien zu kultivieren.",
        'pt-br': "Nascidos no lodo, esses Pokémon agora\nreúnem-se em locais poluídos e aumentam\na quantidade de bactérias em seus corpos.",
        ko: "오물이 포켓몬이 되었다.\n더러운 장소에 모여\n몸의 세균을 번식시킨다.",
        "zh-tw": "這些神奇寶貝從污泥中誕生，現在聚集在污染的地方並增加了體內的細菌。"
    },
    boosters: ["mewtwo"]
};
export default card;
