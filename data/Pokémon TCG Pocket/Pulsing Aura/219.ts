import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/219",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/219",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/219",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/219",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/219",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/219"
    },
    name: {
        en: "Steelix",
        fr: "Steelix",
        es: "Steelix",
        it: "Steelix",
        de: "Stahlos",
        "pt-br": "Steelix",
        "zh-tw": "大鋼蛇",
        ko: "강철톤",
        ja: "ハガネール"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 150,
    types: ["Metal"],
    dexId: [208],
    evolveFrom: {
        en: "Onix",
        fr: "Onix",
        es: "Onix",
        it: "Onix",
        de: "Onix",
        "pt-br": "Onix",
        "zh-tw": "大岩蛇",
        ko: "롱스톤",
        ja: "イワーク"
    },
    stage: "Stage1",
    description: {
        en: "It is thought its body transformed as a result of iron accumulating internally from swallowing soil.",
        fr: "On pense que son corps s’est transformé à force\nd’avaler le fer contenu dans la terre en creusant.",
        es: "Se cree que su cuerpo se ha ido transformando\npor el hierro acumulado en la tierra que ha\ningerido.",
        it: "Si pensa che si sia trasformato a causa del\nferro contenuto nella terra che mangia.",
        de: "Man glaubt, dass sich sein Körper aufgrund des\nSchluckens von eisenhaltiger Erde verwandelt\nhabe.",
        "pt-br": "Acredita-se que seu corpo tenha se transformado como resultado do acúmulo de ferro internamente ao engolir terra.",
        "zh-tw": "人們認為牠的身體是因為\n堆積了和泥土一起吞下的\n鐵質，才會發生變化的。"
    },
    attacks: [
        {
            cost: ["Metal", "Metal", "Colorless", "Colorless"],
            name: {
                en: "Metal Defender",
                fr: "Défense Métallique",
                es: "Defensor Metálico",
                it: "Metalloscudo",
                de: "Metallverteidiger",
                "pt-br": "Defensor Metálico",
                "zh-tw": "金屬防禦"
            },
            effect: {
                en: "During your opponent's next turn, this Pokémon has no Weakness.",
                fr: "Lors du prochain tour de votre adversaire, ce Pokémon n'a aucune Faiblesse.",
                es: "Durante el próximo turno de tu rival, este Pokémon no tiene Debilidad.",
                it: "Durante il prossimo turno del tuo avversario, questo Pokémon non ha debolezze.",
                de: "Während des nächsten Zuges deines Gegners hat dieses Pokémon keine Schwäche.",
                "pt-br": "Durante o próximo turno do seu oponente, este Pokémon não terá Fraqueza.",
                "zh-tw": "在對手的下一個回合中，這只寶可夢沒有弱點。"
            },
            damage: 100
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 4
};

export default card;
