import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Cleffa",
        "fr": "Cleffa",
        "es": "Clefa",
        "it": "Cleffa",
        "de": "Cleffa",
        "pt-br": "Clefa",
        "zh-tw": "克萊法"
    },
    illustrator: "Orca",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 30,
    types: ["Psychic"],
    description: {
        en: "According to local rumors, Cleffa are often seen\nin places where shooting stars have fallen.",
        "fr": "Selon les rumeurs locales, on voit souvent des Cleffa\ndans les endroits où des étoiles filantes sont tombées.",
        "es": "Según los rumores locales, a menudo se ve a Cleffa\nen lugares donde han caído estrellas fugaces.",
        "it": "Secondo voci locali, i Cleffa vengono visti spesso\nnei luoghi dove sono cadute le stelle cadenti.",
        "de": "Lokalen Gerüchten zufolge wird Cleffa oft gesehen\nan Orten, an denen Sternschnuppen gefallen sind.",
        "pt-br": "De acordo com rumores locais, Cleffa é frequentemente visto\nem lugares onde caíram estrelas cadentes.",
        "zh-tw": "據當地傳聞，Cleffa 經常出現\n在流星墜落的地方。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Twinkly Call",
                "fr": "Appel scintillant",
                "es": "Llamada centelleante",
                "it": "Chiamata scintillante",
                "de": "Funkelnder Anruf",
                "pt-br": "Chamada cintilante",
                "zh-tw": "閃爍的召喚"
            },
            effect: {
                en: "Put a random Pokémon from your deck into your hand.",
                "fr": "Mettez un Pokémon aléatoire de votre deck dans votre main.",
                "es": "Pon un Pokémon aleatorio de tu mazo en tu mano.",
                "it": "Metti nella tua mano un Pokémon casuale dal tuo mazzo.",
                "de": "Nimm ein zufälliges Pokémon aus deinem Deck auf deine Hand.",
                "pt-br": "Coloque um Pokémon aleatório do seu baralho na sua mão.",
                "zh-tw": "從你的牌組中隨機將一隻神奇寶貝放入你的手牌。"
            }
        }],
    weaknesses: [{
            type: "Colorless",
            value: "+20"
        }],
    retreat: 0,
    boosters: ["lugia"]
};
export default card;
