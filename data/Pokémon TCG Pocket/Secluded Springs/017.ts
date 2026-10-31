import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4a/017",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4a/017",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4a/017",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4a/017",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4a/017",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4a/017",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4a/017",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4a/017",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4a/017"
    },
    name: {
        en: "Slowpoke",
        "fr": "Ramoloss",
        "es": "Slowpoke",
        "it": "Slowpoke",
        "de": "Flegmon",
        "pt-br": "Slowpoke",
        "zh-tw": "呆呆獸",
        ja: "ヤドン",
        ko: "야돈"
    },
    illustrator: "Saya Tsuruta",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "It is incredibly slow and dopey. It takes five\nseconds for it to feel pain when under attack.",
        "fr": "C'est incroyablement lent et stupide. Il en faut cinq\nsecondes pour qu'il ressente de la douleur lorsqu'il est attaqué.",
        "es": "Es increíblemente lento y tonto. se necesitan cinco\nsegundos para que sienta dolor cuando está siendo atacado.",
        "it": "È incredibilmente lento e stupido. Ce ne vogliono cinque\nsecondi perché senta dolore quando è sotto attacco.",
        "de": "Es ist unglaublich langsam und blöd. Es dauert fünf\nEs dauert mehrere Sekunden, bis es bei einem Angriff Schmerzen verspürt.",
        "pt-br": "É incrivelmente lento e estúpido. Leva cinco\nsegundos para sentir dor quando estiver sob ataque.",
        "zh-tw": "它非常緩慢且愚蠢。需要五個\n受到攻擊時它會感到疼痛幾秒鐘。",
        ja: "動きが のろく 間抜け。 叩かれても 5秒 たってから 痛さを 感じるほどだ。",
        ko: "움직임이 둔하고 멍청하다.\n맞아도 5초는 지나야\n아픔을 느낄 정도다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Water Gun",
                "fr": "Pistolet à eau",
                "es": "Pistola de agua",
                "it": "Pistola ad acqua",
                "de": "Wasserpistole",
                "pt-br": "Pistola de água",
                "zh-tw": "水槍",
                ja: "みずでっぽう",
                ko: "물대포"
            },
            damage: 20,
            cost: ["Water"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
