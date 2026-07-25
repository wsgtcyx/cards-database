import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/115",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/115",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/115",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/115",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/115",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/115"
    },
    name: {
        en: "Bombirdier",
        fr: "Lestombaile",
        es: "Bombirdier",
        it: "Bombirdier",
        de: "Adebom",
        "pt-br": "Bombirdier",
        "zh-tw": "下石鳥",
        ko: "떨구새",
        ja: "オトシドリ"
    },
    illustrator: "Sekio",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Darkness"],
    dexId: [962],
    stage: "Basic",
    description: {
        en: "Bombirdier uses the apron on its chest to bundle up food, which it carries back to its nest. It enjoys dropping things that make loud noises.",
        fr: "Lestombaile utilise le tablier sur sa poitrine pour emballer la nourriture qu'il rapporte à son nid. Il aime laisser tomber des objets qui font du bruit.",
        es: "Bombirdier utiliza el delantal que lleva en el pecho para amontonar la comida y llevarla hasta su nido. Le gusta dejar caer cosas que hacen ruidos fuertes.",
        it: "Bombirdier usa il grembiule che ha sul petto per impacchettare il cibo, che poi riporta al nido. Gli piace far cadere oggetti che producono forti rumori.",
        de: "Adebom nutzt die Schürze auf seiner Brust, um Nahrung zu bündeln, die er zu seinem Nest zurückträgt. Es genießt, Dinge fallen zu lassen, die laute Geräusche machen.",
        "pt-br": "Bombirdier usa o avental no peito para embrulhar a comida, que leva de volta ao ninho. Ele gosta de deixar cair coisas que fazem barulho.",
        "zh-tw": "下石鳥用胸前的圍裙捆紮食物，然後帶回巢穴。牠喜歡掉落發出巨大噪音的東西。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Villainous Delivery",
                fr: "Livraison méchante",
                es: "Entrega villana",
                it: "Consegna malvagia",
                de: "Schurkenlieferung",
                "pt-br": "Entrega Vilã",
                "zh-tw": "壞蛋快遞"
            },
            effect: {
                en: "As long as this Pokémon is on your Bench, your Active {D} Pokémon's Retreat Cost is 1 less.",
                fr: "Tant que ce Pokémon est sur votre Banc, le Coût de Retraite de votre Pokémon Actif {D} est de 1 de moins.",
                es: "Mientras este Pokémon esté en tu Banca, el Coste de Retirada de tu Pokémon Activo {D} es 1 menos.",
                it: "Fintanto che questo Pokémon è nella tua panchina, il costo di ritirata del tuo Pokémon attivo {D} è di 1 in meno.",
                de: "Solange sich dieses Pokémon auf deiner Bank befindet, sind die Rückzugskosten deines aktiven {D} Pokémon 1 weniger.",
                "pt-br": "Enquanto este Pokémon estiver no seu Banco, o Custo de Recuo do seu Pokémon {D} Ativo será 1 a menos.",
                "zh-tw": "只要這隻寶可夢在你的替補席上，你的活躍 {D} 寶可夢的撤退成本就會減少 1。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Darkness"],
            name: {
                en: "Dark Cutter",
                fr: "Tranch'Obscur",
                es: "Cuchilla Oscura",
                it: "Oscurotaglio",
                de: "Dunkler Zerschneider",
                "pt-br": "Cortador de Escuridão",
                "zh-tw": "暗黑利刃"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
