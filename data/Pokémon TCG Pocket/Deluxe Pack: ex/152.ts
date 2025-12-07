import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Gastly",
        "fr": "Gastly",
        "es": "gastly",
        "it": "Gastly",
        "de": "Gastly",
        "pt-br": "Gastosamente",
        "zh-tw": "加斯特利"
    },
    illustrator: "Masako Yamashita",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    description: {
        en: "It wraps its opponent in its gas-like body,\nslowly weakening its prey by poisoning it\nthrough the skin.",
        "fr": "Il enveloppe son adversaire dans son corps gazeux,\naffaiblir lentement sa proie en l'empoisonnant\nà travers la peau.",
        "es": "Envuelve a su oponente en su cuerpo gaseoso,\ndebilitando lentamente a su presa envenenándola\na través de la piel.",
        "it": "Avvolge l'avversario nel suo corpo gassoso,\nindebolendo lentamente la sua preda avvelenandola\nattraverso la pelle.",
        "de": "Es hüllt seinen Gegner in seinen gasähnlichen Körper,\nschwächt seine Beute langsam, indem er sie vergiftet\ndurch die Haut.",
        "pt-br": "Ele envolve seu oponente em seu corpo gasoso,\nenfraquecendo lentamente sua presa, envenenando-a\natravés da pele.",
        "zh-tw": "用氣體般的身體包裹對手，\n通過毒害獵物慢慢削弱它的力量\n通過皮膚。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Suffocating Gas",
                "fr": "Gaz suffocant",
                "es": "Gas asfixiante",
                "it": "Gas soffocante",
                "de": "Erstickendes Gas",
                "pt-br": "Gás sufocante",
                "zh-tw": "窒息性氣體"
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
