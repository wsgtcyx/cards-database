import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    name: {
        en: "Magmar",
        "fr": "Magmar",
        "es": "Magmar",
        "it": "Magmar",
        "de": "Magmar",
        "pt-br": "Magmar",
        "zh-tw": "瑪格瑪"
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 80,
    types: ["Fire"],
    description: {
        en: "Magmar dispatches its prey with fire. But it\nregrets this habit once it realizes that it has\nburned its intended prey to a charred crisp.",
        "fr": "Magmar envoie sa proie avec le feu. Mais ça\nregrette cette habitude une fois qu'il se rend compte qu'il a\na brûlé sa proie prévue jusqu'à ce qu'elle soit carbonisée.",
        "es": "Magmar mata a su presa con fuego. pero\nse arrepiente de este hábito una vez que se da cuenta de que ha\nquemó a su presa prevista hasta dejarla crujiente.",
        "it": "Magmar annienta la sua preda col fuoco. Ma quello\nsi rammarica di questa abitudine una volta che si rende conto di averla\nridusse la sua preda a una patatina carbonizzata.",
        "de": "Magmar erledigt seine Beute mit Feuer. Aber es\nbereut diese Angewohnheit, sobald es merkt, dass es so ist\nverbrannte seine beabsichtigte Beute zu einer verkohlten Kruste.",
        "pt-br": "Magmar despacha sua presa com fogo. Mas isso\nlamenta esse hábito quando percebe que\nqueimou a presa pretendida até ficar crocante.",
        "zh-tw": "瑪格瑪用火消滅獵物。但它\n一旦意識到自己已經養成了這種習慣，就會後悔\n將其預定的獵物燒成焦脆的樣子。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Stoke",
                "fr": "Alimenter",
                "es": "Cebar",
                "it": "Stoke",
                "de": "Schüren",
                "pt-br": "Stoke",
                "zh-tw": "斯托克"
            },
            cost: ["Fire"],
            effect: {
                en: "Take a {R} Energy from your Energy Zone and attach it to this Pokémon.",
                "fr": "Prenez une Énergie {R} de votre zone Énergie et attachez-la à ce Pokémon.",
                "es": "Une 1 Energía {R} de tu área de Energía a este Pokémon.",
                "it": "Prendi un'Energia {R} dalla tua Zona Energia e assegnala a questo Pokémon.",
                "de": "Lege 1 {R}-Energie aus deinem Energiebereich an dieses Pokémon an.",
                "pt-br": "Pegue 1 Energia {R} da sua Zona de Energia e ligue-a a este Pokémon.",
                "zh-tw": "從你的能量區取出一個{R}能量並將其附加到該神奇寶貝上。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2
};
export default card;
