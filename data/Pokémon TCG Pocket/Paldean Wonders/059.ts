import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/059",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/059",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/059",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/059",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/059",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/059"
    },
    name: {
        en: "Toedscool",
        fr: "Terracool",
        es: "Toedscool",
        it: "Toedscool",
        de: "Tentagra",
        "pt-br": "Toedscool",
        "zh-tw": "原野水母",
        pt: "Toedscool",
        'es-mx': "Toedscool"
    },
    illustrator: "Oswaldo KATO",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fighting"],
    dexId: [948],
    description: {
        en: "Toedscool lives in muggy forests. The flaps that fall from its body are chewy and very delicious.",
        "fr": "Terracool vit dans les forêts humides. Les lambeaux qui tombent de son corps sont moelleux et très délicieux.",
        "es": "Toedscool vive en bosques bochornosos. Las aletas que caen de su cuerpo son masticables y muy deliciosas.",
        "it": "Toedscool vive nelle foreste afose. I lembi che cadono dal suo corpo sono gommosi e molto deliziosi.",
        "de": "Tentagra lebt in schwülen Wäldern. Die von seinem Körper fallenden Lappen sind zäh und sehr lecker.",
        "pt-br": "Toedscool vive em florestas abafadas. As abas que caem de seu corpo são mastigáveis ​​e muito deliciosas.",
        "zh-tw": "原野水母 生活在悶熱的森林裡。從它身上掉下來的皮瓣很有嚼勁，非常美味。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Smash Kick",
                fr: "Coud'Pattes",
                es: "Patada Destrucción",
                it: "Calcio Esplosivo",
                de: "Schmetterkick",
                "pt-br": "Chute Poderoso",
                "zh-tw": "粉碎踢",
                pt: "Chute Poderoso",
                'es-mx': "Patada Devastadora"
            },
            damage: "20",
            cost: ["Fighting"],
        },
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
