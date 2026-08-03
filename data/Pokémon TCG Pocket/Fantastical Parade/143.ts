import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/143",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/143",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/143",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/143",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/143",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/143"
    },
    name: {
        en: "Maushold",
        "fr": "Famignol",
        "es": "Maushold",
        "it": "Maushold",
        "de": "Famieps",
        "pt-br": "Maushold",
        "zh-tw": "一家鼠"
    },
    illustrator: "MINAMINAMI Take",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Colorless"],
    evolveFrom: {
        en: "Tandemaus",
        "fr": "Tandémaus",
        "es": "tandemaus",
        "it": "Tandemau",
        "de": "Tandemaus",
        "pt-br": "Tandemaus",
        "zh-tw": "坦德莫斯"
    },
    description: {
        en: "The larger pair protects the little ones during\nbattles. When facing strong opponents, the\nwhole group will join the fight.",
        "fr": "La plus grande paire protège les plus petits pendant\nbatailles. Face à des adversaires puissants, le\ntout le groupe rejoindra le combat.",
        "es": "El par más grande protege a los más pequeños durante\nbatallas. Cuando se enfrenta a oponentes fuertes, el\nTodo el grupo se unirá a la pelea.",
        "it": "La coppia più grande protegge i più piccoli durante\nbattaglie. Quando si affrontano avversari forti, il\nl'intero gruppo si unirà alla lotta.",
        "de": "Das größere Paar schützt die Kleinen währenddessen\nSchlachten. Bei starken Gegnern ist die\nDie ganze Gruppe wird sich dem Kampf anschließen.",
        "pt-br": "O par maior protege os mais pequenos durante\nbatalhas. Ao enfrentar adversários fortes, o\ntodo o grupo se juntará à luta.",
        "zh-tw": "較大的一對在期間保護較小的\n戰鬥。當面對強大的對手時\n全隊都會加入戰鬥。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Family Beatdown",
                "fr": "Battement familial",
                "es": "Golpe familiar",
                "it": "Percossa familiare",
                "de": "Familienprügel",
                "pt-br": "Batida Familiar",
                "zh-tw": "家庭毆打"
            },
            damage: 60,
            cost: ["Colorless"],
            effect: {
                en: "Flip a coin for each Tandemaus and Maushold you have in play. This attack does 60 damage for each heads.",
                "fr": "Lancez une pièce pour chaque Tandemaus et Maushold que vous avez en jeu. Cette attaque inflige 60 dégâts pour chaque tête.",
                "es": "Lanza una moneda por cada Tandemaus y Maushold que tengas en juego. Este ataque hace 60 de daño por cada cabeza.",
                "it": "Lancia una moneta per ogni Tandemau e Maushold che hai in gioco. Questo attacco infligge 60 danni per ogni testa.",
                "de": "Wirf für jedes Tandemaus und jeden Maushold, die du im Spiel hast, eine Münze. Dieser Angriff verursacht 60 Schaden pro Kopf.",
                "pt-br": "Jogue uma moeda para cada Tandemaus e Maushold que você tiver em jogo. Este ataque causa 60 de dano para cada cabeça.",
                "zh-tw": "為您遊戲中的每個 Tandemaus 和 Maushold 擲一枚硬幣。這次攻擊對每個頭造成 60 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
