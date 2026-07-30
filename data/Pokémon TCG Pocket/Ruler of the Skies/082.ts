import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/082"
    },
    name: {
        en: "Armaldo",
        fr: "Armaldo",
        es: "Armaldo",
        it: "Armaldo",
        de: "Armaldo",
        "pt-br": "Armaldo",
        "zh-tw": "太古盔甲",
        ko: "아말도",
        ja: "アーマルド"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Fighting"],
    dexId: [348],
    evolveFrom: {
        en: "Anorith",
        fr: "Anorith",
        es: "Anorith",
        it: "Anorith",
        de: "Anorith",
        "pt-br": "Anorith",
        "zh-tw": "太古羽蟲",
        ko: "아노딥스",
        ja: "アノプス"
    },
    stage: "Stage2",
    description: {
        en: "Though it lives on land, it’s also a good swimmer. It dives into the ocean in search of prey, using its sharp claws to take down its quarry.",
        fr: "Bien que vivant sur la terre ferme, il est très\nbon nageur. Il plonge dans la mer à la recherche\nde proies et les abat avec ses pinces acérées.",
        es: "Vive en tierra firme, pero es un hábil nadador.\nSe zambulle en el agua en busca de presas y las\natrapa con sus afiladas pinzas.",
        it: "Vive sulla terraferma, ma è un abile nuotatore.\nSi tuffa in mare alla ricerca di prede, che abbatte\ncon i suoi artigli affilati.",
        de: "Es lebt an Land, kann aber auch gut schwimmen.\nZum Jagen taucht es ins Meer und erledigt Beute\nmit seinen scharfen Klauen.",
        "zh-tw": "生活在陸地上，但也擅長游泳。\n會為了尋找獵物而潛入海中，\n用銳利的爪子解決對方。"
    },
    attacks: [
        {
            cost: ["Fighting", "Colorless", "Colorless"],
            name: {
                en: "Abyssal Drop"
            },
            effect: {
                en: "Discard all Energy from this Pokémon. Choose a spot from among your opponent's Active Spot and Bench. At the end of your opponent's next turn, Knock Out the Pokémon in the spot you chose."
            }
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
