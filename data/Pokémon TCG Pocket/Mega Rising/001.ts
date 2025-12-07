import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Pinsir",
        "fr": "Pinsir",
        "es": "Pinsir",
        "it": "Pinsir",
        "de": "Pinsir",
        "pt-br": "Pinsir",
        "zh-tw": "凱羅斯",
    },
    illustrator: "Suwama Chiaki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Grass"],
    description: {
        en: "This Pokémon clamps its pincers down on its prey\nand then either splits the prey in half or flings\nit away.",
        "fr": "Ce Pokémon serre ses pinces sur sa proie\npuis soit divise la proie en deux, soit la jette\nloin.",
        "es": "Este Pokémon aprieta sus pinzas sobre su presa\ny luego divide la presa por la mitad o la arroja\nlejos.",
        "it": "Questo Pokémon afferra la preda con le sue chele\ne poi o spacca la preda a metà o la lancia\nvia.",
        "de": "Dieses Pokémon greift seine Beute mit seiner Zange an\nund spaltet dann entweder die Beute in zwei Hälften oder schleudert sie\nes weg.",
        "pt-br": "Este Pokémon aperta suas pinças sobre sua presa\ne então divide a presa ao meio ou a arremessa\nisso embora.",
        "zh-tw": "這只神奇寶貝用鉗子夾住獵物\n然後要么把獵物劈成兩半，要么把獵物扔出去\n把它帶走。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "X-Scissor",
                "fr": "Ciseaux en X",
                "es": "tijera x",
                "it": "Forbice X",
                "de": "X-Schere",
                "pt-br": "Tesoura X",
                "zh-tw": "X型剪刀"
            },
            damage: 50,
            cost: ["Grass", "Grass", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, this attack does 50 more damage.",
                "fr": "Lancez une pièce de monnaie. Si c’est face, cette attaque inflige 50 dégâts supplémentaires.",
                "es": "Lanza una moneda. Si sale cara, este ataque hace 50 puntos de daño más.",
                "it": "Lancia una moneta. Se esce testa, questo attacco infligge 50 danni in più.",
                "de": "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 50 Schadenspunkte mehr zu.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque causa 50 de dano a mais.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 50 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
