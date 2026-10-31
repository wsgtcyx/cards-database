import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/287",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/287",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/287",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/287",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/287",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/287",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/287",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/287",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/287"
    },
    name: {
        en: "Bellsprout",
        "fr": "Chétiflor",
        "es": "Bellsprout",
        "it": "Bellsprout",
        "de": "Knofensa",
        "pt-br": "Bellsprout",
        "zh-tw": "喇叭芽",
        ja: "マダツボミ",
        ko: "모다피"
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    description: {
        en: "Even though its body is extremely skinny, it is\nblindingly fast when catching its prey.",
        "fr": "Même si son corps est extrêmement maigre, il est\nincroyablement rapide pour attraper sa proie.",
        "es": "Aunque su cuerpo es extremadamente delgado, es\nincreíblemente rápido al atrapar a su presa.",
        "it": "Anche se il suo corpo è estremamente magro, lo è\nincredibilmente veloce nel catturare la preda.",
        "de": "Obwohl sein Körper extrem dünn ist, ist er es\nunglaublich schnell, wenn er seine Beute fängt.",
        "pt-br": "Mesmo que seu corpo seja extremamente magro, ele é\nincrivelmente rápido ao capturar sua presa.",
        "zh-tw": "儘管它的身體極其瘦弱，\n捕捉獵物時速度驚人。",
        ja: "ひょろっとした 体つきだが 獲物を 捕らえるときの 動きは 目にも とまらないほど 素早い。",
        ko: "홀쭉한 체격이지만\n먹이를 잡을 때의 움직임은\n눈에 보이지 않을 정도로 빠르다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Vine Whip",
                "fr": "Fouet de vigne",
                "es": "Látigo de vid",
                "it": "Frusta di vite",
                "de": "Weinpeitsche",
                "pt-br": "Chicote de videira",
                "zh-tw": "藤鞭",
                ja: "つるのムチ",
                ko: "덩굴채찍"
            },
            damage: 20,
            cost: ["Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
	boosters: [
		"mega-altaria"
	]
};
export default card;
