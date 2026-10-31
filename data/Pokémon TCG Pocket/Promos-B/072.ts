import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/072",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/072",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/072",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/072",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/072",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/072",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-B/072",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/P-B/072",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/P-B/072"
    },
    name: {
        en: "Feebas",
        fr: "Barpau",
        es: "Feebas",
        it: "Feebas",
        de: "Barschwa",
        "pt-br": "Feebas",
        "zh-tw": "醜醜魚",
        ko: "빈티나",
        ja: "ヒンバス"
    },
    illustrator: "Tetsu Kayama",
    rarity: "None",
    category: "Pokemon",
    hp: 30,
    types: ["Water"],
    dexId: [349],
    stage: "Basic",
    description: {
        en: "It is the shabbiest Pokémon of all. It forms schools and lives at the bottom of rivers that teem with plant life.",
        fr: "C'est le Pokémon le plus minable de tous. Il forme des bancs et vit au fond des rivières regorgeant de végétation.",
        es: "Es el Pokémon más cutre de todos. Forma escuelas y vive en el fondo de ríos repletos de vida vegetal.",
        it: "È il Pokémon più squallido di tutti. Forma banchi e vive sul fondo dei fiumi brulicanti di vita vegetale.",
        de: "Es ist das schäbigste Pokémon von allen. Es bildet Schulen und lebt am Grund von Flüssen, in denen es von Pflanzen nur so wimmelt.",
        "pt-br": "É o Pokémon mais pobre de todos. Forma cardumes e vive no fundo de rios repletos de plantas.",
        "zh-tw": "它是所有寶可夢中最破舊的。它在充滿植物生命的河流底部形成學校和生活。",
        ja: "一番 みすぼらしい ポケモン。 水草の 多い 川底で 大勢 集まって 暮らしている。",
        ko: "제일 볼품없는 포켓몬이다.\n수초가 많은 강바닥에\n한데 모여 살고 있다."
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Hide",
                fr: "Cachette",
                es: "Ocultarse",
                it: "Nascondino",
                de: "Verstecken",
                "pt-br": "Esconder",
                "zh-tw": "躲藏",
                ja: "かくれる",
                ko: "숨기"
            },
            effect: {
                en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon.",
                fr: "Lancez une pièce de monnaie. Si c'est face, lors du prochain tour de votre adversaire, prévenez tous les dégâts et effets des attaques infligées à ce Pokémon.",
                es: "Lanza una moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y los efectos de los ataques realizados a este Pokémon.",
                it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni tutti i danni e gli effetti degli attacchi inflitti a questo Pokémon.",
                de: "Wirf eine Münze. Bei „Kopf“ verhindere im nächsten Zug deines Gegners jeglichen Schaden und alle Auswirkungen von Angriffen, die diesem Pokémon zugefügt werden.",
                "pt-br": "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, evite todos os danos e efeitos de ataques feitos a este Pokémon.",
                "zh-tw": "拋一枚硬幣。如果正面朝上，則在對手的下一回合中，阻止對該寶可夢造成的所有攻擊傷害及其效果。",
                ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
                ko: "동전을 1번 던져서 앞면이 나오면 상대의 다음 차례에 이 포켓몬은 기술의 데미지나 효과를 받지 않는다."
            }
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol10"]
};

export default card;
