import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/029",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/029",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/029",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/029",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/029",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/029",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/029"
    },
    name: {
        en: "Team Rocket's Mr. Mime",
        fr: "M. Mime de la Team Rocket",
        es: "Mr. Mime del Team Rocket",
        it: "Mr. Mime del Team Rocket",
        de: "Team Rockets Pantimos",
        "pt-br": "Mr. Mime da Equipe Rocket",
        "zh-tw": "火箭隊的魔牆人偶",
        ko: "로켓단의 마임맨",
        ja: "ロケット団のバリヤード"
    },
    illustrator: "buchi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    stage: "Basic",
    description: {
        en: "It's known for its top-notch pantomime skills. It protects itself from all sorts of attacks by emitting auras from its fingers to create walls.",
        fr: "Son talent pour le mime est indéniable. Il émet des ondes du bout des doigts pour créer un mur qui le protège de nombreuses attaques.",
        es: "Domina con maestría la pantomima. La barrera generada con las ondas que emite por los dedos le permite protegerse de numerosos ataques.",
        it: "È un ottimo mimo. Con le onde che emette dalle dita può creare una barriera che lo protegge da molti attacchi.",
        de: "Es ist für die Pantomime geboren. Zur Abwehr unterschiedlichster Angriffe erzeugt es mit einem Kraftfeld aus seinen Fingerspitzen Schutzwände.",
        "pt-br": "Conhecido por suas técnicas de pantomima de alto nivel, este Pokémon se protege de todos os tipos de ataque, emitindo auras de seus dedos para críar paredes.",
        "zh-tw": "擅長表演默劇。用手指放出的波動製造牆壁，保護自己免於大多數的攻擊。"
    },
    attacks: [
        {
            cost: ["Psychic"],
            name: {
                en: "Slap Push",
                fr: "Grande Claque",
                es: "Empujón con Bofetón",
                it: "Spintonata",
                de: "Stoß",
                "pt-br": "Tapa Empurrão",
                "zh-tw": "巴掌撲擊"
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
