import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/027",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/027",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/027",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/027",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/027"
    },
    name: {
        en: "Hearthflame Mask Ogerpon",
        "fr": "Masque Hearthflame Ogerpon",
        "es": "Máscara de llama de hogar Ogerpon",
        "it": "Maschera di Focolare Ogerpon",
        "de": "Hearthflame-Maske Ogerpon",
        "pt-br": "Máscara Hearthflame Ogerpon",
        "zh-tw": "爐火面具奧傑彭"
    },
    illustrator: "Nurikabe",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fire"],
    description: {
        en: "In this form, it draws on the power of fire.\nIt spears its enemies with thorn-covered ivy.",
        "fr": "Sous cette forme, il fait appel au pouvoir du feu.\nIl transperce ses ennemis avec du lierre couvert d'épines.",
        "es": "De esta forma, recurre al poder del fuego.\nClava a sus enemigos con hiedra cubierta de espinas.",
        "it": "In questa forma, attinge al potere del fuoco.\nTrafigge i suoi nemici con l'edera ricoperta di spine.",
        "de": "In dieser Form nutzt es die Kraft des Feuers.\nEs spießt seine Feinde mit dornenbedecktem Efeu auf.",
        "pt-br": "Nesta forma, ele utiliza o poder do fogo.\nEle perfura seus inimigos com hera coberta de espinhos.",
        "zh-tw": "在這種形式下，它利用了火的力量。\n它用長滿荊棘的常春藤來攻擊敵人。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Hearthflame Dance",
                "fr": "Danse des flammes du foyer",
                "es": "Danza de la llama del hogar",
                "it": "Danza del focolare",
                "de": "Hearthflame-Tanz",
                "pt-br": "Dança da Chama da Lareira",
                "zh-tw": "爐火之舞"
            },
            damage: 40,
            cost: ["Fire", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, take 2 {R} Energy from your Energy Zone and attach it to 1 of your Benched Pokémon.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, prenez 2 {R} Énergie de votre Zone d'Énergie et attachez-la à 1 de vos Pokémon de Banc.",
                "es": "Lanza una moneda. Si sale cara, toma 2 Energías {R} de tu Zona de Energía y únelas a 1 de tus Pokémon en Banca.",
                "it": "Lancia una moneta. Se esce testa, prendi 2 Energie {R} dalla tua Zona Energetica e assegnale a 1 dei tuoi Pokémon in panchina.",
                "de": "Wirf eine Münze. Bei „Kopf“ nimm 2 {R}-Energie aus deiner Energiezone und lege sie an eines deiner Bank-Pokémon an.",
                "pt-br": "Jogue uma moeda. Se der cara, pegue 2 {R} Energias da sua Zona de Energia e ligue-as a 1 dos seus Pokémon no Banco.",
                "zh-tw": "拋一枚硬幣。如果正面，從你的能量區取出 2 個 {R} 能量並將其附加到你的 1 只後備神奇寶貝上。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1
};
export default card;
