import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/196",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/196",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/196",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/196",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/196",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/196",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/196",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/196",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/196"
    },
    name: {
        en: "Swablu",
        "fr": "Tylton",
        "es": "Swablu",
        "it": "Swablu",
        "de": "Wablu",
        "pt-br": "Swablu",
        "zh-tw": "青綿鳥",
        ja: "チルット",
        ko: "파비코",
    },
    illustrator: "Kanako Eo",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Colorless"],
    description: {
        en: "It can't relax if it or its surroundings are not clean.\nIt wipes off dirt with its wings.",
        "fr": "Il ne peut pas se détendre si lui-même ou ses environs ne sont pas propres.\nIl essuie la saleté avec ses ailes.",
        "es": "No puede relajarse si él o sus alrededores no están limpios.\nLimpia la suciedad con sus alas.",
        "it": "Non può rilassarsi se lui o i suoi dintorni non sono puliti.\nElimina lo sporco con le ali.",
        "de": "Es kann sich nicht entspannen, wenn es oder seine Umgebung nicht sauber sind.\nMit seinen Flügeln wischt es Schmutz weg.",
        "pt-br": "Ele não pode relaxar se ele ou seus arredores não estiverem limpos.\nEle limpa a sujeira com suas asas.",
        "zh-tw": "如果它或它的周圍環境不干淨，它就不能放鬆。\n它用翅膀擦去污垢。",
        ja: "自分も まわりも きれいでないと 落ち着かない 性格。 汚れを 見つけると 羽で ふき取る。",
        ko: "자신도 주변도 깨끗하지 않으면\n진정되지 않는 성격이다.\n더러운 것을 발견하면 날개로 닦는다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Sing",
                "fr": "Chanter",
                "es": "Cantar",
                "it": "Cantare",
                "de": "Singen",
                "pt-br": "Cantar",
                "zh-tw": "唱歌",
                ja: "うたう",
                ko: "노래하기"
            },
            cost: ["Colorless"],
            effect: {
                en: "Your opponent's Active Pokémon is now Asleep.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Endormi.",
                "es": "El Pokémon Activo de tu rival ahora está Dormido.",
                "it": "Il Pokémon attivo del tuo avversario è addormentato.",
                "de": "Das aktive Pokémon deines Gegners schläft jetzt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Adormecido.",
                "zh-tw": "你對手的活躍神奇寶貝現在處於睡眠狀態。",
                ja: "相手のバトルポケモンをねむりにする。",
                ko: "상대의 배틀 포켓몬을 잠듦으로 만든다."
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
	boosters: [
		"mega-altaria"
	]
};
export default card;
