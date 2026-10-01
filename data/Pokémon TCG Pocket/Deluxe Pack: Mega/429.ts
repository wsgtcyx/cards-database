import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/429",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/429",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/429",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/429",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/429",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/429",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/429"
    },
    name: {
        en: "Koraidon ex",
        fr: "Koraidon-ex",
        es: "Koraidon ex",
        it: "Koraidon-ex",
        de: "Koraidon-ex",
        "pt-br": "Koraidon ex",
        "zh-tw": "故勒頓ex",
        ja: "コライドンex",
        ko: "코라이돈 ex"
    },
    illustrator: "aky CG Works",
    rarity: "Crown",
    category: "Pokemon",
    hp: 150,
    types: [
        "Fighting"
    ],
    dexId: [
        1007
    ],
    stage: "Basic",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Legendary Drive",
                fr: "Propulsion Légendaire",
                es: "Impulso Legendario",
                it: "Assalto Leggendario",
                de: "Legendärer Antrieb",
                "pt-br": "Impulso Lendário",
                "zh-tw": "傳說進擊",
                ja: "Legendary Drive",
                ko: "Legendary Drive"
            },
            effect: {
                en: "Once during your turn, when you put this Pokémon from your hand onto your Bench, you may switch it with your Active Pokémon. If you do, move all of your Energy in play to this Pokémon.",
                fr: "Une seule fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez l'échanger avec votre Pokémon Actif. Dans ce cas, déplacez toute votre Énergie en jeu vers ce Pokémon.",
                es: "Una vez durante tu turno, cuando juegas este Pokémon de tu mano a tu Banca, puedes cambiarlo por tu Pokémon Activo. Si lo haces, mueve toda tu Energía en juego a este Pokémon.",
                it: "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano e lo metti in panchina, puoi scambiarlo con il tuo Pokémon attivo. Se lo fai, sposta tutte le tue Energie in gioco a questo Pokémon.",
                de: "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand auf deine Bank spielst, kannst du es gegen dein Aktives Pokémon austauschen. Wenn du das machst, verschiebe alle deine Energien im Spiel auf dieses Pokémon.",
                "pt-br": "Uma vez durante o seu turno, quando você colocar este Pokémon da sua mão no seu Banco, você poderá trocá‐lo pelo seu Pokémon Ativo. Se fizer isso, mova todas as suas Energias em jogo para este Pokémon.",
                "zh-tw": "在自己的回合,當從手牌將這張卡放置於備戰區時,可使用1次。將這隻寶可夢與戰鬥寶可夢互換。然後,將自己的場上的所有能量改附於這隻寶可夢身上。",
                ja: "Once during your turn, when you put this Pokémon from your hand onto your Bench, you may switch it with your Active Pokémon. If you do, move all of your Energy in play to this Pokémon.",
                ko: "Once during your turn, when you put this Pokémon from your hand onto your Bench, you may switch it with your Active Pokémon. If you do, move all of your Energy in play to this Pokémon."
            }
        }
    ],
    attacks: [
        {
            cost: [
                "Fighting",
                "Fighting",
                "Fighting"
            ],
            name: {
                en: "World Wrecker",
                fr: "Fracasse-Monde",
                es: "Destructor de Mundos",
                it: "Devastamondi",
                de: "Weltenvernichter",
                "pt-br": "Destruidor de Mundos",
                "zh-tw": "天地粉碎",
                ja: "World Wrecker",
                ko: "World Wrecker"
            },
            effect: {
                en: "Discard the top card of your deck.",
                fr: "Défaussez la première carte du dessus de votre deck.",
                es: "Descarta la primera carta de tu baraja.",
                it: "Scarta la prima carta del tuo mazzo.",
                de: "Lege die oberste Karte deines Decks ab.",
                "pt-br": "Descarte a carta de cima do seu baralho.",
                "zh-tw": "將自己的牌庫上方張卡丟棄。",
                ja: "Discard the top card of your deck.",
                ko: "Discard the top card of your deck."
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
