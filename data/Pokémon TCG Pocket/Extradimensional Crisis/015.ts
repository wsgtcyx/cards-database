import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Luxray",
        "fr": "Luxray",
        "es": "luxray",
        "it": "Luxray",
        "de": "Luxray",
        "pt-br": "Luxray",
        "zh-tw": "倫琴貓",
    },
    illustrator: "Masakazu Fukuda",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Lightning"],
    evolveFrom: {
        en: "Luxio",
        "fr": "Luxio",
        "es": "lucio",
        "it": "Luxio",
        "de": "Luxio",
        "pt-br": "Luxo",
        "zh-tw": "盧西奧"
    },
    description: {
        en: "It can see clearly through walls to track down its\nprey and seek its lost young.",
        "fr": "Il peut voir clairement à travers les murs pour retrouver sa trace.\nproie et chercher ses petits perdus.",
        "es": "Puede ver claramente a través de las paredes para localizar su\npresa y busca a sus crías perdidas.",
        "it": "Può vedere chiaramente attraverso i muri per rintracciarlo\npreda e cerca i suoi piccoli perduti.",
        "de": "Es kann deutlich durch Wände sehen, um es aufzuspüren\nBeute machen und seine verlorenen Jungen suchen.",
        "pt-br": "Ele pode ver claramente através das paredes para rastrear seu\ncaçar e procurar seus filhotes perdidos.",
        "zh-tw": "它可以透過牆壁清晰地看到它的踪跡\n捕食並尋找它失去的幼崽。"
    },
    stage: "Stage2",
    abilities: [{
            type: "Ability",
            name: {
                en: "Intimidating Fang",
                "fr": "Croc intimidant",
                "es": "Colmillo intimidante",
                "it": "Zanna intimidatoria",
                "de": "Einschüchternder Fang",
                "pt-br": "Presa Intimidadora",
                "zh-tw": "恐嚇方"
            },
            effect: {
                en: "As long as this Pokémon is in the Active Spot, attacks used by your opponent's Active Pokémon do −20 damage.",
                "fr": "Tant que ce Pokémon est dans le Point Actif, les attaques utilisées par le Pokémon Actif de votre adversaire infligent -20 dégâts.",
                "es": "Mientras este Pokémon esté en el Punto Activo, los ataques utilizados por el Pokémon Activo de tu rival causan −20 de daño.",
                "it": "Fintanto che questo Pokémon è in posizione attiva, gli attacchi usati dal Pokémon attivo del tuo avversario infliggono -20 danni.",
                "de": "Solange sich dieses Pokémon an der aktiven Stelle befindet, verursachen Angriffe des aktiven Pokémon deines Gegners −20 Schadenspunkte.",
                "pt-br": "Enquanto este Pokémon estiver no Ponto Ativo, os ataques usados ​​pelo Pokémon Ativo do seu oponente causarão -20 de dano.",
                "zh-tw": "只要這只神奇寶貝在活躍點，對手的活躍神奇寶貝使用的攻擊就會造成−20點傷害。"
            }
        }],
    attacks: [{
            name: {
                en: "Electric Ball",
                "fr": "Boule électrique",
                "es": "Bola eléctrica",
                "it": "Palla elettrica",
                "de": "Elektrischer Ball",
                "pt-br": "Bola Elétrica",
                "zh-tw": "電動球"
            },
            damage: 90,
            cost: ["Lightning", "Lightning", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
