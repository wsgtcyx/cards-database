import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Drampa",
        "fr": "Drampa",
        "es": "Drampa",
        "it": "Drampa",
        "de": "Drampa",
        "pt-br": "Drampa",
        "zh-tw": "卓巴"
    },
    illustrator: "Sanosuke Sakuma",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Dragon"],
    description: {
        en: "The mountains it calls home are nearly two miles\nin height. On rare occasions, it descends to play\nwith the children living in the towns below.",
        "fr": "Les montagnes qu'il habite s'étendent sur près de trois kilomètres\nen hauteur. En de rares occasions, il descend pour jouer\navec les enfants vivant dans les villes en contrebas.",
        "es": "Las montañas que considera hogar tienen casi dos millas\nen altura. En raras ocasiones, desciende para jugar.\ncon los niños que viven en los pueblos de abajo.",
        "it": "Le montagne che chiama casa sono quasi due miglia\ndi altezza. In rare occasioni scende per giocare\ncon i bambini che vivono nelle città sottostanti.",
        "de": "Die Berge, die es sein Zuhause nennt, sind fast zwei Meilen groß\nin der Höhe. In seltenen Fällen steigt es zum Spielen hinab\nmit den Kindern, die in den Städten unten leben.",
        "pt-br": "As montanhas que ele chama de lar têm quase três quilômetros\nem altura. Em raras ocasiões, desce para brincar\ncom as crianças que vivem nas cidades abaixo.",
        "zh-tw": "它稱之為家的山脈近兩英里\n在高度上。在極少數情況下，它會下降玩耍\n和住在下面城鎮的孩子們。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Dragon Breath",
                "fr": "Souffle du Dragon",
                "es": "Aliento de dragón",
                "it": "Il respiro del drago",
                "de": "Drachenatem",
                "pt-br": "Sopro de Dragão",
                "zh-tw": "龍息"
            },
            damage: 70,
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "Flip a coin. If tails, this attack does nothing. If heads, your opponent's Active Pokémon is now Paralyzed.",
                "fr": "Lancez une pièce de monnaie. Si c’est pile, cette attaque ne fait rien. Si c'est face, le Pokémon Actif de votre adversaire est désormais Paralysé.",
                "es": "Lanza una moneda. Si sale cruz, este ataque no hace nada. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
                "it": "Lancia una moneta. Se esce croce, questo attacco non ha alcun effetto. Se esce testa, il Pokémon attivo del tuo avversario è paralizzato.",
                "de": "Wirf eine Münze. Bei „Zahl“ bewirkt dieser Angriff nichts. Bei „Kopf“ ist das Aktive Pokémon deines Gegners jetzt gelähmt.",
                "pt-br": "Jogue uma moeda. Se der coroa, este ataque não faz nada. Se der cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
                "zh-tw": "拋一枚硬幣。如果是反面，則此攻擊不會執行任何操作。如果正面，則對手的活躍神奇寶貝現在處於麻痺狀態。"
            }
        }],
    retreat: 2
};
export default card;
