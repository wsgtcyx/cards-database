import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/048/8cee929219140945",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/048/8cee929219140945",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/048/8cee929219140945",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/048/8cee929219140945",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/048/8cee929219140945",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/048/8cee929219140945",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/048/8cee929219140945",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/048/8cee929219140945",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/048/8cee929219140945"
    },
    name: {
        en: "Wigglytuff",
        fr: "Grodoudou",
        es: "Wigglytuff",
        it: "Wigglytuff",
        de: "Knuddeluff",
        "pt-br": "Wigglytuff",
        "zh-tw": "胖可丁",
        ko: "푸크린",
        ja: "プクリン"
    },
    illustrator: "Mizue",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Colorless"],
    dexId: [40],
    evolveFrom: {
        en: "Jigglypuff",
        fr: "Rondoudou",
        es: "Jigglypuff",
        it: "Jigglypuff",
        de: "Pummeluff",
        "pt-br": "Jigglypuff",
        "zh-tw": "胖丁",
        ko: "푸린",
        ja: "プリン"
    },
    stage: "Stage1",
    description: {
        en: "The rich, fluffy fur that covers its body feels so good that anyone who feels it can’t stop touching it.",
        fr: "Sa fourrure est si douce et soyeuse que si on la caresse, on ne veut ni ne peut s'arrêter.",
        es: "Es como un peluche suave, tan agradable al tacto que, cuando alguien lo toca, no puede dejar de acariciarlo.",
        it: "Il suo folto pelo è così morbido che chiunque lo tocchi non può fare a meno di continuare ad accarezzarlo.",
        de: "Sein dichtes, flauschiges Fell fühlt sich so toll an, dass man nicht aufhören kann, es anzufassen.",
        "pt-br": "A pelagem densa e macia que cobre seu corpo é tão agradável que é impossível não querer tocá-la o tempo todo.",
        "zh-tw": "膨膨鬆鬆的體毛觸感絕佳，會令人一摸就捨不得鬆手。",
        ja: "ふわふわの 体毛に 触ると 手触りが とても 良いので 離れられなくなってしまう。",
        ko: "푹신푹신한 털을 만지면\n감촉이 아주 좋아서\n떨어지지 못하게 된다고 한다."
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Hammer In",
                fr: "Enfoncement",
                es: "Martillear",
                it: "Martello",
                de: "Einhämmern",
                "pt-br": "Martelada",
                "zh-tw": "頭突",
                ja: "ぶちかます",
                ko: "한방 먹이기"
            },
            damage: 80
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2,
    boosters: []
};

export default card;
