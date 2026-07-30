import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/143"
    },
    name: {
        en: "Type: Null",
        fr: "Type:0",
        es: "Código Cero",
        it: "Tipo Zero",
        de: "Typ:Null",
        "pt-br": "Tipo Nulo",
        "zh-tw": "屬性：空",
        ko: "타입:널",
        ja: "タイプ：ヌル"
    },
    illustrator: "KEIICHIRO ITO",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Colorless"],
    dexId: [772],
    stage: "Basic",
    description: {
        en: "It was modeled after a mighty Pokémon of myth. The mask placed upon it limits its power in order to keep it under control.",
        fr: "Il a été créé artificiellement d’après un Pokémon\nmythique. Il est muni d’un masque afin de contenir\nsa puissance.",
        es: "Fue creado a imagen de un Pokémon mitológico.\nLleva una máscara de contención para evitar que\nsu poder se descontrole.",
        it: "È stato creato sul modello di un Pokémon\nmitologico. È stato necessario dotarlo di una\nmaschera per tenere a freno la sua potenza.",
        de: "Typ:Null ist eine künstliche Nachbildung eines\nPokémon aus einer alten Sage. Die Maske dient\ndazu, seine Kräfte unter Kontrolle zu halten.",
        "zh-tw": "以神話中的寶可夢為原型所\n創造出的寶可夢，被戴上了\n抑制力量失控的面罩。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Tackle",
                fr: "Charge",
                es: "Placaje",
                it: "Azione",
                de: "Tackle",
                "pt-br": "Investida",
                "zh-tw": "撞擊"
            },
            damage: 40
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
