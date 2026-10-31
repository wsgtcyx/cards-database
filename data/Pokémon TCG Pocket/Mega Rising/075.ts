import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/075",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/075",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/075",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/075",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/075",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/075",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/075",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/075",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/075"
    },
    name: {
        en: "Avalugg",
        "fr": "Séracrawl",
        "es": "Avalugg",
        "it": "Avalugg",
        "de": "Arktilas",
        "pt-br": "Avalugg",
        "zh-tw": "冰岩怪",
        ja: "クレベース",
        ko: "크레베이스",
    },
    illustrator: "Kouki Saitou",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Water"],
    evolveFrom: {
        en: "Bergmite",
        "fr": "Grelaçon",
        "es": "Bergmite",
        "it": "Bergmite",
        "de": "Arktip",
        "pt-br": "Bergmite",
        "zh-tw": "冰寶",
        ja: "カチコール",
        ko: "꽁어름",
    },
    description: {
        en: "This Pokémon uses its massive icy body to flatten\nanything that gets in its way. When it's floating\nout on the ocean, it looks exactly like drift ice.",
        "fr": "Ce Pokémon utilise son énorme corps glacé pour s'aplatir\ntout ce qui lui fait obstacle. Quand il flotte\nsur l'océan, cela ressemble exactement à de la glace dérivante.",
        "es": "Este Pokémon usa su enorme cuerpo helado para aplanarse.\ncualquier cosa que se interponga en su camino. cuando esta flotando\nEn el océano, parece exactamente hielo a la deriva.",
        "it": "Questo Pokémon usa il suo enorme corpo ghiacciato per appiattirsi\ntutto ciò che si intromette. Quando galleggia\nsull'oceano, sembra esattamente ghiaccio alla deriva.",
        "de": "Dieses Pokémon nutzt seinen massiven, eisigen Körper, um es flach zu machen\nalles, was ihm in die Quere kommt. Wenn es schwimmt\nDraußen auf dem Meer sieht es genauso aus wie Treibeis.",
        "pt-br": "Este Pokémon usa seu enorme corpo gelado para achatar\nqualquer coisa que fique no seu caminho. Quando está flutuando\nno oceano, parece exatamente com gelo flutuante.",
        "zh-tw": "這只神奇寶貝利用其巨大的冰冷身體來壓平\n任何妨礙它的東西。當它漂浮的時候\n在海洋上，它看起來就像流冰一樣。",
        ja: "氷の 巨体で 邪魔者は すべて 圧し潰す。 海に 浮かぶ 姿は 流氷 そっくり。",
        ko: "얼음으로 된 거대한 몸으로\n방해되는 것은 모조리 뭉개 버린다.\n바다에 떠 있는 모습은 유빙과 똑 닮았다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Frost Barrier",
                "fr": "Barrière de gel",
                "es": "Barrera de heladas",
                "it": "Barriera antigelo",
                "de": "Frostbarriere",
                "pt-br": "Barreira de Gelo",
                "zh-tw": "冰霜屏障",
                ja: "フロストバリア",
                ko: "프로스트 배리어"
            },
            damage: 70,
            cost: ["Water", "Water", "Colorless"],
            effect: {
                en: "During your opponent's next turn, this Pokémon takes −20 damage from attacks.",
                "fr": "Lors du prochain tour de votre adversaire, ce Pokémon subit -20 dégâts des attaques.",
                "es": "Durante el próximo turno de tu rival, este Pokémon recibe -20 de daño por ataques.",
                "it": "Durante il prossimo turno del tuo avversario, questo Pokémon subisce -20 danni dagli attacchi.",
                "de": "Während des nächsten Zuges deines Gegners erleidet dieses Pokémon −20 Schadenspunkte durch Angriffe.",
                "pt-br": "Durante o próximo turno do seu oponente, este Pokémon sofrerá -20 de dano de ataques.",
                "zh-tw": "在對手的下一個回合中，這只神奇寶貝受到的攻擊傷害為-20。",
                ja: "次の相手の番、このポケモンが受けるワザのダメージを-20する。",
                ko: "상대의 다음 차례에 이 포켓몬이 받는 기술의 데미지를 -20한다."
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 4,
	boosters: [
		"mega-gyarados"
	]
};
export default card;
