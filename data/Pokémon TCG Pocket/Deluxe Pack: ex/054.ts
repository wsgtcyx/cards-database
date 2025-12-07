import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Meowscarada",
        "fr": "Miaoucarada",
        "es": "Miauscarada",
        "it": "Miaoscarada",
        "de": "Meowscarada",
        "pt-br": "Miauscarada",
        "zh-tw": "魔幻假面喵",
    },
    illustrator: "mashu",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Grass"],
    evolveFrom: {
        en: "Floragato",
        "fr": "Floragato",
        "es": "floragato",
        "it": "Floragato",
        "de": "Floragato",
        "pt-br": "Floragata",
        "zh-tw": "弗洛拉加托"
    },
    description: {
        en: "This Pokémon uses the reflective fur lining its\ncape to camouflage the stem of its flower,\ncreating the illusion that the flower is floating.",
        "fr": "Ce Pokémon utilise la fourrure réfléchissante qui recouvre son\ncape pour camoufler la tige de sa fleur,\ncréant l'illusion que la fleur flotte.",
        "es": "Este Pokémon usa el pelaje reflectante que recubre su\ncapa para camuflar el tallo de su flor,\ncreando la ilusión de que la flor está flotando.",
        "it": "Questo Pokémon utilizza la pelliccia riflettente che lo ricopre\nmantello per mimetizzare lo stelo del suo fiore,\ncreando l'illusione che il fiore stia fluttuando.",
        "de": "Dieses Pokémon nutzt das reflektierende Fell als Futter\nUmhang, um den Stiel seiner Blüte zu tarnen,\nDadurch entsteht die Illusion, dass die Blume schwebt.",
        "pt-br": "Este Pokémon usa o pelo reflexivo que reveste seu\ncapa para camuflar o caule de sua flor,\ncriando a ilusão de que a flor está flutuando.",
        "zh-tw": "這款神奇寶貝使用反光毛皮襯裡\n披風偽裝其花的莖，\n創造花朵漂浮的錯覺。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Fighting Claws",
                "fr": "Griffes de combat",
                "es": "Garras de lucha",
                "it": "Artigli da combattimento",
                "de": "Kampfklauen",
                "pt-br": "Garras de combate",
                "zh-tw": "戰鬥利爪"
            },
            damage: 60,
            cost: ["Grass", "Grass"],
            effect: {
                en: "If your opponent's Active Pokémon is a Pokémon ex, this attack does 70 more damage.",
                "fr": "Si le Pokémon Actif de votre adversaire est un ex Pokémon, cette attaque inflige 70 dégâts supplémentaires.",
                "es": "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 70 puntos de daño más.",
                "it": "Se il Pokémon attivo del tuo avversario è un Pokémon ex, questo attacco infligge 70 danni in più.",
                "de": "Wenn das Aktive Pokémon deines Gegners ein Pokémon-Ex ist, fügt dieser Angriff 70 weitere Schadenspunkte zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente for um Pokémon ex, este ataque causará 70 de dano a mais.",
                "zh-tw": "如果對手的現役神奇寶貝是前神奇寶貝，則此攻擊造成的傷害增加 70 點。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
