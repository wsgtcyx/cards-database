import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Hippowdon",
        "fr": "Hippodocus",
        "es": "hippowdon",
        "it": "Hippowdon",
        "de": "Hippowdon",
        "pt-br": "Hippowdon",
        "zh-tw": "河馬獸",
    },
    illustrator: "Shigenori Negishi",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Fighting"],
    evolveFrom: {
        en: "Hippopotas",
        "fr": "Hippopotames",
        "es": "hipopótamos",
        "it": "Ippopotami",
        "de": "Nilpferde",
        "pt-br": "Hipopótamos",
        "zh-tw": "怪河馬",
    },
    description: {
        en: "It brandishes its gaping mouth in a display of\nfearsome strength. It raises vast quantities of\nsand while attacking.",
        "fr": "Il brandit sa gueule béante dans un étalage de\nune force redoutable. Il lève de grandes quantités de\ndu sable en attaquant.",
        "es": "Blande su boca abierta en un alarde de\nfuerza temible. Genera grandes cantidades de\narena mientras ataca.",
        "it": "Brandisce la bocca spalancata in segno di\nforza temibile. Solleva grandi quantità di\nsabbia durante l'attacco.",
        "de": "Es schwenkt sein aufgerissenes Maul zur Schau\nfurchterregende Stärke. Es werden große Mengen davon erzeugt\nSand beim Angriff.",
        "pt-br": "Ele brande sua boca escancarada em uma exibição de\nforça temível. Ele levanta grandes quantidades de\nareia enquanto ataca.",
        "zh-tw": "它揮舞著張開的嘴巴，展示著\n可怕的力量。它籌集了大量\n攻擊時撒沙。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Crashing Fangs",
                "fr": "Crocs fracassants",
                "es": "Colmillos estrellados",
                "it": "Zanne Schiantanti",
                "de": "Krachende Fangzähne",
                "pt-br": "Presas Quebrando",
                "zh-tw": "破碎的獠牙"
            },
            damage: 100,
            cost: ["Fighting", "Fighting", "Colorless"],
            effect: {
                en: "Flip a coin. If tails, during your next turn, this Pokémon can't attack.",
                "fr": "Lancez une pièce de monnaie. Si c'est pile, lors de votre prochain tour, ce Pokémon ne peut pas attaquer.",
                "es": "Lanza una moneda. Si sale cruz, durante tu próximo turno, este Pokémon no podrá atacar.",
                "it": "Lancia una moneta. Se esce croce, durante il tuo prossimo turno, questo Pokémon non può attaccare.",
                "de": "Wirf eine Münze. Bei „Zahl“ kann dieses Pokémon in deinem nächsten Zug nicht angreifen.",
                "pt-br": "Jogue uma moeda. Se sair coroa, durante seu próximo turno, este Pokémon não poderá atacar.",
                "zh-tw": "拋一枚硬幣。如果是反面，則在你的下一個回合中，這只神奇寶貝無法攻擊。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 4
};
export default card;
