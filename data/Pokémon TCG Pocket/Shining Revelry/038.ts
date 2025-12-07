import { Card } from "../../../interfaces";
import Set from "../Shining Revelry";
const card: Card = {
    set: Set,
    name: {
        en: "Machoke",
        fr: "Machopeur",
        es: "Machoke",
        it: "Machoke",
        de: "Maschock",
        'pt-br': "Machoke",
        ko: "근육몬",
        "zh-tw": "馬喬克"
    },
    illustrator: "Kouki Saitou",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fighting"],
    evolveFrom: {
        en: "Machop",
        "fr": "Machop",
        "es": "Machop",
        "it": "Machop",
        "de": "Machop",
        "pt-br": "Machop",
        "zh-tw": "馬喬普"
    },
    description: {
        en: "Its muscular body is so powerful, it must wear a power-save belt to be able to regulate its motions.",
        fr: "Son corps est si puissant qu'il lui faut\nune ceinture pour maîtriser sa force.",
        es: "Su musculoso cuerpo es tan fuerte que usa un\ncinto antifuerza para controlar sus movimientos.",
        it: "Il suo corpo muscoloso è così forte che usa\nuna cintura per contenere la sua potenza.",
        de: "Dieses Pokémon ist superstark. Es kann sich nur\nmit einem kraftregulierenden Gürtel bewegen.",
        'pt-br': "Sua massa muscular é tão poderosa que ele\nprecisa usar um cinto de economia de energia\npara controlar seus movimentos.",
        ko: "엄청나게 강한 육체를 지녔기 때문에\n파워 세이브 벨트를 차서\n힘을 제어하고 있다.",
        "zh-tw": "它肌肉發達的身體如此強大，必須佩戴節能帶才能調節其動作。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Pummel",
                fr: "Martelage",
                es: "Aporrear",
                it: "Legnata",
                de: "Trommler",
                'pt-br': "Esmurrar",
                ko: "후려갈기기",
                "zh-tw": "揍"
            },
            damage: "30+",
            cost: ["Fighting", "Fighting"],
            effect: {
                en: "Flip a coin. If heads, this attack does 30 more damage.",
                fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts de plus.",
                es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
                de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu.",
                'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
                ko: "동전을 1번 던져서 앞면이 나오면 30데미지를 추가한다.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 30 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 2
};
export default card;
