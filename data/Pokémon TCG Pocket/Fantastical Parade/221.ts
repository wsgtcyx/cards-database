import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/221"
    },
    name: {
        en: "Kabutops",
        "fr": "Kabutops",
        "es": "Kabutops",
        "it": "Kabutops",
        "de": "Kabutops",
        "pt-br": "Kabutops",
        "zh-tw": "兜帽"
    },
    illustrator: "Krgc",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 140,
    types: ["Fighting"],
    evolveFrom: {
        en: "Kabuto",
        "fr": "Kabuto",
        "es": "kabuto",
        "it": "Kabuto",
        "de": "Kabuto",
        "pt-br": "Kabuto",
        "zh-tw": "兜"
    },
    description: {
        en: "Kabutops slices its prey apart and sucks out\nthe fluids. The discarded body parts become\nfood for other Pokémon.",
        "fr": "Kabutops découpe sa proie et l'aspire\nles fluides. Les parties du corps jetées deviennent\nnourriture pour les autres Pokémon.",
        "es": "Kabutops corta en pedazos a su presa y la succiona.\nlos fluidos. Las partes del cuerpo desechadas se convierten\ncomida para otros Pokémon.",
        "it": "Kabutops fa a pezzi la sua preda e la succhia\ni fluidi. Le parti del corpo scartate diventano\ncibo per altri Pokémon.",
        "de": "Kabutops schneidet seine Beute in Stücke und saugt sie aus\ndie Flüssigkeiten. Die weggeworfenen Körperteile werden\nNahrung für andere Pokémon.",
        "pt-br": "Kabutops corta sua presa e a suga\nos fluidos. As partes do corpo descartadas tornam-se\ncomida para outros Pokémon.",
        "zh-tw": "Kabutops 將獵物切開並吸出\n液體。被丟棄的身體部位變成\n其他神奇寶貝的食物。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Leech Life",
                "fr": "Vampirisme",
                "es": "Chupavidas",
                "it": "Sanguisuga",
                "de": "Blutsauger",
                "pt-br": "Suga-vidas",
                "zh-tw": "水蛭生命"
            },
            damage: 50,
            cost: ["Fighting"],
            effect: {
                en: "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
                "fr": "Soignez ce Pokémon du nombre de dégâts que vous avez infligés au Pokémon Actif de votre adversaire.",
                "es": "Cura a este Pokémon el mismo número de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
                "it": "Cura questo Pokémon da una quantità di danni pari a quelli inflitti al Pokémon attivo del tuo avversario.",
                "de": "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast.",
                "pt-br": "Cure deste Pokémon a mesma quantidade de dano que você causou ao Pokémon Ativo do seu oponente.",
                "zh-tw": "該神奇寶貝所造成的傷害與你對對手的活躍神奇寶貝造成的傷害相同。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
