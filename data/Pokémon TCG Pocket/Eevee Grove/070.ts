import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3b/070",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3b/070",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3b/070",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3b/070",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3b/070",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3b/070",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3b/070",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A3b/070",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A3b/070"
    },
    name: {
        en: "Leafeon",
        "fr": "Phyllali",
        "es": "Leafeon",
        "it": "Leafeon",
        "de": "Folipurba",
        "pt-br": "Leafeon",
        "zh-tw": "葉伊布",
        ja: "リーフィア",
        ko: "리피아",
    },
    illustrator: "Ryota Murayama",
    rarity: "One Star",
    category: "Pokemon",
    hp: 90,
    types: ["Grass"],
    evolveFrom: {
        en: "Eevee",
        "fr": "Évoli",
        "es": "Eevee",
        "it": "Eevee",
        "de": "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布",
        ja: "イーブイ",
        ko: "이브이"
    },
    description: {
        en: "When you see Leafeon asleep in a patch of\nsunshine, you'll know it is using photosynthesis\nto produce clean air.",
        "fr": "Quand tu vois Leafeon endormi dans un coin de\nsoleil, vous saurez qu'il utilise la photosynthèse\npour produire de l’air pur.",
        "es": "Cuando ves a Leafeon dormido en un lugar de\nsol, sabrás que está usando la fotosíntesis\npara producir aire limpio.",
        "it": "Quando vedi Leafeon addormentato in una zona di\nsole, saprai che sta usando la fotosintesi\nper produrre aria pulita.",
        "de": "Wenn Sie Leafeon in einem Stück schlafen sehen\nSonnenschein, Sie werden wissen, dass es Photosynthese nutzt\num saubere Luft zu erzeugen.",
        "pt-br": "Quando você vê Leafeon dormindo em um pedaço de\nluz do sol, você saberá que está usando a fotossíntese\npara produzir ar limpo.",
        "zh-tw": "當你看到Leafeon在一片草地上睡著時\n陽光，你就會知道它正在利用光合作用\n產生潔淨的空氣。",
        ja: "晴れた 日に 寝ている リーフィアは 光合成を して きれいな 空気を 作り出しているのだ。",
        ko: "맑은 날에 잠든 리피아는\n광합성을 해서\n깨끗한 공기를 만들어 낸다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Leaf Blast",
                "fr": "Explosion de feuilles",
                "es": "Explosión de hojas",
                "it": "Esplosione di foglie",
                "de": "Blattexplosion",
                "pt-br": "Explosão de folhas",
                "zh-tw": "葉瘟",
                ja: "リーフブラスト",
                ko: "리프블라스트"
            },
            damage: "10+",
            cost: ["Colorless"],
            effect: {
                en: "This attack does 20 more damage for each {G} Energy attached to this Pokémon.",
                "fr": "Cette attaque inflige 20 dégâts supplémentaires pour chaque {G} Énergie attachée à ce Pokémon.",
                "es": "Este ataque hace 20 daños más por cada {G} Energía unida a este Pokémon.",
                "it": "Questo attacco infligge 20 danni in più per ogni Energia {G} assegnata a questo Pokémon.",
                "de": "Dieser Angriff fügt 20 weitere Schadenspunkte für jede {G}-Energie zu, die an dieses Pokémon angelegt ist.",
                "pt-br": "Este ataque causa 20 pontos de dano a mais para cada Energia {G} ligada a este Pokémon.",
                "zh-tw": "該神奇寶貝每附加一個 {G} 能量，該攻擊就會造成 20 點額外傷害。",
                ja: "このポケモンの{G}エネルギーの数×20ダメージ追加。",
                ko: "이 포켓몬의 {G}에너지의 개수 × 20데미지를 추가한다."
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
