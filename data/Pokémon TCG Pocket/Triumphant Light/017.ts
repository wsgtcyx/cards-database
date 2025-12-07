import { Card } from "../../../interfaces";
import Set from "../Triumphant Light";
const card: Card = {
    set: Set,
    name: {
        en: "Whiscash",
        fr: "Barbicha",
        es: "Whiscash",
        it: "Whiscash",
        de: "Welsar",
        'pt-br': "Whiscash",
        ko: "메깅",
        "zh-tw": "鯰魚王",
    },
    illustrator: "Shinya Komatsu",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Water"],
    evolveFrom: {
        en: "Barboach",
        "fr": "Barboach",
        "es": "barboach",
        "it": "Barboach",
        "de": "Barboach",
        "pt-br": "Barboach",
        "zh-tw": "巴博阿奇"
    },
    description: {
        en: "It is extremely protective of its territory. If any foe approaches, it attacks using vicious tremors.",
        fr: "Il est très protecteur vis-à-vis de son territoire.\nSi des ennemis approchent, il le défend\nen déclenchant des secousses terribles.",
        es: "Protege su territorio por encima de todo. Si se acerca\nun enemigo, lo ataca con violentos temblores de tierra.",
        it: "È molto protettivo del suo territorio e, se\nun nemico si avvicina, reagisce facendo\ntremare violentemente la terra.",
        de: "Es hat ein ausgeprägtes Revierverhalten.\nNähert sich ein Feind, greift es diesen an,\nindem es die Erde heftig beben lässt.",
        'pt-br': "Protege seu território com muito afinco. Se algum\ninimigo se aproxima, ataca-o usando tremores perversos.",
        ko: "영역 의식이 매우 강하여\n외부의 적이 다가오면 격렬하게\n지면을 울리며 덤벼든다.",
        "zh-tw": "它非常保護自己的領土。如果有任何敵人接近，它會使用惡毒的震動進行攻擊。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Thrash",
                fr: "Mania",
                es: "Saña",
                it: "Colpo",
                de: "Fuchtler",
                'pt-br': "Castigar",
                ko: "난동부리기",
                "zh-tw": "鞭打"
            },
            damage: "80+",
            cost: ["Water", "Water", "Colorless", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, this attack does 60 more damage. If tails, this Pokémon also does 20 damage to itself.",
                fr: "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts de plus. Si c'est pile, ce Pokémon s'inflige aussi 20 dégâts.",
                es: "Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más. Si sale cruz, este Pokémon también se hace 20 puntos de daño a sí mismo.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 60 danni in più. Se esce croce, questo Pokémon infligge anche 20 danni a se stesso.",
                de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 60 Schadenspunkte mehr zu. Bei Zahl fügt dieses Pokémon auch sich selbst 20 Schadenspunkte zu.",
                'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 60 pontos de dano a mais. Se sair coroa, este Pokémon também causará 20 pontos de dano a si mesmo.",
                ko: "동전을 1번 던져서 앞면이 나오면 60데미지를 추가한다. 뒷면이 나오면 이 포켓몬에게도 20데미지를 준다.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 60 點額外傷害。如果是反面，這只神奇寶貝也會對自己造成 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 3
};
export default card;
