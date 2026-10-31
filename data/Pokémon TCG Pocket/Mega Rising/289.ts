import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/289",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/289",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/289",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/289",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/289",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/289",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/289",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/289",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/289"
    },
    name: {
        en: "Victreebel",
        "fr": "Empiflor",
        "es": "Victreebel",
        "it": "Victreebel",
        "de": "Sarzenia",
        "pt-br": "Victreebel",
        "zh-tw": "大食花",
        ja: "ウツボット",
        ko: "우츠보트",
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 140,
    types: ["Grass"],
    evolveFrom: {
        en: "Weepinbell",
        "fr": "Boustiflor",
        "es": "Weepinbell",
        "it": "Weepinbell",
        "de": "Ultrigaria",
        "pt-br": "Weepinbell",
        "zh-tw": "口呆花",
        ja: "ウツドン",
        ko: "우츠동",
    },
    description: {
        en: "Said to live in huge colonies deep in jungles,\nalthough no one has ever returned from there.",
        "fr": "On dit qu'il vit dans d'immenses colonies au fond des jungles,\nmême si personne n'en est jamais revenu.",
        "es": "Se dice que viven en enormes colonias en lo profundo de las selvas,\naunque nadie ha regresado nunca de allí.",
        "it": "Si dice che viva in enormi colonie nel profondo della giungla,\nanche se nessuno è mai tornato da lì.",
        "de": "Sie sollen in riesigen Kolonien tief im Dschungel leben.\nobwohl noch nie jemand von dort zurückgekehrt ist.",
        "pt-br": "Dizem que vivem em enormes colônias nas profundezas das selvas,\nembora ninguém jamais tenha retornado de lá.",
        "zh-tw": "據說生活在叢林深處的巨大聚居地，\n儘管沒有人從那裡回來。",
        ja: "ジャングルの 奥地に ウツボット ばかり いる 地帯が あって 行ったら ２度と 帰ってこれない。",
        ko: "정글의 안쪽에 우츠보트만\n있는 지대가 있어서\n한 번 가면 두 번 다시 돌아올 수 없다."
    },
    stage: "Stage2",
    abilities: [{
            type: "Ability",
            name: {
                en: "Fragrance Trap",
                "fr": "Piège à parfum",
                "es": "Trampa de fragancia",
                "it": "Trappola del profumo",
                "de": "Duftfalle",
                "pt-br": "Armadilha de fragrância",
                "zh-tw": "香味陷阱",
                ja: "かおりのわな",
                ko: "향기의 덫"
            },
            effect: {
                en: "If this Pokémon is in the Active Spot, once during your turn, you may switch in 1 of your opponent's Benched Basic Pokémon to the Active Spot.",
                "fr": "Si ce Pokémon est dans le point actif, une fois pendant votre tour, vous pouvez transférer 1 des Pokémon de base du banc de votre adversaire vers le point actif.",
                "es": "Si este Pokémon está en el Punto Activo, una vez durante tu turno, puedes cambiar 1 de los Pokémon Básicos en Banca de tu oponente al Punto Activo.",
                "it": "Se questo Pokémon è in posizione attiva, una volta durante il tuo turno, puoi mettere in posizione attiva 1 dei Pokémon Base nella panchina del tuo avversario.",
                "de": "Wenn sich dieses Pokémon in der aktiven Position befindet, kannst du einmal während deines Zuges 1 Basis-Pokémon auf der Bank deines Gegners in die aktive Position eintauschen.",
                "pt-br": "Se este Pokémon estiver no Ponto Ativo, uma vez durante o seu turno, você poderá trocar 1 dos Pokémon Básicos do Banco do seu oponente para o Ponto Ativo.",
                "zh-tw": "如果這只神奇寶貝位於活躍位置，則在你的回合中，你可以將對手的 1 只後備基本神奇寶貝切換到活躍位置。",
                ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。相手のベンチのたねポケモンを1匹選び、バトルポケモンと入れ替える。",
                ko: "이 포켓몬이 배틀필드에 있다면 자신의 차례에 1번 사용할 수 있다. 상대 벤치의 기본 포켓몬을 1마리 선택해서 배틀 포켓몬과 교체한다."
            }
        }],
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
            damage: 60,
            cost: ["Grass", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2,
	boosters: [
		"mega-altaria"
	]
};
export default card;
