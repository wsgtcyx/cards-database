import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/122",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/122",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/122",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/122",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/122",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/122",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/122"
    },
    name: {
        en: "Shelgon",
        "fr": "Drackhaus",
        "es": "Shelgon",
        "it": "Shelgon",
        "de": "Draschel",
        "pt-br": "Shelgon",
        "zh-tw": "甲殼龍"
    },
    illustrator: "tetsuya koizumi",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Dragon"],
    evolveFrom: {
        en: "Bagon",
        "fr": "Draby",
        "es": "Bagon",
        "it": "Bagon",
        "de": "Kindwurm",
        "pt-br": "Bagon",
        "zh-tw": "寶貝龍"
    },
    description: {
        en: "Its armored body makes all attacks bounce off.\nThe armor is too tough, however, making it heavy\nand somewhat sluggish.",
        "fr": "Son corps blindé fait rebondir toutes les attaques.\nL'armure est cependant trop résistante, ce qui la rend lourde\net quelque peu lent.",
        "es": "Su cuerpo blindado hace que todos los ataques reboten.\nSin embargo, la armadura es demasiado dura, lo que la hace pesada.\ny algo lento.",
        "it": "Il suo corpo corazzato fa rimbalzare tutti gli attacchi.\nL'armatura, tuttavia, è troppo resistente e quindi pesante\ne un po' lento.",
        "de": "Sein gepanzerter Körper lässt alle Angriffe abprallen.\nDie Panzerung ist jedoch zu robust und dadurch schwer\nund etwas träge.",
        "pt-br": "Seu corpo blindado faz com que todos os ataques sejam refletidos.\nA armadura é muito resistente, porém, tornando-a pesada\ne um tanto lento.",
        "zh-tw": "其裝甲的身體可以將所有攻擊彈開。\n然而，盔甲太堅韌，使其變得沉重\n並且有些遲緩。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Rolling Tackle",
                "fr": "Matériel roulant",
                "es": "Aparejo rodante",
                "it": "Contrasto rotolante",
                "de": "Rollendes Gerät",
                "pt-br": "Equipamento de rolamento",
                "zh-tw": "滾動釣具"
            },
            damage: 60,
            cost: ["Fire", "Water"]
        }],
    retreat: 3
};
export default card;
