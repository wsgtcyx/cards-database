import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/047",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/047"
    },
    name: {
        en: "Roaring Moon",
        fr: "Rugit-Lune",
        es: "Bramaluna",
        it: "Lunaruggente",
        de: "Donnersichel",
        "pt-br": "Lua Estrondo",
        "zh-tw": "轟鳴月",
        ko: "고동치는달",
        ja: "トドロクツキ"
    },
    illustrator: "Takeshi Nakamura",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Darkness"],
    dexId: [1005],
    stage: "Basic",
    description: {
        en: "According to an article in a dubious magazine, this Pokémon has some connection to a phenomenon that occurs in a certain region.",
        fr: "Selon un article paru dans un magazine douteux, ce Pokémon aurait un lien avec un phénomène qui se produit dans une certaine région.",
        es: "Según un artículo de una revista dudosa, este Pokémon tiene alguna conexión con un fenómeno que ocurre en una determinada región.",
        it: "Secondo un articolo di una rivista dubbia, questo Pokémon ha qualche legame con un fenomeno che si verifica in una certa regione.",
        de: "Laut einem Artikel in einem dubiosen Magazin hat dieses Pokémon einen Zusammenhang mit einem Phänomen, das in einer bestimmten Region auftritt.",
        "pt-br": "Segundo artigo de uma revista duvidosa, esse Pokémon tem alguma ligação com um fenômeno que ocorre em determinada região.",
        "zh-tw": "根據可疑雜誌上的一篇文章，這隻寶可夢與某個地區發生的現像有某種關聯。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Ancient Roar",
                fr: "Rugissement ancien",
                es: "Rugido antiguo",
                it: "Antico Ruggito",
                de: "Uraltes Gebrüll",
                "pt-br": "Rugido Antigo",
                "zh-tw": "古代戰吼"
            },
            effect: {
                en: "Once during your turn, when you put this Pokémon from your hand onto your Bench, you may switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
                fr: "Une fois pendant votre tour, lorsque vous placez ce Pokémon de votre main sur votre Banc, vous pouvez transférer le Pokémon Actif de votre adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
                es: "Una vez durante tu turno, cuando pongas este Pokémon de tu mano en tu Banca, podrás cambiar el Pokémon Activo de tu rival a la Banca. (Tu oponente elige el nuevo Pokémon Activo).",
                it: "Una sola volta durante il tuo turno, quando metti questo Pokémon dalla tua mano nella tua panchina, puoi scambiare il Pokémon attivo del tuo avversario nella panchina. (Il tuo avversario sceglie il nuovo Pokémon attivo.)",
                de: "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand auf deine Bank legst, kannst du das Aktive Pokémon deines Gegners auf die Bank tauschen. (Dein Gegner wählt das neue Aktive Pokémon.)",
                "pt-br": "Uma vez durante o seu turno, ao colocar este Pokémon da sua mão no Banco, você poderá trocar o Pokémon Ativo do seu oponente para o Banco. (Seu oponente escolhe o novo Pokémon Ativo.)",
                "zh-tw": "在你的回合中，當你將手牌中的這隻寶可夢放到你的替補席上時，你可以將對手的活躍寶可夢切換到替補席上。 （你的對手選擇新的活躍寶可夢。）"
            }
        }
    ],
    attacks: [
        {
            cost: ["Darkness", "Darkness", "Colorless"],
            name: {
                en: "Wind of Darkness",
                fr: "Vent des ténèbres",
                es: "Viento de oscuridad",
                it: "Vento delle tenebre",
                de: "Wind der Dunkelheit",
                "pt-br": "Vento das Trevas",
                "zh-tw": "暗之風"
            },
            damage: 70
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
