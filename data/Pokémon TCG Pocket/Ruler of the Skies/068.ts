import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/068",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/068",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/068",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/068",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/068",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/068",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/068"
    },
    name: {
        en: "Mime Jr.",
        fr: "Mime Jr.",
        es: "Mime Jr.",
        it: "Mime Jr.",
        de: "Pantimimi",
        "pt-br": "Mime Jr.",
        "zh-tw": "魔尼尼",
        ko: "흉내내",
        ja: "マネネ"
    },
    illustrator: "Miki Tanaka",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 30,
    types: ["Psychic"],
    dexId: [439],
    stage: "Basic",
    description: {
        en: "It looks for a Mr. Rime that’s a good dancer and carefully copies the Mr. Rime’s steps like an apprentice.",
        fr: "Il considère les meilleurs danseurs parmi\nles M. Glaquette comme ses maîtres\net s’évertue à mimer leurs mouvements.",
        es: "Su admiración por Mr. Rime, un consumado\ndanzarín, lo lleva a seguirlo para aprender de él\ne imitar con esmero sus pasos de baile.",
        it: "Considera Mr. Rime il proprio maestro\nper le sue doti di ballerino, e ne imita\ndiligentemente i passi di danza.",
        de: "Es folgt dem talentierten Tänzer Pantifrost wie\nein Schüler und imitiert seine Schritte.",
        "zh-tw": "像徒弟一樣跟隨著\n擅長跳舞的踏冰人偶，\n拼命模仿牠的舞步。"
    },
    attacks: [
        {
            name: {
                en: "Mime-y Shuffle",
                fr: "Danse qui Copie",
                es: "Mimomezcla",
                "pt-br": "Embaralhada Imitante",
                "zh-tw": "擬擬重抽",
                "it": "Mimimischiata",
                "de": "Imitierendes Mischen"
            },
            effect: {
                en: "Shuffle your hand into your deck. Draw a card for each card in your opponent's hand.",
                fr: "Mélangez votre main avec votre deck. Piochez une carte pour chaque carte dans la main de votre adversaire.",
                es: "Pon las cartas de tu mano en tu baraja y barájalas todas. Roba 1 carta por cada carta en la mano de tu rival.",
                it: "Mescola la tua mano nel tuo mazzo. Pesca una carta per ogni carta nella mano del tuo avversario.",
                de: "Mische deine Hand in dein Deck. Ziehe für jede Karte in der Hand deines Gegners eine Karte.",
                "pt-br": "Embaralhe a sua mão no seu baralho. Compre uma carta para cada carta na mão do seu oponente.",
                "zh-tw": "將自己的手牌全部放回牌庫。從自己的牌庫抽出與對手的手牌張數相同數量的卡。"
            }
        }
    ],
    retreat: 0
};
export default card;
