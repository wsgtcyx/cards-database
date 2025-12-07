import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Cobalion",
        "fr": "Cobaltium",
        "es": "cobalión",
        "it": "Cobalione",
        "de": "Kobalion",
        "pt-br": "Cobalião",
        "zh-tw": "勾帕路翁",
    },
    illustrator: "Takeshi Nakamura",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Metal"],
    description: {
        en: "It has a body and heart of steel. It worked with its\nallies to punish people when they hurt Pokémon.",
        "fr": "Il a un corps et un cœur en acier. Cela a fonctionné avec son\nalliés pour punir les gens lorsqu'ils blessent des Pokémon.",
        "es": "Tiene cuerpo y corazón de acero. Funcionó con su\naliados para castigar a las personas cuando lastiman a Pokémon.",
        "it": "Ha un corpo e un cuore d'acciaio. Ha funzionato con il suo\nalleati per punire le persone quando feriscono i Pokémon.",
        "de": "Es hat einen Körper und ein Herz aus Stahl. Es hat mit seinem funktioniert\nVerbündete, um Menschen zu bestrafen, wenn sie Pokémon verletzen.",
        "pt-br": "Tem corpo e coração de aço. Funcionou com seu\naliados para punir as pessoas quando elas machucam Pokémon.",
        "zh-tw": "它有鋼鐵般的身體和鋼鐵般的心臟。它與它的\n當人們傷害神奇寶貝時，盟友會懲罰他們。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Sacred Sword",
                "fr": "Épée sacrée",
                "es": "Espada Sagrada",
                "it": "Spada Sacra",
                "de": "Heiliges Schwert",
                "pt-br": "Espada Sagrada",
                "zh-tw": "聖劍"
            },
            damage: 110,
            cost: ["Metal", "Metal", "Colorless"],
            effect: {
                en: "During your next turn, this Pokémon can't use Sacred Sword.",
                "fr": "Lors de votre prochain tour, ce Pokémon ne pourra pas utiliser l'Épée Sacrée.",
                "es": "Durante tu próximo turno, este Pokémon no puede usar Espada Sagrada.",
                "it": "Durante il tuo prossimo turno, questo Pokémon non può usare la Spada Sacra.",
                "de": "Während deines nächsten Zuges kann dieses Pokémon Sacred Sword nicht verwenden.",
                "pt-br": "Durante o seu próximo turno, este Pokémon não poderá usar Sacred Sword.",
                "zh-tw": "在你的下一個回合中，這只神奇寶貝不能使用聖劍。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
