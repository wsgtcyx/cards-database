import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Dugtrio",
        "fr": "Dugtrio",
        "es": "Dugtrio",
        "it": "Dugtrio",
        "de": "Dugtrio",
        "pt-br": "Dugtrio",
        "zh-tw": "三地鼠",
    },
    illustrator: "Tomokazu Komiya",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Fighting"],
    evolveFrom: {
        en: "Diglett",
        "fr": "Diglett",
        "es": "diglett",
        "it": "Diglett",
        "de": "Diglett",
        "pt-br": "Diglett",
        "zh-tw": "地鼠",
    },
    description: {
        en: "Its three heads bob separately up and down to\nloosen the soil nearby, making it easier for it\nto burrow.",
        "fr": "Ses trois têtes bougent séparément de haut en bas pour\nameublir le sol à proximité, ce qui le rend plus facile\ncreuser.",
        "es": "Sus tres cabezas se mueven por separado hacia arriba y hacia abajo para\naflojar la tierra cercana, haciéndola más fácil\npara excavar.",
        "it": "Le sue tre teste si muovono separatamente su e giù\nallentare il terreno vicino, rendendolo più facile\nscavare.",
        "de": "Seine drei Köpfe bewegen sich einzeln auf und ab\nLockern Sie den Boden in der Nähe, um ihn leichter zu machen\ngraben.",
        "pt-br": "Suas três cabeças balançam separadamente para cima e para baixo\nafrouxe o solo próximo, facilitando\npara cavar.",
        "zh-tw": "它的三個頭分別上下擺動\n鬆動附近的土壤，使其更容易生長\n挖洞。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Cliff Crumbler",
                "fr": "Crumble de falaise",
                "es": "Desmoronador de acantilados",
                "it": "Crollatore della scogliera",
                "de": "Cliff Crumbler",
                "pt-br": "Desintegrador de Penhascos",
                "zh-tw": "懸崖破碎者"
            },
            damage: 40,
            cost: ["Fighting"],
            effect: {
                en: "Discard the top card of your deck. If that card is a {F} Pokémon, this attack does 60 more damage.",
                "fr": "Défaussez la carte du dessus de votre deck. Si cette carte est un Pokémon {F}, cette attaque inflige 60 dégâts supplémentaires.",
                "es": "Descarta la carta superior de tu mazo. Si esa carta es un Pokémon {F}, este ataque hace 60 daños más.",
                "it": "Scarta la prima carta del tuo mazzo. Se quella carta è un Pokémon {F}, questo attacco infligge 60 danni in più.",
                "de": "Lege die oberste Karte deines Decks ab. Wenn es sich bei dieser Karte um ein {F}-Pokémon handelt, fügt dieser Angriff 60 weitere Schadenspunkte zu.",
                "pt-br": "Descarte a carta do topo do seu baralho. Se aquela carta for um Pokémon {F}, este ataque causa 60 de dano a mais.",
                "zh-tw": "棄掉你牌組最上面的牌。如果該卡是{F}神奇寶貝，則此攻擊造成的傷害增加 60 點。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
