import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    name: {
        en: "Dachsbun",
        fr: "Briochien",
        es: "Dachsbun",
        it: "Dachsbun",
        de: "Backel",
        "pt-br": "Dachsbun",
        "zh-tw": "麻花犬",
        pt: "Dachsbun"
    },
    illustrator: "You Iribi",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Psychic"],
    dexId: [927],
    evolveFrom: {
        en: "Fidough",
        fr: "Pâtachiot",
        es: "Fidough",
        it: "Fidough",
        de: "Hefel",
        "pt-br": "Fidough",
        "zh-tw": "狗仔包",
        pt: "Fidough"
    },
    description: {
        en: "The pleasant aroma that emanates from this Pokémon's body helps wheat grow, so Dachsbun has been treasured by farming villages.",
        "fr": "L'arôme agréable qui émane du corps de ce Pokémon aide le blé à pousser, c'est pourquoi Briochien est apprécié par les villages agricoles.",
        "es": "El agradable aroma que emana del cuerpo de este Pokémon ayuda al crecimiento del trigo, por lo que Dachsbun ha sido un tesoro en las aldeas agrícolas.",
        "it": "Il gradevole aroma che emana dal corpo di questo Pokémon aiuta la crescita del grano, per questo il Dachsbun è stato apprezzato dai villaggi contadini.",
        "de": "Der angenehme Duft, der vom Körper dieses Pokémon ausgeht, hilft beim Weizenwachstum, weshalb Backel von Bauerndörfern geschätzt wird.",
        "pt-br": "O aroma agradável que emana do corpo deste Pokémon ajuda o trigo a crescer, por isso Dachsbun é apreciado pelas aldeias agrícolas.",
        "zh-tw": "這隻寶可夢身體散發出的宜人香氣有助於小麥生長，因此麻花犬一直被農村所珍視。"
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Play Rough",
                fr: "Câlinerie",
                es: "Carantoña",
                it: "Carineria",
                de: "Knuddler",
                "pt-br": "Jogue duro",
                "zh-tw": "玩粗暴",
                pt: "Jogo Duro"
            },
            damage: "50+",
            cost: ["Psychic", "Psychic"],
            effect: {
                en: "Flip a coin. If heads, this attack does 50 more damage.",
                fr: "Lancez une pièce. Si c’est face, cette attaque inflige 50 dégâts supplémentaires.",
                es: "Lanza 1 moneda. Si sale cara, este ataque hace 50 puntos de daño más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 50 danni in più.",
                de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 50 Schadenspunkte mehr zu.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque causa 50 de dano a mais.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 50 點額外傷害。",
                pt: "Jogue 1 moeda. Se sair cara, este ataque causará 50 pontos de dano a mais."
            },
        },
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20",
        },
    ],
    retreat: 2,
};
export default card;
