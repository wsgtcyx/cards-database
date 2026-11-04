import { Card } from "../../../interfaces";
import Set from "../Promos-C";

const card: Card = {
    set: Set,
    name: {
        en: "Delibird",
        fr: "Cadoizo",
        es: "Delibird",
        it: "Delibird",
        de: "Botogel",
        "pt-br": "Delibird",
        "zh-tw": "信使鳥",
        ja: "デリバード",
        ko: "딜리버드"
    },
    illustrator: "OKACHEKE",
    rarity: "One Star",
    category: "Pokemon",
    hp: 80,
    types: [
        "Water"
    ],
    description: {
        en: "It always carries its food with it, wherever it goes. If attacked, it throws its food at the opponent.",
        fr: "Il a toujours de la nourriture sur lui. Lorsqu'on l'attaque, il la jette sur son agresseur pour se protéger.",
        es: "Siempre lleva la comida consigo, vaya donde vaya. Si lo atacan, se la tirará a su adversario.",
        it: "Porta sempre del cibo con sé. Quando viene attaccato, getta i viveri contro l'avversario per difendersi.",
        de: "Es trägt immer Nahrung bei sich. Wird es attackiert, wirft es diese nach dem Angreifer, um sich zu schützen.",
        "pt-br": "Está sempre carregando sua comida, não importa para onde vá. Se for atacado, lança a comida no oponente.",
        "zh-tw": "總是在搬運著食物。遇到襲擊時，會丟出身上帶著的食物來保護自己。",
        ja: "いつも エサを 持ち運んでいる。 襲われると 身を 守ろうとして 持っている エサを 投げつける。",
        ko: "언제나 먹이를 가지고 다닌다. 공격받으면 몸을 지키기 위해 가지고 있는 먹이를 집어던진다."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Box of Surprises",
                fr: "Boîte à Surprises",
                es: "Caja de Sorpresas",
                it: "Pacco Sorpresa",
                de: "Box voller Überraschungen",
                "pt-br": "Caixa de Surpresas",
                "zh-tw": "驚奇箱",
                ja: "サプライズボックス",
                ko: "서프라이즈 박스"
            },
            cost: [
                "Colorless",
                "Colorless"
            ],
            effect: {
                en: "Flip a coin. If heads, this attack does 70 damage to your opponent's Active Pokémon. If tails, heal 30 damage from your opponent's Active Pokémon.",
                fr: "Lancez une pièce. Si c'est face, cette attaque inflige 70 dégâts au Pokémon Actif de votre adversaire. Si c'est pile, soignez 30 dégâts subis par le Pokémon Actif de votre adversaire.",
                es: "Lanza 1 moneda. Si sale cara, este ataque hace 70 puntos de daño al Pokémon Activo de tu rival. Si sale cruz, cura 30 puntos de daño al Pokémon Activo de tu rival.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 70 danni al Pokémon attivo del tuo avversario. Se esce croce, cura il Pokémon attivo del tuo avversario da 30 danni.",
                de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke dem Aktiven Pokémon deines Gegners 70 Schadenspunkte zu. Heile bei Zahl 30 Schadenspunkte beim Aktiven Pokémon deines Gegners.",
                "pt-br": "Jogue uma moeda. Se sair cara, este ataque causará 70 pontos de dano ao Pokémon Ativo do seu oponente. Se sair coroa, cure 30 pontos de dano do Pokémon Ativo do seu oponente.",
                "zh-tw": "擲1次硬幣若為正面,則對手的戰鬥寶可夢受到70點傷害。若為反面,則將對手的戰鬥寶可夢恢復30HP。",
                ja: "コインを1回投げオモテなら、相手のバトルポケモンに70ダメージ。ウラなら、相手のバトルポケモンのHPを30回復。",
                ko: "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬에게 70데미지를 준다. 뒷면이 나오면 상대 배틀 포켓몬의 HP를 30회복."
            }
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: [],
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-C/012/031efdedb3be1ea2",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-C/012/031efdedb3be1ea2",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-C/012/031efdedb3be1ea2",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-C/012/031efdedb3be1ea2",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-C/012/031efdedb3be1ea2",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-C/012/031efdedb3be1ea2",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-C/012/031efdedb3be1ea2",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-C/012/031efdedb3be1ea2",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-C/012/031efdedb3be1ea2"
    }
};

export default card;
