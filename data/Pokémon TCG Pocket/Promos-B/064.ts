import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/064/e550db67c485c2e0",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/064/e550db67c485c2e0",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/064/e550db67c485c2e0",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/064/e550db67c485c2e0",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/064/e550db67c485c2e0",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/064/e550db67c485c2e0",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/064/e550db67c485c2e0",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/064/e550db67c485c2e0",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/064/e550db67c485c2e0"
    },
    name: {
        en: "Charcadet",
        fr: "Charbambin",
        es: "Charcadet",
        it: "Charcadet",
        de: "Knarbon",
        "pt-br": "Charcadet",
        "zh-tw": "炭小侍",
        ko: "카르본",
        ja: "カルボウ"
    },
    illustrator: "takuyoa",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fire"],
    dexId: [935],
    stage: "Basic",
    description: {
        en: "Its firepower increases when it fights, reaching over 1,800 degrees Fahrenheit. It likes berries that are rich in fat.",
        fr: "Ses puissantes flammes atteignent les 1 000 °C lorsqu'il se bat. Il aime les Baies riches en matières grasses.",
        es: "Sus potentes llamas alcanzan los 1000 °C cuando combate. Siente predilección por las bayas con un alto contenido graso.",
        it: "La sua energia termica aumenta di intensità durante le lotte, raggiungendo i 1.000 °C. Adora le bacche ricche di grassi.",
        de: "Im Kampf erreichen seine Flammen Temperaturen von bis zu 1000 °C. Es hat eine Vorliebe für Beeren mit hohem Fettgehalt.",
        "pt-br": "Seu poder de fogo aumenta quando batalha, atingindo mais de 1.000 °C. Gosta de frutas ricas em gordura.",
        "zh-tw": "在進入戰鬥狀態後，火力會上升至超過1000度。喜歡吃油脂含量高的樹果。",
        ja: "戦いになると 火力が 上がり 摂氏1000度に 達する。 油分の多い 木の実を 好む。",
        ko: "싸움을 시작하면 화력이 상승하여\n섭씨 1000도에 이르게 된다.\n기름기가 많은 나무열매를 좋아한다."
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Protect",
                fr: "Abri",
                es: "Protección",
                it: "Protezione",
                de: "Schutzschild",
                "pt-br": "Proteção",
                "zh-tw": "守住",
                ja: "まもる",
                ko: "방어"
            },
            effect: {
                en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon.",
                fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
                es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
                it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
                de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden.",
                "pt-br": "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
                "zh-tw": "擲1次硬幣若為正面,則在下個對手的回合,這隻寶可夢不會受到招式的傷害與效果的影響。",
                ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
                ko: "동전을 1번 던져서 앞면이 나오면 상대의 다음 차례에 이 포켓몬은 기술의 데미지나 효과를 받지 않는다."
            }
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol9"]
};

export default card;
