import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/310",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/310",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/310",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/310",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/310",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/310",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/310",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/310",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/310"
    },
    name: {
        en: "Rockruff",
        "fr": "Rocabot",
        "es": "Rockruff",
        "it": "Rockruff",
        "de": "Wuffels",
        "pt-br": "Rockruff",
        "zh-tw": "岩狗狗",
        ja: "イワンコ",
        ko: "암멍이",
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Fighting"],
    description: {
        en: "This Pokémon is very friendly when it's young.\nIts disposition becomes vicious once it matures,\nbut it never forgets the kindness of its master.",
        "fr": "Ce Pokémon est très sympathique lorsqu'il est jeune.\nSon caractère devient vicieux une fois qu'il mûrit,\nmais il n'oublie jamais la gentillesse de son maître.",
        "es": "Este Pokémon es muy amigable cuando es joven.\nSu disposición se vuelve viciosa una vez que madura,\npero nunca olvida la bondad de su amo.",
        "it": "Questo Pokémon è molto amichevole quando è giovane.\nLa sua indole diventa viziosa una volta maturata,\nma non dimentica mai la gentilezza del suo padrone.",
        "de": "Dieses Pokémon ist sehr freundlich, wenn es jung ist.\nSeine Veranlagung wird bösartig, sobald es erwachsen wird,\naber es vergisst nie die Freundlichkeit seines Meisters.",
        "pt-br": "Este Pokémon é muito amigável quando jovem.\nSua disposição se torna viciosa quando amadurece,\nmas nunca esquece a bondade do seu mestre.",
        "zh-tw": "這只神奇寶貝年輕時非常友好。\n成熟後性情就變得惡毒，\n但它永遠不會忘記主人的恩德。",
        ja: "小さいころは よく 懐く。 育つと 気性が 荒くなるが 主への 恩は 忘れない。",
        ko: "어렸을 때는 매우 잘 따른다.\n자라면서 성질이 사나워지지만\n주인에게 입은 은혜는 잊지 않는다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Signs of Evolution",
                "fr": "Signes d'évolution",
                "es": "Signos de evolución",
                "it": "Segni di evoluzione",
                "de": "Zeichen der Evolution",
                "pt-br": "Sinais de Evolução",
                "zh-tw": "進化的跡象",
                ja: "しんかのきざし",
                ko: "진화의징조"
            },
            cost: ["Fighting"],
            effect: {
                en: "Put a random card that evolves from Rockruff from your deck into your hand.",
                "fr": "Mettez une carte aléatoire qui évolue depuis Rockruff depuis votre deck dans votre main.",
                "es": "Pon en tu mano una carta aleatoria que evolucione de Rockruff de tu mazo.",
                "it": "Metti nella tua mano una carta casuale che si evolve da Rockruff dal tuo mazzo.",
                "de": "Nimm eine zufällige Karte, die sich aus Rockruff entwickelt, aus deinem Deck auf deine Hand.",
                "pt-br": "Coloque em sua mão uma carta aleatória que evolui de Rockruff do seu deck.",
                "zh-tw": "從你的牌組中隨機放置一張由洛克拉夫進化而來的卡牌置入你的手牌。",
                ja: "「イワンコ」から進化するカードを、自分の山札からランダムに1枚、手札に加える。",
                ko: "「암멍이」에서 진화하는 카드를 자신의 덱에서 랜덤으로 1장 패로 가져온다."
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1,
	boosters: [
		"mega-gyarados"
	]
};
export default card;
