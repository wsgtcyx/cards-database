import { Card } from "../../../interfaces";
import Set from "../Shining Revelry";
const card: Card = {
    set: Set,
    name: {
        en: "Abra",
        fr: "Abra",
        es: "Abra",
        it: "Abra",
        de: "Abra",
        'pt-br': "Abra",
        ko: "캐이시",
        "zh-tw": "凱西"
    },
    illustrator: "Mousho",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    description: {
        en: "This Pokémon uses its psychic powers while it sleeps. The contents of Abra's dreams affect the powers that the Pokémon wields.",
        fr: "Le contenu de ses rêves influe sur les pouvoirs\npsychiques qu'il utilise dans son sommeil.",
        es: "Es capaz de usar sus poderes psíquicos aun\nestando dormido. Al parecer, el contenido\ndel sueño influye en sus facultades.",
        it: "Il contenuto dei suoi sogni influisce sui suoi poteri\npsichici, che può utilizzare anche mentre dorme.",
        de: "Es setzt seine Psycho-Kräfte selbst im\nSchlaf ein. Der Inhalt seiner Träume hat\nEinfluss auf die Kräfte, die es verwendet.",
        'pt-br': "Usa seus poderes psíquicos enquanto dorme.\nO conteúdo dos sonhos de Abra afeta os\npoderes que este Pokémon possui.",
        ko: "자면서 초능력을 구사한다.\n꿈의 내용이\n사용하는 힘에 영향을 준다.",
        "zh-tw": "這只神奇寶貝在睡覺時會使用其心靈力量。阿布拉的夢的內容會影響神奇寶貝所使用的力量。"
    },
    stage: "Basic",
    attacks: [{
        name: {
            en: "Psyshot",
            fr: "Piqûre Psy",
            es: "Disparo Psi",
            it: "Psicosparo",
            de: "Psychoschuss",
            'pt-br': "Tiro Psíquico",
            ko: "사이코숏",
            "zh-tw": "心理射擊"
        },
        damage: 20,
        cost: ["Psychic"]
    }],
    weaknesses: [{
        type: "Darkness",
        value: "+20"
    }],
    retreat: 1
};
export default card;
