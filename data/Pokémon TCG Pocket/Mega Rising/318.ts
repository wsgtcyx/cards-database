import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/318",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/318",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/318",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/318",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/318",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/318",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/318",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/318",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/318"
    },
    name: {
        en: "Incineroar ex",
        "fr": "Félinferno-ex",
        "es": "Incineroar ex",
        "it": "Incineroar-ex",
        "de": "Fuegro-ex",
        "pt-br": "Incineroar ex",
        "zh-tw": "熾焰咆哮虎ex",
        ja: "ガオガエンex",
        ko: "어흥염 ex",
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 180,
    types: ["Fire"],
    evolveFrom: {
        en: "Torracat",
        "fr": "Matoufeu",
        "es": "Torracat",
        "it": "Torracat",
        "de": "Miezunder",
        "pt-br": "Torracat",
        "zh-tw": "炎熱喵",
        ja: "ニャヒート",
        ko: "냐오히트",
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Fire Fang",
                "fr": "Croc de Feu",
                "es": "colmillo de fuego",
                "it": "Zanna di fuoco",
                "de": "Feuerzahn",
                "pt-br": "Presa de Fogo",
                "zh-tw": "火牙",
                ja: "ほのおのキバ",
                ko: "불꽃엄니"
            },
            damage: 30,
            cost: ["Fire"],
            effect: {
                en: "Your opponent's Active Pokémon is now Burned.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Brûlé.",
                "es": "El Pokémon Activo de tu rival ahora está Quemado.",
                "it": "Il Pokémon attivo del tuo avversario è ora bruciato.",
                "de": "Das aktive Pokémon deines Gegners ist jetzt verbrannt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Queimado.",
                "zh-tw": "你對手的活躍神奇寶貝現在被燒毀了。",
                ja: "相手のバトルポケモンをやけどにする。",
                ko: "상대의 배틀 포켓몬을 화상으로 만든다."
            }
        }, {
            name: {
                en: "Scar-Charged Smash",
                "fr": "Smash chargé de cicatrices",
                "es": "Smash cargado de cicatrices",
                "it": "Smash carico di cicatrici",
                "de": "Narbengeladener Schlag",
                "pt-br": "Smash carregado de cicatriz",
                "zh-tw": "傷痕重擊",
                ja: "スカースマッシュ",
                ko: "스카스매시"
            },
            damage: "80+",
            cost: ["Fire", "Fire", "Colorless"],
            effect: {
                en: "If this Pokémon has damage on it, this attack does 60 more damage.",
                "fr": "Si ce Pokémon subit des dégâts, cette attaque inflige 60 dégâts supplémentaires.",
                "es": "Si este Pokémon tiene daño, este ataque hace 60 puntos de daño más.",
                "it": "Se questo Pokémon ha dei danni su di sé, questo attacco infligge 60 danni in più.",
                "de": "Wenn dieses Pokémon Schaden hat, fügt dieser Angriff 60 weitere Schadenspunkte zu.",
                "pt-br": "Se este Pokémon sofrer dano, este ataque causará 60 de dano a mais.",
                "zh-tw": "如果這只神奇寶貝受到傷害，則這次攻擊會造成額外 60 點傷害。",
                ja: "このポケモンがダメージを受けているなら、60ダメージ追加。",
                ko: "이 포켓몬이 데미지를 받고 있다면 60데미지를 추가한다."
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2,
	boosters: [
		"mega-gyarados"
	]
};
export default card;
