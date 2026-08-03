import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/005",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/005",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/005",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/005",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/005",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/005",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3a/005"
    },
    name: {
        en: "Iron Moth",
        fr: "Mite-de-Fer",
        es: "Ferropolilla",
        it: "Falenaferrea",
        de: "Eisenfalter",
        "pt-br": "Mariposa Férrea",
        "zh-tw": "鐵毒蛾",
        ko: "무쇠독나방",
        ja: "テツノドクガ"
    },
    illustrator: "Kouki Saitou",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Fire"],
    dexId: [994],
    stage: "Basic",
    description: {
        en: "No records exist of this species being caught. Data is lacking, but the Pokémon’s traits match up with an object described in an old book.",
        fr: "Il n'existe aucune trace de capture de cette espèce. Les données manquent, mais les traits du Pokémon correspondent à un objet décrit dans un vieux livre.",
        es: "No existen registros de captura de esta especie. Faltan datos, pero los rasgos del Pokémon coinciden con un objeto descrito en un libro antiguo.",
        it: "Non esistono registrazioni di questa specie catturata. Mancano dati, ma i tratti del Pokémon corrispondono a un oggetto descritto in un vecchio libro.",
        de: "Es liegen keine Aufzeichnungen über den Fang dieser Art vor. Es fehlen Daten, aber die Eigenschaften des Pokémon stimmen mit einem in einem alten Buch beschriebenen Objekt überein.",
        "pt-br": "Não existem registros desta espécie sendo capturada. Faltam dados, mas as características do Pokémon correspondem a um objeto descrito em um livro antigo.",
        "zh-tw": "沒有該物種被捕獲的記錄。雖然缺乏數據，但寶可夢的特徵與一本舊書中描述的物體相符。"
    },
    attacks: [
        {
            cost: ["Fire", "Colorless"],
            name: {
                en: "Thermal Gust",
                fr: "Rafale thermique",
                es: "Ráfaga Térmica",
                it: "Raffica Termica",
                de: "Thermische Böe",
                "pt-br": "Rajada Térmica",
                "zh-tw": "熱陣風"
            },
            effect: {
                en: "Flip 3 coins. If 1 of them is heads, this attack does 20 more damage. If 2 of them are heads, this attack does 50 more damage. If all of them are heads, this attack does 120 more damage.",
                fr: "Lancez 3 pièces. Si l’un d’entre eux est face, cette attaque inflige 20 dégâts supplémentaires. Si 2 d’entre eux sont face, cette attaque inflige 50 dégâts supplémentaires. Si tous sont face, cette attaque inflige 120 dégâts supplémentaires.",
                es: "Lanza 3 monedas. Si 1 de ellos sale cara, este ataque hace 20 daños más. Si 2 de ellos son cara, este ataque hace 50 puntos de daño más. Si todos salen cara, este ataque hace 120 puntos de daño más.",
                it: "Lancia 3 monete. Se esce testa 1 di loro, questo attacco infligge 20 danni in più. Se 2 di loro escono testa, questo attacco infligge 50 danni in più. Se escono tutte teste, questo attacco infligge 120 danni in più.",
                de: "Wirf 3 Münzen. Wenn einer von ihnen „Kopf“ ist, verursacht dieser Angriff 20 weitere Schadenspunkte. Wenn 2 davon Köpfe sind, fügt dieser Angriff 50 Schadenspunkte mehr zu. Wenn alle Köpfe sind, fügt dieser Angriff 120 Schadenspunkte mehr zu.",
                "pt-br": "Jogue 3 moedas. Se 1 deles der cara, este ataque causa 20 de dano a mais. Se 2 deles derem cara, este ataque causa 50 de dano a mais. Se todos derem cara, este ataque causa 120 de dano a mais.",
                "zh-tw": "翻轉 3 個硬幣。如果其中 1 個是正面，則此攻擊會造成 20 點額外傷害。如果其中 2 個是正面，則此攻擊會造成 50 點額外傷害。如果都是正面，這次攻擊會造成 120 點額外傷害。"
            },
            damage: "10+"
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
