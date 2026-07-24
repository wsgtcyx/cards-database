import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/165",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/165"
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
        "zh-tw": "如果超能妙喵持續釋放出強大的精神能量，就會對自己的身體造成傷害。"
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
                "zh-tw": "惑耳"
            },
            effect: {
                en: "Once during your turn, if this Pokémon is in the Active Spot, you may make your opponent's Active Pokémon Confused.",
                fr: "Une fois pendant votre tour, si ce Pokémon est dans le Point Actif, vous pouvez confondre le Pokémon Actif de votre adversaire.",
                es: "Una vez durante tu turno, si este Pokémon está en el Punto Activo, puedes confundir al Pokémon Activo de tu rival.",
                it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi confondere il Pokémon attivo del tuo avversario.",
                de: "Wenn sich dieses Pokémon einmal während deines Zuges an der aktiven Stelle befindet, kannst du das aktive Pokémon deines Gegners verwirren.",
                "pt-br": "Uma vez durante o seu turno, se este Pokémon estiver no Local Ativo, você poderá confundir o Pokémon Ativo do seu oponente.",
                "zh-tw": "在你的回合中，如果這隻寶可夢位於活躍位置，你可以讓對手的活躍寶可夢陷入混亂。"
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
                "zh-tw": "精神射擊"
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
