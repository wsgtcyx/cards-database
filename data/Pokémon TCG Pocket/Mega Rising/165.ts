import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Grimmsnarl",
        "fr": "Grimmsnarl",
        "es": "Grimmsnarl",
        "it": "Grimmsnarl",
        "de": "Grimmsnarl",
        "pt-br": "Grimmsnarl",
        "zh-tw": "長毛巨魔",
    },
    illustrator: "DOM",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 160,
    types: ["Darkness"],
    evolveFrom: {
        en: "Morgrem",
        "fr": "Morgrem",
        "es": "Morgrem",
        "it": "Morgrem",
        "de": "Morgrem",
        "pt-br": "Morgrem",
        "zh-tw": "詐唬魔",
    },
    description: {
        en: "It lives deep within the forest. Even after evolving\ninto this splendid form, it hasn't given up on its\npetty misdeeds and pranks.",
        "fr": "Il vit au plus profond de la forêt. Même après avoir évolué\nsous cette forme splendide, il n'a pas abandonné son\npetits méfaits et farces.",
        "es": "Vive en lo profundo del bosque. Incluso después de evolucionar\nen esta espléndida forma, no ha renunciado a su\npequeñas fechorías y bromas.",
        "it": "Vive nel profondo della foresta. Anche dopo l'evoluzione\nin questa splendida forma, non ha rinunciato alla sua\npiccoli misfatti e scherzi.",
        "de": "Es lebt tief im Wald. Auch nach der Weiterentwicklung\nin diese herrliche Form gebracht hat, hat es nicht aufgegeben\nKleinigkeiten und Streiche.",
        "pt-br": "Ele vive nas profundezas da floresta. Mesmo depois de evoluir\nnesta forma esplêndida, não desistiu de sua\npequenos delitos e brincadeiras.",
        "zh-tw": "它生活在森林深處。即使進化後\n進入這個輝煌的形式，它並沒有放棄它的\n輕微的錯誤行為和惡作劇。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Wrack Down",
                "fr": "Détruire",
                "es": "Destrozar",
                "it": "Distruggilo",
                "de": "Machen Sie Schluss",
                "pt-br": "Destruir",
                "zh-tw": "鎮壓"
            },
            damage: 100,
            cost: ["Darkness", "Darkness", "Darkness"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 3
};
export default card;
