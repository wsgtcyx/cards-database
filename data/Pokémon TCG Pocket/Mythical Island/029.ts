import { Card } from "../../../interfaces";
import Set from "../Mythical Island";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A1a/029",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A1a/029",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A1a/029",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A1a/029",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A1a/029",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A1a/029",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A1a/029",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A1a/029",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A1a/029"
    },
    name: {
        en: "Galvantula",
        fr: "Mygavolt",
        es: "Galvantula",
        it: "Galvantula",
        de: "Voltula",
        'pt-br': "Galvantula",
        ja: "デンチュラ",
        ko: "전툴라",
        "zh-tw": "電蜘蛛",
    },
    illustrator: "Mitsuhiro Arita",
    category: "Pokemon",
    hp: 80,
    types: ["Lightning"],
    evolveFrom: {
        en: "Joltik",
        "fr": "Statitik",
        "es": "Joltik",
        "it": "Joltik",
        "de": "Wattzapf",
        "pt-br": "Joltik",
        "zh-tw": "電電蟲",
        ja: "バチュル",
        ko: "파쪼옥",
    },
    description: {
        en: "It launches electrified fur from its abdomen as its means of attack. Opponents hit by the fur could be in for three full days and nights of paralysis.",
        fr: "Il attaque en projetant les poils de son abdomen\nchargés en électricité. La victime reste alors\nparalysée pendant trois jours et trois nuits.",
        es: "Ataca lanzando hilos electrificados por el\nabdomen, que inmovilizan por completo al\nenemigo durante tres días y tres noches.",
        it: "Attacca lanciando peli carichi di elettricità dall'addome.\nChi viene colpito rimane paralizzato per tre giorni interi.",
        de: "Es schießt elektrisch geladene Haare von seinem\nAbdomen. Wer getroffen wird, ist drei Tage und\nNächte am ganzen Körper gelähmt.",
        'pt-br': "Para atacar, lança pelos eletrificados do abdômen. Os oponentes que forem\natingidos por estes pelos poderão enfrentar três dias e três noites de paralisia.",
        ja: "電気を 帯びた お腹の 毛を 飛ばして 攻撃。 毛が 刺さると 三日三晩 全身が 痺れる。",
        ko: "전기를 띤 배의 털을 날려서\n공격한다. 털에 찔리면\n삼 일 밤낮으로 전신이 마비된다.",
        "zh-tw": "它從腹部發射帶電的毛皮作為攻擊手段。被毛皮擊中的對手可能會陷入三天三夜的癱瘓狀態。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Electroweb",
                fr: "Toile Élek",
                es: "Electrotela",
                it: "Elettrotela",
                de: "Elektronetz",
                'pt-br': "Teia Elétrica",
                ja: "エレキネット",
                ko: "일렉트릭네트",
                "zh-tw": "電網"
            },
            damage: 70,
            cost: ["Lightning", "Lightning"],
            effect: {
                en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
                fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
                es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
                it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
                de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
                'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
                ja: "次の相手の番、このワザを受けたポケモンはにげるができない。",
                ko: "상대의 다음 차례에 이 기술을 받은 포켓몬은 후퇴할 수 없다.",
                "zh-tw": "在對手的下一個回合中，守方寶可夢不能撤退。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    rarity: "Two Diamond"
};
export default card;
