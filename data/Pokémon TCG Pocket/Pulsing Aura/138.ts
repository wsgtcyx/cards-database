import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/138",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/138",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/138",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/138",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/138",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/138"
    },
    name: {
        en: "Herdier",
        fr: "Ponchien",
        es: "Herdier",
        it: "Herdier",
        de: "Terribark",
        "pt-br": "Herdier",
        "zh-tw": "哈約克",
        ko: "하데리어",
        ja: "ハーデリア"
    },
    illustrator: "Tomokazu Komiya",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Colorless"],
    dexId: [507],
    evolveFrom: {
        en: "Lillipup",
        fr: "Ponchiot",
        es: "Lillipup",
        it: "Lillipup",
        de: "Yorkleff",
        "pt-br": "Lillipup",
        "zh-tw": "小約克",
        ko: "요테리",
        ja: "ヨーテリー"
    },
    stage: "Stage1",
    description: {
        en: "The black fur that covers this Pokémon’s body is dense and springy. Even sharp fangs bounce right off.",
        fr: "Les poils sombres qui recouvrent son dos sont\nsi épais et si souples qu’ils peuvent même\nrepousser des crocs acérés.",
        es: "El pelaje negro que lo recubre es tan denso y\nelástico que puede repeler incluso los colmillos\nmás afilados.",
        it: "La pelliccia scura che ricopre il suo corpo è\nspessa ed elastica, al punto da respingere\nanche delle zanne affilate.",
        de: "Das dunkle Fell, das seinen Körper bedeckt,\nist sehr dicht und federnd. Selbst Angriffe mit\nscharfen Fangzähnen prallen davon ab.",
        "pt-br": "O pelo preto que cobre o corpo deste Pokémon é denso e elástico. Até mesmo presas afiadas ricocheteiam.",
        "zh-tw": "覆蓋身體的黑色體毛\n既厚實又有彈性，就連\n銳利的獠牙也會被反彈。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Hammer In",
                fr: "Enfoncement",
                es: "Martillear",
                it: "Martello",
                de: "Einhämmern",
                "pt-br": "Martelada",
                "zh-tw": "頭突"
            },
            damage: 50
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
