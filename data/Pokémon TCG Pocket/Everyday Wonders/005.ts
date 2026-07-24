import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/005",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/005"
    },
    name: {
        en: "Tropius",
        fr: "Tropius",
        es: "Tropius",
        it: "Tropius",
        de: "Tropius",
        "pt-br": "Tropius",
        "zh-tw": "熱帶龍",
        ko: "트로피우스",
        ja: "トロピウス"
    },
    illustrator: "Shin Nagasawa",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Grass"],
    dexId: [357],
    stage: "Basic",
    description: {
        en: "Delicious fruits grew out from around its neck because it always ate the same kind of fruit.",
        fr: "À force de toujours manger le même\nfruit succulent, il en pousse à la\nbase de son cou.",
        es: "De su cuello crecían deliciosas frutas porque siempre comía el mismo tipo de fruta.",
        it: "Dal suo collo crescevano frutti deliziosi perché mangiava sempre lo stesso tipo di frutto.",
        de: "Um seinen Hals wuchsen köstliche Früchte, weil er immer die gleiche Obstsorte aß.",
        "pt-br": "Frutas deliciosas cresciam em seu pescoço porque ele sempre comia o mesmo tipo de fruta.",
        "zh-tw": "因為它總是吃同一種水果，所以它的脖子上長出了美味的水果。"
    },
    attacks: [
        {
            cost: ["Grass", "Grass"],
            name: {
                en: "Solar Beam",
                fr: "Lance-Soleil",
                es: "Rayo Solar",
                it: "Solarraggio",
                de: "Solarstrahl",
                "pt-br": "Raio Solar",
                "zh-tw": "日光束"
            },
            damage: 50
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
