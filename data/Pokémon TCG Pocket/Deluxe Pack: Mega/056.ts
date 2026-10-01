import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/056",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/056",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/056",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/056",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/056",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/056",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/056"
    },
    name: {
        en: "Alolan Ninetales ex",
        fr: "Feunard d'Alola-ex",
        es: "Ninetales de Alola ex",
        it: "Ninetales di Alola-ex",
        de: "Alola-Vulnona-ex",
        "pt-br": "Ninetales de Alola ex",
        "zh-tw": "阿羅拉九尾ex",
        ja: "アローラキュウコンex",
        ko: "알로라나인테일 ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 150,
    types: [
        "Water"
    ],
    evolveFrom: {
        en: "Alolan Vulpix",
        fr: "Goupix d'Alola",
        es: "Vulpix de Alola",
        it: "Vulpix di Alola",
        de: "Alola-Vulpix",
        "pt-br": "Vulpix de Alola",
        "zh-tw": "阿羅拉六尾",
        ja: "Alolan Vulpix",
        ko: "Alolan Vulpix"
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Binding Snow",
                fr: "Entrave Enneigée",
                es: "Nieve Confinadora",
                it: "Tormenta Vincolante",
                de: "Fesselnder Schnee",
                "pt-br": "Detenção Nevada",
                "zh-tw": "冰雪制約",
                ja: "Binding Snow",
                ko: "Binding Snow"
            },
            damage: 80,
            cost: [
                "Water",
                "Water"
            ],
            effect: {
                en: "During your opponent's next turn, they can't take any Energy from their Energy Zone to attach to their Active Pokémon.",
                fr: "Pendant le prochain tour de votre adversaire, il ne peut prendre aucune Énergie de sa zone Énergie pour en attacher à son Pokémon Actif.",
                es: "Durante el próximo turno de tu rival, este no puede unir ninguna Energía de su área de Energía a su Pokémon Activo.",
                it: "Durante il suo prossimo turno, il tuo avversario non può prendere nessuna Energia dalla sua Zona Energia per assegnarla al suo Pokémon attivo.",
                de: "Dein Gegner kann während seines nächsten Zuges keine Energie aus seinem Energiebereich an sein Aktives Pokémon anlegen.",
                "pt-br": "Durante o próximo turno do seu oponente, ele não poderá pegar nenhuma Energia da Zona de Energia para ligar ao Pokémon Ativo dele.",
                "zh-tw": "在下個對手的回合,對手無法從能量區抽出能量,附於戰鬥寶可夢身上。",
                ja: "During your opponent's next turn, they can't take any Energy from their Energy Zone to attach to their Active Pokémon.",
                ko: "During your opponent's next turn, they can't take any Energy from their Energy Zone to attach to their Active Pokémon."
            }
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
