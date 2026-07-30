import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/040"
    },
    name: {
        en: "Walrein",
        fr: "Kaimorse",
        es: "Walrein",
        it: "Walrein",
        de: "Walraisa",
        "pt-br": "Walrein",
        "zh-tw": "帝牙海獅",
        ko: "씨카이저",
        ja: "トドゼルガ"
    },
    illustrator: "Satoshi Shirai",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 160,
    types: ["Water"],
    dexId: [365],
    evolveFrom: {
        en: "Sealeo",
        fr: "Phogleur",
        es: "Sealeo",
        it: "Sealeo",
        de: "Seejong",
        "pt-br": "Sealeo",
        "zh-tw": "海魔獅",
        ko: "씨레오",
        ja: "トドグラー"
    },
    stage: "Stage2",
    description: {
        en: "Walrein’s tusks keep growing throughout its life. Tusks broken in battle will grow back to their usual impressive size in a year.",
        fr: "Ses défenses poussent tout au long de sa vie.\nSi l’une d’elles se brise au cours d’un combat,\nau bout d’un an, elle aura repoussé entièrement.",
        es: "Sus colmillos nunca dejan de crecer. Aunque los\npierda en un combate, al cabo de un año ya los\nhabrá regenerado por completo.",
        it: "Le sue zanne continuano a crescere per tutta la\nvita. Se si spezzano mentre lotta, tornano\nforti e robuste nell’arco di un anno.",
        de: "Die Stoßzähne wachsen sein Leben lang. Selbst,\nwenn sie im Kampf abbrechen, erreichen sie nach\nnur einem Jahr wieder ihre alte imposante Größe.",
        "zh-tw": "獠牙會一輩子不停地成長。\n即使在戰鬥中折斷，也只需要\n１年的時間就又能長得巨大如初。"
    },
    attacks: [
        {
            cost: ["Water", "Water", "Colorless", "Colorless"],
            name: {
                en: "Blizzlock"
            },
            effect: {
                en: "Your opponent can't use any Supporter cards from their hand during their next turn.",
                fr: "Votre adversaire ne peut utiliser aucune carte Supporter de sa main lors de son prochain tour.",
                es: "Tu oponente no puede usar ninguna carta de Partidario de su mano durante su próximo turno.",
                it: "Il tuo avversario non può utilizzare alcuna carta Aiuto dalla sua mano durante il suo prossimo turno.",
                de: "Dein Gegner kann in seinem nächsten Zug keine Unterstützerkarten aus seiner Hand verwenden.",
                "pt-br": "Seu oponente não pode usar nenhuma carta de Apoiador de sua mão durante o próximo turno.",
                "zh-tw": "你的對手在下回合中不能使用手上的任何支持者卡。"
            },
            damage: 110
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 4
};

export default card;
