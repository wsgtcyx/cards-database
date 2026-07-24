import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    name: {
        en: "Tinkatink",
        fr: "Forgerette",
        es: "Tinkatink",
        it: "Tinkatink",
        de: "Forgita",
        "pt-br": "Tinkatink",
        "zh-tw": "小鍛匠",
        pt: "Tinkatink",
        'es-mx': "Tinkatink"
    },
    illustrator: "Pani Kobayashi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Metal"],
    dexId: [957],
    description: {
        en: "This Pokémon pounds iron scraps together to make a hammer. It will remake the hammer again and again until it's satisfied with the result.",
        "fr": "Ce Pokémon pile des morceaux de fer pour fabriquer un marteau. Il refairea le marteau encore et encore jusqu'à ce qu'il soit satisfait du résultat.",
        "es": "Este Pokémon junta trozos de hierro para formar un martillo. Rehará el martillo una y otra vez hasta que esté satisfecho con el resultado.",
        "it": "Questo Pokémon unisce pezzi di ferro per creare un martello. Rifarà il martello ancora e ancora finché non sarà soddisfatto del risultato.",
        "de": "Dieses Pokémon schlägt Eisenreste zu einem Hammer zusammen. Es wird den Hammer immer wieder neu machen, bis es mit dem Ergebnis zufrieden ist.",
        "pt-br": "Este Pokémon junta pedaços de ferro para fazer um martelo. Ele irá refazer o martelo repetidas vezes até ficar satisfeito com o resultado.",
        "zh-tw": "這隻寶可夢將鐵屑搗碎在一起製成鐵鎚。它會一次又一次地重新製作錘子，直到對結果滿意為止。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Beat",
                fr: "Bataille",
                es: "Toque",
                it: "Battuta",
                de: "Verprügler",
                'pt-br': "Pulso",
                "zh-tw": "打",
                ko: "때리기"
            },
            damage: "30",
            cost: ["Metal", "Colorless"],
        },
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
