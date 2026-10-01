import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/051",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/051",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/051",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/051",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/051",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/051",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/051"
    },
    name: {
        en: "Hearthflame Mask Ogerpon",
        fr: "Ogerpon Masque du Fourneau",
        es: "Ogerpon Máscara Horno",
        it: "Ogerpon Maschera Focolare",
        de: "Ofenmaske-Ogerpon",
        "pt-br": "Ogerpon Máscara Fornalha",
        "zh-tw": "厄鬼椪火灶面具",
        ja: "オーガポンかまどのめん",
        ko: "오거폰화덕의 가면"
    },
    illustrator: "Nurikabe",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 80,
    types: [
        "Fire"
    ],
    description: {
        en: "In this form, it draws on the power of fire.\nIt spears its enemies with thorn-covered ivy.",
        fr: "Sous cette forme, il puise dans le pouvoir du feu. Il se sert de sa branche épineuse comme d'une lance pour transpercer ses adversaires.",
        es: "Esta forma emplea el poder del fuego. Atraviesa a sus enemigos con una rama llena de espinas que usa a modo de lanza.",
        it: "Questa forma sfrutta la forza del fuoco. Trafigge il nemico manovrando la sua liana spinosa come una lancia.",
        de: "In dieser Form macht es sich die Kraft des Feuers zunutze. Es verwendet seine dornige Ranke wie einen Speer, um Feinde zu durchbohren.",
        "pt-br": "Nesta forma, a fonte do seu poder é o fogo. Perfura os inimigos com suas vinhas espinhosas.",
        "zh-tw": "激發出火之力量的樣子。會自在操控帶刺的藤蔓，使其像長矛般地刺穿敵手。",
        ja: "In this form, it draws on the power of fire.\nIt spears its enemies with thorn-covered ivy.",
        ko: "In this form, it draws on the power of fire.\nIt spears its enemies with thorn-covered ivy."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Hearthflame Dance",
                fr: "Danse du Fourneau",
                es: "Danza Horno",
                it: "Danza del Focolare",
                de: "Ofentanz",
                "pt-br": "Dança Fornalha",
                "zh-tw": "火灶之舞",
                ja: "Hearthflame Dance",
                ko: "Hearthflame Dance"
            },
            damage: 40,
            cost: [
                "Fire",
                "Colorless"
            ],
            effect: {
                en: "Flip a coin. If heads, take 2 {R} Energy from your Energy Zone and attach it to 1 of your Benched Pokémon.",
                fr: "Lancez une pièce. Si c'est face, prenez 2 Énergies {R} de votre zone Énergie et attachez‐les à un de vos Pokémon de Banc.",
                es: "Lanza 1 moneda. Si sale cara, une 2 Energías {R} de tu área de Energía a 1 de tus Pokémon en Banca.",
                it: "Lancia una moneta. Se esce testa, prendi 2 Energie {R} dalla tua Zona Energia e assegnale a uno dei tuoi Pokémon in panchina.",
                de: "Wirf 1 Münze. Lege bei Kopf 2 {R}-Energien aus deinem Energiebereich an 1 Pokémon auf deiner Bank an.",
                "pt-br": "Jogue uma moeda. Se sair cara, pegue 2 Energias {R} da sua Zona de Energia e ligue-as a 1 dos seus Pokémon no Banco.",
                "zh-tw": "擲1次硬幣若為正面,則從自己的能量區抽出2個{R}能量,附於1隻備戰寶可夢身上。",
                ja: "Flip a coin. If heads, take 2 {R} Energy from your Energy Zone and attach it to 1 of your Benched Pokémon.",
                ko: "Flip a coin. If heads, take 2 {R} Energy from your Energy Zone and attach it to 1 of your Benched Pokémon."
            }
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
