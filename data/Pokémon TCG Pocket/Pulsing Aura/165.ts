import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/165",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/165",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/165",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/165",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/165",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/165",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/165",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B3/165",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B3/165"
    },
    name: {
        en: "Meowstic",
        fr: "Mistigrix",
        es: "Meowstic",
        it: "Meowstic",
        de: "Psiaugon",
        "pt-br": "Meowstic",
        "zh-tw": "超能妙喵",
        ko: "냐오닉스",
        ja: "ニャオニクス"
    },
    illustrator: "sowsow",
    rarity: "One Star",
    category: "Pokemon",
    hp: 90,
    types: ["Psychic"],
    dexId: [678],
    evolveFrom: {
        en: "Espurr",
        fr: "Psystigri",
        es: "Espurr",
        it: "Espurr",
        de: "Psiau",
        "pt-br": "Espurr",
        "zh-tw": "妙喵",
        ko: "냐스퍼",
        ja: "ニャスパー"
    },
    stage: "Stage1",
    description: {
        en: "If Meowstic continuously emits its powerful psychic energy, it will damage its own body.",
        fr: "Si Mistigrix émet continuellement sa puissante énergie psychique, il endommagera son propre corps.",
        es: "Si Meowstic emite continuamente su poderosa energía psíquica, dañará su propio cuerpo.",
        it: "Se Meowstic emette continuamente la sua potente energia psichica, danneggerà il proprio corpo.",
        de: "Wenn Psiaugon kontinuierlich seine starke psychische Energie ausstrahlt, wird es seinen eigenen Körper schädigen.",
        "pt-br": "Se Meowstic emitir continuamente sua poderosa energia psíquica, danificará seu próprio corpo.",
        "zh-tw": "如果超能妙喵持續釋放出強大的精神能量，就會對自己的身體造成傷害。",
        ja: "強力な サイコパワーを 出し続けていると ニャオニクスの 肉体にも ダメージが およぶ。",
        ko: "강력한 사이코 파워를\n계속해서 사용하면\n냐오닉스의 육체에도 손상이 간다."
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Perplexing Ears",
                fr: "Des oreilles perplexes",
                es: "Orejas desconcertantes",
                it: "Orecchie sconcertanti",
                de: "Verwirrende Ohren",
                "pt-br": "Orelhas desconcertantes",
                "zh-tw": "惑耳",
                ja: "まどわすみみ",
                ko: "혼란시키는 귀"
            },
            effect: {
                en: "Once during your turn, if this Pokémon is in the Active Spot, you may make your opponent's Active Pokémon Confused.",
                fr: "Une fois pendant votre tour, si ce Pokémon est dans le Point Actif, vous pouvez confondre le Pokémon Actif de votre adversaire.",
                es: "Una vez durante tu turno, si este Pokémon está en el Punto Activo, puedes confundir al Pokémon Activo de tu rival.",
                it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi confondere il Pokémon attivo del tuo avversario.",
                de: "Wenn sich dieses Pokémon einmal während deines Zuges an der aktiven Stelle befindet, kannst du das aktive Pokémon deines Gegners verwirren.",
                "pt-br": "Uma vez durante o seu turno, se este Pokémon estiver no Local Ativo, você poderá confundir o Pokémon Ativo do seu oponente.",
                "zh-tw": "在你的回合中，如果這隻寶可夢位於活躍位置，你可以讓對手的活躍寶可夢陷入混亂。",
                ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。相手のバトルポケモンをこんらんにする。",
                ko: "이 포켓몬이 배틀필드에 있다면 자신의 차례에 1번 사용할 수 있다. 상대의 배틀 포켓몬을 혼란으로 만든다."
            }
        }
    ],
    attacks: [
        {
            cost: ["Psychic"],
            name: {
                en: "Psyshot",
                fr: "Piqûre Psy",
                es: "Disparo Psi",
                it: "Psicosparo",
                de: "Psychoschuss",
                "pt-br": "Tiro Psíquico",
                "zh-tw": "精神射擊",
                ja: "サイコショット",
                ko: "사이코숏"
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
