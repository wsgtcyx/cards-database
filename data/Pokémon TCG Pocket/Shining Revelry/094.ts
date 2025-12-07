import { Card } from "../../../interfaces";
import Set from "../Shining Revelry";
const card: Card = {
    set: Set,
    name: {
        en: "Tinkaton ex",
        fr: "Forgelina-ex",
        es: "Tinkaton ex",
        it: "Tinkaton-ex",
        de: "Granforgita-ex",
        'pt-br': "Tinkaton ex",
        ko: "두드리짱 ex",
        "zh-tw": "廷卡頓前"
    },
    illustrator: "kurumitsu",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 170,
    types: ["Metal"],
    evolveFrom: {
        en: "Tinkatuff",
        "fr": "Tinkatuff",
        "es": "Tinkatuff",
        "it": "Tinkatuff",
        "de": "Tinkatuff",
        "pt-br": "Tinkatuff",
        "zh-tw": "廷卡塔夫"
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Terrific Thumping",
                fr: "Écrasement Formidable",
                es: "Martillazo Descomunal",
                it: "Martellata Possente",
                de: "Heftiges Hämmern",
                'pt-br': "Batida Extraordinária",
                ko: "호쾌스탬프",
                "zh-tw": "很棒的重擊"
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
                ko: "동전을 1번 던져서 앞면이 나오면 80데미지를 추가한다.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 80 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
