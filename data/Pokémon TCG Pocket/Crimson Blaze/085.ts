import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Mega Lopunny ex",
        "fr": "Méga-Lockpin ex",
        "es": "Mega Lopunny ex",
        "it": "Mega Lopunny ex",
        "de": "Mega-Schlapor ex",
        "pt-br": "Mega Lopunny ex",
        "zh-tw": "超級長耳兔 ex"
    },
    illustrator: "DOM",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 190,
    types: ["Fighting"],
    evolveFrom: {
        en: "Buneary",
        "fr": "Laporeille",
        "es": "Buneary",
        "it": "Buneary",
        "de": "Haspiror",
        "pt-br": "Buneary",
        "zh-tw": "捲捲耳"
    },
    description: {
        en: "It swings its ears like whips and strikes its\nenemies with them. It has an intensely\ncombative disposition.",
        "fr": "Il balance ses oreilles comme des fouets et frappe\nennemis avec eux. Il a un effet intense\ndisposition combative.",
        "es": "Agita sus orejas como látigos y golpea sus\nenemigos con ellos. Tiene una intensa\ndisposición combativa.",
        "it": "Fa oscillare le orecchie come fruste e le percuote\nnemici con loro. Ha un intenso\ndisposizione combattiva.",
        "de": "Es schwingt seine Ohren wie eine Peitsche und schlägt mit seinen Ohren\nFeinde mit ihnen. Es hat eine intensive\nkämpferische Gesinnung.",
        "pt-br": "Ele balança as orelhas como chicotes e bate\ninimigos com eles. Tem uma intensidade intensamente\ndisposição combativa.",
        "zh-tw": "它像鞭子一樣擺動耳朵並擊打它\n與他們為敵。它有一種強烈的\n好鬥的性格。"
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Rapid Smashers",
                "fr": "Smashers rapides",
                "es": "Aplastadores rápidos",
                "it": "Distruttori rapidi",
                "de": "Schnelle Zertrümmerer",
                "pt-br": "Esmagadores Rápidos",
                "zh-tw": "快速粉碎機"
            },
            damage: 90,
            cost: ["Fighting", "Fighting"],
            effect: {
                en: "Flip 2 coins. This attack does 90 damage for each heads. Your opponent's Active Pokémon is now Confused.",
                "fr": "Lancez 2 pièces. Cette attaque inflige 90 dégâts pour chaque tête. Le Pokémon Actif de votre adversaire est désormais Confus.",
                "es": "Lanza 2 monedas. Este ataque hace 90 daños por cada cabeza. El Pokémon Activo de tu rival ahora está Confundido.",
                "it": "Lancia 2 monete. Questo attacco infligge 90 danni per ogni testa. Il Pokémon attivo del tuo avversario è ora confuso.",
                "de": "Wirf 2 Münzen. Dieser Angriff verursacht 90 Schaden pro Kopf. Das aktive Pokémon deines Gegners ist jetzt verwirrt.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 90 de dano para cada cabeça. O Pokémon Ativo do seu oponente agora está Confuso.",
                "zh-tw": "翻轉 2 個硬幣。這次攻擊對每個頭造成 90 點傷害。你對手的活躍神奇寶貝現在處於混亂狀態。"
            }
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 1
};
export default card;
