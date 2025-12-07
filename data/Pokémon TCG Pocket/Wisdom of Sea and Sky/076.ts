import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Jynx",
        "fr": "Jynx",
        "es": "jynx",
        "it": "Jynx",
        "de": "Jynx",
        "pt-br": "Jinx",
        "zh-tw": "強克斯"
    },
    illustrator: "Midori Harada",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Psychic"],
    description: {
        en: "Its strange cries sound like human language.\nThere are some musicians who compose songs\nfor Jynx to sing.",
        "fr": "Ses cris étranges ressemblent à du langage humain.\nIl y a des musiciens qui composent des chansons\npour que Jynx chante.",
        "es": "Sus extraños gritos suenan como lenguaje humano.\nHay algunos músicos que componen canciones.\npara que Jynx cante.",
        "it": "Le sue strane grida sembrano il linguaggio umano.\nCi sono alcuni musicisti che compongono canzoni\nper far cantare Jynx.",
        "de": "Seine seltsamen Schreie klingen wie menschliche Sprache.\nEs gibt einige Musiker, die Lieder komponieren\ndamit Jynx singen kann.",
        "pt-br": "Seus gritos estranhos soam como linguagem humana.\nExistem alguns músicos que compõem músicas\npara Jynx cantar.",
        "zh-tw": "它奇怪的叫聲聽起來像人類的語言。\n有一些音樂家創作歌曲\n讓 Jynx 唱歌。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Attract Smack",
                "fr": "Attirer la claque",
                "es": "Atraer bofetada",
                "it": "Attira Smack",
                "de": "Smack anziehen",
                "pt-br": "Atrair tapa",
                "zh-tw": "吸引打擊"
            },
            damage: 30,
            cost: ["Psychic", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, le Pokémon Actif de votre adversaire est désormais Paralysé.",
                "es": "Lanza una moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
                "it": "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario è paralizzato.",
                "de": "Wirf eine Münze. Bei „Kopf“ ist das Aktive Pokémon deines Gegners jetzt gelähmt.",
                "pt-br": "Jogue uma moeda. Se der cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
                "zh-tw": "拋一枚硬幣。如果正面，則對手的活躍神奇寶貝現在處於麻痺狀態。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["ho-oh", "lugia"]
};
export default card;
