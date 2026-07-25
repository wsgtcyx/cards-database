import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/012",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/012",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/012",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/012",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/012"
    },
    name: {
        en: "Spewpa",
        "fr": "Spewpa",
        "es": "spewpa",
        "it": "Spewpa",
        "de": "Spewpa",
        "pt-br": "Spewpa",
        "zh-tw": "斯佩帕"
    },
    illustrator: "Sumiyoshi Kizuki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    evolveFrom: {
        en: "Scatterbug",
        "fr": "Insecte à dispersion",
        "es": "dispersor",
        "it": "Scatterbug",
        "de": "Scatterbug",
        "pt-br": "Espalhador",
        "zh-tw": "飛蟲"
    },
    description: {
        en: "Spewpa doesn't live in a fixed location. It roams\nwhere it pleases across the fields and mountains,\nbuilding up the energy it needs to evolve.",
        "fr": "Spewpa ne vit pas dans un endroit fixe. Il erre\noù bon lui semble à travers les champs et les montagnes,\naccumuler l’énergie dont il a besoin pour évoluer.",
        "es": "Spewpa no vive en un lugar fijo. deambula\ndonde quiere a través de campos y montañas,\nacumulando la energía que necesita para evolucionar.",
        "it": "Spewpa non vive in un luogo fisso. Vaga\ndove vuole, per campi e monti,\naccumulare l’energia di cui ha bisogno per evolversi.",
        "de": "Spewpa lebt nicht an einem festen Ort. Es wandert\nwo es gefällt über Felder und Berge,\nEs baut die Energie auf, die es braucht, um sich weiterzuentwickeln.",
        "pt-br": "Spewpa não mora em um local fixo. Ele vagueia\nonde quiser através dos campos e montanhas,\nacumulando a energia necessária para evoluir.",
        "zh-tw": "Spewpa 並不居住在固定的地點。它漫遊\n越過田野和山脈，\n積累發展所需的能量。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Signs of Evolution",
                "fr": "Signes d'évolution",
                "es": "Signos de evolución",
                "it": "Segni di evoluzione",
                "de": "Zeichen der Evolution",
                "pt-br": "Sinais de Evolução",
                "zh-tw": "進化的跡象"
            },
            cost: ["Colorless"],
            effect: {
                en: "Put a random card that evolves from Spewpa from your deck into your hand.",
                "fr": "Mettez une carte aléatoire qui évolue depuis Spewpa depuis votre deck dans votre main.",
                "es": "Pon en tu mano una carta aleatoria que evolucione de Spewpa de tu mazo.",
                "it": "Metti nella tua mano una carta casuale che si evolve da Spewpa dal tuo mazzo.",
                "de": "Nimm eine zufällige Karte, die sich aus Spewpa entwickelt, aus deinem Deck auf deine Hand.",
                "pt-br": "Coloque em sua mão uma carta aleatória que evolui de Spewpa do seu deck.",
                "zh-tw": "將一張由斯普帕進化而來的隨機卡從你的牌組放入你的手牌。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
