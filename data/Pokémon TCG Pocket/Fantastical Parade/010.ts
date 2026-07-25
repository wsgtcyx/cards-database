import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/010",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/010",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/010",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/010",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/010"
    },
    name: {
        en: "Chesnaught",
        "fr": "Chesnaught",
        "es": "Chesnaught",
        "it": "Chesnaught",
        "de": "Chesnaught",
        "pt-br": "Chesnaught",
        "zh-tw": "切斯諾特"
    },
    illustrator: "5ban Graphics",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 160,
    types: ["Grass"],
    evolveFrom: {
        en: "Quilladin",
        "fr": "Quilladin",
        "es": "Quilladín",
        "it": "Quilladin",
        "de": "Quilladin",
        "pt-br": "Quilladin",
        "zh-tw": "奎拉丁"
    },
    description: {
        en: "Its gentle disposition would have it avoid\nconflict, but it gives opponents a thrashing with\nits thorned fists when the situation calls for it.",
        "fr": "Son caractère doux lui ferait éviter\nconflit, mais cela donne aux opposants une raclée avec\nses poings épineux lorsque la situation l'exige.",
        "es": "Su gentil disposición le haría evitar\nconflicto, pero da a los oponentes una paliza con\nsus puños llenos de espinas cuando la situación lo requiere.",
        "it": "La sua indole gentile lo farebbe evitare\nconflitto, ma dà agli avversari una bastonata\ni suoi pugni spinosi quando la situazione lo richiede.",
        "de": "Seine sanfte Art würde es meiden\nKonflikt, aber es gibt Gegnern eine Tracht Prügel\nseine dornigen Fäuste, wenn die Situation es erfordert.",
        "pt-br": "Sua disposição gentil faria com que evitasse\nconflito, mas dá aos adversários uma surra com\nseus punhos espinhosos quando a situação exige.",
        "zh-tw": "它的溫柔性格會避免\n衝突，但它給對手帶來了打擊\n當情況需要時，它會伸出帶刺的拳頭。"
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
                "zh-tw": "針套索"
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
                "zh-tw": "在對手的下一個回合中，如果這只神奇寶貝因攻擊而受到傷害，則對攻擊的神奇寶貝造成 80 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 3
};
export default card;
