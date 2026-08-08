import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/069",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/069",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/069",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/069",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/069",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/069",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/069"
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
    illustrator: "OOYAMA",
    rarity: "One Diamond",
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
        "zh-tw": "擅長表演默劇。\n用手指放出的波動製造牆壁，\n保護自己免於大多數的攻擊。",
        "pt-br": "Conhecido por suas técnicas de pantomima de alto nível. este Pokémon se protege de todos os tipos de ataque, emitindo auras de seus dedos para criar paredes."
    },
    attacks: [
        {
            cost: ["Psychic", "Colorless"],
            name: {
                en: "Synchro Dance",
                fr: "Danse Synchronisée",
                es: "Danza Sincronizada",
                "pt-br": "Dança Sincronizada",
                "zh-tw": "同步舞",
                "it": "Danza Sincronizzata",
                "de": "Synchrontanz"
            },
            effect: {
                en: "If this Pokémon and your opponent's Active Pokémon have the same amount of Energy attached, this attack does 40 more damage.",
                fr: "Si ce Pokémon et le Pokémon Actif de votre adversaire ont le même nombre d'Énergies attachées, cette attaque inflige 40 dégâts supplémentaires.",
                es: "Si este Pokémon y el Pokémon Activo de tu rival tienen la misma cantidad de Energías unidas a ellos, este ataque hace 40 puntos de daño más.",
                "pt-br": "Se este Pokémon e o Pokémon Ativo do seu oponente tiverem a mesma quantidade de Energia ligadas a eles, este ataque causará 40 pontos de dano a mais.",
                "zh-tw": "若這隻寶可夢與對手的戰鬥寶可夢身上的能量數量相同,則增加40點傷害。",
                "it": "del tuo Se questo Pokémon e il Pokémon attivo avversario hanno la stessa quantità di Energie assegnate, questo attacco infligge 40 danni in più.",
                "de": "Wenn an dieses Pokémon genauso viel Energie angelegt ist wie an das Aktive Pokémon deines Gegners, fügt diese Attacke 40 Schadenspunkte mehr zu."
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
