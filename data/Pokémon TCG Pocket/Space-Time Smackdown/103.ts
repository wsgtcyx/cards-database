import { Card } from "../../../interfaces";
import Set from "../Space-Time Smackdown";
const card: Card = {
    set: Set,
    name: {
        en: "Skuntank",
        fr: "Moufflair",
        es: "Skuntank",
        it: "Skuntank",
        de: "Skuntank",
        'pt-br': "Skuntank",
        ko: "스컹탱크",
        "zh-tw": "坦克臭鼬",
    },
    illustrator: "kirisAki",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Darkness"],
    evolveFrom: {
        en: "Stunky",
        "fr": "Puant",
        "es": "apestoso",
        "it": "Puzzolente",
        "de": "Stunkig",
        "pt-br": "Fedorento",
        "zh-tw": "臭臭"
    },
    description: {
        en: "It attacks by spraying a horribly smelly fluid from the tip of its tail. Attacks from above confound it.",
        fr: "Du bout de sa queue, il projette un liquide fétide sur ses\nadversaires. Les attaques aériennes le prennent de court.",
        es: "Ataca emitiendo un fluido maloliente por la punta\nde la cola. Los ataques aéreos lo confunden.",
        it: "Attacca spruzzando un fluido puzzolente dalla\npunta della coda. Gli attacchi dall'alto lo confondono.",
        de: "Es greift mit einer übel riechenden Substanz an,\ndie es aus der Spitze seines Schweifs versprüht.\nAngriffe von oben verblüffen es.",
        'pt-br': "Ele ataca ao espirrar um fluido com um cheiro horroroso\nda ponta de sua cauda.\nOs ataques de cima podem confundi-lo.",
        ko: "꼬리 끝에서 심한 냄새가 나는\n액체를 날려 공격하지만\n위에서 공격을 받게 되면 당황한다.",
        "zh-tw": "它通過從尾尖噴出難聞的液體來進行攻擊。來自上方的攻擊使其感到困惑。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Poison Gas",
                fr: "Gaz Toxik",
                es: "Gas Venenoso",
                it: "Velenogas",
                de: "Giftwolke",
                'pt-br': "Gás Venenoso",
                ko: "독가스",
                "zh-tw": "毒氣"
            },
            damage: 50,
            cost: ["Darkness", "Colorless"],
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
                es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
                it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
                de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
                ko: "상대의 배틀 포켓몬을 독으로 만든다.",
                'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
                "zh-tw": "你對手的主動神奇寶貝現在中毒了。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["dialga"]
};
export default card;
