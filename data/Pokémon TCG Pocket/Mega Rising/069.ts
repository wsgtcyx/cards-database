import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Jellicent",
        "fr": "Gelée",
        "es": "gelatinoso",
        "it": "Jellicent",
        "de": "Jellicent",
        "pt-br": "Gelado",
        "zh-tw": "胖嘟嘟",
    },
    illustrator: "Tomokazu Komiya",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Water"],
    evolveFrom: {
        en: "Frillish",
        "fr": "Fantaisie",
        "es": "volantes",
        "it": "Frizzo",
        "de": "Rüschen",
        "pt-br": "Enfeitado",
        "zh-tw": "華麗的"
    },
    description: {
        en: "Whenever a full moon hangs in the night sky,\nschools of Jellicent gather near the surface of\nthe sea, waiting for their prey to appear.",
        "fr": "Chaque fois qu'une pleine lune apparaît dans le ciel nocturne,\ndes bancs de Jellicent se rassemblent près de la surface de\nla mer, attendant que leurs proies apparaissent.",
        "es": "Cada vez que hay luna llena en el cielo nocturno,\nLas escuelas de Jellicent se reúnen cerca de la superficie de\nel mar, esperando que aparezca su presa.",
        "it": "Ogni volta che la luna piena è sospesa nel cielo notturno,\nle scuole di Jellicent si riuniscono vicino alla superficie di\nil mare, in attesa che appaia la loro preda.",
        "de": "Immer wenn ein Vollmond am Nachthimmel hängt,\nSchulen von Jellicent versammeln sich nahe der Oberfläche von\ndas Meer und wartet auf das Erscheinen ihrer Beute.",
        "pt-br": "Sempre que uma lua cheia paira no céu noturno,\ncardumes de Jellicent se reúnem perto da superfície de\no mar, esperando que suas presas apareçam.",
        "zh-tw": "每當一輪滿月掛在夜空中時，\n傑利森特學校聚集在地表附近\n大海裡，等待著獵物的出現。"
    },
    stage: "Stage1",
    abilities: [{
            type: "Ability",
            name: {
                en: "Bouncy Body",
                "fr": "Corps rebondissant",
                "es": "Cuerpo hinchable",
                "it": "Corpo rimbalzante",
                "de": "Federnder Körper",
                "pt-br": "Corpo saltitante",
                "zh-tw": "彈力身體"
            },
            effect: {
                en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon, take a {W} Energy from your Energy Zone and attach it to 1 of your Benched Pokémon.",
                "fr": "Si ce Pokémon est dans le Point Actif et est endommagé par une attaque du Pokémon de votre adversaire, prenez une Énergie {W} de votre Zone d'Énergie et attachez-la à 1 de votre Pokémon de Banc.",
                "es": "Si este Pokémon está en el Punto Activo y es dañado por un ataque del Pokémon de tu rival, toma una Energía {W} de tu Zona de Energía y únela a 1 de tus Pokémon en Banca.",
                "it": "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco dei Pokémon del tuo avversario, prendi un'Energia {W} dalla tua Zona d'Energia e assegnala a 1 dei tuoi Pokémon in panchina.",
                "de": "Wenn sich dieses Pokémon an der aktiven Stelle befindet und durch einen Angriff des Pokémon deines Gegners beschädigt wird, nimm eine {W}-Energie aus deiner Energiezone und lege sie an eines deiner Bank-Pokémon an.",
                "pt-br": "Se este Pokémon estiver no Ponto Ativo e for danificado por um ataque dos Pokémon do seu oponente, pegue uma Energia {W} da sua Zona de Energia e ligue-a a 1 dos seus Pokémon no Banco.",
                "zh-tw": "如果該寶可夢位於活動區域並因對方寶可夢的攻擊而受到傷害，則從自己的能量區取出 {W} 能量並將其附加到您後備的 1 只寶可夢身上。"
            }
        }],
    attacks: [{
            name: {
                en: "Surf",
                "fr": "Surf",
                "es": "Navegar",
                "it": "Navigare",
                "de": "Surfen",
                "pt-br": "Surfar",
                "zh-tw": "衝浪"
            },
            damage: 60,
            cost: ["Water", "Water"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2
};
export default card;
