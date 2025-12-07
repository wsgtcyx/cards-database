import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Bellsprout",
        "fr": "Pousse de Bell",
        "es": "brote de campana",
        "it": "Bellsprout",
        "de": "Glockensprossen",
        "pt-br": "Broto de sino",
        "zh-tw": "喇叭芽"
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    description: {
        en: "Even though its body is extremely skinny, it is\nblindingly fast when catching its prey.",
        "fr": "Même si son corps est extrêmement maigre, il est\nincroyablement rapide pour attraper sa proie.",
        "es": "Aunque su cuerpo es extremadamente delgado, es\nincreíblemente rápido al atrapar a su presa.",
        "it": "Anche se il suo corpo è estremamente magro, lo è\nincredibilmente veloce nel catturare la preda.",
        "de": "Obwohl sein Körper extrem dünn ist, ist er es\nunglaublich schnell, wenn er seine Beute fängt.",
        "pt-br": "Mesmo que seu corpo seja extremamente magro, ele é\nincrivelmente rápido ao capturar sua presa.",
        "zh-tw": "儘管它的身體極其瘦弱，\n捕捉獵物時速度驚人。"
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
            damage: 20,
            cost: ["Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
