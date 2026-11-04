import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/047/f01fe3b20a34cefd",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/047/f01fe3b20a34cefd",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/047/f01fe3b20a34cefd",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/047/f01fe3b20a34cefd",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/047/f01fe3b20a34cefd",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/047/f01fe3b20a34cefd",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/047/f01fe3b20a34cefd",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/047/f01fe3b20a34cefd",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/047/f01fe3b20a34cefd"
    },
    name: {
        en: "Staraptor",
        fr: "Étouraptor",
        es: "Staraptor",
        it: "Staraptor",
        de: "Staraptor",
        ja: "ムクホーク",
        ko: "찌르호크",
        'pt-br': "Staraptor",
        "zh-tw": "姆克鷹",
    },
    illustrator: "Hasuno",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Colorless"],
    evolveFrom: {
        en: "Staravia",
        "fr": "Étourvol",
        "es": "Staravia",
        "it": "Staravia",
        "de": "Staravia",
        "pt-br": "Staravia",
        "zh-tw": "姆克鳥",
        ja: "ムクバード",
        ko: "찌르버드"
    },
    description: {
        en: "When Staravia evolve into Staraptor, they leave\nthe flock to live alone. They have sturdy wings.",
        fr: "Quand Étourvol évolue en Étouraptor, il quitte son groupe pour vivre seul. Ses ailes sont très souples et puissantes.",
        es: "Al evolucionar a Staraptor, deja su bandada y\npasa a vivir en soledad. Sus alas son inmensas.",
        it: "Non appena si evolve, lascia lo stormo e affronta la\nvita da solo. Le sue ali sono estremamente robuste.",
        de: "Entwickelt sich Staravia zu Staraptor, verlässt es\nden Schwarm und lebt allein. Die Spannweite\nseiner Flügel ist gigantisch.",
        ja: "ムクホークに なると 群れから 離れて １匹で 生きていく。 強靭な 翼を 持っている。",
        ko: "찌르호크가 되면 무리에서\n떨어져 혼자서 살아간다.\n강인한 날개를 가지고 있다.",
        'pt-br': "Quando um Staravia evolui para Staraptor,\ndeixa o bando para viver sozinho. Têm asas robustas.",
        "zh-tw": "變成姆克鷹後，就會脫離群體獨自生活。擁有強韌的翅膀。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Wing Attack",
                fr: "Cru-Ailes",
                es: "Ataque Ala",
                it: "Attacco d'Ala",
                de: "Flügelschlag",
                ja: "つばさでうつ",
                ko: "날개치기",
                'pt-br': "Ataque de Asa",
                "zh-tw": "翅膀攻擊"
            },
            damage: 90,
            cost: ["Colorless", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
    abilities: [{
            type: "Ability",
            name: {
                en: "Defensive Whirlwind",
                fr: "Cyclone Défensif",
                es: "Ciclón Defensivo",
                it: "Difesa Turbinante",
                de: "Schützender Wirbelwind",
                ja: "せんぷうガード",
                ko: "선풍 가드",
                'pt-br': "Turbilhão Defensivo",
                "zh-tw": "防禦旋風"
            },
            effect: {
                en: "This Pokémon takes −30 damage from attacks from {F} Pokémon.",
                fr: "Ce Pokémon subit − 30 dégâts provenant des attaques des Pokémon {F}.",
                es: "Los ataques de Pokémon {F} hacen -30 puntos de daño a este Pokémon.",
                it: "Questo Pokémon subisce -30 danni dagli attacchi dei Pokémon {F}.",
                de: "Diesem Pokémon werden durch Attacken von {F}-Pokémon − 30 Schadenspunkte zugefügt.",
                ja: "このポケモンが{F}ポケモンから受けるワザのダメージを-30する。",
                ko: "이 포켓몬이 {F}포켓몬으로부터 받는 기술의 데미지를 -30한다.",
                'pt-br': "Este Pokémon recebe −30 pontos de dano de ataques de Pokémon {F}.",
                "zh-tw": "這隻寶可夢受到{F}寶可夢招式的傷害-30點。"
            }
        }],
    boosters: ["vol5"]
};
export default card;
