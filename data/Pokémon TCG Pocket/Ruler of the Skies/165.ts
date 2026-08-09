import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/165",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/165",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/165",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/165",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/165",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/165",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/165"
    },
    name: {
        en: "Wattrel",
        fr: "Zapétrel",
        es: "Wattrel",
        it: "Wattrel",
        de: "Voltrel",
        "pt-br": "Wattrel",
        "zh-tw": "電海燕",
        ko: "찌리비",
        ja: "カイデン"
    },
    illustrator: "Natsumi Yoshida",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    dexId: [940],
    stage: "Basic",
    description: {
        en: "These Pokémon make their nests on coastal cliffs. The nests have a strange, crackling texture, and they’re a popular delicacy.",
        fr: "Il niche sur les falaises côtières. Son nid possède une texture particulière et un goût naturellement pétillant, ce qui en fait un mets très recherché.",
        es: "Anida en acantilados costeros. Su nido se considera un auténtico manjar debido a su extraña textura chisporroteante.",
        it: "Nidifica sui dirupi a picco sul mare. Il suo nido è una prelibatezza molto amata per l'insolita consistenza scoppiettante.",
        de: "Es nistet an Steilküsten. Seine Nester sind als Delikatesse geschätzt, da ihre Textur ein seltsames Knistergefühl im Mund erzeugt.",
        "pt-br": "Estes Pokémon fazem seus ninhos em penhascos no litoral. Os ninhos têm uma textura estranha e crépida, e são uma iguaria muito popular.",
        "zh-tw": "會在海岸的懸崖上築巢。\n吃起來劈哩啪啦跳的神奇口感，\n讓牠的巢成了受歡迎的珍奇美食。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Peck",
                fr: "Picpic",
                es: "Picotazo",
                it: "Beccata",
                de: "Pikser",
                "pt-br": "Bicada",
                "zh-tw": "啄"
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
