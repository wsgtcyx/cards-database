import { Card } from "../../../interfaces";
import Set from "../Shining Revelry";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A2b/104",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A2b/104",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A2b/104",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A2b/104",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A2b/104",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A2b/104",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A2b/104"
    },
    name: {
        en: "Riolu",
        fr: "Riolu",
        es: "Riolu",
        it: "Riolu",
        de: "Riolu",
        'pt-br': "Riolu",
        ko: "리오르",
        "zh-tw": "利歐路"
    },
    illustrator: "GOSSAN",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    description: {
        en: "They communicate with one another using their auras. They are able to run all through the night.",
        fr: "Les Riolu communiquent entre eux à l'aide de\nleur aura. Ils sont capables de courir toute la nuit.",
        es: "Se comunica con los suyos emitiendo ondas.\nPuede pasarse toda una noche corriendo.",
        it: "Comunica con i suoi simili tramite l'aura.\nPuò correre un'intera notte senza stancarsi.",
        de: "Dieses Pokémon nutzt seine Aura, um mit seinen\nArtgenossen zu kommunizieren. Es kann eine\nganze Nacht lang laufen.",
        'pt-br': "Eles comunicam-se uns com os outros usando suas auras.\nSão capazes de correr a noite inteira.",
        ko: "파동을 내서\n동료끼리 의사소통을 한다.\n밤새도록 계속 달릴 수 있다.",
        "zh-tw": "他們利用自己的氣場相互交流。他們能夠整夜奔跑。"
    },
    stage: "Basic",
    attacks: [{
        name: {
            en: "Punch",
            fr: "Koud'Poing",
            es: "Puño",
            it: "Pugno",
            de: "Boxhieb",
            'pt-br': "Soco",
            ko: "펀치",
            "zh-tw": "沖床"
        },
        damage: 40,
        cost: ["Fighting", "Fighting"]
    }],
    weaknesses: [{
        type: "Psychic",
        value: "+20"
    }],
    retreat: 1,
    rarity: "One Shiny"
};
export default card;
