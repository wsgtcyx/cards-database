import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/211"
    },
    name: {
        en: "Mr. Mime",
        fr: "M. Mime",
        es: "Mr. Mime",
        it: "Mr. Mime",
        de: "Pantimos",
        "pt-br": "Mr. Mime",
        "zh-tw": "魔牆人偶",
        ko: "마임맨",
        ja: "バリヤード"
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 70,
    types: ["Psychic"],
    dexId: [122],
    stage: "Basic",
    description: {
        en: "It’s known for its top-notch pantomime skills. It protects itself from all sorts of attacks by emitting auras from its fingers to create walls.",
        fr: "Son talent pour le mime est indéniable.\nIl émet des ondes du bout des doigts pour créer\nun mur qui le protège de nombreuses attaques.",
        es: "Domina con maestría la pantomima. La barrera\ngenerada con las ondas que emite por los dedos\nle permite protegerse de numerosos ataques.",
        it: "È un ottimo mimo. Con le onde che emette\ndalle dita può creare una barriera che lo\nprotegge da molti attacchi.",
        de: "Es ist für die Pantomime geboren. Zur Abwehr\nunterschiedlichster Angriffe erzeugt es mit einem\nKraftfeld aus seinen Fingerspitzen Schutzwände.",
        "zh-tw": "擅長表演默劇。\n用手指放出的波動製造牆壁，\n保護自己免於大多數的攻擊。"
    },
    attacks: [
        {
            cost: ["Psychic", "Colorless"],
            name: {
                en: "Synchro Dance"
            },
            effect: {
                en: "If this Pokémon and your opponent's Active Pokémon have the same amount of Energy attached, this attack does 40 more damage."
            },
            damage: "40+"
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
