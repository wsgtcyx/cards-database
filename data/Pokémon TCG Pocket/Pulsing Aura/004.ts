import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/004",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/004",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/004",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/004",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/004",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/004"
    },
    name: {
        en: "Celebi",
        fr: "Celebi",
        es: "Celebi",
        it: "Celebi",
        de: "Celebi",
        "pt-br": "Celebi",
        "zh-tw": "時拉比",
        ko: "세레비",
        ja: "セレビィ"
    },
    illustrator: "Megumi Mizutani",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Grass"],
    dexId: [251],
    stage: "Basic",
    description: {
        en: "This Pokémon traveled through time to come from the future. It bolsters grass and trees with its own strength, and it can heal wounds, too.",
        fr: "Ce Pokémon venu du futur soigne les blessures\net donne de la force aux plantes.",
        es: "Vino del futuro haciendo un viaje en el tiempo.\nAdemás de curar las heridas, posee la capacidad\nde revitalizar la hierba y los árboles.",
        it: "È giunto dal futuro, viaggiando nel tempo.\nCura le ferite e dona vigore alla vegetazione.",
        de: "Dieses Pokémon kommt aus der Zukunft und ist\ndurch die Zeit gereist. Es heilt Wunden und\nspendet Pflanzen Kraft.",
        "pt-br": "Este Pokémon viajou no tempo para vir do futuro. Ele fortalece a grama e as árvores com sua própria força e também pode curar feridas.",
        "zh-tw": "從未來穿越時光而來。\n能夠治癒傷痛，\n也會把自己的力量分給草木。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Time Recall",
                fr: "Rappel de l'heure",
                es: "Recuperación del tiempo",
                it: "Richiamo temporale",
                de: "Zeitrückruf",
                "pt-br": "Recuperação de tempo",
                "zh-tw": "時光回溯"
            },
            effect: {
                en: "Each of your evolved Pokémon can use any attack from its previous Evolutions. (You still need the necessary Energy to use each attack.)",
                fr: "Chacun de vos Pokémon évolués peut utiliser n'importe quelle attaque de ses évolutions précédentes. (Vous avez toujours besoin de l'énergie nécessaire pour utiliser chaque attaque.)",
                es: "Cada uno de tus Pokémon evolucionados puede usar cualquier ataque de sus Evoluciones anteriores. (Aún necesitas la energía necesaria para usar cada ataque).",
                it: "Ciascuno dei tuoi Pokémon evoluti può utilizzare qualsiasi attacco delle sue evoluzioni precedenti. (Hai ancora bisogno dell'energia necessaria per usare ogni attacco.)",
                de: "Jedes deiner entwickelten Pokémon kann jeden Angriff seiner vorherigen Entwicklungen verwenden. (Sie benötigen immer noch die nötige Energie, um jeden Angriff auszuführen.)",
                "pt-br": "Cada um dos seus Pokémon evoluídos pode usar qualquer ataque de suas evoluções anteriores. (Você ainda precisa da energia necessária para usar cada ataque.)",
                "zh-tw": "每隻進化後的寶可夢都可以使用先前進化中的任何攻擊。 （你仍然需要必要的能量來使用每次攻擊。）"
            }
        }
    ],
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Smack",
                fr: "Claque",
                es: "Palmetazo",
                it: "Schiaffo",
                de: "Klatscher",
                "pt-br": "Estalo",
                "zh-tw": "掌擊"
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
