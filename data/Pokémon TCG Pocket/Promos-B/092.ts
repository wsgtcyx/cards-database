import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: { en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/092", fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/092", es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/092", it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/092", de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/092", "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-B/092", "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/092" },
    name: { en: "Marowak", fr: "Ossatueur", es: "Marowak", it: "Marowak", de: "Knogga", "pt-br": "Marowak", "zh-tw": "嘎啦嘎啦", ko: "텅구리", ja: "ガラガラ" },
    illustrator: "kawayoo",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Fighting"],
    dexId: [105],
    evolveFrom: { en: "Cubone", fr: "Osselait", es: "Cubone", it: "Cubone", de: "Tragosso", "pt-br": "Cubone", "zh-tw": "卡拉卡拉", ko: "탕구리", ja: "カラカラ" },
    stage: "Stage1",
    description: { en: "When this Pokémon evolved, the skull of its mother fused to it. Marowak's temperament also turned vicious at the same time.", fr: "En évoluant, il est devenu violent, et le crâne de sa mère qu'il portait a fusionné avec sa tête.", es: "Al evolucionar, se ha fusionado con el cráneo de su madre y, además, ha adquirido un carácter agresivo.", it: "Evolvendosi è diventato tutt'uno con il teschio della madre che prima indossava e ha acquisito un temperamento violento.", de: "Durch die Entwicklung wurde der Schädel seiner Mutter, den es stets trug, zu einem Teil von ihm und es bekam einen aggressiven Charakter.", "pt-br": "Quando este Pokémon evoluiu, o crânio de sua mãe se fundiu a ele. Ao mesmo tempo, o temperamento de Marowak se tornou cruel.", "zh-tw": "進化時，原本戴在頭上的頭骨跟著化為了牠身體的一部分。不但如此，性格也變得很凶暴。" },
    attacks: [{ cost: ["Fighting", "Colorless"], name: { en: "Punish", fr: "Punir", es: "Escarmiento", it: "Castigo", de: "Bestrafung", "pt-br": "Punir", "zh-tw": "懲治" }, effect: { en: "If your opponent's Active Pokémon has “Team Rocket” in its name, this attack does 70 more damage.", fr: "Si le Pokémon Actif de votre adversaire a « Team Rocket » dans son nom, cette attaque inflige 70 dégâts supplémentaires.", es: "Si el Pokémon Activo de tu rival tiene \"Team Rocket\" en su nombre, este ataque hace 70 puntos de daño más.", it: "Se il Pokémon attivo del tuo avversario ha \"Team Rocket\" nel nome, questo attacco infligge 70 danni in più.", de: "Wenn „Team Rocket“ zum Namen des Aktiven Pokémon deines Gegners gehört, fügt diese Attacke 70 Schadenspunkte mehr zu.", "pt-br": "Se o Pokémon Ativo do seu oponente tiver “Equipe Rocket” em seu nome, este ataque causará 70 pontos de dano a mais.", "zh-tw": "若對手的戰鬥寶可夢為名稱中有「火箭隊」的寶可夢，則增加70點傷害。" }, damage: "50+" }],
    weaknesses: [{ type: "Grass", value: "+20" }],
    retreat: 2,
    boosters: ["vol12"]
};

export default card;
