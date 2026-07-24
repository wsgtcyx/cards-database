import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    name: {
        en: "Ting-Lu",
        fr: "Dinglu",
        es: "Ting-Lu",
        it: "Ting-Lu",
        de: "Dinglu",
        "pt-br": "Ting-Lu",
        "zh-tw": "古鼎鹿",
        pt: "Ting-Lu"
    },
    illustrator: "AKIRA EGAWA",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Fighting"],
    dexId: [1003],
    description: {
        en: "It slowly brings its exceedingly heavy head down upon the ground, splitting the earth open with huge fissures that run over 160 feet deep.",
        "fr": "Il abaisse lentement sa tête extrêmement lourde sur le sol, ouvrant la terre avec d'énormes fissures qui s'étendent sur plus de 160 pieds de profondeur.",
        "es": "Lentamente baja su cabeza extremadamente pesada al suelo, abriendo la tierra con enormes fisuras que recorren más de 160 pies de profundidad.",
        "it": "Abbassa lentamente la sua testa estremamente pesante sul terreno, spaccando la terra con enormi fessure che corrono oltre 160 piedi di profondità.",
        "de": "Langsam senkt es seinen überaus schweren Kopf auf den Boden und reißt die Erde mit riesigen Rissen auf, die über 160 Fuß tief sind.",
        "pt-br": "Ele lentamente traz sua cabeça extremamente pesada para o chão, abrindo a terra com enormes fissuras que chegam a mais de 50 metros de profundidade.",
        "zh-tw": "它慢慢地將極其沉重的頭放在地上，將大地劈開，裂開深達 160 英尺的巨大裂縫。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Arrogant Impact",
                fr: "Impact Arrogant",
                es: "Impacto Soberbia",
                it: "Impatto Arrogante",
                de: "Arroganter Einschlag",
                "pt-br": "Impacto Arrogante",
                "zh-tw": "傲慢的衝擊力",
                pt: "Impacto da Soberba"
            },
            damage: 130,
            cost: ["Fighting", "Fighting", "Fighting"],
            effect: {
                en: "If this Pokémon's remaining HP is 60 or less, this attack does nothing.",
                fr: "S'il reste 60 PV ou moins à ce Pokémon, cette attaque ne fait rien.",
                "es": "Si los HP restantes de este Pokémon son 60 o menos, este ataque no hace nada.",
                "it": "Se i PS rimanenti di questo Pokémon sono 60 o meno, questo attacco non ha alcun effetto.",
                "de": "Wenn die verbleibenden HP dieses Pokémon 60 oder weniger betragen, hat dieser Angriff keine Wirkung.",
                "pt-br": "Se o HP restante deste Pokémon for 60 ou menos, este ataque não fará nada.",
                "zh-tw": "如果這隻寶可夢的剩餘生命值為 60 或更少，則此攻擊無效。"
            },
        },
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20",
        },
    ],
    retreat: 3,
};
export default card;
