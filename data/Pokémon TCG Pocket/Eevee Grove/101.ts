import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3b/101",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3b/101",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3b/101",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3b/101",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3b/101",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3b/101",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3b/101",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A3b/101",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A3b/101"
    },
    name: {
        en: "Arbok",
        "fr": "Arbok",
        "es": "Arbok",
        "it": "Arbok",
        "de": "Arbok",
        "pt-br": "Arbok",
        "zh-tw": "阿柏怪",
        ja: "アーボック",
        ko: "아보크",
    },
    illustrator: "SATOSHI NAKAI",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 100,
    types: ["Darkness"],
    evolveFrom: {
        en: "Ekans",
        "fr": "Abo",
        "es": "Ekans",
        "it": "Ekans",
        "de": "Rettan",
        "pt-br": "Ekans",
        "zh-tw": "阿柏蛇",
        ja: "アーボ",
        ko: "아보",
    },
    description: {
        en: "The latest research has determined that there\nare over 20 possible arrangements of the\npatterns on its stomach.",
        "fr": "Les dernières recherches ont déterminé qu'il\nil y a plus de 20 arrangements possibles du\ndes motifs sur son ventre.",
        "es": "Las últimas investigaciones han determinado que hay\nHay más de 20 posibles arreglos del\npatrones en su estómago.",
        "it": "Le ultime ricerche hanno stabilito che lì\nsono oltre 20 possibili arrangiamenti del\nmodelli sul suo stomaco.",
        "de": "Das haben neueste Untersuchungen dort festgestellt\nEs gibt über 20 mögliche Anordnungen der\nMuster auf seinem Bauch.",
        "pt-br": "As pesquisas mais recentes determinaram que há\nsão mais de 20 arranjos possíveis do\npadrões em seu estômago.",
        "zh-tw": "最新研究確定，有\n有超過20種可能的安排\n肚子上有圖案。",
        ja: "最新の 研究で お腹の 模様は ２０種類 以上の パターンが あることが 判明。",
        ko: "최근 연구에서 배 모양은\n20종류 이상의\n패턴이 있다고 판명되었다."
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
                "zh-tw": "角落",
                ja: "おいつめる",
                ko: "몰아붙이기"
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
                "zh-tw": "在對手的下一個回合中，守方寶可夢不能撤退。",
                ja: "次の相手の番、このワザを受けたポケモンはにげるができない。",
                ko: "상대의 다음 차례에 이 기술을 받은 포켓몬은 후퇴할 수 없다."
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
