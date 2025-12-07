import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Gyarados",
        "fr": "Léviator",
        "es": "Gyarados",
        "it": "Gyarados",
        "de": "Gyarados",
        "pt-br": "Gyarados",
        "zh-tw": "暴鯉龍"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 130,
    types: ["Water"],
    evolveFrom: {
        en: "Magikarp",
        "fr": "Magikarpe",
        "es": "Magikarp",
        "it": "Magikarp",
        "de": "Karpador",
        "pt-br": "Magikarp",
        "zh-tw": "鯉魚王"
    },
    description: {
        en: "Once it appears, it goes on a rampage.\nIt remains enraged until it demolishes\neverything around it.",
        "fr": "Une fois apparu, il se déchaîne.\nIl reste enragé jusqu'à ce qu'il démolisse\ntout autour.",
        "es": "Una vez que aparece, se enfurece.\nSigue enfurecido hasta derribar\ntodo lo que lo rodea.",
        "it": "Una volta apparso, va su tutte le furie.\nRimane infuriato finché non demolisce\ntutto ciò che lo circonda.",
        "de": "Sobald es auftaucht, tobt es.\nEs bleibt wütend, bis es zerstört wird\nalles drumherum.",
        "pt-br": "Uma vez que aparece, ele fica furioso.\nEle permanece enfurecido até destruir\ntudo ao seu redor.",
        "zh-tw": "一旦出現，就會橫衝直撞。\n它仍然憤怒，直到它被摧毀\n它周圍的一切。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Wild Swing",
                "fr": "Balançoire sauvage",
                "es": "Columpio salvaje",
                "it": "Altalena selvaggia",
                "de": "Wilder Swing",
                "pt-br": "Balanço Selvagem",
                "zh-tw": "狂野搖擺"
            },
            damage: 20,
            cost: ["Water", "Water"],
            effect: {
                en: "You may discard any number of your Benched {W} Pokémon. This attack does 40 more damage for each Benched Pokémon you discarded in this way.",
                "fr": "Vous pouvez défausser n'importe quel nombre de vos Pokémon {W} de Banc. Cette attaque inflige 40 dégâts supplémentaires pour chaque Pokémon de Banc que vous avez défaussé de cette manière.",
                "es": "Puedes descartar cualquier cantidad de tus Pokémon {W} en Banca. Este ataque hace 40 daños más por cada Pokémon en Banca que descartes de esta forma.",
                "it": "Puoi scartare un qualsiasi numero dei tuoi Pokémon {W} in panchina. Questo attacco infligge 40 danni in più per ogni Pokémon in panchina che hai scartato in questo modo.",
                "de": "Du kannst eine beliebige Anzahl deiner {W}-Pokémon auf deiner Bank abwerfen. Dieser Angriff verursacht 40 weitere Schadenspunkte für jedes Bank-Pokémon, das du auf diese Weise abgeworfen hast.",
                "pt-br": "Você pode descartar qualquer número dos seus Pokémon {W} no Banco. Este ataque causa 40 pontos de dano a mais para cada Pokémon no Banco que você descartou dessa forma.",
                "zh-tw": "您可以丟棄任意數量的替補 {W} 神奇寶貝。你以這種方式丟棄的每個後備神奇寶貝都會額外受到 40 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 3,
    boosters: ["lugia"]
};
export default card;
