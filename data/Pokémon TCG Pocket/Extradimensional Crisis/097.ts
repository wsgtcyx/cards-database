import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3a/097",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3a/097",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3a/097",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3a/097",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3a/097",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3a/097",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3a/097"
    },
    name: {
        en: "Pidgeot",
        "fr": "Roucarnage",
        "es": "Pidgeot",
        "it": "Pidgeot",
        "de": "Tauboss",
        "pt-br": "Pidgeot",
        "zh-tw": "大比鳥",
    },
    illustrator: "Misa Tsutsui",
    category: "Pokemon",
    hp: 130,
    types: ["Colorless"],
    evolveFrom: {
        en: "Pidgeotto",
        "fr": "Roucoups",
        "es": "Pidgeotto",
        "it": "Pidgeotto",
        "de": "Tauboga",
        "pt-br": "Pidgeotto",
        "zh-tw": "比比鳥"
    },
    description: {
        en: "When hunting, it skims the surface of water\nat high speed to pick off unwary prey such\nas Magikarp.",
        "fr": "Lors de la chasse, il effleure la surface de l'eau\nà grande vitesse pour éliminer des proies imprudentes telles que\ncomme Magikarpe.",
        "es": "Cuando caza, roza la superficie del agua.\na gran velocidad para atrapar presas desprevenidas como\ncomo Magikarp.",
        "it": "Durante la caccia sfiora la superficie dell'acqua\nad alta velocità per eliminare tali prede incaute\ncome Magikarp.",
        "de": "Bei der Jagd gleitet es über die Wasseroberfläche\nmit hoher Geschwindigkeit, um unvorsichtige Beute wie z\nals Karpador.",
        "pt-br": "Ao caçar, ele desliza pela superfície da água\nem alta velocidade para abater presas incautas\ncomo Magikarp.",
        "zh-tw": "狩獵時，它會掠過水面\n高速捕捉粗心的獵物\n作為鯉魚王。"
    },
    stage: "Stage2",
    abilities: [{
            type: "Ability",
            name: {
                en: "Drive Off",
                "fr": "Partez",
                "es": "Ahuyentar",
                "it": "Partire",
                "de": "Losfahren",
                "pt-br": "Partida",
                "zh-tw": "開車離開"
            },
            effect: {
                en: "Once during your turn, you may switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
                "fr": "Une fois pendant votre tour, vous pouvez transférer le Pokémon Actif de votre adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
                "es": "Una vez durante tu turno, puedes cambiar el Pokémon Activo de tu rival a la Banca. (Tu oponente elige el nuevo Pokémon Activo).",
                "it": "Una sola volta durante il tuo turno, puoi mettere in panchina il Pokémon attivo del tuo avversario. (Il tuo avversario sceglie il nuovo Pokémon attivo.)",
                "de": "Einmal während deines Zuges kannst du das Aktive Pokémon deines Gegners auf die Bank tauschen. (Dein Gegner wählt das neue Aktive Pokémon.)",
                "pt-br": "Uma vez durante o seu turno, você pode trocar o Pokémon Ativo do seu oponente para o Banco. (Seu oponente escolhe o novo Pokémon Ativo.)",
                "zh-tw": "在你的回合中，你可以將對手的活躍神奇寶貝切換到替補席上。 （你的對手選擇新的活躍神奇寶貝。）"
            }
        }],
    attacks: [{
            name: {
                en: "Wing Attack",
                "fr": "Attaque d'aile",
                "es": "Ataque de ala",
                "it": "Attacco d'ala",
                "de": "Flügelangriff",
                "pt-br": "Ataque de asa",
                "zh-tw": "翼攻擊"
            },
            damage: 70,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
    rarity: "One Shiny"
};
export default card;
