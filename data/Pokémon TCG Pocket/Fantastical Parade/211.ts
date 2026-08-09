import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/211",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/211",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/211",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/211",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/211",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/211",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/211"
    },
    name: {
        en: "Omanyte",
        "fr": "Amonita",
        "es": "Omanyte",
        "it": "Omanyte",
        "de": "Amonitas",
        "pt-br": "Omanyte",
        "zh-tw": "菊石獸"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 90,
    types: ["Water"],
    evolveFrom: {
        en: "Helix Fossil",
        "fr": "Fossile Nautile",
        "es": "Fósil Hélix",
        "it": "Helixfossile",
        "de": "Helixfossil",
        "pt-br": "Fóssil Espiral",
        "zh-tw": "貝殼化石"
    },
    description: {
        en: "Because some Omanyte manage to escape after\nbeing restored or are released into the wild by\npeople, this species is becoming a problem.",
        "fr": "Parce que certains Omanyte parviennent à s'échapper après\nen cours de restauration ou sont relâchés dans la nature par\nles gens, cette espèce devient un problème.",
        "es": "Porque algunos omanitas logran escapar después\nsiendo restaurados o liberados en el medio silvestre por\nPara la gente, esta especie se está convirtiendo en un problema.",
        "it": "Perché alcuni Omanyte riescono a scappare dopo\nvengono ripristinati o vengono rilasciati in natura da\ngente, questa specie sta diventando un problema.",
        "de": "Denn einigen Omanyten gelingt danach die Flucht\nwerden wiederhergestellt oder in die Wildnis entlassen\nMenschen, diese Art wird zum Problem.",
        "pt-br": "Porque alguns Omanyte conseguem escapar depois\nsendo restaurados ou soltos na natureza por\npessoas, esta espécie está se tornando um problema.",
        "zh-tw": "因為一些阿曼人在之後設法逃脫\n被恢復或被釋放到野外\n人們，這個物種正在成為一個問題。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Water Gun",
                "fr": "Pistolet à eau",
                "es": "Pistola de agua",
                "it": "Pistola ad acqua",
                "de": "Wasserpistole",
                "pt-br": "Pistola de água",
                "zh-tw": "水槍"
            },
            damage: 40,
            cost: ["Water"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
