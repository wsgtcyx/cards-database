import { Card } from "../../../interfaces";
import Set from "../Shining Revelry";
const card: Card = {
    set: Set,
    name: {
        en: "Lucario ex",
        fr: "Lucario-ex",
        es: "Lucario ex",
        it: "Lucario-ex",
        de: "Lucario-ex",
        'pt-br': "Lucario ex",
        ko: "루카리오 ex",
        "zh-tw": "路卡利歐超級"
    },
    illustrator: "PLANETA CG Works",
    category: "Pokemon",
    hp: 150,
    types: ["Fighting"],
    evolveFrom: {
        en: "Riolu",
        "fr": "Riolu",
        "es": "Riolu",
        "it": "Riolu",
        "de": "Riolu",
        "pt-br": "Riolu",
        "zh-tw": "利奧盧"
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Aura Sphere",
                fr: "Aurasphère",
                es: "Esfera Aural",
                it: "Sferapulsar",
                de: "Aurasphäre",
                'pt-br': "Aura Esférica",
                ko: "파동탄",
                "zh-tw": "光環球體"
            },
            damage: 100,
            cost: ["Fighting", "Fighting", "Fighting"],
            effect: {
                en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon.",
                fr: "Cette attaque inflige aussi 30 dégâts à un des Pokémon de Banc de votre adversaire.",
                es: "Este ataque también hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
                it: "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario.",
                de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu.",
                'pt-br': "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
                ko: "상대의 벤치 포켓몬 1마리에게도 30데미지를 준다.",
                "zh-tw": "這次攻擊也會對對手後備的 1 只神奇寶貝造成 30 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 2,
    rarity: "Two Shiny"
};
export default card;
