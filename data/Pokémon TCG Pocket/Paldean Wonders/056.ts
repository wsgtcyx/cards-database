import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    name: {
        en: "Primeape",
        fr: "Colossinge",
        es: "Primeape",
        it: "Primeape",
        de: "Rasaff",
        "pt-br": "Primeape",
        "zh-tw": "火爆猴",
        pt: "Primeape"
    },
    illustrator: "Shin Nagasawa",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fighting"],
    dexId: [57],
    evolveFrom: {
        en: "Mankey",
        fr: "Férosinge",
        es: "Mankey",
        it: "Mankey",
        de: "Menki",
        "pt-br": "Mankey",
        "zh-tw": "猴怪",
        pt: "Mankey"
    },
    description: {
        en: "Some researchers theorize that Primeape remains angry even when inside a Poké Ball.",
        "fr": "Certains chercheurs émettent l'hypothèse que Colossinge reste en colère même à l'intérieur d'une Poké Ball.",
        "es": "Algunos investigadores teorizan que Primeape permanece enojado incluso cuando está dentro de una Poké Ball.",
        "it": "Alcuni ricercatori teorizzano che Primeape rimanga arrabbiato anche quando si trova all'interno di una Poké Ball.",
        "de": "Einige Forscher gehen davon aus, dass Rasaff auch dann wütend bleibt, wenn er sich in einem Pokéball befindet.",
        "pt-br": "Alguns pesquisadores teorizam que Primeape permanece com raiva mesmo dentro de uma Pokébola.",
        "zh-tw": "一些研究人員推測，即使在寶可夢球內，火爆猴 仍然會生氣。"
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Rage",
                fr: "Frénésie",
                es: "Furia",
                it: "Ira",
                de: "Raserei",
                "pt-br": "Raiva",
                "zh-tw": "憤怒",
                pt: "Ira"
            },
            damage: "30+",
            cost: ["Fighting"],
            effect: {
                en: "This attack does more damage equal to the damage this Pokémon has on it.",
                fr: "Cette attaque inflige des dégâts supplémentaires égaux à ceux que ce Pokémon a déjà subis.",
                es: "Este ataque hace una cantidad de daño adicional igual al daño que ya tenga este Pokémon.",
                it: "Questo attacco infligge danni aggiuntivi pari alla quantità di danni subiti al momento da questo Pokémon.",
                de: "Diese Attacke fügt zusätzlichen Schaden in Höhe des Schadens zu, der diesem Pokémon bereits zugefügt wurde.",
                'pt-br': "Este ataque causa dano a mais, equivalente ao dano que este Pokémon tiver nele.",
                "zh-tw": "這次攻擊造成的傷害等於該寶可夢對其造成的傷害。",
                ko: "이 포켓몬이 받고 있는 데미지만큼 데미지를 추가한다."
            },
        },
    ],
    weaknesses: [
        {
            type: "Psychic",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
