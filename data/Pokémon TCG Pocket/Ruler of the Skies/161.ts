import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/161",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/161",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/161",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/161",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/161",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/161",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/161"
    },
    name: {
        en: "Quilava",
        fr: "Feurisson",
        es: "Quilava",
        it: "Quilava",
        de: "Igelavar",
        "pt-br": "Quilava",
        "zh-tw": "火岩鼠",
        ko: "마그케인",
        ja: "マグマラシ"
    },
    illustrator: "Mizue",
    rarity: "One Star",
    category: "Pokemon",
    hp: 80,
    types: ["Fire"],
    dexId: [156],
    evolveFrom: {
        en: "Cyndaquil",
        fr: "Héricendre",
        es: "Cyndaquil",
        it: "Cyndaquil",
        de: "Feurigel",
        "pt-br": "Cyndaquil",
        "zh-tw": "火球鼠",
        ko: "브케인",
        ja: "ヒノアラシ"
    },
    stage: "Stage1",
    description: {
        en: "The fur covering this Pokémon's body never burns, no matter what. It can shrug off any kind of fire attack.",
        fr: "La fourrure qui recouvre ce Pokémon est incombustible et peut résister à n'importe quelle attaque de feu.",
        "es": "El pelaje de este Pokémon es ignifugo. Puede soportar cualquier ataque con fuego.",
        "it": "La pelliccia che ricopre il suo corpo è completamente ignifuga. Può resistere a qualsiasi attacco di fuoco.",
        de: "Das Fell dieses Pokémon ist nicht entflammbar, Feuer-Angriffe jeglicher Art machen ihm nichts aus.",
        "pt-br": "O pelo que cobre seu corpo nunca queima, não importa o que aconteça. E capaz de resistir a qualquer ataque de fogo.",
        "zh-tw": "一身的毛皮絕不會被點燃，\n遭受任何火焰攻擊\n都能安然無恙。"
    },
    attacks: [
        {
            cost: ["Fire", "Fire"],
            name: {
                en: "Heat Wave",
                fr: "Canicule",
                es: "Onda Ígnea",
                it: "Ondacalda",
                de: "Hitzewelle",
                "zh-tw": "熱風",
                "pt-br": "Onda de Calor"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Burned.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
                es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
                it: "Il Pokémon attivo del tuo avversario è ora bruciato.",
                de: "Das aktive Pokémon deines Gegners ist jetzt verbrannt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Queimado.",
                "zh-tw": "將對手的戰鬥寶可夢灼傷。"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1
};
export default card;
