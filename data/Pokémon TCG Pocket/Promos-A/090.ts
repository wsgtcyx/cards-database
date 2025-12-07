import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    name: {
        en: "Togedemaru",
        es: "Togedemaru",
        "fr": "Togedemaru",
        "it": "Togedemaru",
        "de": "Togedemaru",
        "pt-br": "Togedemaru",
        "zh-tw": "托戈德瑪爾",
    },
    illustrator: "sowsow",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Metal"],
    description: {
        en: "With the long hairs on its back, this Pokémon\ntakes in electricity from other electric Pokémon.\nIt stores what it absorbs in an electric sac.",
        es: "Utiliza el apéndice de la cabeza para absorber los raoys o los\nataques de los Pokémon de tipo Eléctrico para recargar su bolsa.",
        "fr": "Avec ses longs poils sur le dos, ce Pokémon\nabsorbe l'électricité d'autres Pokémon électriques.\nIl stocke ce qu'il absorbe dans un sac électrique.",
        "it": "Con i lunghi peli sulla schiena, questo Pokémon\nassorbe l'elettricità da altri Pokémon elettrici.\nConserva ciò che assorbe in una sacca elettrica.",
        "de": "Mit den langen Haaren auf dem Rücken, dieses Pokémon\nnimmt Strom von anderen elektrischen Pokémon auf.\nEs speichert das, was es aufnimmt, in einem elektrischen Beutel.",
        "pt-br": "Com longos pelos nas costas, este Pokémon\nabsorve eletricidade de outros Pokémon elétricos.\nEle armazena o que absorve em um saco elétrico.",
        "zh-tw": "背上有長毛的神奇寶貝\n從其他電力神奇寶貝身上獲取電力。\n它將吸收的東西儲存在電囊中。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Bristling Spikes",
                es: "Púas Erizadas",
                "fr": "Pointes hérissées",
                "it": "Punte irte",
                "de": "Borstige Stacheln",
                "pt-br": "Espinhos Eriçados",
                "zh-tw": "豎立的尖刺"
            },
            damage: 30,
            cost: ["Metal", "Metal"],
            effect: {
                en: "During your opponent's next turn, if this Pokémon is damaged by an attack, do 30 damage to the Attacking Pokémon.",
                es: "Durante el próximo turno de tu rival, si este Pokémon resulta dañado por un ataque, el Pokémon Atacante sufre 30 puntos de daño.",
                "fr": "Lors du prochain tour de votre adversaire, si ce Pokémon est blessé par une attaque, infligez 30 dégâts au Pokémon attaquant.",
                "it": "Durante il prossimo turno del tuo avversario, se questo Pokémon viene danneggiato da un attacco, infliggi 30 danni al Pokémon attaccante.",
                "de": "Wenn dieses Pokémon im nächsten Zug deines Gegners durch einen Angriff beschädigt wird, füge dem angreifenden Pokémon 30 Schadenspunkte zu.",
                "pt-br": "Durante o próximo turno do seu oponente, se este Pokémon receber dano de um ataque, cause 30 pontos de dano ao Pokémon atacante.",
                "zh-tw": "在對手的下一個回合中，如果這只神奇寶貝因攻擊而受到傷害，則對攻擊的神奇寶貝造成 30 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
