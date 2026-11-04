import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/084/381a50bc20ac2653",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/084/381a50bc20ac2653",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/084/381a50bc20ac2653",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/084/381a50bc20ac2653",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/084/381a50bc20ac2653",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/084/381a50bc20ac2653",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/084/381a50bc20ac2653",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/084/381a50bc20ac2653",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/084/381a50bc20ac2653"
    },
    name: { en: "Skitty", fr: "Skitty", es: "Skitty", it: "Skitty", de: "Eneco", "pt-br": "Skitty", "zh-tw": "向尾喵", ko: "에나비", ja: "エネコ" },
    illustrator: "Atsuko Nishida",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    dexId: [300],
    stage: "Basic",
    attacks: [{
        cost: ["Colorless"],
        name: { en: "Whimsy Tackle", fr: "Charge Bizarre", es: "Placaje Caprichoso", it: "Capriccioazione", de: "Launischer Tackle", "pt-br": "Investida Fantástica", "zh-tw": "胡思亂撞", ja: "きまぐれタックル", ko: "변덕 태클" },
        effect: {
            en: "Flip a coin. If tails, this attack does nothing.", fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.", es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
            it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.", de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
            "pt-br": "Jogue uma moeda. Se sair coroa, este ataque não fará nada.", "zh-tw": "擲1次硬幣若為反面，則這個招式失敗。",
            ja: "コインを1回投げウラなら、このワザは失敗。",
            ko: "동전을 1번 던져서 뒷면이 나오면 이 기술은 실패한다."
        },
        damage: 40
    }],
    weaknesses: [{ type: "Fighting", value: "+20" }],
    retreat: 1,
    boosters: ["vol11"]
};

export default card;
