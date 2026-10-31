import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/152",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/152",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/152",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/152",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/152",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/152",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4b/152",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4b/152",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4b/152"
    },
    name: {
        en: "Gastly",
        "fr": "Fantominus",
        "es": "Gastly",
        "it": "Gastly",
        "de": "Nebulak",
        "pt-br": "Gastly",
        "zh-tw": "鬼斯",
        ja: "ゴース",
        ko: "고오스",
    },
    illustrator: "Masako Yamashita",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    description: {
        en: "It wraps its opponent in its gas-like body,\nslowly weakening its prey by poisoning it\nthrough the skin.",
        "fr": "Il enveloppe son adversaire dans son corps gazeux,\naffaiblir lentement sa proie en l'empoisonnant\nà travers la peau.",
        "es": "Envuelve a su oponente en su cuerpo gaseoso,\ndebilitando lentamente a su presa envenenándola\na través de la piel.",
        "it": "Avvolge l'avversario nel suo corpo gassoso,\nindebolendo lentamente la sua preda avvelenandola\nattraverso la pelle.",
        "de": "Es hüllt seinen Gegner in seinen gasähnlichen Körper,\nschwächt seine Beute langsam, indem er sie vergiftet\ndurch die Haut.",
        "pt-br": "Ele envolve seu oponente em seu corpo gasoso,\nenfraquecendo lentamente sua presa, envenenando-a\natravés da pele.",
        "zh-tw": "用氣體般的身體包裹對手，\n通過毒害獵物慢慢削弱它的力量\n通過皮膚。",
        ja: "ガス状の 体で まとわりつき 獲物の 皮膚から 少しずつ 毒を 送り込んで 弱らせる。",
        ko: "가스로 된 몸으로 휘감은 다음\n먹이의 피부를 통해 조금씩\n독을 흘려보내어 약하게 만든다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Suffocating Gas",
                "fr": "Gaz suffocant",
                "es": "Gas asfixiante",
                "it": "Gas soffocante",
                "de": "Erstickendes Gas",
                "pt-br": "Gás sufocante",
                "zh-tw": "窒息性氣體",
                ja: "ガスでつつむ",
                ko: "가스로감싸기"
            },
            damage: 20,
            cost: ["Psychic"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
