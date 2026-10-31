import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/067",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/067",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/067",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/067",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/067",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/067",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/067",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/067"
    },
    name: {
        en: "Diglett",
        fr: "Taupiqueur",
        es: "Diglett",
        "pt-br": "Diglett",
        "zh-tw": "地鼠",
        ja: "ディグダ",
        ko: "디그다",
        it: "Diglett",
        de: "Digda"
    },
    illustrator: "Miki Tanaka",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 50,
    types: [
        "Fighting"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Dig",
                fr: "Tunnel",
                es: "Excavar",
                it: "Fossa",
                de: "Schaufler",
                "pt-br": "Cavar",
                "zh-tw": "挖洞",
                ja: "あなをほる",
                ko: "Dig"
            },
            cost: [
                "Fighting"
            ],
            damage: 10,
            effect: {
                en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon.",
                fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
                es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
                it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
                de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden.",
                "pt-br": "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
                "zh-tw": "擲1次硬幣若為正面,則在下個對手的回合,這隻寶可夢不會受到招式的傷害與效果的影響。",
                ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
                ko: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon."
            }
        }
    ],
    abilities: [],
    description: {
        en: "It lives about one yard underground, where it feeds on plant roots. It sometimes appears aboveground.",
        fr: "Ce Pokémon vit un mètre sous terre et se nourrit de racines. Il apparaît parfois à la surface.",
        es: "Vive 1 m por debajo del suelo, donde se alimenta de raíces. A veces también aparece en la superficie.",
        it: "Vive un metro sottoterra, dove si nutre di radici. Talvolta compare in superficie.",
        de: "Dieses Pokémon lebt 1 m unter der Erde. Es frisst Wurzeln und kommt hin und wieder an die Oberfläche.",
        "pt-br": "Vive cerca de 1 metro embaixo da terra, onde se alimenta de raízes de plantas. Algumas vezes, são vistos acima da terra.",
        "zh-tw": "在大約1公尺深的地底挖洞棲息，靠啃食植物之類的根部生活。偶爾會到地面上露個臉。",
        ja: "地下１メートルくらいを 掘りすすみ 木の根っこなどを かじって 生きる。 たまに 地上に 顔を出す。",
        ko: "It lives about one yard underground, where it feeds on plant roots. It sometimes appears aboveground."
    }
};

export default card;
