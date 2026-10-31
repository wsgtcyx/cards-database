import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3b/027",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3b/027",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3b/027",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3b/027",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3b/027",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3b/027",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3b/027",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A3b/027",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A3b/027"
    },
    name: {
        en: "Galvantula",
        "fr": "Mygavolt",
        "es": "Galvantula",
        "it": "Galvantula",
        "de": "Voltula",
        "pt-br": "Galvantula",
        "zh-tw": "電蜘蛛",
        ja: "デンチュラ",
        ko: "전툴라",
    },
    illustrator: "otumami",
    rarity: "Two Diamond",
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
        en: "It launches electrified fur from its abdomen as its\nmeans of attack. Opponents hit by the fur could\nbe in for three full days and nights of paralysis.",
        "fr": "Il lance une fourrure électrifiée depuis son abdomen alors qu'il\nmoyens d'attaque. Les adversaires touchés par la fourrure pourraient\npasser trois jours et nuits complets de paralysie.",
        "es": "Lanza pelaje electrificado desde su abdomen mientras su\nmedios de ataque. Los oponentes golpeados por la piel podrían\nEstaré dentro de tres días y noches completos de parálisis.",
        "it": "Lancia la pelliccia elettrizzata dal suo addome\nmezzo di attacco. Gli avversari colpiti dalla pelliccia potrebbero\nessere dentro per tre giorni e notti interi di paralisi.",
        "de": "Es schleudert elektrifiziertes Fell aus seinem Hinterleib\nAngriffsmittel. Vom Fell getroffene Gegner könnten\ndrei volle Tage und Nächte lang gelähmt sein.",
        "pt-br": "Ele lança pelos eletrificados de seu abdômen enquanto\nmeio de ataque. Os oponentes atingidos pelo pelo poderiam\npassar três dias inteiros e três noites de paralisia.",
        "zh-tw": "它從腹部發射帶電的毛皮作為其\n攻擊手段。被毛皮擊中的對手可以\n整整癱瘓了三天三夜。",
        ja: "電気を 帯びた お腹の 毛を 飛ばして 攻撃。 毛が 刺さると 三日三晩 全身が 痺れる。",
        ko: "전기를 띤 배의 털을 날려서\n공격한다. 털에 찔리면\n삼 일 밤낮으로 전신이 마비된다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Electric Shock",
                "fr": "Choc électrique",
                "es": "Descarga eléctrica",
                "it": "Scossa elettrica",
                "de": "Stromschlag",
                "pt-br": "Choque Elétrico",
                "zh-tw": "電擊",
                ja: "サンダーショック",
                ko: "썬더쇼크"
            },
            damage: 70,
            cost: ["Lightning", "Lightning"],
            effect: {
                en: "Discard all Energy attached to this Pokémon. Your opponent's Active Pokémon is now Paralyzed.",
                "fr": "Défaussez toute l'Énergie attachée à ce Pokémon. Le Pokémon Actif de votre adversaire est désormais Paralysé.",
                "es": "Descarta toda la Energía unida a este Pokémon. El Pokémon Activo de tu rival ahora está Paralizado.",
                "it": "Scarta tutte le Energie assegnate a questo Pokémon. Il Pokémon attivo del tuo avversario è ora paralizzato.",
                "de": "Lege alle an dieses Pokémon angelegten Energien ab. Das aktive Pokémon deines Gegners ist jetzt gelähmt.",
                "pt-br": "Descarte todas as Energias ligadas a este Pokémon. O Pokémon Ativo do seu oponente agora está Paralisado.",
                "zh-tw": "丟棄該神奇寶貝所附帶的所有能量。你對手的主動神奇寶貝現在陷入麻痺狀態。",
                ja: "このポケモンからエネルギーをすべてトラッシュ。相手のバトルポケモンをマヒにする。",
                ko: "이 포켓몬에서 에너지를 모두 트래쉬한다. 상대의 배틀 포켓몬을 마비로 만든다."
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 0
};
export default card;
