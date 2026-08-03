import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/040",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/040",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/040",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/040",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/040",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/040",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3b/040"
    },
    name: {
        en: "Palossand",
        fr: "Trépassable",
        es: "Palossand",
        it: "Palossand",
        de: "Colossand",
        "pt-br": "Palossand",
        "zh-tw": "噬沙堡爺",
        ko: "모래성이당",
        ja: "シロデスナ"
    },
    illustrator: "sui",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Fighting"],
    dexId: [770],
    evolveFrom: {
        en: "Sandygast",
        fr: "Bacabouh",
        es: "Sandygast",
        it: "Sandygast",
        de: "Sankabuh",
        "pt-br": "Sandygast",
        "zh-tw": "沙丘娃",
        ko: "모래꿍",
        ja: "スナバァ"
    },
    stage: "Stage1",
    description: {
        en: "From the hollows in its arms, it fires the bones of its victims, which are all dried up after being drained of their vitality.",
        fr: "Du creux de ses bras, il tire les os de ses victimes, tous desséchés après avoir été vidés de leur vitalité.",
        es: "Desde los huecos de sus brazos, dispara los huesos de sus víctimas, que se secan después de haberles quitado su vitalidad.",
        it: "Dalle cavità delle sue braccia spara le ossa delle sue vittime, che sono tutte disseccate dopo essere state prosciugate della loro vitalità.",
        de: "Aus den Vertiefungen seiner Arme feuert es die Knochen seiner Opfer ab, die alle ausgetrocknet sind, nachdem ihnen ihre Lebenskraft entzogen wurde.",
        "pt-br": "Das cavidades de seus braços, ele atira os ossos de suas vítimas, que ficam todos secos após serem drenados de sua vitalidade.",
        "zh-tw": "它從手臂的空洞中發射受害者的骨頭，這些骨頭在被耗盡生命力後都枯竭了。"
    },
    attacks: [
        {
            cost: ["Fighting"],
            name: {
                en: "Ambush",
                fr: "Embuscade",
                es: "Emboscada",
                it: "Imboscata",
                de: "Hinterhalt",
                "pt-br": "Emboscada",
                "zh-tw": "伏擊"
            },
            effect: {
                en: "Flip a coin. If heads, this attack does 30 more damage.",
                fr: "Lancez une pièce de monnaie. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
                es: "Lanza una moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
                de: "Wirf eine Münze. Bei „Kopf“ verursacht dieser Angriff 30 weitere Schadenspunkte.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque causa 30 de dano a mais.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 30 點額外傷害。"
            },
            damage: "30+"
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
