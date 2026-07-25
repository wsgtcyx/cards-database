import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/062",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/062",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/062",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/062",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/062",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/062"
    },
    name: {
        en: "Minccino",
        fr: "Chinchidou",
        es: "Minccino",
        it: "Minccino",
        de: "Picochilla",
        "pt-br": "Minccino",
        "zh-tw": "泡沫栗鼠",
        ko: "치라미",
        ja: "チラーミィ"
    },
    illustrator: "kirisAki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    dexId: [572],
    stage: "Basic",
    description: {
        en: "These Pokémon like things neat and tidy. They are always sweeping and dusting their habitat, using their tails as brooms.",
        fr: "Ces Pokémon aiment les choses propres et bien rangées. Ils balayent et époussetent toujours leur habitat, utilisant leur queue comme balai.",
        es: "A estos Pokémon les gustan las cosas limpias y ordenadas. Siempre están barriendo y quitando el polvo de su hábitat, usando sus colas como escobas.",
        it: "A questi Pokémon piacciono le cose pulite e ordinate. Spazzano e spolverano continuamente il loro habitat, usando la coda come scopa.",
        de: "Diese Pokémon mögen es ordentlich und ordentlich. Sie fegen und stauben ständig ihren Lebensraum und benutzen ihre Schwänze als Besen.",
        "pt-br": "Esses Pokémon gostam de coisas limpas e organizadas. Eles estão sempre varrendo e tirando o pó de seu habitat, usando suas caudas como vassouras.",
        "zh-tw": "這些寶可夢喜歡乾淨整齊的東西。它們總是用尾巴當掃帚來清掃和撣掉棲息地的灰塵。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Play Rough",
                fr: "Câlinerie",
                es: "Carantoña",
                it: "Carineria",
                de: "Knuddler",
                "pt-br": "Jogo Duro",
                "zh-tw": "嬉鬧"
            },
            effect: {
                en: "Flip a coin. If heads, this attack does 20 more damage.",
                fr: "Lancez une pièce de monnaie. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
                es: "Lanza una moneda. Si sale cara, este ataque hace 20 daños más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
                de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 20 Schadenspunkte mehr zu.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque causa 20 de dano a mais.",
                "zh-tw": "拋一枚硬幣。如果正面，這次攻擊會造成 20 點額外傷害。"
            },
            damage: "10+"
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
