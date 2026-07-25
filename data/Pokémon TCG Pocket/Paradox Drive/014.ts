import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/014",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/014",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/014",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/014",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/014",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/014"
    },
    name: {
        en: "Pawmi",
        fr: "Pohm",
        es: "Pawmi",
        it: "Pawmi",
        de: "Pamo",
        "pt-br": "Pawmi",
        "zh-tw": "布撥",
        ko: "빠모",
        ja: "パモ"
    },
    illustrator: "Tika Matsuno",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Lightning"],
    dexId: [921],
    stage: "Basic",
    description: {
        en: "The pads of its paws are electricity-discharging organs. Pawmi fires electricity from its forepaws while standing unsteadily on its hind legs.",
        fr: "Les coussinets de ses pattes sont des organes qui déchargent de l'électricité. Pohm tire de l'électricité depuis ses pattes antérieures tout en se tenant de manière instable sur ses pattes postérieures.",
        es: "Las almohadillas de sus patas son órganos que descargan electricidad. Pawmi dispara electricidad desde sus patas delanteras mientras se mantiene inestable sobre sus patas traseras.",
        it: "I cuscinetti delle zampe sono organi che scaricano elettricità. Pawmi spara elettricità dalle zampe anteriori mentre sta instabile sulle zampe posteriori.",
        de: "Die Ballen seiner Pfoten sind elektrisch ableitende Organe. Pamo feuert Elektrizität aus seinen Vorderpfoten ab, während es unsicher auf seinen Hinterbeinen steht.",
        "pt-br": "As almofadas de suas patas são órgãos que descarregam eletricidade. Pawmi dispara eletricidade com suas patas dianteiras enquanto fica instável nas patas traseiras.",
        "zh-tw": "它的爪墊是放電器官。 布撥 用後腿搖搖晃晃地站立，並從前爪發射電流。"
    },
    attacks: [
        {
            cost: ["Lightning"],
            name: {
                en: "Bite",
                fr: "Morsure",
                es: "Mordisco",
                it: "Morso",
                de: "Biss",
                "pt-br": "Mordida",
                "zh-tw": "咬住"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
