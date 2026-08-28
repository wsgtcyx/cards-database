import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/019",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/019",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/019",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/019",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/019",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/019",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/019"
    },
    name: {
        en: "Team Rocket's Voltorb",
        fr: "Voltorbe de la Team Rocket",
        es: "Voltorb del Team Rocket",
        it: "Voltorb del Team Rocket",
        de: "Team Rockets Voltobal",
        "pt-br": "Voltorb da Equipe Rocket",
        "zh-tw": "火箭隊的霹靂電球",
        ko: "로켓단의 찌리리공",
        ja: "ロケット団のビリリダマ"
    },
    illustrator: "mingo",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    stage: "Basic",
    description: {
        en: "It's usually found in power plants. Easily mistaken for a Poké Ball, it has zapped many people.",
        fr: "On le trouve dans des centrales électriques. De nombreuses personnes ont reçu une décharge après l'avoir confondu avec une Poké Ball.",
        es: "Suele vivir en centrales de energia. Mucha gente acaba muy mal al confundirlo con una Poké Ball.",
        it: "Solitamente si aggira nelle centrali elettriche e luoghi simili. Molti lo confondono con una Poké Ball, finendo folgorati.",
        de: "Viele Menschen verwechseln Voltobal mit einem Pokéball und erhalten beim Anfassen einen Stromschlag. Es lebt vorwiegend in Kraftwerken.",
        "pt-br": "Normalmente encontrado em usinas de energia elétrica. Por ser facilmente confundido com uma Poké Bola, eletrocutou muitas pessoas.",
        "zh-tw": "會出現在發電廠等地方。很多人會把牠錯當成精靈球去觸碰而被電麻。"
    },
    attacks: [
        {
            cost: ["Lightning"],
            name: {
                en: "Rolling Attack",
                fr: "Attaque Qui Roule",
                es: "Ataque Giro",
                it: "Attacco Rotolante",
                de: "Rollender Angriff",
                "pt-br": "Golpe Rolador",
                "zh-tw": "滾球攻擊"
            },
            damage: 20
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
