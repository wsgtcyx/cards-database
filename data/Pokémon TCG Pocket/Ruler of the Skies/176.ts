import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/176",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/176",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/176",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/176",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/176",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/176",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/176",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4/176",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4/176"
    },
    name: {
        en: "Noivern",
        fr: "Bruyverne",
        es: "Noivern",
        it: "Noivern",
        de: "UHaFnir",
        "pt-br": "Noivern",
        "zh-tw": "音波龍",
        ko: "음번",
        ja: "オンバーン"
    },
    illustrator: "aky CG Works",
    rarity: "One Star",
    category: "Pokemon",
    hp: 100,
    types: ["Dragon"],
    dexId: [715],
    evolveFrom: {
        en: "Noibat",
        fr: "Sonistrelle",
        es: "Noibat",
        it: "Noibat",
        de: "eF-eM",
        "pt-br": "Noibat",
        "zh-tw": "嗡蝠",
        ko: "음뱃",
        ja: "オンバット"
    },
    stage: "Stage1",
    description: {
        en: "In the dark, even Hydreigon are terrified of this Pokémon. But in the light, Noivern is the one that avoids battle.",
        fr: "En pleine lumière, il fuit tout affrontement, mais quand l'obscurité règne, même Trioxhydre le craint.",
        "es": "Cuando reina la oscuridad, hace temblar incluso a los Hydreigon. En cambio, evita luchar a plena luz.",
        it: "Quando regna l'oscurità, persino gli Hydreigon hanno il terrore di questo Pokémon. Quando è chiaro, invece, rifugge le lotte.",
        "de": "In der Dunkelheit wird es sogar von Trikephalo gefürchtet. Tagsüber geht es Kämpfen jedoch aus dem Weg.",
        "pt-br": "Na escuridão, até Hydreigon temem este Pokémon. No entanto, à luz do dia, é Noivern que evita o confronto.",
        "zh-tw": "如果是在黑暗中，音波龍是\n連三首惡龍都害怕的存在。\n在天色未暗前會避開戰鬥。",
        ja: "暗闇の 中では サザンドラすら 恐れる 存在。 明るいうちは オンバーンが 戦いを 避ける。",
        ko: "어둠 속에서는 삼삼드래조차\n두려워하는 존재다.\n밝은 곳에서는 음번이 싸움을 피한다."
    },
    attacks: [
        {
            cost: ["Psychic", "Darkness", "Darkness"],
            name: {
                en: "Draco Meteor",
                fr: "Draco-Météore",
                es: "Cometa Draco",
                it: "Dragobolide",
                de: "Draco Meteor",
                "pt-br": "Meteoro do Dragão",
                "zh-tw": "流星群",
                ja: "りゅうせいぐん",
                ko: "용성군"
            },
            effect: {
                en: "1 of your opponent's Pokémon is chosen at random 3 times. For each time a Pokémon was chosen, do 60 damage to it.",
                fr: "Un des Pokémon de votre adversaire est choisi au hasard 3 fois. Pour chaque fois où un Pokémon est choisi, il subit 60 dégâts.",
                es: "Se elige 3 veces a un Pokémon aleatorio de tu rival. Haz a cada uno 60 puntos de daño por cada vez que haya resultado elegido.",
                "pt-br": "3 vezes, um Pokémon do oponente é escolhido aleatoriamente. Para cada vez que um Pokémon for escolhido, cause 60 pontos de dano a ele.",
                "zh-tw": "對手的寶可夢會隨機被選擇3次,被選擇的所有寶可夢受到被選擇的次數×60點傷害。",
                "it": "Un Pokémon del tuo avversario viene scelto a caso 3 volte. Per ogni volta che un Pokémon è stato scelto, infliggigli 60 danni.",
                "de": "1 Pokémon deines Gegners wird 3-mal zufällig ausgewählt. Füge ihm jedes Mal, wenn es ausgewählt wurde, 60 Schadenspunkte zu.",
                ja: "相手のポケモンがランダムに3回選ばれ、選ばれたポケモン全員に、選ばれた回数×60ダメージ。",
                ko: "상대의 포켓몬이 랜덤으로 3번 선택되어 선택된 포켓몬 전원에게 선택된 횟수 × 60데미지를 준다."
            }
        }
    ],
    retreat: 1
};
export default card;
