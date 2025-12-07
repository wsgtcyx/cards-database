import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Appletun",
        "fr": "Appletun",
        "es": "Appletún",
        "it": "Appletun",
        "de": "Appletun",
        "pt-br": "Appletun",
        "zh-tw": "豐蜜龍",
    },
    illustrator: "Akira Komayama",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Grass"],
    evolveFrom: {
        en: "Applin",
        "fr": "Candidature",
        "es": "aplicación",
        "it": "Applin",
        "de": "Applin",
        "pt-br": "Aplicativo",
        "zh-tw": "阿普林"
    },
    description: {
        en: "It feeds mainly on sweet apples. It will also eat\nsmall bug Pokémon that are attracted by its\nsweet nectar.",
        "fr": "Il se nourrit principalement de pommes sucrées. Il mangera aussi\npetits Pokémon insectes attirés par son\ndoux nectar.",
        "es": "Se alimenta principalmente de manzanas dulces. también comerá\npequeños Pokémon bicho que se sienten atraídos por su\ndulce néctar.",
        "it": "Si nutre principalmente di mele dolci. Mangerà anche\npiccoli Pokémon bug che sono attratti dai suoi\ndolce nettare.",
        "de": "Es ernährt sich hauptsächlich von süßen Äpfeln. Es wird auch fressen\nkleine Käfer-Pokémon, die davon angezogen werden\nsüßer Nektar.",
        "pt-br": "Alimenta-se principalmente de maçãs doces. Também vai comer\npequenos insetos Pokémon que são atraídos por seu\ndoce néctar.",
        "zh-tw": "它主要以甜蘋果為食。它也會吃\n被其吸引的小蟲子神奇寶貝\n甜蜜的花蜜。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Sweets Relay",
                "fr": "Relais des Bonbons",
                "es": "Relevo de dulces",
                "it": "Relè dei dolci",
                "de": "Süßigkeiten-Staffel",
                "pt-br": "Revezamento de Doces",
                "zh-tw": "糖果接力賽"
            },
            damage: 40,
            cost: ["Grass"],
            effect: {
                en: "If 1 of your Pokémon used Sweets Relay during your last turn, this attack does 30 more damage.",
                "fr": "Si 1 de vos Pokémon a utilisé Relais Bonbons lors de votre dernier tour, cette attaque inflige 30 dégâts supplémentaires.",
                "es": "Si 1 de tus Pokémon usó Sweets Relay durante tu último turno, este ataque hace 30 daños más.",
                "it": "Se 1 dei tuoi Pokémon ha utilizzato Sweets Relay durante il tuo ultimo turno, questo attacco infligge 30 danni in più.",
                "de": "Wenn eines deiner Pokémon in deinem letzten Zug „Sweet Relay“ verwendet hat, fügt dieser Angriff 30 weitere Schadenspunkte zu.",
                "pt-br": "Se 1 dos seus Pokémon usou Sweets Relay durante seu último turno, este ataque causará 30 de dano a mais.",
                "zh-tw": "如果你的 1 個神奇寶貝在你的最後回合中使用了糖果接力，則此攻擊造成的傷害增加 30 點。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 3
};
export default card;
