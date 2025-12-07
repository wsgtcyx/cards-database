import { Card } from "../../../interfaces";
import Set from "../Celestial Guardians";
const card: Card = {
    set: Set,
    name: {
        en: "Bruxish",
        fr: "Denticrisse",
        es: "Bruxish",
        it: "Bruxish",
        de: "Knirfish",
        'pt-br': "Bruxish",
        ko: "치갈기",
        "zh-tw": "磨牙彩皮魚",
    },
    illustrator: "Masakazu Fukuda",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Water"],
    description: {
        en: "It grinds its teeth with great force to stimulate its brain. It fires the psychic energy created by this process from the protuberance on its head.",
        fr: "Ce Pokémon grince fortement des dents afin de\nstimuler son cerveau. Il projette ensuite l'énergie\npsychique ainsi créée par l'appendice sur sa tête.",
        es: "Estimula su cerebro al rechinar los dientes con\nfuerza. Libera el poder psíquico que genera\npor la protuberancia que tiene en la cabeza.",
        it: "Fa stridere i denti per stimolare il proprio\ncervello e creare così onde psichiche, che\npoi emette dalla protuberanza sulla testa.",
        de: "Es knirscht stark mit den Zähnen, um sein Gehirn\nzu stimulieren. Die dabei erzeugten Psycho-Kräfte\nsetzt es über den Fortsatz an seinem Kopf frei.",
        'pt-br': "Range os dentes com muita força para estimular\no seu cérebro. Lança energia psíquica criada durante\neste processo pela protuberância em sua cabeça.",
        ko: "강하게 이를 갈아서 뇌를 자극한다.\n이를 통해 만들어 낸 사이코 파워를\n머리의 돌기를 통해 발사한다.",
        "zh-tw": "它用很大的力氣磨牙，刺激大腦。它從頭上的突起發射出這一過程中產生的精神能量。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Wave Splash",
                fr: "Grosse Vague",
                es: "Chapoteo Ondulante",
                it: "Schizzi d'Onda",
                de: "Wellenplatscher",
                'pt-br': "Onda Borrifante",
                ko: "스플래시",
                "zh-tw": "波浪飛濺"
            },
            damage: 50,
            cost: ["Water", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["solgaleo", "lunala"]
};
export default card;
