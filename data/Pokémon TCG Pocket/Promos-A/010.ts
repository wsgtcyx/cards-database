import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/010/5b613ca17dac65ec",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/010/5b613ca17dac65ec",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/010/5b613ca17dac65ec",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/010/5b613ca17dac65ec",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/010/5b613ca17dac65ec",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/010/5b613ca17dac65ec",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/010/5b613ca17dac65ec",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/010/5b613ca17dac65ec",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/010/5b613ca17dac65ec"
    },
    name: {
        en: "Mewtwo",
        fr: "Mewtwo",
        es: "Mewtwo",
        it: "Mewtwo",
        de: "Mewtu",
        'pt-br': "Mewtwo",
        ja: "ミュウツー",
        ko: "뮤츠",
        "zh-tw": "超夢"
    },
    illustrator: "Krgc",
    rarity: "One Star",
    category: "Pokemon",
    types: ["Psychic"],
    stage: "Basic",
    attacks: [{
            name: {
                en: "Power Blast",
                fr: "Violente Déflagration",
                es: "Estallido Vigoroso",
                it: "Forzacolpo",
                de: "Powerschuss",
                'pt-br': "Explosão Poderosa",
                ja: "パワーブラスト",
                ko: "파워블라스트",
                "zh-tw": "力量爆破"
            },
            cost: ["Psychic", "Psychic", "Colorless", "Colorless"],
            damage: 120,
            effect: {
                en: "Discard 2 {P} Energy from this Pokémon.",
                fr: "Défaussez 2 Énergies {P} de ce Pokémon.",
                es: "Descarta 2 Energías {P} de este Pokémon.",
                it: "Rimuovi 2 Energie {P} da questo Pokémon.",
                de: "Lege 2 {P}-Energien von diesem Pokémon ab.",
                'pt-br': "Descarte 2 Energias {P} deste Pokémon.",
                ja: "このポケモンから{P}エネルギーを2個トラッシュ。",
                ko: "이 포켓몬에서 {P}에너지를 2개 트래쉬한다.",
                "zh-tw": "將這隻寶可夢身上的2個{P}能量丟棄。"
            }
        }],
    hp: 120,
    description: {
        en: "It was created by a scientist after years of horrific\ngene-splicing and DNA-engineering experiments.",
        fr: "Il est le fruit de nombreuses expériences\ngénétiques horribles et malsaines.",
        es: "Fue creado por un científico tras años de\nhorribles experimentos de ingeniería genética.",
        it: "Creato da uno scienziato dopo anni di\norribili esperimenti di ingegneria genetica.",
        de: "Dieses Pokémon ist das Resultat eines jahrelangen\nund skrupellosen Experimentes.",
        'pt-br': "Foi criado por cientistas através de anos\nde experimentos genéticos terríveis com\nmanipulação de DNA.",
        ja: "１人の 科学者が 何年も 恐ろしい 遺伝子 研究を 続けた 結果 誕生した。",
        ko: "한 과학자가 몇 년에 걸쳐\n무서운 유전자의 연구를\n계속한 결과 탄생했다.",
        "zh-tw": "牠是某位科學家長年累月持續進行可怕的基因研究所誕生的成果。"
    },
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 2,
    boosters: []
};
export default card;
