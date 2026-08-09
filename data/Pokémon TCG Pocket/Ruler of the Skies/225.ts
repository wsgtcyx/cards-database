import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/225",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/225",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/225",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/225",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/225",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/225",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/225"
    },
    name: {
        en: "Alolan Ninetales ex",
        fr: "Feunard d'Alola-ex",
        es: "Ninetales de Alola ex",
        it: "Ninetales di Alola-ex",
        de: "Alola-Vulnona-ex",
        "pt-br": "Ninetales de Alola ex",
        "zh-tw": "阿羅拉九尾ex",
        ko: "알로라 나인테일 ex",
        ja: "アローラ キュウコンex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 150,
    types: ["Water"],
    dexId: [38],
    evolveFrom: {
        en: "Alolan Vulpix",
        fr: "Goupix d'Alola",
        es: "Vulpix de Alola",
        it: "Vulpix di Alola",
        de: "Alola-Vulpix",
        "pt-br": "Vulpix de Alola",
        "zh-tw": "阿羅拉六尾",
        ko: "알로라 식스테일",
        ja: "アローラ ロコン"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: ["Water", "Water"],
            name: {
                en: "Binding Snow",
                fr: "Entrave Enneigée",
                es: "Nieve Confinadora",
                it: "Legare la neve",
                de: "Schnee binden",
                "pt-br": "Detenção Nevada",
                "zh-tw": "冰雪制約"
            },
            effect: {
                en: "During your opponent's next turn, they can't take any Energy from their Energy Zone to attach to their Active Pokémon.",
                fr: "Pendant le prochain tour de votre adversaire, il ne peut prendre aucune Énergie de sa zone Énergie pour en attacher à son Pokémon Actif.",
                es: "Durante el próximo turno de tu rival, este no puede unir ninguna Energía de su área de Energía a su Pokémon Activo.",
                it: "Durante il suo prossimo turno, il tuo avversario non può prendere nessuna Energia dalla sua Zona Energia per assegnarla al suo Pokémon attivo.",
                de: "Dein Gegner kann während seines nächsten Zuges keine Energie aus seinem Energiebereich an sein Aktives Pokémon anlegen.",
                "pt-br": "Durante o próximo turno do seu oponente, ele não poderá pegar nenhuma Energia da Zona de Energia para ligar ao Pokémon Ativo dele.",
                "zh-tw": "在下個對手的回合,對手無法從能量區抽出能量,附於戰鬥寶可夢身上。"
            },
            damage: 80
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
