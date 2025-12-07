import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    name: {
        en: "Chinchou",
        "fr": "Chinchou",
        "es": "Chinchú",
        "it": "Chinchou",
        "de": "Chinchou",
        "pt-br": "Chinchou",
        "zh-tw": "燈籠魚",
    },
    illustrator: "Aya Kusube",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    description: {
        en: "Its antennae, which evolved from a fin, have both\npositive and negative charges flowing through them.",
        "fr": "Ses antennes, issues d'une nageoire, possèdent à la fois\ndes charges positives et négatives les traversent.",
        "es": "Sus antenas, que evolucionaron a partir de una aleta, tienen ambas\ncargas positivas y negativas que fluyen a través de ellos.",
        "it": "Le sue antenne, evolutesi da una pinna, hanno entrambe le cose\ncariche positive e negative che li attraversano.",
        "de": "Seine Fühler, die sich aus einer Flosse entwickelt haben, haben beides\nDurch sie fließen positive und negative Ladungen.",
        "pt-br": "Suas antenas, que evoluíram a partir de uma nadadeira, possuem tanto\ncargas positivas e negativas fluindo através deles.",
        "zh-tw": "它的觸角由鰭演化而來，具有\n正電荷和負電荷流過它們。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Luring Glow",
                "fr": "Attirer la lueur",
                "es": "Resplandor atractivo",
                "it": "Bagliore attirante",
                "de": "Verlockender Glanz",
                "pt-br": "Brilho atraente",
                "zh-tw": "誘人的光芒"
            },
            cost: ["Lightning"],
            effect: {
                en: "Flip a coin. If heads, switch in 1 of your opponent's Benched Pokémon to the Active Spot.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, placez 1 des Pokémon du Banc de votre adversaire sur le point actif.",
                "es": "Lanza una moneda. Si sale cara, cambia 1 de los Pokémon en Banca de tu rival al Punto Activo.",
                "it": "Lancia una moneta. Se esce testa, metti in posizione attiva 1 dei Pokémon nella panchina del tuo avversario.",
                "de": "Wirf eine Münze. Bei „Kopf“ wechselst du 1 Pokémon auf der Bank deines Gegners in die aktive Position.",
                "pt-br": "Jogue uma moeda. Se der cara, troque 1 dos Pokémon do Banco do seu oponente para o Ponto Ativo.",
                "zh-tw": "拋一枚硬幣。如果正面，則將對手的 1 只後備神奇寶貝切換到活動位置。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
