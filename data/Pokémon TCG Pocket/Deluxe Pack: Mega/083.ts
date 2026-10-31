import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/083",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/083",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/083",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/083",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/083",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/083",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/083",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4b/083",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4b/083"
    },
    name: {
        en: "Raichu",
        fr: "Raichu",
        es: "Raichu",
        it: "Raichu",
        de: "Raichu",
        "pt-br": "Raichu",
        "zh-tw": "雷丘",
        ja: "ライチュウ",
        ko: "라이츄"
    },
    illustrator: "GIDORA",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: [
        "Lightning"
    ],
    dexId: [
        26
    ],
    evolveFrom: {
        en: "Pikachu",
        fr: "Pikachu",
        es: "Pikachu",
        it: "Pikachu",
        de: "Pikachu",
        "pt-br": "Pikachu",
        "zh-tw": "皮卡丘",
        ja: "ピカチュウ",
        ko: "피카츄"
    },
    stage: "Stage1",
    description: {
        en: "If the electric pouches in its cheeks become fully charged, both ears will stand straight up.",
        fr: "Ses oreilles se dressent lorsque les poches d'électricité sur ses joues sont chargées.",
        es: "Si las bolsas de sus mejillas se cargan por completo de electricidad, se le ponen las orejas de punta.",
        it: "Quando le sacche elettriche sulle sue guance si caricano completamente, gli si rizzano le orecchie.",
        de: "Wenn seine Backentaschen voll aufgeladen sind, stehen seine beiden Ohren senkrecht nach oben.",
        "pt-br": "Se as bolsas elétricas de suas bochechas atingem carga completa, suas duas orelhas levantam.",
        "zh-tw": "如果雙頰上的電囊儲存了飽滿的電力，兩隻耳朵就會直直地豎起。",
        ja: "頬の 電気袋に 溜まった 電気が 最大量になると 両耳は まっすぐ 伸びる。",
        ko: "양 볼의 전기 주머니에 모인\n전기가 가득 차게 되면\n두 귀가 곧게 선다."
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Evoshock",
                fr: "Choc Évolutif",
                es: "Evoimpacto",
                "pt-br": "Evochoque",
                "zh-tw": "進化衝擊",
                it: "Evoshock",
                de: "Evoschock",
                ja: "エボルショック",
                ko: "이볼브쇼크"
            },
            effect: {
                en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
                fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer un de vos Pokémon, vous pouvez lancer une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
                es: "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon, puedes lanzar 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
                "pt-br": "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá jogar uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
                "zh-tw": "在自己的回合,當從手牌使出這張卡並完成進化時,可使用1次。擲1次硬幣若為正面,則將對手的戰鬥寶可夢麻痺。",
                it: "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi lanciare una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
                de: "Einmal während deines Zuges, wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du 1 Münze werfen. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
                ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
                ko: "자신의 차례에 이 카드를 패에서 꺼내서 진화시켰을 때 1번 사용할 수 있다. 동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬을 마비로 만든다."
            }
        }
    ],
    attacks: [
        {
            cost: [
                "Lightning",
                "Colorless"
            ],
            name: {
                en: "Electro Ball",
                fr: "Boule Élek",
                es: "Bola Voltio",
                it: "Energisfera",
                de: "Elektroball",
                "pt-br": "Bola Elétrica",
                "zh-tw": "電球",
                ja: "エレキボール",
                ko: "일렉트릭볼"
            },
            damage: 50
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
