import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Chatot",
        "fr": "Chatot",
        "es": "Chatot",
        "it": "Chatot",
        "de": "Chatot",
        "pt-br": "Chatot",
        "zh-tw": "查托特"
    },
    illustrator: "Shimaris Yukichi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Colorless"],
    description: {
        en: "It can learn and speak human words. If they gather,\nthey all learn the same saying.",
        "fr": "Il peut apprendre et prononcer des mots humains. S'ils se rassemblent,\nils apprennent tous le même dicton.",
        "es": "Puede aprender y hablar palabras humanas. Si se reúnen,\ntodos aprenden el mismo dicho.",
        "it": "Può imparare e pronunciare parole umane. Se si riuniscono,\nimparano tutti lo stesso detto.",
        "de": "Es kann menschliche Wörter lernen und sprechen. Wenn sie sich versammeln,\nSie alle lernen das gleiche Sprichwort.",
        "pt-br": "Ele pode aprender e falar palavras humanas. Se eles se reunirem,\ntodos eles aprendem o mesmo ditado.",
        "zh-tw": "它可以學習並說出人類語言。如果他們聚集在一起，\n他們都學著同樣的一句話。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Sleepy Song",
                "fr": "Chanson endormie",
                "es": "Canción soñolienta",
                "it": "Canzone assonnata",
                "de": "Schlafendes Lied",
                "pt-br": "Canção Sonolenta",
                "zh-tw": "昏昏欲睡的歌"
            },
            damage: 30,
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "Your opponent's Active Pokémon is now Asleep.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Endormi.",
                "es": "El Pokémon Activo de tu rival ahora está Dormido.",
                "it": "Il Pokémon attivo del tuo avversario è addormentato.",
                "de": "Das aktive Pokémon deines Gegners schläft jetzt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Adormecido.",
                "zh-tw": "你對手的活躍神奇寶貝現在處於睡眠狀態。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
