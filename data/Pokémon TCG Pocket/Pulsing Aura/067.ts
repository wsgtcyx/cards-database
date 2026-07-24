import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/067",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/067"
    },
    name: {
        en: "Diancie",
        fr: "Diancie",
        es: "Diancie",
        it: "Diancie",
        de: "Diancie",
        "pt-br": "Diancie",
        "zh-tw": "蒂安希",
        ko: "디안시",
        ja: "ディアンシー"
    },
    illustrator: "Sanosuke Sakuma",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Psychic"],
    dexId: [719],
    stage: "Basic",
    description: {
        en: "It can instantly create many diamonds by compressing the carbon in the air between its hands.",
        fr: "Il peut créer une multitude de diamants en un instant\nen serrant ses mains, simplement en compressant\nles molécules de carbone contenues dans l’air.",
        es: "Puede crear una gran cantidad de diamantes en un instante\ncomprimiendo con las manos el carbono que flota en el aire.",
        it: "È in grado di creare una grande quantità di diamanti in un\nistante comprimendo tra le mani il carbonio presente nell’aria.",
        de: "Es kann im Nu viele Diamanten erzeugen, indem es\nluftgebundene Kohlenstoffpartikel mit seinen Händen\nkomprimiert.",
        "pt-br": "Ele pode criar instantaneamente muitos diamantes comprimindo o carbono do ar entre as mãos.",
        "zh-tw": "它透過雙手壓縮空氣中的碳，可以瞬間製造出許多鑽石。"
    },
    attacks: [
        {
            cost: ["Psychic", "Psychic"],
            name: {
                en: "Diamond Storm",
                fr: "Orage Adamantin",
                es: "Tormenta de Diamantes",
                it: "Diamantempesta",
                de: "Diamantsturm",
                "pt-br": "Tempestade Diamante",
                "zh-tw": "鑽石風暴"
            },
            effect: {
                en: "Heal 20 damage from each of your {P} Pokémon.",
                fr: "Soignez 20 dégâts à chacun de vos {P} Pokémon.",
                es: "Cura 20 daños de cada uno de tus Pokémon {P}.",
                it: "Cura 20 danni da ciascuno dei tuoi Pokémon {P}.",
                de: "Heile 20 Schadenspunkte bei jedem deiner {P} Pokémon.",
                "pt-br": "Cure 20 pontos de dano de cada um dos seus Pokémon {P}.",
                "zh-tw": "治療你每隻 {P} 寶可夢造成的 20 點傷害。"
            },
            damage: 50
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
