import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/227",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/227",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/227",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/227",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/227",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/227",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4b/227",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4b/227",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4b/227"
    },
    name: {
        en: "Zubat",
        "fr": "Nosferapti",
        "es": "Zubat",
        "it": "Zubat",
        "de": "Zubat",
        "pt-br": "Zubat",
        "zh-tw": "超音蝠",
        ja: "ズバット",
        ko: "주뱃",
    },
    illustrator: "Sekio",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Darkness"],
    description: {
        en: "It emits ultrasonic waves from its mouth to check\nits surroundings. Even in tight caves, Zubat flies\naround with skill.",
        "fr": "Il émet des ondes ultrasonores depuis sa bouche pour vérifier\nses environs. Même dans les grottes étroites, Zubat vole\nautour avec habileté.",
        "es": "Emite ondas ultrasónicas desde su boca para comprobar\nsus alrededores. Incluso en cuevas estrechas, Zubat vuela\nalrededor con habilidad.",
        "it": "Emette onde ultrasoniche dalla bocca per controllare\ni suoi dintorni. Anche nelle caverne strette, Zubat vola\nin giro con abilità.",
        "de": "Zur Überprüfung sendet es Ultraschallwellen aus seinem Mund aus\nseine Umgebung. Selbst in engen Höhlen fliegt Zubat\nmit Geschick herumlaufen.",
        "pt-br": "Ele emite ondas ultrassônicas de sua boca para verificar\nseu entorno. Mesmo em cavernas apertadas, Zubat voa\npor aí com habilidade.",
        "zh-tw": "它從嘴裡發射超聲波來檢查\n它的周圍環境。即使在狹窄的洞穴中，祖巴特也會飛翔\n周圍有技巧。",
        ja: "口から 出す 超音波で まわりの 様子を 探る。 狭い 洞窟も 器用に 飛びまわる。",
        ko: "입에서 내보내는 초음파로\n주위의 상황을 살핀다. 좁은\n동굴에서도 능숙하게 날아다닌다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Bite",
                "fr": "Mordre",
                "es": "Morder",
                "it": "Morso",
                "de": "Beißen",
                "pt-br": "Morder",
                "zh-tw": "咬",
                ja: "かみつく",
                ko: "물기"
            },
            damage: 20,
            cost: ["Darkness"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
