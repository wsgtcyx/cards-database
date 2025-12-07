import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Ambipom",
        "fr": "Ambipome",
        "es": "ambipom",
        "it": "Ambipom",
        "de": "Ambipom",
        "pt-br": "Ambipom",
        "zh-tw": "安比蓬"
    },
    illustrator: "Sumiyoshi Kizuki",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Colorless"],
    evolveFrom: {
        en: "Aipom",
        "fr": "Aipom",
        "es": "Aipom",
        "it": "Aipom",
        "de": "Aipom",
        "pt-br": "Aipom",
        "zh-tw": "愛波姆"
    },
    description: {
        en: "It uses its tails for everything. If it wraps both\nof its tails around you and gives you a squeeze,\nthat's proof it really likes you.",
        "fr": "Il utilise sa queue pour tout. Si ça enveloppe les deux\nde ses queues autour de vous et vous serre,\nc'est la preuve qu'il t'aime vraiment.",
        "es": "Utiliza sus colas para todo. Si envuelve a ambos\nde sus colas te rodea y te da un apretón,\nEsa es la prueba de que realmente le gustas.",
        "it": "Usa la coda per tutto. Se avvolge entrambi\ndelle sue code intorno a te e ti stringe,\nquesta è la prova che gli piaci davvero.",
        "de": "Es nutzt seinen Schwanz für alles. Wenn es beides umhüllt\nseiner Schwänze um dich herum und drückt dich,\nDas ist der Beweis, dass es dich wirklich mag.",
        "pt-br": "Ele usa a cauda para tudo. Se envolver ambos\nde suas caudas ao seu redor e lhe dá um aperto,\nisso é prova de que ele realmente gosta de você.",
        "zh-tw": "它用尾巴做一切事情。如果它包住了兩個\n它的尾巴圍繞著你並擠壓你，\n這就是它真的喜歡你的證據。"
    },
    stage: "Stage1",
    abilities: [{
            type: "Ability",
            name: {
                en: "Catching Tail",
                "fr": "Attraper la queue",
                "es": "Atrapando la cola",
                "it": "Catturare la coda",
                "de": "Schwanz fangen",
                "pt-br": "Pegando o rabo",
                "zh-tw": "抓尾巴"
            },
            effect: {
                en: "Once during your turn, you may put a random Pokémon Tool card from your deck into your hand.",
                "fr": "Une fois pendant votre tour, vous pouvez mettre dans votre main une carte Outil Pokémon aléatoire de votre deck.",
                "es": "Una vez durante tu turno, puedes poner en tu mano una carta de Herramienta Pokémon aleatoria de tu mazo.",
                "it": "Una sola volta durante il tuo turno, puoi mettere nella tua mano una carta Oggetto Pokémon casuale dal tuo mazzo.",
                "de": "Einmal während deines Zuges kannst du eine zufällige Pokémon-Ausrüstungskarte aus deinem Deck auf deine Hand nehmen.",
                "pt-br": "Uma vez durante o seu turno, você pode colocar uma carta aleatória de Ferramenta Pokémon do seu baralho na sua mão.",
                "zh-tw": "在你的回合中，你可以從你的牌組中隨機將一張神奇寶貝工具卡放入你的手牌。"
            }
        }],
    attacks: [{
            name: {
                en: "Corkscrew Punch",
                "fr": "Poinçon tire-bouchon",
                "es": "Sacacorchos",
                "it": "Punzone per cavatappi",
                "de": "Korkenzieherstanze",
                "pt-br": "Furador de saca-rolhas",
                "zh-tw": "螺旋沖頭"
            },
            damage: 50,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
