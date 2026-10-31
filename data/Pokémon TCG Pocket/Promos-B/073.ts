import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/073",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/073",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/073",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/073",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/073",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/073",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-B/073",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/P-B/073",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/P-B/073"
    },
    name: {
        en: "Froslass",
        fr: "Momartik",
        es: "Froslass",
        it: "Froslass",
        de: "Frosdedje",
        "pt-br": "Froslass",
        "zh-tw": "雪妖女",
        ko: "눈여아",
        ja: "ユキメノコ"
    },
    illustrator: "Kagemaru Himeno",
    rarity: "None",
    category: "Pokemon",
    hp: 100,
    types: ["Water"],
    dexId: [478],
    evolveFrom: {
        en: "Snorunt",
        fr: "Stalgamin",
        es: "Snorunt",
        it: "Snorunt",
        de: "Schneppke",
        "pt-br": "Snorunt",
        "zh-tw": "雪童子",
        ko: "눈꼬마",
        ja: "ユキワラシ"
    },
    stage: "Stage1",
    description: {
        en: "It freezes prey by blowing its -58 degree Fahrenheit breath. It is said to then secretly display its prey.",
        fr: "Il gèle ses proies en soufflant son souffle à -58 degrés Fahrenheit. On dit qu’il exhibe alors secrètement sa proie.",
        es: "Congela a su presa soplando su aliento a -58 grados Fahrenheit. Se dice que luego muestra en secreto a su presa.",
        it: "Congela la preda emettendo il suo respiro a -58 gradi Fahrenheit. Si dice che poi mostri segretamente la sua preda.",
        de: "Es friert Beute ein, indem es seinen -58 Grad Fahrenheit hohen Atem ausbläst. Anschließend soll es seine Beute heimlich zur Schau stellen.",
        "pt-br": "Ele congela a presa soprando seu hálito de -58 graus Fahrenheit. Diz-se que então exibe secretamente sua presa.",
        "zh-tw": "它透過吹出華氏 -58 度的呼吸來凍結獵物。據說它隨後會秘密地展示它的獵物。",
        ja: "マイナス50度の 息を 吹きかけ 凍らせた 獲物を 秘密の 場所に 飾っていると 言われる。",
        ko: "영하 50도의 숨결을 뿜어서\n얼린 먹이를 비밀 장소에\n장식해 둔다고 전해진다."
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Soul Shot",
                fr: "Tir Spirituel",
                es: "Disparo de Alma",
                it: "Colpospirito",
                de: "Seelenschuss",
                "pt-br": "Disparo da Alma",
                "zh-tw": "靈魂射擊",
                ja: "ソウルシュート",
                ko: "소울슛"
            },
            effect: {
                en: "Discard a card from your hand. If you can't, this attack does nothing.",
                fr: "Défaussez une carte de votre main. Si vous n’y parvenez pas, cette attaque ne fait rien.",
                es: "Descarta una carta de tu mano. Si no puedes, este ataque no hace nada.",
                it: "Scarta una carta dalla tua mano. Se non puoi, questo attacco non ha alcun effetto.",
                de: "Wirf eine Karte aus deiner Hand ab. Wenn Sie das nicht können, bewirkt dieser Angriff nichts.",
                "pt-br": "Descarte uma carta da sua mão. Se não conseguir, este ataque não fará nada.",
                "zh-tw": "棄掉你手上的一張牌。如果你做不到，那麼這次攻擊就沒有任何作用。",
                ja: "自分の手札を1枚トラッシュ。トラッシュできないなら、このワザは失敗。",
                ko: "자신의 패를 1장 트래쉬한다. 트래쉬할 수 없다면 이 기술은 실패한다."
            },
            damage: 70
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol10"]
};

export default card;
