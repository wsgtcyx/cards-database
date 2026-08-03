import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/210",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/210",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/210",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/210",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/210",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/210",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/210"
    },
    name: {
        en: "Jellicent",
        fr: "Moyade",
        es: "Jellicent",
        it: "Jellicent",
        de: "Apoquallyp",
        "pt-br": "Jellicent",
        "zh-tw": "胖嘟嘟",
        ko: "탱탱겔",
        ja: "ブルンゲル"
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 120,
    types: ["Water"],
    dexId: [593],
    evolveFrom: {
        en: "Frillish",
        fr: "Viskuse",
        es: "Frillish",
        it: "Frillish",
        de: "Quabbel",
        "pt-br": "Frillish",
        "zh-tw": "輕飄飄",
        ko: "탱그릴",
        ja: "プルリル"
    },
    stage: "Stage1",
    description: {
        en: "Whenever a full moon hangs in the night sky, schools of Jellicent gather near the surface of the sea, waiting for their prey to appear.",
        fr: "Les nuits de pleine lune, ils se réunissent\nà la surface de la mer pour attendre leurs proies.",
        es: "Las noches de luna llena, bancos enteros de\nJellicent emergen a la superficie y aguardan la\nllegada de alguna presa incauta.",
        it: "Nelle notti di luna piena emergono in massa,\nrendendosi visibili sulla superficie del mare,\nin attesa di prede.",
        de: "Bei Vollmond treiben Apoquallyp in Schwärmen\nan die Meeresoberfläche und lauern dort ihrer\nBeute auf.",
        "pt-br": "Sempre que há lua cheia no céu noturno, cardumes de Jellicent se reúnem perto da superfície do mar, esperando que suas presas apareçam.",
        "zh-tw": "每到滿月時，胖嘟嘟會\n成群結隊地來到海面上。\n這麼做是為了等待獵物上門。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Bouncy Body",
                fr: "Corps rebondissant",
                es: "Cuerpo hinchable",
                it: "Corpo rimbalzante",
                de: "Federnder Körper",
                "pt-br": "Corpo saltitante",
                "zh-tw": "水嫩之軀"
            },
            effect: {
                en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon, take a {W} Energy from your Energy Zone and attach it to 1 of your Benched Pokémon.",
                fr: "Si ce Pokémon est dans le Point Actif et est endommagé par une attaque du Pokémon de votre adversaire, prenez une Énergie {W} de votre Zone d'Énergie et attachez-la à 1 de votre Pokémon de Banc.",
                es: "Si este Pokémon está en el Punto Activo y es dañado por un ataque del Pokémon de tu rival, toma una Energía {W} de tu Zona de Energía y únela a 1 de tus Pokémon en Banca.",
                it: "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco dei Pokémon del tuo avversario, prendi un'Energia {W} dalla tua Zona d'Energia e assegnala a 1 dei tuoi Pokémon in panchina.",
                de: "Wenn sich dieses Pokémon an der aktiven Stelle befindet und durch einen Angriff des Pokémon deines Gegners beschädigt wird, nimm eine {W}-Energie aus deiner Energiezone und lege sie an eines deiner Bank-Pokémon an.",
                "pt-br": "Se este Pokémon estiver no Ponto Ativo e for danificado por um ataque dos Pokémon do seu oponente, pegue uma Energia {W} da sua Zona de Energia e ligue-a a 1 dos seus Pokémon no Banco.",
                "zh-tw": "如果該寶可夢位於活動區域並因對方寶可夢的攻擊而受到傷害，則從自己的能量區取出 {W} 能量並將其附加到您後備的 1 只寶可夢身上。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Water", "Water"],
            name: {
                en: "Surf",
                fr: "Surf",
                es: "Surf",
                it: "Surf",
                de: "Surfer",
                "pt-br": "Surfar",
                "zh-tw": "衝浪"
            },
            damage: 60
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
