import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/058",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/058",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/058",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/058",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/058",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/058"
    },
    name: {
        en: "Galarian Ponyta",
        "fr": "Ponyta de Galar",
        "es": "Ponyta de Galar",
        "it": "Ponyta di Galar",
        "de": "Galar-Ponita",
        "pt-br": "Ponyta de Galar",
        "zh-tw": "伽勒爾小火馬"
    },
    illustrator: "Saya Tsuruta",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    description: {
        en: "This Pokémon will look into your eyes and read\nthe contents of your heart. If it finds evil there,\nit promptly hides away.",
        "fr": "Ce Pokémon vous regardera dans les yeux et lira\nle contenu de votre cœur. S'il y trouve du mal,\nil se cache rapidement.",
        "es": "Este Pokémon te mirará a los ojos y leerá\nel contenido de tu corazón. Si encuentra el mal allí,\nrápidamente se esconde.",
        "it": "Questo Pokémon ti guarderà negli occhi e leggerà\nil contenuto del tuo cuore. Se trova il male lì,\nsi nasconde subito.",
        "de": "Dieses Pokémon wird dir in die Augen schauen und lesen\nder Inhalt deines Herzens. Wenn es dort Böses findet,\nes versteckt sich sofort.",
        "pt-br": "Este Pokémon olhará nos seus olhos e lerá\no conteúdo do seu coração. Se encontrar o mal lá,\nele prontamente se esconde.",
        "zh-tw": "這個神奇寶貝會看著你的眼睛並閱讀\n你內心的內容。如果它在那裡發現邪惡，\n它很快就躲了起來。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Flop",
                "fr": "Fiasco",
                "es": "Fracaso",
                "it": "Flop",
                "de": "Flop",
                "pt-br": "Fracasso",
                "zh-tw": "翻牌"
            },
            damage: 10,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
