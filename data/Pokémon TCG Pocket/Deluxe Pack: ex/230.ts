import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Crobat",
        "fr": "Crobat",
        "es": "crobat",
        "it": "Crobata",
        "de": "Crobat",
        "pt-br": "Crobata",
        "zh-tw": "叉字蝠",
    },
    illustrator: "AKIRA EGAWA",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Darkness"],
    evolveFrom: {
        en: "Golbat",
        "fr": "Golbat",
        "es": "Golbat",
        "it": "Golbat",
        "de": "Golbat",
        "pt-br": "Golbat",
        "zh-tw": "大嘴蝠"
    },
    description: {
        en: "Both of its legs have turned into wings. Without a\nsound, Crobat flies swiftly toward its prey and\nsinks its fangs into the nape of its target's neck.",
        "fr": "Ses deux pattes se sont transformées en ailes. Sans un\nson, Crobat vole rapidement vers sa proie et\nenfonce ses crocs dans la nuque de sa cible.",
        "es": "Ambas piernas se han convertido en alas. sin un\nsonido, Crobat vuela rápidamente hacia su presa y\nhunde sus colmillos en la nuca de su objetivo.",
        "it": "Entrambe le sue gambe si sono trasformate in ali. Senza a\nsuono, Crobat vola rapidamente verso la sua preda e\naffonda le zanne nella nuca del collo del suo bersaglio.",
        "de": "Beide Beine haben sich in Flügel verwandelt. Ohne a\nGeräusch, Crobat fliegt schnell auf seine Beute zu und\nversenkt seine Reißzähne im Nacken seines Ziels.",
        "pt-br": "Ambas as pernas se transformaram em asas. Sem um\nsom, Crobat voa rapidamente em direção à sua presa e\nafunda suas presas na nuca do alvo.",
        "zh-tw": "它的兩條腿都變成了翅膀。沒有一個\n隨著聲音的響起，鱷魚迅速飛向它的獵物，\n將尖牙刺入目標的頸背。"
    },
    stage: "Stage2",
    abilities: [{
            type: "Ability",
            name: {
                en: "Cunning Link",
                "fr": "Lien astucieux",
                "es": "Enlace astuto",
                "it": "Collegamento astuto",
                "de": "Listiger Link",
                "pt-br": "Elo astuto",
                "zh-tw": "狡猾的鏈接"
            },
            effect: {
                en: "Once during your turn, if you have Arceus or Arceus ex in play, you may do 30 damage to your opponent's Active Pokémon.",
                "fr": "Une fois pendant votre tour, si vous avez Arceus ou Arceus ex en jeu, vous pouvez infliger 30 dégâts au Pokémon Actif de votre adversaire.",
                "es": "Una vez durante tu turno, si tienes a Arceus o Arceus ex en juego, puedes hacer 30 daños al Pokémon Activo de tu rival.",
                "it": "Una sola volta durante il tuo turno, se hai Arceus o Arceus ex in gioco, puoi infliggere 30 danni al Pokémon attivo del tuo avversario.",
                "de": "Einmal während deines Zuges kannst du, wenn du Arceus oder Arceus ex im Spiel hast, dem Aktiven Pokémon deines Gegners 30 Schadenspunkte zufügen.",
                "pt-br": "Uma vez durante o seu turno, se você tiver Arceus ou Arceus ex em jogo, você poderá causar 30 de dano ao Pokémon Ativo do seu oponente.",
                "zh-tw": "在你的回合中，如果你有阿爾宙斯或阿爾宙斯 ex 在場，你可以對對手的活躍神奇寶貝造成 30 點傷害。"
            }
        }],
    attacks: [{
            name: {
                en: "Darkness Fang",
                "fr": "Croc des Ténèbres",
                "es": "Colmillo de oscuridad",
                "it": "Zanna dell'Oscurità",
                "de": "Dunkelheitszahn",
                "pt-br": "Presa da Escuridão",
                "zh-tw": "黑暗之牙"
            },
            damage: 50,
            cost: ["Darkness"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 0
};
export default card;
