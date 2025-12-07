import { Card } from "../../../interfaces";
import Set from "../Genetic Apex";
const card: Card = {
    set: Set,
    name: {
        en: "Venonat",
        fr: "Mimitoss",
        es: "Venonat",
        it: "Venonat",
        de: "Bluzuk",
        'pt-br': "Venonat",
        ko: "콘팡",
        "zh-tw": "毛球",
    },
    illustrator: "HYOGONOSUKE",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    stage: "Basic",
    attacks: [{
            cost: ["Grass"],
            name: {
                en: "Tackle",
                fr: "Charge",
                es: "Placaje",
                it: "Azione",
                de: "Tackle",
                'pt-br': "Investida",
                ko: "몸통박치기",
                "zh-tw": "處理"
            },
            damage: "20"
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
    rarity: "One Diamond",
    description: {
        en: "Poison oozes from all over its body. It catches small bug Pokémon at night that are attracted by light.",
        fr: "Son corps sécrète un poison redoutable. La nuit, il capture\nde petits Pokémon Insecte attirés par la lumière.",
        es: "Rezuma veneno por todo su cuerpo.\nDe noche, atrapa y come pequeños\nPokémon insecto atraídos por la luz.",
        it: "Da tutto il suo corpo trasuda veleno.\nDi notte cattura piccoli Pokémon\nColeottero attratti dalla luce.",
        de: "Aus seinem ganzen Körper tritt Gift aus.\nEs fängt und frisst nachts kleine Käfer-Pokémon,\ndie von Licht angelockt wurden.",
        'pt-br': "Veneno escorre de todo o seu corpo. Durante a\nnoite, captura pequenos Pokémon inseto que são\natraídos pela luz.",
        ko: "전신에서 독이 스며 나온다.\n어두워지면 밝은 곳에 모인\n작은 벌레포켓몬을 잡아먹는다.",
        "zh-tw": "毒液從它的全身散發出來。在夜間捕捉被光吸引的小蟲子寶可夢。"
    },
    boosters: ["mewtwo"]
};
export default card;
