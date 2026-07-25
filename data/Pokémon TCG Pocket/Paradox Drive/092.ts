import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/092",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/092",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/092",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/092",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/092",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/092"
    },
    name: {
        en: "Koraidon ex",
        fr: "Koraidon-ex",
        es: "Koraidon ex",
        it: "Koraidon-ex",
        de: "Koraidon-ex",
        "pt-br": "Koraidon ex",
        "zh-tw": "故勒頓ex",
        ko: "코라이돈 ex",
        ja: "コライドンex"
    },
    illustrator: "Nurikabe",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 150,
    types: ["Fighting"],
    dexId: [1007],
    stage: "Basic",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Legendary Drive",
                fr: "Conduite légendaire",
                es: "Unidad legendaria",
                it: "Guida leggendaria",
                de: "Legendärer Antrieb",
                "pt-br": "Unidade Lendária",
                "zh-tw": "傳說進擊"
            },
            effect: {
                en: "Once during your turn, when you put this Pokémon from your hand onto your Bench, you may switch it with your Active Pokémon. If you do, move all of your Energy in play to this Pokémon.",
                fr: "Une fois pendant votre tour, lorsque vous placez ce Pokémon de votre main sur votre Banc, vous pouvez l'échanger avec votre Pokémon Actif. Si vous le faites, déplacez toute votre Énergie en jeu vers ce Pokémon.",
                es: "Una vez durante tu turno, cuando pongas este Pokémon de tu mano en tu Banca, podrás cambiarlo por tu Pokémon Activo. Si lo haces, mueve toda tu Energía en juego a este Pokémon.",
                it: "Una sola volta durante il tuo turno, quando metti questo Pokémon dalla tua mano nella tua panchina, puoi scambiarlo con il tuo Pokémon attivo. Se lo fai, sposta tutta la tua Energia in gioco su questo Pokémon.",
                de: "Wenn du dieses Pokémon einmal während deines Zuges aus deiner Hand auf deine Bank legst, kannst du es mit deinem Aktiven Pokémon vertauschen. Wenn du dies tust, bewege deine gesamte Energie im Spiel zu diesem Pokémon.",
                "pt-br": "Uma vez durante o seu turno, ao colocar este Pokémon da sua mão no Banco, você poderá trocá-lo pelo seu Pokémon Ativo. Se fizer isso, mova toda a sua Energia em jogo para este Pokémon.",
                "zh-tw": "在你的回合中，當你將這隻寶可夢從你的手牌放到你的替補席上時，你可以將它與你的活躍寶可夢交換。如果這樣做，請將場上所有能量轉移到這隻寶可夢身上。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Fighting", "Fighting", "Fighting"],
            name: {
                en: "World Wrecker",
                fr: "Démolisseur du monde",
                es: "Destructor del mundo",
                it: "Distruttore del mondo",
                de: "Weltzerstörer",
                "pt-br": "Destruidor de mundo",
                "zh-tw": "天地粉碎"
            },
            effect: {
                en: "Discard the top card of your deck.",
                fr: "Défaussez la carte du dessus de votre deck.",
                es: "Descarta la carta superior de tu mazo.",
                it: "Scarta la prima carta del tuo mazzo.",
                de: "Lege die oberste Karte deines Decks ab.",
                "pt-br": "Descarte a carta do topo do seu baralho.",
                "zh-tw": "棄掉你牌組最上面的牌。"
            },
            damage: 110
        }
    ],
    weaknesses: [
        {
            type: "Psychic",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
