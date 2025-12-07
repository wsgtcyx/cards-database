import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Klefki",
        "fr": "Klefki",
        "es": "Klefki",
        "it": "Klefki",
        "de": "Klefki",
        "pt-br": "Klefki",
        "zh-tw": "克萊夫基"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Crown",
    category: "Pokemon",
    hp: 50,
    types: ["Psychic"],
    description: {
        en: "In the past, noble families entrusted their vault\nkeys to a Klefki. They passed the Klefki down\nthrough the generations, taking good care of it.",
        "fr": "Autrefois, les familles nobles confiaient leur caveau\nles clés d'un Klefki. Ils ont transmis le Klefki\nà travers les générations, en en prenant bien soin.",
        "es": "En el pasado, las familias nobles confiaban su bóveda\nllaves de un Klefki. Pasaron el Klefki\na través de las generaciones, cuidándolo bien.",
        "it": "In passato le famiglie nobili affidavano la loro tomba\nchiavi di un Klefki. Hanno passato il Klefki\nattraverso le generazioni, prendendosene cura.",
        "de": "In der Vergangenheit vertrauten Adelsfamilien ihre Tresore an\nSchlüssel zu einem Klefki. Sie reichten den Klefki weiter\nüber Generationen hinweg und sich gut darum gekümmert.",
        "pt-br": "No passado, as famílias nobres confiavam o seu cofre\nchaves para um Klefki. Eles passaram o Klefki para baixo\natravés das gerações, cuidando bem dele.",
        "zh-tw": "過去，貴族家庭將他們的金庫託付給\nKlefki 的鑰匙。他們將 Klefki 傳承了下來\n代代相傳，精心呵護。"
    },
    stage: "Basic",
    abilities: [{
            type: "Ability",
            name: {
                en: "Dismantling Keys",
                "fr": "Clés de démontage",
                "es": "Desmontaje de llaves",
                "it": "Chiavi di smontaggio",
                "de": "Demontage von Schlüsseln",
                "pt-br": "Desmontando Chaves",
                "zh-tw": "拆鑰匙"
            },
            effect: {
                en: "Once during your turn, if this Pokémon is on your Bench, you may discard all Pokémon Tools from your opponent's Active Pokémon. If you do, discard this Pokémon.",
                "fr": "Une fois pendant votre tour, si ce Pokémon est sur votre Banc, vous pouvez défausser tous les Outils Pokémon du Pokémon Actif de votre adversaire. Si vous le faites, défaussez ce Pokémon.",
                "es": "Una vez durante tu turno, si este Pokémon está en tu Banca, puedes descartar todas las Herramientas Pokémon del Pokémon Activo de tu rival. Si lo haces, descarta este Pokémon.",
                "it": "Una sola volta durante il tuo turno, se questo Pokémon è nella tua panchina, puoi scartare tutti gli Strumenti Pokémon dal Pokémon attivo del tuo avversario. Se lo fai, scarta questo Pokémon.",
                "de": "Wenn sich dieses Pokémon einmal während deines Zuges auf deiner Bank befindet, kannst du alle Pokémon-Ausrüstungen vom aktiven Pokémon deines Gegners abwerfen. Wenn du dies tust, wirf dieses Pokémon ab.",
                "pt-br": "Uma vez durante o seu turno, se este Pokémon estiver no seu Banco, você poderá descartar todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente. Se fizer isso, descarte este Pokémon.",
                "zh-tw": "在你的回合中，如果這只神奇寶貝在你的替補席上，你可以丟棄對手的活躍神奇寶貝中的所有神奇寶貝工具。這樣做了的話，丟棄這只寶可夢。"
            }
        }],
    attacks: [{
            name: {
                en: "Hook",
                "fr": "Crochet",
                "es": "Gancho",
                "it": "Gancio",
                "de": "Haken",
                "pt-br": "Gancho",
                "zh-tw": "鉤"
            },
            damage: 20,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1
};
export default card;
