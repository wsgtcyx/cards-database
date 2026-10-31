import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/127",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/127",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/127",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/127",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/127",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/127",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/127",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2/127",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2/127"
    },
    name: {
        en: "Mega Kangaskhan ex",
        "fr": "Méga-Kangourex-ex",
        "es": "Mega-Kangaskhan ex",
        "it": "Mega Kangaskhan-ex",
        "de": "Mega-Kangama-ex",
        "pt-br": "Mega Kangaskhan ex",
        "zh-tw": "超級袋獸ex",
        ja: "メガガルーラex",
        ko: "메가캥카 ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 180,
    types: ["Colorless"],
    description: {
        en: "Mega Kangaskhan's strength derives from the\nmother's happiness about her child's growth.\nWatching it grow up keeps her spirits high.",
        "fr": "La force de Méga Kangaskhan vient de\nle bonheur de la mère face à la croissance de son enfant.\nLe voir grandir lui permet de garder le moral.",
        "es": "La fuerza de Mega Kangaskhan deriva de la\nla felicidad de la madre por el crecimiento de su hijo.\nVerlo crecer le mantiene el ánimo en alto.",
        "it": "La forza di Mega Kangaskhan deriva da\nla felicità della madre per la crescita del figlio.\nVederlo crescere le tiene alto il morale.",
        "de": "Die Stärke von Mega Kangaskhan ergibt sich aus dem\ndie Freude der Mutter über das Wachstum ihres Kindes.\nZuzusehen, wie es heranwächst, hält ihre Stimmung hoch.",
        "pt-br": "A força de Mega Kangaskhan deriva do\nfelicidade da mãe com o crescimento do filho.\nVê-lo crescer mantém seu ânimo elevado.",
        "zh-tw": "Mega Kangaskhan的力量源自\n母親為孩子的成長感到高興。\n看著它長大，她的精神振奮起來。",
        ja: "メガガルーラが 強い 理由は 子どもの 成長に 喜び 張り切っている ママの せい。",
        ko: "메가캥카가 강한 이유는\n아이의 성장을 기뻐하면서\n의욕이 넘치는 엄마 때문이다."
    },
    stage: "Basic",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Double-Punching Family",
                "fr": "Famille à double poinçonnage",
                "es": "Familia de doble punzonado",
                "it": "Famiglia del doppio pugno",
                "de": "Doppelt schlagende Familie",
                "pt-br": "Família de socos duplos",
                "zh-tw": "雙拳家族",
                ja: "ファミリーダブルパンチ",
                ko: "패밀리 더블 펀치"
            },
            damage: 80,
            cost: ["Colorless", "Colorless", "Colorless"],
            effect: {
                en: "This attack is used twice in a row. The second attack does 40 damage. (If the first attack Knocks Out your opponent's Active Pokémon, the second attack is used after your opponent chooses a new Active Pokémon.)",
                "fr": "Cette attaque est utilisée deux fois de suite. La deuxième attaque inflige 40 dégâts. (Si la première attaque met KO le Pokémon Actif de votre adversaire, la deuxième attaque est utilisée après que votre adversaire a choisi un nouveau Pokémon Actif.)",
                "es": "Este ataque se utiliza dos veces seguidas. El segundo ataque hace 40 daños. (Si el primer ataque deja fuera de combate al Pokémon Activo de tu oponente, el segundo ataque se usa después de que tu oponente elija un nuevo Pokémon Activo).",
                "it": "Questo attacco viene utilizzato due volte di seguito. Il secondo attacco infligge 40 danni. (Se il primo attacco mette KO il Pokémon attivo del tuo avversario, il secondo attacco viene utilizzato dopo che il tuo avversario ha scelto un nuovo Pokémon attivo.)",
                "de": "Dieser Angriff wird zweimal hintereinander ausgeführt. Der zweite Angriff verursacht 40 Schadenspunkte. (Wenn der erste Angriff das Aktive Pokémon deines Gegners kampfunfähig macht, wird der zweite Angriff ausgeführt, nachdem dein Gegner ein neues Aktives Pokémon ausgewählt hat.)",
                "pt-br": "Este ataque é usado duas vezes seguidas. O segundo ataque causa 40 de dano. (Se o primeiro ataque Nocautear o Pokémon Ativo do seu oponente, o segundo ataque será usado depois que seu oponente escolher um novo Pokémon Ativo.)",
                "zh-tw": "這種攻擊連續使用了兩次。第二次攻擊造成 40 點傷害。 （如果第一次攻擊擊倒對手的活躍神奇寶貝，則在對手選擇新的活躍神奇寶貝後使用第二次攻擊。）",
                ja: "このワザは2回連続で使う。2回目は40ダメージ。 (1回目で相手のバトルポケモンがきぜつしたなら、次のバトルポケモンが出たあと、2回目を使う。)",
                ko: "이 기술은 2번 연속으로 사용한다. 2번째는 40데미지를 준다. (1번째에 상대의 배틀 포켓몬이 기절했다면 다음 배틀 포켓몬이 나온 후, 2번째를 사용한다.)"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 3
};
export default card;
