import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/021"
    },
    name: {
        en: "Rapidash",
        fr: "Galopa",
        es: "Rapidash",
        it: "Rapidash",
        de: "Gallopa",
        "pt-br": "Rapidash",
        "zh-tw": "烈焰馬",
        ko: "날쌩마",
        ja: "ギャロップ"
    },
    illustrator: "Yukiko Baba",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Fire"],
    dexId: [78],
    evolveFrom: {
        en: "Ponyta",
        fr: "Ponyta",
        es: "Ponyta",
        it: "Ponyta",
        de: "Ponita",
        "pt-br": "Ponyta",
        "zh-tw": "小火馬",
        ko: "포니타",
        ja: "ポニータ"
    },
    stage: "Stage1",
    description: {
        en: "The fastest runner becomes the leader, and it decides the herd’s pace and direction of travel.",
        fr: "Au sein d’un troupeau, c’est le plus rapide qui\ndevient le chef. Il choisit les lieux où se rendre\net détermine la vitesse de galop.",
        es: "El ejemplar más rápido se convierte en el líder\nde la manada y decide tanto el ritmo de galope\ncomo su destino.",
        it: "L’esemplare più veloce diventa il capo del\ngruppo e ne decide velocità e destinazione.",
        de: "Das schnellste Exemplar wird zum Anführer\nbestimmt und gibt als solcher den Zielort und\ndie Geschwindigkeit der Herde vor.",
        "pt-br": "O corredor mais rápido se torna o líder e decide o ritmo do rebanho e a direção da viagem.",
        "zh-tw": "奔跑速度最快的烈焰馬\n會成為首領，決定族群\n前往的地點和奔跑速度。"
    },
    attacks: [
        {
            cost: ["Fire", "Fire", "Colorless"],
            name: {
                en: "Heat Blast",
                fr: "Coup de chaleur",
                es: "Explosión de calor",
                it: "Colpo di calore",
                de: "Hitzestoß",
                "pt-br": "Explosão de calor",
                "zh-tw": "高溫爆破"
            },
            damage: 80
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
