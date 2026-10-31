import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/020",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/020",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/020",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/020",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/020",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/020",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/020",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B3/020",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B3/020"
    },
    name: {
        en: "Flapple",
        fr: "Pomdrapi",
        es: "Flapple",
        it: "Flapple",
        de: "Drapfel",
        "pt-br": "Flapple",
        "zh-tw": "蘋裹龍",
        ko: "애프룡",
        ja: "アップリュー"
    },
    illustrator: "Shin Nagasawa",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Grass"],
    dexId: [841],
    evolveFrom: {
        en: "Applin",
        fr: "Verpom",
        es: "Applin",
        it: "Applin",
        de: "Knapfel",
        "pt-br": "Applin",
        "zh-tw": "啃果蟲",
        ko: "과사삭벌레",
        ja: "カジッチュ"
    },
    stage: "Stage1",
    description: {
        en: "It uses its own body fluid to repair its apple. Strong Flapple that have won many battles have apples that are clay colored all over.",
        fr: "Il utilise son propre fluide corporel pour réparer sa pomme. Les Pomdrapi forts qui ont remporté de nombreuses batailles ont des pommes entièrement colorées d'argile.",
        es: "Utiliza su propio fluido corporal para reparar su manzana. Los fuertes Flapple que han ganado muchas batallas tienen manzanas de color arcilla por todas partes.",
        it: "Usa il proprio fluido corporeo per riparare la sua mela. I forti Flapple che hanno vinto molte battaglie hanno mele color argilla dappertutto.",
        de: "Es nutzt seine eigene Körperflüssigkeit, um seinen Apfel zu reparieren. Starke Drapfel, die viele Schlachten gewonnen haben, haben Äpfel, die überall lehmfarben sind.",
        "pt-br": "Ele usa seu próprio fluido corporal para reparar sua maçã. Flapple fortes que venceram muitas batalhas têm maçãs totalmente cor de argila.",
        "zh-tw": "它用自己的體液來修復它的蘋果。屢戰屢勝的強者蘋裹龍擁有全身都是黏土色的蘋果。",
        ja: "体液で りんごを 補修する。 歴戦の 強者の りんごは 全体的に 粘土色。",
        ko: "체액으로 사과를 보수한다.\n많은 싸움을 거듭한 강자의 사과는\n전체적으로 찰흙빛이다."
    },
    attacks: [
        {
            cost: ["Grass"],
            name: {
                en: "Sour Spit",
                fr: "Rejet Acide",
                es: "Escupitajo Ácido",
                it: "Asprosputo",
                de: "Sauerspucke",
                "pt-br": "Cuspe Azedo",
                "zh-tw": "酸酸唾液",
                ja: "すっぱいだえき",
                ko: "새콤한타액"
            },
            effect: {
                en: "During your opponent's next turn, attacks used by the Defending Pokémon cost 1 {C} more.",
                fr: "Lors du prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur coûtent 1 {C} de plus.",
                es: "Durante el próximo turno de tu rival, los ataques utilizados por el Pokémon Defensor cuestan 1 {C} más.",
                it: "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore costano 1 {C} in più.",
                de: "Während des nächsten Zuges deines Gegners kosten Angriffe des verteidigenden Pokémon 1 {C} mehr.",
                "pt-br": "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor custarão 1 {C} a mais.",
                "zh-tw": "在對手的下一個回合中，防御寶可夢使用的攻擊額外花費 1 {C} 點。",
                ja: "次の相手の番、このワザを受けたポケモンの、ワザを使うためのエネルギーを、{C}エネルギー1個ぶん多くする。",
                ko: "상대의 다음 차례에 이 기술을 받은 포켓몬의 기술을 사용하기 위한 에너지를 {C}에너지 1개만큼 많게 한다."
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
