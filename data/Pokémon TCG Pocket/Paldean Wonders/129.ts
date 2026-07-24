import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/129",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/129"
    },
    name: {
        en: "Tinkaton",
        fr: "Forgelina",
        es: "Tinkaton",
        it: "Tinkaton",
        de: "Granforgita",
        "pt-br": "Tinkaton",
        "zh-tw": "巨鍛匠",
        pt: "Tinkaton"
    },
    suffix: "EX",
    illustrator: "PLANETA Igarashi",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 170,
    types: ["Metal"],
    dexId: [959],
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Terrific Thumping",
                fr: "Écrasement Formidable",
                es: "Martillazo Descomunal",
                it: "Martellata Possente",
                de: "Heftiges Hämmern",
                'pt-br': "Batida Extraordinária",
                "zh-tw": "很棒的重擊",
                ko: "호쾌스탬프"
            },
            damage: "80+",
            cost: ["Metal", "Metal", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, this attack does 80 more damage.",
                fr: "Lancez une pièce. Si c'est face, cette attaque inflige 80 dégâts de plus.",
                es: "Lanza 1 moneda. Si sale cara, este ataque hace 80 puntos de daño más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 80 danni in più.",
                de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 80 Schadenspunkte mehr zu.",
                'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 80 pontos de dano a mais.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 80 點額外傷害。",
                ko: "동전을 1번 던져서 앞면이 나오면 80데미지를 추가한다."
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2,
};
export default card;
