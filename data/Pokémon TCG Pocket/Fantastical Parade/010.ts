import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/010",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/010",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/010",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/010",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/010",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/010",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/010",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2/010",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2/010"
    },
    name: {
        en: "Chesnaught",
        "fr": "Blindépique",
        "es": "Chesnaught",
        "it": "Chesnaught",
        "de": "Brigaron",
        "pt-br": "Chesnaught",
        "zh-tw": "布里卡隆",
        ja: "ブリガロン",
        ko: "브리가론"
    },
    illustrator: "5ban Graphics",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 160,
    types: ["Grass"],
    evolveFrom: {
        en: "Quilladin",
        "fr": "Boguérisse",
        "es": "Quilladin",
        "it": "Quilladin",
        "de": "Igastarnish",
        "pt-br": "Quilladin",
        "zh-tw": "胖胖哈力",
        ja: "ハリボーグ",
        ko: "도치보구"
    },
    description: {
        en: "Its gentle disposition would have it avoid\nconflict, but it gives opponents a thrashing with\nits thorned fists when the situation calls for it.",
        "fr": "Son caractère doux lui ferait éviter\nconflit, mais cela donne aux opposants une raclée avec\nses poings épineux lorsque la situation l'exige.",
        "es": "Su gentil disposición le haría evitar\nconflicto, pero da a los oponentes una paliza con\nsus puños llenos de espinas cuando la situación lo requiere.",
        "it": "La sua indole gentile lo farebbe evitare\nconflitto, ma dà agli avversari una bastonata\ni suoi pugni spinosi quando la situazione lo richiede.",
        "de": "Seine sanfte Art würde es meiden\nKonflikt, aber es gibt Gegnern eine Tracht Prügel\nseine dornigen Fäuste, wenn die Situation es erfordert.",
        "pt-br": "Sua disposição gentil faria com que evitasse\nconflito, mas dá aos adversários uma surra com\nseus punhos espinhosos quando a situação exige.",
        "zh-tw": "它的溫柔性格會避免\n衝突，但它給對手帶來了打擊\n當情況需要時，它會伸出帶刺的拳頭。",
        ja: "争いを 避ける 穏やかな 性格だが いざとなると トゲの こぶしで 相手を 叩きのめす。",
        ko: "싸움을 피하는 온화한 성격을 가졌으나\n중요한 순간에는 가시가 달린 주먹으로\n상대를 때려눕힌다."
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Needle Lariat",
                "fr": "Lariat à aiguille",
                "es": "Lazo de aguja",
                "it": "Ago Lariat",
                "de": "Nadel-Lariat",
                "pt-br": "Lariate de agulha",
                "zh-tw": "針套索",
                ja: "ニードルラリアット",
                ko: "니들래리엇"
            },
            damage: 80,
            cost: ["Grass", "Grass", "Colorless", "Colorless"],
            effect: {
                en: "During your opponent's next turn, if this Pokémon is damaged by an attack, do 80 damage to the Attacking Pokémon.",
                "fr": "Lors du prochain tour de votre adversaire, si ce Pokémon est blessé par une attaque, infligez 80 dégâts au Pokémon attaquant.",
                "es": "Durante el próximo turno de tu rival, si este Pokémon es dañado por un ataque, haz 80 puntos de daño al Pokémon atacante.",
                "it": "Durante il prossimo turno del tuo avversario, se questo Pokémon viene danneggiato da un attacco, infliggi 80 danni al Pokémon attaccante.",
                "de": "Wenn dieses Pokémon im nächsten Zug deines Gegners durch einen Angriff beschädigt wird, füge dem angreifenden Pokémon 80 Schadenspunkte zu.",
                "pt-br": "Durante o próximo turno do seu oponente, se este Pokémon receber dano de um ataque, cause 80 de dano ao Pokémon atacante.",
                "zh-tw": "在對手的下一個回合中，如果這只神奇寶貝因攻擊而受到傷害，則對攻擊的神奇寶貝造成 80 點傷害。",
                ja: "次の相手の番、このポケモンがワザのダメージを受けたとき、ワザを使ったポケモンに80ダメージ。",
                ko: "상대의 다음 차례에 이 포켓몬이 기술의 데미지를 받았을 때 기술을 사용한 포켓몬에게 80데미지를 준다."
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 3
};
export default card;
