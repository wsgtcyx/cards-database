import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/072/939c933418890c2d",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/072/939c933418890c2d",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/072/939c933418890c2d",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/072/939c933418890c2d",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/072/939c933418890c2d",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/072/939c933418890c2d",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/072/939c933418890c2d",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/072/939c933418890c2d",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/072/939c933418890c2d"
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
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 30,
    types: ["Water"],
    dexId: [349],
    stage: "Basic",
    description: {
        en: "It is the shabbiest Pokémon of all. It forms schools and lives at the bottom of rivers that teem with plant life.",
        fr: "Ce Pokémon d'apparence miteuse vit en larges bancs, au fond des rivières qui abondent en plantes aquatiques.",
        es: "Es el Pokémon con aspecto más penoso. Habitan y forman bancos en los lechos de los ríos con abundantes plantas acuáticas.",
        it: "Il Pokémon dall'aspetto più misero. Vive in grandi gruppi nei letti dei fiumi ricchi di piante acquatiche.",
        de: "Das schäbigste Pokémon von allen. Es lebt in großen Gruppen auf dem Grund von Flüssen, wo viele Wasserpflanzen wachsen.",
        "pt-br": "É o Pokémon mais desgastado de todos. Forma cardumes e vive no leito de rios repletos de plantas.",
        "zh-tw": "最寒酸的寶可夢，在有許多水草的河底群聚而居。",
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
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol10"]
};

export default card;
