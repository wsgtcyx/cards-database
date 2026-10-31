import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/162",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/162",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/162",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/162",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/162",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/162",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/162",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/162",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/162"
    },
    name: {
        en: "Toxapex",
        "fr": "Prédastérie",
        "es": "Toxapex",
        "it": "Toxapex",
        "de": "Aggrostella",
        "pt-br": "Toxapex",
        "zh-tw": "超壞星",
        ja: "ドヒドイデ",
        ko: "더시마사리",
    },
    illustrator: "Ligton",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Darkness"],
    evolveFrom: {
        en: "Mareanie",
        "fr": "Vorastérie",
        "es": "Mareanie",
        "it": "Mareanie",
        "de": "Garstella",
        "pt-br": "Mareanie",
        "zh-tw": "好壞星",
        ja: "ヒドイデ",
        ko: "시마사리",
    },
    description: {
        en: "Toxapex gets into fierce battles with Bruxish over\nareas where warm ocean currents flow, but the\nodds are always against it.",
        "fr": "Toxapex se lance dans des batailles féroces avec Bruxish\nzones où circulent des courants océaniques chauds, mais le\nles chances sont toujours contre.",
        "es": "Toxapex se involucra en feroces batallas con Bruxish\náreas donde fluyen corrientes oceánicas cálidas, pero el\nlas probabilidades siempre están en contra.",
        "it": "Toxapex affronta feroci battaglie con Bruxish\naree dove scorrono le calde correnti oceaniche, ma il\nle probabilità sono sempre contro.",
        "de": "Toxapex liefert sich heftige Kämpfe mit Bruxish\nGebiete, in denen warme Meeresströmungen fließen, aber die\nDie Chancen stehen immer dagegen.",
        "pt-br": "Toxapex entra em batalhas ferozes com Bruxish por causa\náreas onde fluem correntes oceânicas quentes, mas o\nas probabilidades estão sempre contra ele.",
        "zh-tw": "Toxapex 與 Bruxish 展開激烈戰鬥\n溫暖洋流流動的地區，但\n情況總是不利的。",
        ja: "温かな 海流が 流れ込む 場所を 巡って ハギギシリと 激しく 争うが 分が悪い。",
        ko: "따뜻한 해류가 흐르는 장소를 떠돌며\n치갈기와 격렬하게 싸우지만\n이쪽이 불리하다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Venoshock",
                "fr": "Venochoc",
                "es": "Venoshock",
                "it": "Venoshock",
                "de": "Venoshock",
                "pt-br": "Venoshock",
                "zh-tw": "靜脈休克",
                ja: "ベノムショック",
                ko: "베놈쇼크"
            },
            damage: "50+",
            cost: ["Darkness", "Darkness"],
            effect: {
                en: "If your opponent's Active Pokémon is Poisoned, this attack does 70 more damage.",
                "fr": "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 70 dégâts supplémentaires.",
                "es": "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 70 puntos de daño más.",
                "it": "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 70 danni in più.",
                "de": "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt dieser Angriff 70 weitere Schadenspunkte zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 70 de dano a mais.",
                "zh-tw": "如果對手的活躍寶可夢中毒，則這次攻擊造成的傷害增加 70 點。",
                ja: "相手のバトルポケモンがどくなら、70ダメージ追加。",
                ko: "상대의 배틀 포켓몬이 독이라면 70데미지를 추가한다."
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2,
	boosters: [
		"mega-altaria",
		"mega-blaziken",
		"mega-gyarados"
	]
};
export default card;
