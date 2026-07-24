import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/090",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/090"
    },
    name: {
        en: "Miraidon ex",
        fr: "Miraidon-ex",
        es: "Miraidon ex",
        it: "Miraidon-ex",
        de: "Miraidon-ex",
        "pt-br": "Miraidon ex",
        "zh-tw": "密勒頓ex",
        ko: "미라이돈 ex",
        ja: "ミライドンex"
    },
    illustrator: "Nurikabe",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 140,
    types: ["Lightning"],
    dexId: [1008],
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
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Hadron Ray",
                fr: "Rayon hadronique",
                es: "Rayo de Hadrones",
                it: "Raggio adrone",
                de: "Hadron Ray",
                "pt-br": "Raio de Hádron",
                "zh-tw": "強子射線"
            },
            effect: {
                en: "This attack does 20 more damage for each {L} Energy attached to this Pokémon.",
                fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque {L} Énergie attachée à ce Pokémon.",
                es: "Este ataque hace 20 daños más por cada {L} Energía unida a este Pokémon.",
                it: "Questo attacco infligge 20 danni in più per ogni Energia assegnata a questo Pokémon.",
                de: "Dieser Angriff fügt 20 weitere Schadenspunkte für jede {L}-Energie zu, die an dieses Pokémon angelegt ist.",
                "pt-br": "Este ataque causa 20 pontos de dano a mais para cada {L} Energia ligada a este Pokémon.",
                "zh-tw": "該寶可夢身上每有 {L} 點能量，該攻擊就會造成 20 點額外傷害。"
            },
            damage: "20+"
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
