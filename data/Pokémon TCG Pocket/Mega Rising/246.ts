import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Corviknight",
        "fr": "Corvaillus",
        "es": "noche de corvik",
        "it": "Corviknight",
        "de": "Corviknight",
        "pt-br": "Noite de Corvik",
        "zh-tw": "科維克奈特"
    },
    illustrator: "hncl",
    rarity: "One Star",
    category: "Pokemon",
    hp: 140,
    types: ["Metal"],
    evolveFrom: {
        en: "Corvisquire",
        "fr": "Corvisquire",
        "es": "Corvisquire",
        "it": "Corvisquire",
        "de": "Corvisquire",
        "pt-br": "Corvisquire",
        "zh-tw": "科維斯奎爾"
    },
    description: {
        en: "Although its wings have partly turned to steel and\nbecome heavy as a result, this Pokémon flies\nthrough the skies with ease.",
        "fr": "Bien que ses ailes soient en partie transformées en acier et\ndevenu lourd du coup, ce Pokémon vole\nà travers le ciel en toute simplicité.",
        "es": "Aunque sus alas se han convertido en parte en acero y\nComo resultado, se vuelve pesado, este Pokémon vuela\npor los cielos con facilidad.",
        "it": "Sebbene le sue ali siano in parte diventate d'acciaio e\ndi conseguenza diventa pesante, questo Pokémon vola\nattraverso i cieli con facilità.",
        "de": "Obwohl seine Flügel teilweise zu Stahl geworden sind und\nWird das Pokémon dadurch schwer, fliegt es\nmit Leichtigkeit durch die Lüfte.",
        "pt-br": "Embora suas asas tenham se transformado parcialmente em aço e\ncomo resultado, este Pokémon voa\npelos céus com facilidade.",
        "zh-tw": "雖然它的翅膀已經部分變成了鋼鐵，\n結果變得很重，這只神奇寶貝會飛\n輕鬆穿越天空。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Iron Wings",
                "fr": "Ailes de fer",
                "es": "Alas de hierro",
                "it": "Ali di ferro",
                "de": "Eisenflügel",
                "pt-br": "Asas de Ferro",
                "zh-tw": "鐵翼"
            },
            damage: 100,
            cost: ["Metal", "Metal", "Colorless"],
            effect: {
                en: "Discard 2 {M} Energy from this Pokémon. During your opponent's next turn, this Pokémon takes −50 damage from attacks.",
                "fr": "Défaussez 2 {M} Énergie de ce Pokémon. Lors du prochain tour de votre adversaire, ce Pokémon subit -50 dégâts des attaques.",
                "es": "Descarta 2 {M} de Energía de este Pokémon. Durante el próximo turno de tu rival, este Pokémon recibe -50 de daño por ataques.",
                "it": "Scarta due Energie {M} da questo Pokémon. Durante il prossimo turno del tuo avversario, questo Pokémon subisce -50 danni dagli attacchi.",
                "de": "Lege 2 {M} Energie von diesem Pokémon ab. Während des nächsten Zuges deines Gegners erleidet dieses Pokémon −50 Schadenspunkte durch Angriffe.",
                "pt-br": "Descarte 2 {M} Energias deste Pokémon. Durante o próximo turno do seu oponente, este Pokémon sofrerá −50 de dano de ataques.",
                "zh-tw": "丟棄該神奇寶貝的 2 {M} 點能量。在對手的下一個回合中，這只神奇寶貝受到的攻擊傷害為-50。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
