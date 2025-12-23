import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Reuniclus",
        "fr": "Symbios",
        "es": "Reuniclus",
        "it": "Reuniclus",
        "de": "Zytomega",
        "pt-br": "Reuniclus",
        "zh-tw": "人造細胞卵"
    },
    illustrator: "Kagemaru Himeno",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Psychic"],
    evolveFrom: {
        en: "Duosion",
        "fr": "Méios",
        "es": "Duosion",
        "it": "Duosion",
        "de": "Mitodos",
        "pt-br": "Duosion",
        "zh-tw": "雙卵細胞球"
    },
    description: {
        en: "It's said that drinking the liquid surrounding\nReuniclus grants wisdom. Problem is, the liquid is\nhighly toxic to anything besides Reuniclus itself.",
        "fr": "On dit que boire le liquide qui l'entoure\nReuniclus accorde la sagesse. Le problème est que le liquide est\nhautement toxique pour tout autre chose que Reuniclus lui-même.",
        "es": "Se dice que beber el líquido que rodea\nReuniclus otorga sabiduría. El problema es que el líquido es\naltamente tóxico para cualquier cosa además del propio Reuniclus.",
        "it": "Si dice che bere il liquido circostante\nReuniclus garantisce saggezza. Il problema è che il liquido lo è\naltamente tossico per qualsiasi cosa oltre allo stesso Reuniclus.",
        "de": "Es wird gesagt, dass man die umgebende Flüssigkeit trinkt\nReuniclus gewährt Weisheit. Das Problem ist, dass die Flüssigkeit vorhanden ist\nhochgiftig für alles außer Reuniclus selbst.",
        "pt-br": "Diz-se que beber o líquido que rodeia\nReuniclus concede sabedoria. O problema é que o líquido é\naltamente tóxico para qualquer coisa além do próprio Reuniclus.",
        "zh-tw": "據說喝了周圍的液體\nReuniclus 賦予智慧。問題是，液體是\n除團團本身外，對任何東西都有劇毒。"
    },
    stage: "Stage2",
    abilities: [{
            type: "Ability",
            name: {
                en: "Infinite Increase",
                "fr": "Augmentation infinie",
                "es": "Aumento infinito",
                "it": "Aumento infinito",
                "de": "Unendliche Steigerung",
                "pt-br": "Aumento infinito",
                "zh-tw": "無限增加"
            },
            effect: {
                en: "This Pokémon gets +30 HP for each {P} Energy attached to it.",
                "fr": "Ce Pokémon obtient +30 HP pour chaque {P} Énergie qui lui est attachée.",
                "es": "Este Pokémon obtiene +30 HP por cada {P} Energía unida a él.",
                "it": "Questo Pokémon ottiene +30 HP per ogni Energia {P} assegnata.",
                "de": "Dieses Pokémon erhält +30 HP für jede an es angelegte {P}-Energie.",
                "pt-br": "Este Pokémon recebe +30 HP para cada energia {P} ligada a ele.",
                "zh-tw": "每附加一個 {P} 能量，該神奇寶貝就會獲得 +30 HP。"
            }
        }],
    attacks: [{
            name: {
                en: "Psypunch",
                "fr": "Coup de poing psychologique",
                "es": "Psypunch",
                "it": "Psicopugno",
                "de": "Psypunch",
                "pt-br": "Psypunch",
                "zh-tw": "靈拳"
            },
            damage: 90,
            cost: ["Colorless", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 3
};
export default card;
