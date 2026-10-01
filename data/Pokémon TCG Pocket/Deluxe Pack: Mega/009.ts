import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/009",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/009",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/009",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/009",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/009",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/009",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/009"
    },
    name: {
        en: "Celebi",
        fr: "Celebi",
        es: "Celebi",
        it: "Celebi",
        de: "Celebi",
        "pt-br": "Celebi",
        "zh-tw": "時拉比",
        ja: "セレビィ",
        ko: "세레비"
    },
    illustrator: "Megumi Mizutani",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 70,
    types: [
        "Grass"
    ],
    dexId: [
        251
    ],
    stage: "Basic",
    description: {
        en: "This Pokémon traveled through time to come from the future. It bolsters grass and trees with its own strength, and it can heal wounds, too.",
        fr: "Ce Pokémon venu du futur soigne les blessures et donne de la force aux plantes.",
        es: "Vino del futuro haciendo un viaje en el tiempo. Además de curar las heridas, posee la capacidad de revitalizar la hierba y los árboles.",
        it: "È giunto dal futuro, viaggiando nel tempo. Cura le ferite e dona vigore alla vegetazione.",
        de: "Dieses Pokémon kommt aus der Zukunft und ist durch die Zeit gereist. Es heilt Wunden und spendet Pflanzen Kraft.",
        "pt-br": "Este Pokémon viajou no tempo e veio do futuro. Ele revigora a grama e as árvores com sua própria força e pode curar feridas.",
        "zh-tw": "從未來穿越時光而來。能夠治癒傷痛，也會把自己的力量分給草木。",
        ja: "This Pokémon traveled through time to come from the future. It bolsters grass and trees with its own strength, and it can heal wounds, too.",
        ko: "This Pokémon traveled through time to come from the future. It bolsters grass and trees with its own strength, and it can heal wounds, too."
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Time Recall",
                fr: "Rappel Temporel",
                es: "Retroceso en el Tiempo",
                it: "Viaggiotempo",
                de: "Zeitraffer",
                "pt-br": "Retorno no Tempo",
                "zh-tw": "時光回溯",
                ja: "Time Recall",
                ko: "Time Recall"
            },
            effect: {
                en: "Each of your evolved Pokémon can use any attack from its previous Evolutions. (You still need the necessary Energy to use each attack.)",
                fr: "Chacun de vos Pokémon évolués peut utiliser les attaques de ses précédentes Évolutions. (Vous avez toujours besoin de l'Énergie nécessaire pour utiliser chaque attaque.)",
                es: "Cada uno de tus Pokémon evolucionados puede usar cualquier ataque de sus Evoluciones anteriores. (Sigues necesitando la Energía necesaria para usar cada ataque).",
                it: "Ciascuno dei tuoi Pokémon evoluti può usare gli attacchi dei suoi stadi evolutivi precedenti. Devi comunque avere l'Energia necessaria per usare quegli attacchi.",
                de: "Jedes deiner entwickelten Pokémon kann die Attacken seiner vorangegangenen Entwicklungen einsetzen. (Du benötigst jedoch die jeweils für die Attacke notwendige Energie.)",
                "pt-br": "Cada um dos seus Pokémon evoluídos pode usar qualquer ataque de suas Evoluções anteriores. (Você ainda precisa da Energia necessária para usar cada ataque.)",
                "zh-tw": "只要這隻寶可夢在場上,自己的所有進化寶可夢,可使用進化前持有的所有招式。[[需要有足夠使用招式的能量。]]",
                ja: "Each of your evolved Pokémon can use any attack from its previous Evolutions. (You still need the necessary Energy to use each attack.)",
                ko: "Each of your evolved Pokémon can use any attack from its previous Evolutions. (You still need the necessary Energy to use each attack.)"
            }
        }
    ],
    attacks: [
        {
            cost: [
                "Colorless",
                "Colorless"
            ],
            name: {
                en: "Smack",
                fr: "Claque",
                es: "Palmetazo",
                it: "Schiaffo",
                de: "Klatscher",
                "pt-br": "Estalo",
                "zh-tw": "掌擊",
                ja: "Smack",
                ko: "Smack"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
