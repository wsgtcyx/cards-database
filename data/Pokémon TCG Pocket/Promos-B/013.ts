import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/013",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/013",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/013",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/013",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/013",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/013",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-B/013"
    },
    name: {
        en: "Arcanine",
        fr: "Arcanin",
        es: "Arcanine",
        it: "Arcanine",
        de: "Arkani",
        "pt-br": "Arcanine",
        "zh-tw": "風速狗",
        ko: "윈디",
        ja: "ウインディ"
    },
    illustrator: "Atsuko Nishida",
    rarity: "None",
    category: "Pokemon",
    hp: 120,
    types: ["Fire"],
    dexId: [59],
    evolveFrom: {
        en: "Growlithe",
        fr: "Caninos",
        es: "Growlithe",
        it: "Growlithe",
        de: "Fukano",
        "pt-br": "Growlithe",
        "zh-tw": "卡蒂狗",
        ko: "가디",
        ja: "ガーディ"
    },
    stage: "Stage1",
    description: {
        en: "Its magnificent bark conveys a sense of majesty. Anyone hearing it can’t help but grovel before it.",
        fr: "Son aboiement est tout simplement majestueux.\nOn ne peut que ramper à ses pieds après l’avoir\nentendu.",
        es: "Su magnífico ladrido transmite majestuosidad. Todo\nel que lo escuche no podrá evitar adularlo.",
        it: "Il suo incredibile ruggito ispira un senso di maestosità.\nChiunque lo senta non può far a meno di prostrarsi.",
        de: "Sein bezauberndes Bellen klingt majestätisch. Jeder,\nder es vernimmt, muss sich automatisch verbeugen.",
        "pt-br": "A sua magnífica casca transmite uma sensação de majestade. Qualquer um que ouça isso não pode deixar de rastejar diante disso.",
        "zh-tw": "其雄偉的樹皮給人一種威嚴的感覺。任何人聽到它都會情不自禁地在它面前卑躬屈膝。"
    },
    attacks: [
        {
            cost: ["Fire", "Fire"],
            name: {
                en: "Fire Fang",
                fr: "Crocs Feu",
                es: "Colmillo Ígneo",
                it: "Rogodenti",
                de: "Feuerzahn",
                "pt-br": "Presas de Fogo",
                "zh-tw": "火焰牙"
            },
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon is now Burned.",
                fr: "Lancez une pièce de monnaie. Si c'est face, le Pokémon Actif de votre adversaire est désormais Brûlé.",
                es: "Lanza una moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Quemado.",
                it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario è bruciato.",
                de: "Wirf eine Münze. Bei „Kopf“ ist das Aktive Pokémon deines Gegners jetzt verbrannt.",
                "pt-br": "Jogue uma moeda. Se der cara, o Pokémon Ativo do seu oponente agora está Queimado.",
                "zh-tw": "拋一枚硬幣。如果正面，則對手的活躍寶可夢現在被燒毀。"
            },
            damage: 50
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 3,
    boosters: ["vol2"]
};

export default card;
