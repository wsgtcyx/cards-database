import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Rowlet",
        "fr": "Rowlet",
        "es": "Rowlet",
        "it": "Rowlet",
        "de": "Rowlet",
        "pt-br": "Rowlet",
        "zh-tw": "羅萊特"
    },
    illustrator: "Saya Tsuruta",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    description: {
        en: "It sends its feathers, which are as sharp\nas blades, flying in attack. Its legs are strong,\nso its kicks are also formidable.",
        "fr": "Il envoie ses plumes aussi pointues\ncomme des lames, volant en attaque. Ses jambes sont fortes,\ndonc ses coups de pied sont également redoutables.",
        "es": "Envía sus plumas, que son tan afiladas\ncomo espadas, volando en ataque. Sus piernas son fuertes\npor eso sus patadas también son formidables.",
        "it": "Manda le sue piume, che sono altrettanto affilate\ncome lame, volando in attacco. Le sue gambe sono forti,\nquindi anche i suoi calci sono formidabili.",
        "de": "Es schickt seine Federn, die ebenso scharf sind\nals Klingen, die im Angriff fliegen. Seine Beine sind stark,\nDaher sind auch seine Tritte beeindruckend.",
        "pt-br": "Ele envia suas penas, que são tão afiadas\ncomo lâminas, voando em ataque. Suas pernas são fortes,\nentão seus chutes também são formidáveis.",
        "zh-tw": "它發出它的羽毛，這些羽毛同樣鋒利\n如同刀鋒，飛行攻擊。它的腿很強壯，\n所以它的踢力也很強大。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Skill Dive",
                "fr": "Plongée de compétence",
                "es": "Buceo de habilidad",
                "it": "Immersione di abilità",
                "de": "Geschicklichkeitstauchen",
                "pt-br": "Mergulho de Habilidade",
                "zh-tw": "技能潛水"
            },
            cost: ["Grass"],
            effect: {
                en: "This attack does 10 damage to 1 of your opponent's Pokémon.",
                "fr": "Cette attaque inflige 10 dégâts à 1 des Pokémon de votre adversaire.",
                "es": "Este ataque hace 10 puntos de daño a 1 de los Pokémon de tu rival.",
                "it": "Questo attacco infligge 10 danni a 1 dei Pokémon del tuo avversario.",
                "de": "Dieser Angriff fügt 1 Pokémon deines Gegners 10 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 10 pontos de dano a 1 dos Pokémon do seu oponente.",
                "zh-tw": "這次攻擊對對手的 1 只神奇寶貝造成 10 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
