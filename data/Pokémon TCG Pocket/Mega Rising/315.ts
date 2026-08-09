import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/315",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/315",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/315",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/315",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/315",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/315",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/315"
    },
    name: {
        en: "Dodrio",
        "fr": "Dodrio",
        "es": "Dodrio",
        "it": "Dodrio",
        "de": "Dodri",
        "pt-br": "Dodrio",
        "zh-tw": "嘟嘟利",
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 80,
    types: ["Colorless"],
    evolveFrom: {
        en: "Doduo",
        "fr": "Doduo",
        "es": "Doduo",
        "it": "Doduo",
        "de": "Dodu",
        "pt-br": "Doduo",
        "zh-tw": "嘟嘟",
    },
    description: {
        en: "An enemy that takes its eyes off any of the\nthree heads—even for a second—will get\npecked severely.",
        "fr": "Un ennemi qui détourne les yeux de tous les\ntrois têtes, même pour une seconde, obtiendront\npicoré sévèrement.",
        "es": "Un enemigo que quita los ojos de cualquiera de los\ntres cabezas, aunque sea por un segundo, obtendrán\npicoteado severamente.",
        "it": "Un nemico che distoglie lo sguardo da nessuno dei\notterranno tre teste, anche per un secondo\nbeccato severamente.",
        "de": "Ein Feind, der jeden von ihnen aus den Augen lässt\ndrei Köpfe – auch nur für eine Sekunde – werden es schaffen\nheftig gepickt.",
        "pt-br": "Um inimigo que tira os olhos de qualquer um dos\ntrês cabeças - mesmo que por um segundo - ficarão\nbicou severamente.",
        "zh-tw": "敵人將目光從任何一個物體上移開\n三個頭——哪怕只是一秒鐘——都會得到\n狠狠地啄了一下。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Drill Peck",
                "fr": "Forage à pic",
                "es": "Picoteo de taladro",
                "it": "Perforare Peck",
                "de": "Drill Peck",
                "pt-br": "Broca Peck",
                "zh-tw": "鑽啄"
            },
            damage: 40,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 0
};
export default card;
