import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/033/2f8cbfd67d3d72a0",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/033/2f8cbfd67d3d72a0",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/033/2f8cbfd67d3d72a0",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/033/2f8cbfd67d3d72a0",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/033/2f8cbfd67d3d72a0",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/033/2f8cbfd67d3d72a0",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/033/2f8cbfd67d3d72a0",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/033/2f8cbfd67d3d72a0",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/033/2f8cbfd67d3d72a0"
    },
    name: {
        en: "Quaxly",
        fr: "Coiffeton",
        es: "Quaxly",
        it: "Quaxly",
        de: "Kwaks",
        "pt-br": "Quaxly",
        "zh-tw": "潤水鴨",
        ko: "꾸왁스",
        ja: "クワッス"
    },
    illustrator: "buchi",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    dexId: [912],
    stage: "Basic",
    description: {
        en: "Its strong legs let it easily swim around in even fast-flowing rivers. It likes to keep things tidy and is prone to overthinking things.",
        fr: "Ce Pokémon perfectionniste aime la propreté. Ses pattes puissantes lui permettent de nager sans effort, même lorsque le courant est fort.",
        es: "La fuerza de sus patas le permite nadar incluso por las más fuertes corrientes fluviales. Adora la pulcritud y peca de inflexible en su actitud.",
        it: "Può nuotare tranquillamente persino nei fiumi più impetuosi grazie ai potenti arti inferiori. Tiene molto alla pulizia ed è incline a rimuginare.",
        de: "Seine Beine sind so kräftig, dass es auch in Flüssen mit starker Strömung frei schwimmen kann. Es ist ordnungsliebend und sorgfältig.",
        "pt-br": "Suas pernas fortes permitem que nade facilmente até mesmo em rios de correnteza rápida. Gosta de deixar tudo arrumadinho e costuma pensar demais nas coisas.",
        "zh-tw": "擁有在水流湍急的河川也能自在游動的腳力。愛乾淨，個性不知變通。",
        ja: "流れが 急な 川も 自由に 泳ぎまわる 脚力を 持つ。 きれい好きで 思い込みが 強い。",
        ko: "유속이 빠른 강에서도\n자유롭게 헤엄칠 수 있는 다릿심을 가졌다.\n깔끔한 것을 좋아하며 집착이 강하다."
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Splashing Dodge",
                fr: "Esquive Éclaboussante",
                es: "Esquivo Chapoteo",
                it: "Schivata Splash",
                de: "Ausweichplatscher",
                "pt-br": "Evasão de Borrifada",
                "zh-tw": "躍起閃避",
                ja: "はねてかわす",
                ko: "튀어올라 피하기"
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
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: []
};

export default card;
