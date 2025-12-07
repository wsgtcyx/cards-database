import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Zubat",
        "fr": "Zoubat",
        "es": "zubat",
        "it": "Zubat",
        "de": "Zubat",
        "pt-br": "Zubat",
        "zh-tw": "祖巴特"
    },
    illustrator: "Shigenori Negishi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Darkness"],
    description: {
        en: "It emits ultrasonic waves from its mouth to check\nits surroundings. Even in tight caves, Zubat flies\naround with skill.",
        "fr": "Il émet des ondes ultrasonores depuis sa bouche pour vérifier\nses environs. Même dans les grottes étroites, Zubat vole\nautour avec habileté.",
        "es": "Emite ondas ultrasónicas desde su boca para comprobar\nsus alrededores. Incluso en cuevas estrechas, Zubat vuela\nalrededor con habilidad.",
        "it": "Emette onde ultrasoniche dalla bocca per controllare\ni suoi dintorni. Anche nelle caverne strette, Zubat vola\nin giro con abilità.",
        "de": "Zur Überprüfung sendet es Ultraschallwellen aus seinem Mund aus\nseine Umgebung. Selbst in engen Höhlen fliegt Zubat\nmit Geschick herumlaufen.",
        "pt-br": "Ele emite ondas ultrassônicas de sua boca para verificar\nseu entorno. Mesmo em cavernas apertadas, Zubat voa\npor aí com habilidade.",
        "zh-tw": "它從嘴裡發射超聲波來檢查\n它的周圍環境。即使在狹窄的洞穴中，祖巴特也會飛翔\n周圍有技巧。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Venomous Fang",
                "fr": "Croc venimeux",
                "es": "Colmillo venenoso",
                "it": "Zanna Velenosa",
                "de": "Giftiger Fangzahn",
                "pt-br": "Presa Venenosa",
                "zh-tw": "毒牙"
            },
            damage: 10,
            cost: ["Darkness"],
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Empoisonné.",
                "es": "El Pokémon Activo de tu rival ahora está Envenenado.",
                "it": "Il Pokémon attivo del tuo avversario ora è avvelenato.",
                "de": "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Envenenado.",
                "zh-tw": "你對手的主動神奇寶貝現在中毒了。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
