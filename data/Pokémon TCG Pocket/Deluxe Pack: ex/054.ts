import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/054",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/054",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/054",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/054",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/054",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/054",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4b/054",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4b/054",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4b/054"
    },
    name: {
        en: "Meowscarada",
        "fr": "Miascarade",
        "es": "Meowscarada",
        "it": "Meowscarada",
        "de": "Maskagato",
        "pt-br": "Meowscarada",
        "zh-tw": "魔幻假面喵",
        ja: "マスカーニャ",
        ko: "마스카나",
    },
    illustrator: "mashu",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Grass"],
    evolveFrom: {
        en: "Floragato",
        "fr": "Matourgeon",
        "es": "Floragato",
        "it": "Floragato",
        "de": "Feliospa",
        "pt-br": "Floragato",
        "zh-tw": "蒂蕾喵",
        ja: "ニャローテ",
        ko: "나로테",
    },
    description: {
        en: "This Pokémon uses the reflective fur lining its\ncape to camouflage the stem of its flower,\ncreating the illusion that the flower is floating.",
        "fr": "Ce Pokémon utilise la fourrure réfléchissante qui recouvre son\ncape pour camoufler la tige de sa fleur,\ncréant l'illusion que la fleur flotte.",
        "es": "Este Pokémon usa el pelaje reflectante que recubre su\ncapa para camuflar el tallo de su flor,\ncreando la ilusión de que la flor está flotando.",
        "it": "Questo Pokémon utilizza la pelliccia riflettente che lo ricopre\nmantello per mimetizzare lo stelo del suo fiore,\ncreando l'illusione che il fiore stia fluttuando.",
        "de": "Dieses Pokémon nutzt das reflektierende Fell als Futter\nUmhang, um den Stiel seiner Blüte zu tarnen,\nDadurch entsteht die Illusion, dass die Blume schwebt.",
        "pt-br": "Este Pokémon usa o pelo reflexivo que reveste seu\ncapa para camuflar o caule de sua flor,\ncriando a ilusão de que a flor está flutuando.",
        "zh-tw": "這款神奇寶貝使用反光毛皮襯裡\n披風偽裝其花的莖，\n創造花朵漂浮的錯覺。",
        ja: "浮いているように 見える 花は マント裏の 毛の 反射で 茎を カモフラージュしているのだ。",
        ko: "꽃이 떠 있는 것처럼 보이는 것은\n망토 뒷면의 털이 빛을 반사해서\n줄기를 보이지 않게 하기 때문이다."
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
                "zh-tw": "戰鬥利爪",
                ja: "とうしのツメ",
                ko: "투지의손톱"
            },
            damage: "60+",
            cost: ["Grass", "Grass"],
            effect: {
                en: "If your opponent's Active Pokémon is a Pokémon ex, this attack does 70 more damage.",
                "fr": "Si le Pokémon Actif de votre adversaire est un ex Pokémon, cette attaque inflige 70 dégâts supplémentaires.",
                "es": "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 70 puntos de daño más.",
                "it": "Se il Pokémon attivo del tuo avversario è un Pokémon ex, questo attacco infligge 70 danni in più.",
                "de": "Wenn das Aktive Pokémon deines Gegners ein Pokémon-Ex ist, fügt dieser Angriff 70 weitere Schadenspunkte zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente for um Pokémon ex, este ataque causará 70 de dano a mais.",
                "zh-tw": "如果對手的現役神奇寶貝是前神奇寶貝，則此攻擊造成的傷害增加 70 點。",
                ja: "相手のバトルポケモンが「ポケモンex」なら、70ダメージ追加。",
                ko: "상대의 배틀 포켓몬이 「포켓몬 ex」라면 70데미지를 추가한다."
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
