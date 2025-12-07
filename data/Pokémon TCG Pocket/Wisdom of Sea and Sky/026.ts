import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Ninetales",
        "fr": "Ninetales",
        "es": "nuevetales",
        "it": "Ninetales",
        "de": "Ninetales",
        "pt-br": "Ninetales",
        "zh-tw": "九尾"
    },
    illustrator: "AKIRA EGAWA",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fire"],
    evolveFrom: {
        en: "Vulpix",
        "fr": "Goupix",
        "es": "vulpix",
        "it": "Vulpix",
        "de": "Vulpix",
        "pt-br": "Vulpix",
        "zh-tw": "六尾"
    },
    description: {
        en: "It is said to live 1,000 years, and each of its tails\nis loaded with supernatural powers.",
        "fr": "On dit qu'il vit 1 000 ans et que chacune de ses queues\nest chargé de pouvoirs surnaturels.",
        "es": "Se dice que vive 1.000 años, y cada una de sus colas\nestá cargado de poderes sobrenaturales.",
        "it": "Si dice che viva 1.000 anni e ciascuna delle sue code\nè carico di poteri soprannaturali.",
        "de": "Es wird gesagt, dass jeder seiner Schwänze 1.000 Jahre alt wird\nist voller übernatürlicher Kräfte.",
        "pt-br": "Diz-se que vive 1.000 anos, e cada uma de suas caudas\nestá carregado de poderes sobrenaturais.",
        "zh-tw": "據說它的壽命是1000歲，它的每條尾巴\n充滿了超自然的力量。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Scorching Breath",
                "fr": "Souffle brûlant",
                "es": "Aliento abrasador",
                "it": "Respiro bruciante",
                "de": "Sengender Atem",
                "pt-br": "Hálito escaldante",
                "zh-tw": "灼熱的呼吸"
            },
            damage: 120,
            cost: ["Fire", "Fire", "Colorless"],
            effect: {
                en: "During your next turn, this Pokémon can't attack.",
                "fr": "Lors de votre prochain tour, ce Pokémon ne peut pas attaquer.",
                "es": "Durante tu próximo turno, este Pokémon no puede atacar.",
                "it": "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
                "de": "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
                "pt-br": "Durante o seu próximo turno, este Pokémon não poderá atacar.",
                "zh-tw": "在你的下一個回合中，這只神奇寶貝無法攻擊。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
