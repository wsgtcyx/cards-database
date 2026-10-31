import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3b/048",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3b/048",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3b/048",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3b/048",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3b/048",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3b/048",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3b/048",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A3b/048",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A3b/048"
    },
    name: {
        en: "Togedemaru",
        "fr": "Togedemaru",
        "es": "Togedemaru",
        "it": "Togedemaru",
        "de": "Togedemaru",
        "pt-br": "Togedemaru",
        "zh-tw": "托戈德瑪爾",
        ja: "トゲデマル",
        ko: "토게데마루",
    },
    illustrator: "Oswaldo KATO",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Metal"],
    description: {
        en: "With the long hairs on its back, this Pokémon\ntakes in electricity from other electric Pokémon.\nIt stores what it absorbs in an electric sac.",
        "fr": "Avec ses longs poils sur le dos, ce Pokémon\nabsorbe l'électricité d'autres Pokémon électriques.\nIl stocke ce qu'il absorbe dans un sac électrique.",
        "es": "Con los largos pelos de su espalda, este Pokémon\nToma electricidad de otros Pokémon eléctricos.\nAlmacena lo que absorbe en un saco eléctrico.",
        "it": "Con i lunghi peli sulla schiena, questo Pokémon\nassorbe l'elettricità da altri Pokémon elettrici.\nConserva ciò che assorbe in una sacca elettrica.",
        "de": "Mit den langen Haaren auf dem Rücken, dieses Pokémon\nnimmt Strom von anderen elektrischen Pokémon auf.\nEs speichert das, was es aufnimmt, in einem elektrischen Beutel.",
        "pt-br": "Com longos pelos nas costas, este Pokémon\nabsorve eletricidade de outros Pokémon elétricos.\nEle armazena o que absorve em um saco elétrico.",
        "zh-tw": "背上有長毛的神奇寶貝\n從其他電力神奇寶貝身上獲取電力。\n它將吸收的東西儲存在電囊中。",
        ja: "背中の 長い 毛で 雷や でんきポケモンの 電撃を 受けて 電気袋に 充電する。",
        ko: "등에 난 긴 털로 번개나\n전기포켓몬의 전격을 받아\n전기 주머니에 충전한다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Bristling Spikes",
                "fr": "Pointes hérissées",
                "es": "Púas erizadas",
                "it": "Punte irte",
                "de": "Borstige Stacheln",
                "pt-br": "Espinhos Eriçados",
                "zh-tw": "豎立的尖刺",
                ja: "さかだつトゲ",
                ko: "곤두선가시"
            },
            damage: 30,
            cost: ["Metal", "Metal"],
            effect: {
                en: "During your opponent's next turn, if this Pokémon is damaged by an attack, do 30 damage to the Attacking Pokémon.",
                "fr": "Lors du prochain tour de votre adversaire, si ce Pokémon est blessé par une attaque, infligez 30 dégâts au Pokémon attaquant.",
                "es": "Durante el próximo turno de tu rival, si este Pokémon es dañado por un ataque, haz 30 puntos de daño al Pokémon atacante.",
                "it": "Durante il prossimo turno del tuo avversario, se questo Pokémon viene danneggiato da un attacco, infliggi 30 danni al Pokémon attaccante.",
                "de": "Wenn dieses Pokémon im nächsten Zug deines Gegners durch einen Angriff beschädigt wird, füge dem angreifenden Pokémon 30 Schadenspunkte zu.",
                "pt-br": "Durante o próximo turno do seu oponente, se este Pokémon receber dano de um ataque, cause 30 pontos de dano ao Pokémon atacante.",
                "zh-tw": "在對手的下一個回合中，如果這只神奇寶貝因攻擊而受到傷害，則對攻擊的神奇寶貝造成 30 點傷害。",
                ja: "次の相手の番、このポケモンがワザのダメージを受けたとき、ワザを使ったポケモンに30ダメージ。",
                ko: "상대의 다음 차례에 이 포켓몬이 기술의 데미지를 받았을 때 기술을 사용한 포켓몬에게 30데미지를 준다."
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
