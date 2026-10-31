import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/187",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/187",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/187",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/187",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/187",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/187",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/187",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/187"
    },
    name: {
        en: "Celebi",
        fr: "Celebi",
        es: "Celebi",
        "pt-br": "Celebi",
        "zh-tw": "時拉比",
        ja: "セレビィ",
        ko: "세레비",
        it: "Celebi",
        de: "Celebi"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 70,
    types: [
        "Grass"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Smack",
                fr: "Claque",
                es: "Palmetazo",
                it: "Schiaffo",
                de: "Klatscher",
                "pt-br": "Estalo",
                "zh-tw": "掌擊",
                ja: "ひらてうち",
                ko: "Smack"
            },
            cost: [
                "Colorless",
                "Colorless"
            ],
            damage: 30
        }
    ],
    abilities: [
        {
            name: {
                en: "Time Recall",
                fr: "Rappel Temporel",
                es: "Retroceso en el Tiempo",
                it: "Viaggiotempo",
                de: "Zeitraffer",
                "pt-br": "Retorno no Tempo",
                "zh-tw": "時光回溯",
                ja: "タイムリコール",
                ko: "Time Recall"
            },
            effect: {
                en: "Each of your evolved Pokémon can use any attack from its previous Evolutions. (You still need the necessary Energy to use each attack.)",
                fr: "Chacun de vos Pokémon évolués peut utiliser les attaques de ses précédentes Évolutions. (Vous avez toujours besoin de l'Énergie nécessaire pour utiliser chaque attaque.)",
                es: "Cada uno de tus Pokémon evolucionados puede usar cualquier ataque de sus Evoluciones anteriores. (Sigues necesitando la Energía necesaria para usar cada ataque).",
                it: "Ciascuno dei tuoi Pokémon evoluti può usare gli attacchi dei suoi stadi evolutivi precedenti. Devi comunque avere l’Energia necessaria per usare quegli attacchi.",
                de: "Jedes deiner entwickelten Pokémon kann die Attacken seiner vorangegangenen Entwicklungen einsetzen. (Du benötigst jedoch die jeweils für die Attacke notwendige Energie.)",
                "pt-br": "Cada um dos seus Pokémon evoluídos pode usar qualquer ataque de suas Evoluções anteriores. (Você ainda precisa da Energia necessária para usar cada ataque.)",
                "zh-tw": "只要這隻寶可夢在場上,自己的所有進化寶可夢,可使用進化前持有的所有招式。[[需要有足夠使用招式的能量。]]",
                ja: "このポケモンがいるかぎり、自分の進化しているポケモン全員は、進化前に持っていたワザをすべて使える。[ワザを使うためのエネルギーは必要。]",
                ko: "Each of your evolved Pokémon can use any attack from its previous Evolutions. (You still need the necessary Energy to use each attack.)"
            },
            type: "Ability"
        }
    ],
    description: {
        en: "This Pokémon traveled through time to come from the future. It bolsters grass and trees with its own strength, and it can heal wounds, too.",
        fr: "Ce Pokémon venu du futur soigne les blessures et donne de la force aux plantes.",
        es: "Vino del futuro haciendo un viaje en el tiempo. Además de curar las heridas, posee la capacidad de revitalizar la hierba y los árboles.",
        it: "È giunto dal futuro, viaggiando nel tempo. Cura le ferite e dona vigore alla vegetazione.",
        de: "Dieses Pokémon kommt aus der Zukunft und ist durch die Zeit gereist. Es heilt Wunden und spendet Pflanzen Kraft.",
        "pt-br": "Este Pokémon viajou no tempo e veio do futuro. Ele revigora a grama e as árvores com sua própria força e pode curar feridas.",
        "zh-tw": "從未來穿越時光而來。 能夠治療傷痛， 也會把自己的力量分給草木。",
        ja: "未来から 時を 渡って やって来た。 キズを 癒し 草木に 力を 分け与える。",
        ko: "This Pokémon traveled through time to come from the future. It bolsters grass and trees with its own strength, and it can heal wounds, too."
    }
};

export default card;
