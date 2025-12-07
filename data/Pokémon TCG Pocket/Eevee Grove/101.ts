import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Arbok",
        "fr": "Arbok",
        "es": "arbok",
        "it": "Arbok",
        "de": "Arbok",
        "pt-br": "Arbok",
        "zh-tw": "阿柏怪",
    },
    illustrator: "SATOSHI NAKAI",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 100,
    types: ["Darkness"],
    evolveFrom: {
        en: "Ekans",
        "fr": "Ékans",
        "es": "Ekans",
        "it": "Ekans",
        "de": "Ekans",
        "pt-br": "Ekans",
        "zh-tw": "阿柏蛇",
    },
    description: {
        en: "The latest research has determined that there\nare over 20 possible arrangements of the\npatterns on its stomach.",
        "fr": "Les dernières recherches ont déterminé qu'il\nil y a plus de 20 arrangements possibles du\ndes motifs sur son ventre.",
        "es": "Las últimas investigaciones han determinado que hay\nHay más de 20 posibles arreglos del\npatrones en su estómago.",
        "it": "Le ultime ricerche hanno stabilito che lì\nsono oltre 20 possibili arrangiamenti del\nmodelli sul suo stomaco.",
        "de": "Das haben neueste Untersuchungen dort festgestellt\nEs gibt über 20 mögliche Anordnungen der\nMuster auf seinem Bauch.",
        "pt-br": "As pesquisas mais recentes determinaram que há\nsão mais de 20 arranjos possíveis do\npadrões em seu estômago.",
        "zh-tw": "最新研究確定，有\n有超過20種可能的安排\n肚子上有圖案。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Corner",
                "fr": "Coin",
                "es": "Esquina",
                "it": "Angolo",
                "de": "Ecke",
                "pt-br": "Canto",
                "zh-tw": "角落"
            },
            damage: 60,
            cost: ["Darkness", "Colorless"],
            effect: {
                en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
                "fr": "Lors du prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
                "es": "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
                "it": "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
                "de": "Während des nächsten Zuges deines Gegners kann sich das verteidigende Pokémon nicht zurückziehen.",
                "pt-br": "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
                "zh-tw": "在對手的下一個回合中，守方寶可夢不能撤退。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
