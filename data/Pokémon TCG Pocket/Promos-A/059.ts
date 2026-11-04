import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/059/2530085d5003118f",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/059/2530085d5003118f",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/059/2530085d5003118f",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/059/2530085d5003118f",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/059/2530085d5003118f",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/059/2530085d5003118f",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/059/2530085d5003118f",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/059/2530085d5003118f",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/059/2530085d5003118f"
    },
    name: {
        en: "Riolu",
        fr: "Riolu",
        es: "Riolu",
        it: "Riolu",
        de: "Riolu",
        'pt-br': "Riolu",
        ja: "リオル",
        ko: "리오르",
        "zh-tw": "利歐路",
    },
    illustrator: "Akira Komayama",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    description: {
        en: "They communicate with one another using their\nauras. They are able to run all through the night.",
        fr: "Les Riolu communiquent entre eux à l'aide de\nleur aura. Ils sont capables de courir toute la nuit.",
        es: "Se comunica con los suyos emitiendo ondas.\nPuede pasarse toda una noche corriendo.",
        it: "Comunica con i suoi simili tramite l'aura.\nPuò correre un'intera notte senza stancarsi.",
        de: "Dieses Pokémon nutzt seine Aura, um mit seinen\nArtgenossen zu kommunizieren. Es kann eine\nganze Nacht lang laufen.",
        'pt-br': "Eles comunicam-se uns com os outros usando suas auras.\nSão capazes de correr a noite inteira.",
        ja: "仲間同士で 波動を 出して コミュニケーションを とっている。 一晩中 走り続けられる。",
        ko: "파동을 내서\n동료끼리 의사소통을 한다.\n밤새도록 계속 달릴 수 있다.",
        "zh-tw": "夥伴們之間會透過發出波導來與彼此溝通。跑步可以跑上一整晚。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Punch",
                fr: "Koud'Poing",
                es: "Puño",
                it: "Pugno",
                de: "Boxhieb",
                'pt-br': "Soco",
                ja: "パンチ",
                ko: "펀치",
                "zh-tw": "出拳"
            },
            cost: ["Fighting", "Fighting"],
            damage: 40
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 1,
    boosters: []
};
export default card;
