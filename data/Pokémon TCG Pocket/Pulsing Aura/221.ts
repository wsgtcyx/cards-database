import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/221",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/221",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/221",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/221",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/221",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/221"
    },
    name: {
        en: "Blissey",
        fr: "Leuphorie",
        es: "Blissey",
        it: "Blissey",
        de: "Heiteira",
        "pt-br": "Blissey",
        "zh-tw": "幸福蛋",
        ko: "해피너스",
        ja: "ハピナス"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 140,
    types: ["Colorless"],
    dexId: [242],
    evolveFrom: {
        en: "Chansey",
        fr: "Leveinard",
        es: "Chansey",
        it: "Chansey",
        de: "Chaneira",
        "pt-br": "Chansey",
        "zh-tw": "吉利蛋",
        ko: "럭키",
        ja: "ラッキー"
    },
    stage: "Stage1",
    description: {
        en: "Whenever a Blissey finds a weakened Pokémon, it will share its egg and offer its care until the other Pokémon is all better.",
        fr: "Lorsqu’il croise un Pokémon affaibli, il partage\nson œuf avec ce dernier et lui prodigue des soins\njusqu’à ce qu’il soit rétabli.",
        es: "Si se encuentra un Pokémon enfermo, comparte\nsu huevo con él y lo cuida hasta que se recupera.",
        it: "Quando incontra un Pokémon indebolito,\ncondivide con lui il proprio uovo e lo accudisce\nfino alla completa guarigione.",
        de: "Stößt Heiteira auf geschwächte Pokémon, teilt es\nsein Ei mit ihnen und pflegt sie wieder gesund.",
        "pt-br": "Sempre que um Blissey encontra um Pokémon enfraquecido, ele compartilhará seu ovo e oferecerá cuidados até que o outro Pokémon melhore.",
        "zh-tw": "發現虛弱的寶可夢時就會\n把自己的蛋分給牠，並且\n一直照顧對方直到牠痊癒。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Happiness Supplement",
                fr: "Supplément Bonheur",
                es: "Suplemento de felicidad",
                it: "Supplemento di felicità",
                de: "Glücksergänzung",
                "pt-br": "Suplemento de Felicidade",
                "zh-tw": "幸福補給"
            },
            effect: {
                en: "Once during your turn, you may remove a random Special Condition from your Active Pokémon.",
                fr: "Une fois pendant votre tour, vous pouvez supprimer une Condition Spéciale aléatoire de votre Pokémon Actif.",
                es: "Una vez durante tu turno, puedes eliminar una Condición Especial aleatoria de tu Pokémon Activo.",
                it: "Una sola volta durante il tuo turno, puoi rimuovere una condizione speciale casuale dal tuo Pokémon attivo.",
                de: "Einmal während deines Zuges kannst du einen zufälligen Spezialzustand von deinem Aktiven Pokémon entfernen.",
                "pt-br": "Uma vez durante o seu turno, você pode remover uma Condição Especial aleatória do seu Pokémon Ativo.",
                "zh-tw": "在你的回合中，你可以從你的活躍寶可夢中隨機移除一個特殊狀態。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Rolling Tackle",
                fr: "Roulé-Boulé",
                es: "Placaje Giro",
                it: "Rollazione",
                de: "Rolltackle",
                "pt-br": "Golpe de Colisão Rolante",
                "zh-tw": "滾動衝撞"
            },
            damage: 70
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
