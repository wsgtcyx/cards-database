import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Lickitung",
        "fr": "Léchage",
        "es": "lamiendo",
        "it": "Lickitung",
        "de": "Lecken",
        "pt-br": "Lickitung",
        "zh-tw": "大舌頭",
    },
    illustrator: "Masakazu Fukuda",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Colorless"],
    description: {
        en: "If this Pokémon's sticky saliva gets on you and\nyou don't clean it off, an intense itch will set in.\nThe itch won't go away, either.",
        "fr": "Si la salive collante de ce Pokémon entre en contact avec vous et\nsi vous ne le nettoyez pas, une démangeaison intense s'installera.\nLes démangeaisons ne disparaîtront pas non plus.",
        "es": "Si la saliva pegajosa de este Pokémon te toca y\nSi no lo limpias, aparecerá una picazón intensa.\nLa picazón tampoco desaparecerá.",
        "it": "Se la saliva appiccicosa di questo Pokémon ti viene addosso e\nse non lo pulisci, subentra un prurito intenso.\nAnche il prurito non se ne andrà.",
        "de": "Wenn der klebrige Speichel dieses Pokémon auf dich gelangt und\nWenn Sie es nicht reinigen, stellt sich ein starker Juckreiz ein.\nAuch der Juckreiz wird nicht verschwinden.",
        "pt-br": "Se a saliva pegajosa deste Pokémon entrar em contato com você e\nvocê não limpa, uma coceira intensa se instala.\nA coceira também não vai embora.",
        "zh-tw": "如果這只神奇寶貝的粘稠唾液沾到你身上\n如果你不把它清理乾淨，就會出現劇烈的瘙癢。\n瘙癢也不會消失。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Stretch Tongue",
                "fr": "Étirer la langue",
                "es": "Estirar la lengua",
                "it": "Allunga la lingua",
                "de": "Zunge dehnen",
                "pt-br": "Esticar a língua",
                "zh-tw": "伸展舌頭"
            },
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "This attack does 30 damage to 1 of your opponent's Pokémon.",
                "fr": "Cette attaque inflige 30 dégâts à 1 des Pokémon de votre adversaire.",
                "es": "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival.",
                "it": "Questo attacco infligge 30 danni a 1 dei Pokémon del tuo avversario.",
                "de": "Dieser Angriff fügt 1 Pokémon deines Gegners 30 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente.",
                "zh-tw": "這次攻擊對對手的 1 只神奇寶貝造成 30 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 3
};
export default card;
