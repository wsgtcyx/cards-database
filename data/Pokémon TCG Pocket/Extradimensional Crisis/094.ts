import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
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
    illustrator: "MAHOU",
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
                en: "Psychic",
                "fr": "Psychique",
                "es": "Psíquico",
                "it": "Psichico",
                "de": "Hellseher",
                "pt-br": "Psíquico",
                "zh-tw": "精神"
            },
            damage: 30,
            cost: ["Psychic", "Colorless"],
            effect: {
                en: "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon.",
                "fr": "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
                "es": "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
                "it": "Questo attacco infligge 20 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
                "de": "Dieser Angriff fügt 20 weitere Schadenspunkte für jede Energie zu, die an das Aktive Pokémon deines Gegners angelegt ist.",
                "pt-br": "Este ataque causa 20 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
                "zh-tw": "對手的活躍寶可夢身上每附加一個能量，此攻擊就會造成 20 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1,
    rarity: "One Shiny"
};
export default card;
