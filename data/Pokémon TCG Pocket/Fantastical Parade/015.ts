import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/015",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/015",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/015",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/015",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/015",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/015"
    },
    name: {
        en: "Gossifleur",
        "fr": "Tournicoton",
        "es": "Gossifleur",
        "it": "Gossifleur",
        "de": "Cottini",
        "pt-br": "Gossifleur",
        "zh-tw": "幼棉棉"
    },
    illustrator: "Saya Tsuruta",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    description: {
        en: "It whirls around in the wind while singing a joyous\nsong. This delightful display has charmed many\ninto raising this Pokémon.",
        "fr": "Il tournoie dans le vent en chantant un joyeux\nchanson. Cette charmante exposition a charmé de nombreuses personnes\nen élevant ce Pokémon.",
        "es": "Gira en el viento mientras canta alegremente.\ncanción. Esta encantadora exhibición ha cautivado a muchos\npara criar este Pokémon.",
        "it": "Si gira nel vento mentre canta un gioioso\ncanzone. Questo delizioso spettacolo ha affascinato molti\nad allevare questo Pokémon.",
        "de": "Es wirbelt im Wind herum und singt fröhlich\nLied. Diese entzückende Darstellung hat viele verzaubert\ndaran interessiert, dieses Pokémon großzuziehen.",
        "pt-br": "Ele gira ao vento enquanto canta uma alegre\ncanção. Esta deliciosa exibição encantou muitos\nem criar este Pokémon.",
        "zh-tw": "它在風中旋轉，唱著歡樂的歌\n歌曲。這場精彩的表演吸引了很多人\n來撫養這只神奇寶貝。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Razor Leaf",
                "fr": "Feuille de rasoir",
                "es": "Hoja de afeitar",
                "it": "Foglia di rasoio",
                "de": "Rasiermesserblatt",
                "pt-br": "Folha Navalha",
                "zh-tw": "剃刀葉"
            },
            damage: 20,
            cost: ["Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
