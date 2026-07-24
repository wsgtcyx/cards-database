import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/161",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/161"
    },
    name: {
        en: "Tepig",
        fr: "Gruikui",
        es: "Tepig",
        it: "Tepig",
        de: "Floink",
        "pt-br": "Tepig",
        "zh-tw": "暖暖豬",
        ko: "뚜꾸리",
        ja: "ポカブ"
    },
    illustrator: "Iori Suzuki",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Fire"],
    dexId: [498],
    stage: "Basic",
    description: {
        en: "This Pokémon is a ravenous glutton. It uses its excellent sense of smell to find food, then cooks it to a crisp before eating.",
        fr: "Ce Pokémon est un glouton vorace. Il utilise son excellent odorat pour trouver de la nourriture, puis la fait cuire jusqu'à ce qu'elle soit croustillante avant de la manger.",
        es: "Este Pokémon es un glotón voraz. Utiliza su excelente sentido del olfato para encontrar comida y luego la cocina hasta que quede crujiente antes de comerla.",
        it: "Questo Pokémon è un ghiottone famelico. Usa il suo eccellente senso dell'olfatto per trovare il cibo, quindi lo cuoce fino a renderlo croccante prima di mangiarlo.",
        de: "Dieses Pokémon ist ein gefräßiger Vielfraß. Es nutzt seinen hervorragenden Geruchssinn, um Nahrung zu finden und diese vor dem Verzehr knusprig zuzubereiten.",
        "pt-br": "Este Pokémon é um glutão voraz. Ele usa seu excelente olfato para encontrar comida e depois cozinha até ficar crocante antes de comer.",
        "zh-tw": "這隻寶可夢是貪食者。它利用其出色的嗅覺來尋找食物，然後將其煮至酥脆後再食用。"
    },
    attacks: [
        {
            cost: ["Fire"],
            name: {
                en: "Stoke",
                fr: "Attisement",
                es: "Atizador",
                it: "Attizzatoio",
                de: "Anheizen",
                "pt-br": "Carregar",
                "zh-tw": "燃起"
            },
            effect: {
                en: "Flip a coin. If heads, take 2 {R} Energy from your Energy Zone and attach it to this Pokémon.",
                fr: "Lancez une pièce de monnaie. Si c'est face, prenez 2 {R} Énergie de votre Zone d'Énergie et attachez-la à ce Pokémon.",
                es: "Lanza una moneda. Si sale cara, toma 2 Energías {R} de tu Zona de Energía y únelas a este Pokémon.",
                it: "Lancia una moneta. Se esce testa, prendi 2 Energie {R} dalla tua Zona Energetica e assegnale a questo Pokémon.",
                de: "Wirf eine Münze. Bei „Kopf“ nimm 2 {R}-Energie aus deiner Energiezone und lege sie an dieses Pokémon an.",
                "pt-br": "Jogue uma moeda. Se der cara, pegue 2 {R} Energias da sua Zona de Energia e ligue-as a este Pokémon.",
                "zh-tw": "拋一枚硬幣。如果正面，則從自己的能量區取出 2 個 {R} 能量並將其附加到該寶可夢上。"
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
