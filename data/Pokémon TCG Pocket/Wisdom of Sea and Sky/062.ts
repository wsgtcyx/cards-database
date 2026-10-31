import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/062",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/062",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/062",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/062",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/062",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/062",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/062",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4/062",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4/062"
    },
    name: {
        en: "Ducklett",
        "fr": "Couaneton",
        "es": "Ducklett",
        "it": "Ducklett",
        "de": "Piccolente",
        "pt-br": "Ducklett",
        "zh-tw": "鴨寶寶",
        ja: "コアルヒー",
        ko: "꼬지보리",
    },
    illustrator: "MAHOU",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "When attacked, it uses its feathers to splash water,\nescaping under cover of the spray.",
        "fr": "Lorsqu'il est attaqué, il utilise ses plumes pour projeter de l'eau,\ns'échappant sous le couvert des embruns.",
        "es": "Cuando es atacado, utiliza sus plumas para salpicar agua,\nescapando al amparo del spray.",
        "it": "Quando viene attaccato, usa le sue piume per schizzare l'acqua,\nscappare sotto la copertura degli spruzzi.",
        "de": "Wenn es angegriffen wird, spritzt es mit seinen Federn Wasser,\nunter dem Schutz des Sprays entweicht.",
        "pt-br": "Quando atacado, usa suas penas para espirrar água,\nescapando sob a cobertura do spray.",
        "zh-tw": "當受到攻擊時，它會用羽毛濺水，\n在噴霧的掩護下逃脫。",
        ja: "敵に 襲われると 全身の 羽毛から 水しぶきを 出す。 水煙に 紛れて 逃げるのだ。",
        ko: "상대에게 공격당하면 전신의\n깃털에서 물보라를 내뿜는다.\n물안개에 숨어들어 도망친다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Rain Splash",
                "fr": "Éclaboussure de pluie",
                "es": "Salpicaduras de lluvia",
                "it": "Spruzzi di pioggia",
                "de": "Regenspritzer",
                "pt-br": "Respingo de chuva",
                "zh-tw": "雨濺",
                ja: "みずかけ",
                ko: "물뿌리기"
            },
            damage: 10,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
