import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/179",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/179",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/179",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/179",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/179",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/179",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/179",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/179",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/179"
    },
    name: {
        en: "Goodra",
        "fr": "Muplodocus",
        "es": "Goodra",
        "it": "Goodra",
        "de": "Viscogon",
        "pt-br": "Goodra",
        "zh-tw": "黏美龍",
        ja: "ヌメルゴン",
        ko: "미끄래곤",
    },
    illustrator: "Nagomi Nijo",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Dragon"],
    evolveFrom: {
        en: "Sliggoo",
        "fr": "Colimucus",
        "es": "Sliggoo",
        "it": "Sliggoo",
        "de": "Viscargot",
        "pt-br": "Sliggoo",
        "zh-tw": "黏美兒",
        ja: "ヌメイル",
        ko: "미끄네일",
    },
    description: {
        en: "This Pokémon is uncontrollable when enraged.\nIt rampages on and on, lashing its tail with\nenough power to send a dump truck flying.",
        "fr": "Ce Pokémon est incontrôlable lorsqu'il est enragé.\nIl se déchaîne encore et encore, fouettant sa queue avec\nassez de puissance pour faire voler un camion-benne.",
        "es": "Este Pokémon es incontrolable cuando está enfurecido.\nSe enfurece una y otra vez, azotando su cola con\nsuficiente potencia para hacer volar un camión volquete.",
        "it": "Questo Pokémon è incontrollabile quando è arrabbiato.\nSi scatena continuamente, sferzando la coda\npotenza sufficiente per far volare un autocarro con cassone ribaltabile.",
        "de": "Dieses Pokémon ist unkontrollierbar, wenn es wütend ist.\nEs tobt immer weiter und peitscht mit dem Schwanz\ngenug Leistung, um einen Muldenkipper in die Luft zu jagen.",
        "pt-br": "Este Pokémon é incontrolável quando enfurecido.\nEle ataca sem parar, chicoteando sua cauda com\nenergia suficiente para fazer um caminhão basculante voar.",
        "zh-tw": "該寶可夢在憤怒時無法控制。\n它不斷地狂暴，用尾巴鞭打著\n足夠的動力讓自卸卡車飛起來。",
        ja: "怒りだすと 手がつけられなくなる。 ダンプカーを 跳ね飛ばす 威力の 尻尾 攻撃で 暴れまくる。",
        ko: "화를 내면 손을 쓸 수 없게 된다.\n덤프트럭을 날려 버릴 정도의 위력을 가진\n꼬리로 공격하며 마구 날뛴다."
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Spiral Drain",
                "fr": "Drain en spirale",
                "es": "Drenaje en espiral",
                "it": "Scarico a spirale",
                "de": "Spiralablauf",
                "pt-br": "Dreno Espiral",
                "zh-tw": "螺旋排水管",
                ja: "スパイラルドレイン",
                ko: "스파이럴 드레인"
            },
            damage: 100,
            cost: ["Water", "Psychic", "Colorless"],
            effect: {
                en: "Heal 40 damage from this Pokémon.",
                "fr": "Soignez 40 dégâts de ce Pokémon.",
                "es": "Cura 40 puntos de daño de este Pokémon.",
                "it": "Cura questo Pokémon da 40 danni.",
                "de": "Heile 40 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Cure 40 de dano deste Pokémon.",
                "zh-tw": "治療該神奇寶貝造成的 40 點傷害。",
                ja: "このポケモンのHPを40回復。",
                ko: "이 포켓몬의 HP를 40회복."
            }
        }],
    retreat: 3,
	boosters: [
		"mega-altaria"
	]
};
export default card;
