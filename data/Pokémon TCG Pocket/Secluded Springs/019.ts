import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Jynx",
        "fr": "Jynx",
        "es": "jynx",
        "it": "Jynx",
        "de": "Jynx",
        "pt-br": "Jinx",
        "zh-tw": "迷唇姐",
    },
    illustrator: "Yukiko Baba",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Water"],
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
                en: "Dazzle Dance",
                "fr": "Danse éblouissante",
                "es": "danza deslumbrante",
                "it": "Danza abbagliante",
                "de": "Blendender Tanz",
                "pt-br": "Dança Deslumbrante",
                "zh-tw": "炫舞"
            },
            damage: 40,
            cost: ["Water", "Water"],
            effect: {
                en: "Your opponent's Active Pokémon is now Confused.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Confus.",
                "es": "El Pokémon Activo de tu rival ahora está Confundido.",
                "it": "Il Pokémon attivo del tuo avversario è ora confuso.",
                "de": "Das aktive Pokémon deines Gegners ist jetzt verwirrt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Confuso.",
                "zh-tw": "你對手的活躍神奇寶貝現在處於混亂狀態。"
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1
};
export default card;
