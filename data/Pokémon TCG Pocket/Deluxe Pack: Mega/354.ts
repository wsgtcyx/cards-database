import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/354",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/354",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/354",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/354",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/354",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/354",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/354"
    },
    name: {
        en: "Skitty",
        fr: "Skitty",
        es: "Skitty",
        it: "Skitty",
        de: "Eneco",
        "pt-br": "Skitty",
        "zh-tw": "向尾喵",
        ja: "エネコ",
        ko: "에나비"
    },
    illustrator: "Saya Tsuruta",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: [
        "Colorless"
    ],
    description: {
        en: "It shows its cute side by chasing its own tail\nuntil it gets dizzy.",
        fr: "Un Pokémon très mignon qui aime parfois courir en cercle en chassant sa propre queue.",
        es: "Le gusta jugar persiguiéndose la cola hasta que se marea, mostrando así su lado más mono.",
        it: "È davvero carino quando barcolla per i giramenti di testa, dopo aver cercato di mordersi la coda.",
        de: "Es zeigt gerne seine niedliche Seite, indem es seinen eigenen Schweif jagt, bis ihm schwindlig wird.",
        "pt-br": "Mostra seu lado engraçado ao perseguir sua própria cauda até ficar tonto.",
        "zh-tw": "有時會展現出追著自己的尾巴玩，但玩著玩著就會頭暈眼花的可愛一面。",
        ja: "It shows its cute side by chasing its own tail\nuntil it gets dizzy.",
        ko: "It shows its cute side by chasing its own tail\nuntil it gets dizzy."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Play Rough",
                fr: "Câlinerie",
                es: "Carantoña",
                it: "Carineria",
                de: "Knuddler",
                "pt-br": "Jogo Duro",
                "zh-tw": "嬉鬧",
                ja: "Play Rough",
                ko: "Play Rough"
            },
            damage: "10+",
            cost: [
                "Colorless"
            ],
            effect: {
                en: "Flip a coin. If heads, this attack does 30 more damage.",
                fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts de plus.",
                es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
                de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu.",
                "pt-br": "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
                "zh-tw": "擲1次硬幣若為正面,則增加30點傷害。",
                ja: "Flip a coin. If heads, this attack does 30 more damage.",
                ko: "Flip a coin. If heads, this attack does 30 more damage."
            }
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
