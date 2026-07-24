import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/079",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/079"
    },
    name: {
        en: "Riolu",
        fr: "Riolu",
        es: "Riolu",
        it: "Riolu",
        de: "Riolu",
        "pt-br": "Riolu",
        "zh-tw": "利歐路",
        ko: "리오르",
        ja: "リオル"
    },
    illustrator: "Krgc",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fighting"],
    dexId: [447],
    stage: "Basic",
    description: {
        en: "It has the peculiar power of being able to see emotions, such as joy and rage, in the form of waves.",
        fr: "Il a le pouvoir particulier de pouvoir voir les émotions, comme la joie et la rage, sous forme de vagues.",
        es: "Tiene el peculiar poder de poder ver emociones, como la alegría y la rabia, en forma de ondas.",
        it: "Ha il potere peculiare di poter vedere le emozioni, come la gioia e la rabbia, sotto forma di onde.",
        de: "Es hat die besondere Fähigkeit, Emotionen wie Freude und Wut in Form von Wellen zu sehen.",
        "pt-br": "Tem o poder peculiar de poder ver emoções, como alegria e raiva, em forma de ondas.",
        "zh-tw": "它具有一種特殊的力量，能夠以波浪的形式看到情緒，例如喜悅和憤怒。"
    },
    attacks: [
        {
            cost: ["Fighting"],
            name: {
                en: "Fighting Fist",
                fr: "Poing Combattant",
                es: "Puño Luchador",
                it: "Pugno Combattente",
                de: "Kampffaust",
                "pt-br": "Punhos de Guerreiro",
                "zh-tw": "鬥志之拳"
            },
            effect: {
                en: "If your opponent's Active Pokémon is a Pokémon ex, this attack does 30 more damage.",
                fr: "Si le Pokémon Actif de votre adversaire est un ex Pokémon, cette attaque inflige 30 dégâts supplémentaires.",
                es: "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 30 daños más.",
                it: "Se il Pokémon attivo del tuo avversario è un Pokémon ex, questo attacco infligge 30 danni in più.",
                de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-Ex ist, fügt dieser Angriff 30 weitere Schadenspunkte zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente for um Pokémon ex, este ataque causará 30 de dano a mais.",
                "zh-tw": "如果對手的現役寶可夢是前寶可夢，則此攻擊造成的傷害增加 30 點。"
            },
            damage: "10+"
        }
    ],
    weaknesses: [
        {
            type: "Psychic",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
