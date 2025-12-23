import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Ariados",
        "fr": "Migalos",
        "es": "Ariados",
        "it": "Ariados",
        "de": "Ariados",
        "pt-br": "Ariados",
        "zh-tw": "阿利多斯"
    },
    illustrator: "Tika Matsuno",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Grass"],
    evolveFrom: {
        en: "Spinarak",
        "fr": "Mimigal",
        "es": "Spinarak",
        "it": "Spinarak",
        "de": "Webarak",
        "pt-br": "Spinarak",
        "zh-tw": "圓絲蛛"
    },
    description: {
        en: "It spews threads from its mouth to catch its\nprey. When night falls, it leaves its web to go\nhunt aggressively.",
        "fr": "Il crache des fils de sa bouche pour attraper son\nproie. Quand la nuit tombe, il quitte sa toile pour partir\nchasser de manière agressive.",
        "es": "Arroja hilos por la boca para atrapar sus\npresa. Cuando cae la noche, deja su red para irse.\ncazar agresivamente.",
        "it": "Emette fili dalla bocca per catturarlo\npreda. Quando scende la notte, lascia la sua tela per andare\ncaccia in modo aggressivo.",
        "de": "Es spuckt Fäden aus seinem Mund, um es zu fangen\nBeute. Wenn die Nacht hereinbricht, verlässt es sein Netz, um zu verschwinden\naggressiv jagen.",
        "pt-br": "Ele vomita fios de sua boca para pegar seu\npresa. Quando a noite cai, ele deixa sua teia para ir\ncaçar agressivamente.",
        "zh-tw": "它從嘴裡噴出絲線來捕捉它\n獵物。當夜幕降臨時，它會離開它的網去\n積極地狩獵。"
    },
    stage: "Stage1",
    abilities: [{
            type: "Ability",
            name: {
                en: "Trap Territory",
                "fr": "Territoire piège",
                "es": "Territorio trampa",
                "it": "Territorio della trappola",
                "de": "Trap-Territorium",
                "pt-br": "Território da Armadilha",
                "zh-tw": "陷阱領地"
            },
            effect: {
                en: "Your opponent's Active Pokémon's Retreat Cost is 1 more.",
                "fr": "Le Coût de Retraite du Pokémon Actif de votre adversaire est de 1 de plus.",
                "es": "El coste de retirada del Pokémon Activo de tu rival es 1 más.",
                "it": "Il costo di ritirata del Pokémon attivo del tuo avversario è 1 in più.",
                "de": "Die Rückzugskosten des aktiven Pokémon deines Gegners betragen 1 mehr.",
                "pt-br": "O Custo de Recuo do Pokémon Ativo do seu oponente é de 1 a mais.",
                "zh-tw": "對手的現役寶可夢的撤退費用再增加 1 點。"
            }
        }],
    attacks: [{
            name: {
                en: "Pierce",
                "fr": "Percer",
                "es": "Atravesar",
                "it": "Forare",
                "de": "Pierce",
                "pt-br": "Perfurar",
                "zh-tw": "刺穿"
            },
            damage: 30,
            cost: ["Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
