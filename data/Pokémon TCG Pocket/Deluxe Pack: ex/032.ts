import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Snivy",
        "fr": "Snivy",
        "es": "snivy",
        "it": "Snivy",
        "de": "Snivy",
        "pt-br": "Snivy",
        "zh-tw": "藤藤蛇",
    },
    illustrator: "Kagemaru Himeno",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Grass"],
    description: {
        en: "Being exposed to sunlight makes its movements\nswifter. It uses vines more adeptly than its hands.",
        "fr": "Être exposé au soleil fait ses mouvements\nplus rapide. Il utilise la vigne plus habilement que ses mains.",
        "es": "Estar expuesto a la luz solar hace que sus movimientos\nmás rápido. Utiliza las enredaderas con más habilidad que sus manos.",
        "it": "Essendo esposto alla luce del sole compie i suoi movimenti\npiù veloce. Usa i rampicanti più abilmente delle sue mani.",
        "de": "Seine Bewegungen entstehen durch die Einwirkung von Sonnenlicht\nschneller. Es nutzt Ranken geschickter als seine Hände.",
        "pt-br": "Estar exposto à luz solar faz com que seus movimentos\nmais rápido. Ele usa vinhas com mais habilidade do que suas mãos.",
        "zh-tw": "暴露在陽光下使其運動\n更快。它比雙手更擅長使用藤蔓。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Vine Whip",
                "fr": "Fouet de vigne",
                "es": "Látigo de vid",
                "it": "Frusta di vite",
                "de": "Weinpeitsche",
                "pt-br": "Chicote de videira",
                "zh-tw": "藤鞭"
            },
            damage: 40,
            cost: ["Grass", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
