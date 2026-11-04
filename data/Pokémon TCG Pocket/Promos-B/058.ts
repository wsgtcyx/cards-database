import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/058/f9ce9064a756b552",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/058/f9ce9064a756b552",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/058/f9ce9064a756b552",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/058/f9ce9064a756b552",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/058/f9ce9064a756b552",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/058/f9ce9064a756b552",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/058/f9ce9064a756b552",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/058/f9ce9064a756b552",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/058/f9ce9064a756b552"
    },
    name: {
        en: "Tepig",
        fr: "Gruikui",
        es: "Tepig",
        it: "Tepig",
        de: "Floink",
        "pt-br": "Tepig",
        "zh-tw": "暖暖豬",
        ko: "뚜꾸리",
        ja: "ポカブ"
    },
    illustrator: "Kouki Saitou",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fire"],
    dexId: [498],
    stage: "Basic",
    description: {
        en: "This Pokémon is a ravenous glutton. It uses its excellent sense of smell to find food, then cooks it to a crisp before eating.",
        fr: "Ce Pokémon glouton possède un appétit vorace. Il trouve sa nourriture grâce à son odorat fin et la grille avant de la déguster.",
        es: "Es un glotón insaciable. Encuentra alimento con su agudo sentido del olfato, para luego tostarlo bien antes de ingerirlo.",
        it: "È un insaziabile ghiottone. Usa il suo sensibilissimo naso per scovare il cibo, che mangia dopo averlo abbrustolito a puntino.",
        de: "Dieser gierige Nimmersatt spürt Nahrung mit seinem ausgezeichneten Geruchssinn auf und röstet diese, bevor er sie verspeist.",
        "pt-br": "Este Pokémon é muito glutão. Usa seu excelente faro para encontrar comida, depois a cozinha até ficar bem torrada antes de comer.",
        "zh-tw": "貪吃無比的大胃王。會用靈敏的鼻子找出食物，將其烤到恰到好處再享用。",
        ja: "食いしん坊の 大食漢。 よく利く 鼻で エサを 見つけだし こんがり 焼きあげてから いただく。",
        ko: "먹을 것을 좋아하는 대식가다.\n뛰어난 후각으로 먹이를 찾아낸 다음\n바싹 익혀서 먹는다."
    },
    attacks: [
        {
            cost: ["Fire"],
            name: {
                en: "Firebreathing",
                fr: "Souffle-Feu",
                es: "Aliento de Fuego",
                it: "Fuocospiro",
                de: "Feuerhauch",
                "pt-br": "Hálito de Fogo",
                "zh-tw": "吹火",
                ja: "ひをふく",
                ko: "불내뿜기"
            },
            effect: {
                en: "Flip a coin. If heads, this attack does 30 more damage.",
                fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts de plus.",
                es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
                de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu.",
                "pt-br": "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
                "zh-tw": "擲1次硬幣若為正面,則增加30點傷害。",
                ja: "コインを1回投げオモテなら、30ダメージ追加。",
                ko: "동전을 1번 던져서 앞면이 나오면 30데미지를 추가한다."
            },
            damage: "10+"
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol8"]
};

export default card;
