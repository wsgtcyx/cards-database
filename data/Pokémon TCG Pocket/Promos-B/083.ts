import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/083/4a5a659c1ee28a95",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/083/4a5a659c1ee28a95",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/083/4a5a659c1ee28a95",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/083/4a5a659c1ee28a95",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/083/4a5a659c1ee28a95",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/083/4a5a659c1ee28a95",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/083/4a5a659c1ee28a95",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/083/4a5a659c1ee28a95",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/083/4a5a659c1ee28a95"
    },
    name: { en: "Noivern", fr: "Bruyverne", es: "Noivern", it: "Noivern", de: "UHaFnir", "pt-br": "Noivern", "zh-tw": "音波龍", ko: "음번", ja: "オンバーン" },
    illustrator: "Shin Nagasawa",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Dragon"],
    dexId: [715],
    evolveFrom: { en: "Noibat", fr: "Sonistrelle", es: "Noibat", it: "Noibat", de: "eF-eM", "pt-br": "Noibat", "zh-tw": "嗡蝠", ko: "음뱃", ja: "オンバット" },
    stage: "Stage1",
    attacks: [{
        cost: ["Psychic", "Darkness", "Darkness"],
        name: { en: "Draco Meteor", fr: "Draco-Météore", es: "Cometa Draco", it: "Dragobolide", de: "Draco Meteor", "pt-br": "Meteoro do Dragão", "zh-tw": "流星群", ja: "りゅうせいぐん", ko: "용성군" },
        effect: {
            en: "1 of your opponent's Pokémon is chosen at random 3 times. For each time a Pokémon was chosen, do 60 damage to it.",
            fr: "Un des Pokémon de votre adversaire est choisi au hasard 3 fois. Pour chaque fois où un Pokémon est choisi, il subit 60 dégâts.",
            es: "Se elige 3 veces a un Pokémon aleatorio de tu rival. Haz a cada uno 60 puntos de daño por cada vez que haya resultado elegido.",
            it: "Per 3 volte, un Pokémon avversario viene scelto a caso. Ogni volta che un Pokémon viene scelto in questo modo, subisce 60 danni.",
            de: "3 Mal wird zufällig 1 Pokémon des Gegners ausgewählt. Füge jedes Mal, wenn ein Pokémon ausgewählt wird, diesem Pokémon 60 Schadenspunkte zu.",
            "pt-br": "3 vezes, um Pokémon do oponente é escolhido aleatoriamente. Para cada vez que um Pokémon for escolhido, cause 60 pontos de dano a ele.",
            "zh-tw": "對手的寶可夢會隨機被選擇3次，被選擇的所有寶可夢受到被選擇的次數×60點傷害。",
            ja: "相手のポケモンがランダムに3回選ばれ、選ばれたポケモン全員に、選ばれた回数×60ダメージ。",
            ko: "상대의 포켓몬이 랜덤으로 3번 선택되어 선택된 포켓몬 전원에게 선택된 횟수 × 60데미지를 준다."
        }
    }],
    retreat: 1,
    boosters: ["vol11"]
};

export default card;
