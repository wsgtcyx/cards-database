import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/164"
    },
    name: {
        en: "Raichu",
        fr: "Raichu",
        es: "Raichu",
        it: "Raichu",
        de: "Raichu",
        "pt-br": "Raichu",
        "zh-tw": "雷丘",
        ko: "라이츄",
        ja: "ライチュウ"
    },
    illustrator: "HYOGONOSUKE",
    rarity: "One Star",
    category: "Pokemon",
    hp: 100,
    types: ["Lightning"],
    dexId: [26],
    evolveFrom: {
        en: "Pikachu",
        fr: "Pikachu",
        es: "Pikachu",
        it: "Pikachu",
        de: "Pikachu",
        "pt-br": "Pikachu",
        "zh-tw": "皮卡丘",
        ko: "피카츄",
        ja: "ピカチュウ"
    },
    stage: "Stage1",
    description: {
        en: "If the electric pouches in its cheeks become fully charged, both ears will stand straight up.",
        fr: "Si les poches électriques dans ses joues sont complètement chargées, les deux oreilles se redresseront.",
        es: "Si las bolsas eléctricas de sus mejillas se cargan por completo, ambas orejas se levantarán.",
        it: "Se le tasche elettriche sulle sue guance si caricano completamente, entrambe le orecchie rimarranno dritte.",
        de: "Wenn die elektrischen Beutel in seinen Wangen vollständig aufgeladen sind, stellen sich beide Ohren gerade auf.",
        "pt-br": "Se as bolsas elétricas em suas bochechas ficarem totalmente carregadas, ambas as orelhas ficarão retas.",
        "zh-tw": "如果臉頰上的電袋充滿電，兩隻耳朵就會直立起來。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Evoshock"
            },
            effect: {
                en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
            }
        }
    ],
    attacks: [
        {
            cost: ["Lightning", "Colorless"],
            name: {
                en: "Electro Ball",
                fr: "Boule Élek",
                es: "Bola Voltio",
                it: "Energisfera",
                de: "Elektroball",
                "pt-br": "Bola Elétrica",
                "zh-tw": "電球"
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
