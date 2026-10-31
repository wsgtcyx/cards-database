import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/183",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/183",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/183",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/183",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/183",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/183",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4b/183",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4b/183",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4b/183"
    },
    name: {
        en: "Cosmoem",
        "fr": "Cosmovum",
        "es": "Cosmoem",
        "it": "Cosmoem",
        "de": "Cosmovum",
        "pt-br": "Cosmoem",
        "zh-tw": "科斯莫姆",
        ja: "コスモウム",
        ko: "코스모움"
    },
    illustrator: "Aya Kusube",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Psychic"],
    evolveFrom: {
        en: "Cosmog",
        "fr": "Cosmog",
        "es": "Cosmog",
        "it": "Cosmog",
        "de": "Cosmog",
        "pt-br": "Cosmog",
        "zh-tw": "科斯莫古",
        ja: "コスモッグ",
        ko: "코스모그",
    },
    description: {
        en: "The king who ruled Alola in times of antiquity called it\nthe \"cocoon of the stars\" and built an altar to worship it.",
        "fr": "Le roi qui dirigeait Alola dans l'Antiquité l'appelait\nle « cocon des étoiles » et construisit un autel pour l'adorer.",
        "es": "El rey que gobernó Alola en tiempos de la antigüedad la llamó\nel \"capullo de las estrellas\" y construyó un altar para adorarlo.",
        "it": "Lo chiamò il re che governava Alola nell'antichità\nil \"bozzolo delle stelle\" e costruì un altare per venerarlo.",
        "de": "Der König, der in der Antike über Alola herrschte, nannte es\nden „Kokon der Sterne“ und baute einen Altar, um ihn anzubeten.",
        "pt-br": "O rei que governou Alola nos tempos da antiguidade chamou-lhe\no \"casulo das estrelas\" e construiu um altar para adorá-lo.",
        "zh-tw": "古代統治阿羅拉的國王稱其為\n並築壇祭祀“星之繭”。",
        ja: "太古 アローラを 支配 していた 王様は 星の繭と 呼んで 崇めるための 祭壇を 作った。",
        ko: "먼 옛날 알로라를 지배하던\n왕은 별의 고치라고 부르며\n숭상하기 위한 제단을 만들었다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Stiffen",
                "fr": "Raidir",
                "es": "Endurecer",
                "it": "Irrigidirsi",
                "de": "Versteifen",
                "pt-br": "Endurecer",
                "zh-tw": "變硬",
                ja: "かたまる",
                ko: "딱딱해지기"
            },
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "During your opponent's next turn, this Pokémon takes −50 damage from attacks.",
                "fr": "Lors du prochain tour de votre adversaire, ce Pokémon subit -50 dégâts des attaques.",
                "es": "Durante el próximo turno de tu rival, este Pokémon recibe -50 de daño por ataques.",
                "it": "Durante il prossimo turno del tuo avversario, questo Pokémon subisce -50 danni dagli attacchi.",
                "de": "Während des nächsten Zuges deines Gegners erleidet dieses Pokémon −50 Schadenspunkte durch Angriffe.",
                "pt-br": "Durante o próximo turno do seu oponente, este Pokémon sofrerá −50 de dano de ataques.",
                "zh-tw": "在對手的下一個回合中，這只神奇寶貝受到的攻擊傷害為-50。",
                ja: "次の相手の番、このポケモンが受けるワザのダメージを-50する。",
                ko: "상대의 다음 차례에 이 포켓몬이 받는 기술의 데미지를 -50한다."
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 3
};
export default card;
