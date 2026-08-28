import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/095",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/095",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/095",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/095",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/095",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/095",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/095"
    },
    name: {
        en: "Vulpix",
        fr: "Goupix",
        es: "Vulpix",
        it: "Vulpix",
        de: "Vulpix",
        "pt-br": "Vulpix",
        "zh-tw": "六尾",
        ko: "식스테일",
        ja: "ロコン"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Fire"],
    dexId: [37],
    stage: "Basic",
    description: {
        en: "As its body grows larger, its six warm tails become more beautiful, with a more luxurious coat of fur.",
        fr: "Ses six queues dégagent de la chaleur. Quand Goupix grandit, elles embellissent et leur fourrure devient plus épaisse.",
        es: "A medida que crece, el pelo de sus seis cálidas colas se va volviendo más suave, lustroso y bello.",
        it: "Man mano che cresce, le sue sei calde code sviluppano una pelliccia sempre più bella.",
        de: "Während es wächst, wird das Fell seiner sechs warmen Schweife noch schöner und weicher.",
        "pt-br": "Conforme vai crescendo, suas seis caudas quentinhas tornam-se mais belas, com uma pelugem ainda mais luxuosa.",
        "zh-tw": "隨著身體的成長，溫暖的６根尾巴的毛髮也會變得更漂亮。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Hold Still",
                fr: "Ne Bougez Pas",
                es: "Permanecer Inmóvil",
                it: "Immobile",
                de: "Stillhalten",
                "pt-br": "Ficar Parado",
                "zh-tw": "紋絲不動"
            },
            effect: {
                en: "Heal 20 damage from this Pokémon.",
                fr: "Soignez 20 dégâts de ce Pokémon.",
                es: "Cura 20 puntos de daño a este Pokémon.",
                it: "Cura questo Pokémon da 20 danni.",
                de: "Heile 20 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Cure 20 pontos de dano deste Pokémon.",
                "zh-tw": "將這隻寶可夢恢復20HP。"
            }
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
