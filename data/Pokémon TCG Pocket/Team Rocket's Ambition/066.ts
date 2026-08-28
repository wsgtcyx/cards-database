import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/066",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/066",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/066",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/066",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/066",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/066",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/066"
    },
    name: {
        en: "Oinkologne",
        fr: "Fragroin",
        es: "Oinkologne",
        it: "Oinkologne",
        de: "Fragrunz",
        "pt-br": "Oinkologne",
        "zh-tw": "飄香豚",
        ko: "퍼퓨돈",
        ja: "パフュートン"
    },
    illustrator: "Akira Komayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Colorless"],
    dexId: [916],
    evolveFrom: {
        en: "Lechonk",
        fr: "Gourmelet",
        es: "Lechonk",
        it: "Lechonk",
        de: "Ferkuli",
        "pt-br": "Lechonk",
        "zh-tw": "愛吃豚",
        ko: "맛보돈",
        ja: "グルトン"
    },
    stage: "Stage1",
    description: {
        en: "This is a meticulous Pokémon that likes to keep things tidy. It shrouds itself in a floral aroma that soothes the Pokémon around it.",
        fr: "Ce Pokémon méticuleux aime la propreté. Il est enveloppé d'un parfum floral qui rassérène les Pokémon alentour.",
        es: "Un Pokémon meticuloso que adora la pulcritud. Se envuelve de una fragancia floral que calma a los Pokémon de su alrededor.",
        it: "È un Pokémon metodico che ama la pulizia. Si avvolge nel suo profumo floreale che calma i Pokémon che ha intorno.",
        de: "Dieses Pokémon ist penibel und liebt Sauberkeit. Es hüllt sich in einen blumigen Duft, der Pokémon in seiner Umgebung beruhigt.",
        "pt-br": "Este é um Pokémon meticuloso que gosta de manter as coisas arrumadas. Envolve-se em um aroma floral que acalma os Pokémon ao seu redor.",
        "zh-tw": "喜好乾淨，個性一絲不苟。會讓花香包覆全身來療癒周圍的寶可夢們。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Sitdown Splash",
                fr: "Grosse Éclaboussure",
                es: "Chapoteo Sentado",
                it: "Sedutasplash",
                de: "Platzierter Platscher",
                "pt-br": "Respingo Arriante",
                "zh-tw": "臀部坐擊"
            },
            effect: {
                en: "Flip a coin. If heads, this attack does 60 more damage.",
                fr: "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts de plus.",
                es: "Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 60 danni in più.",
                de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 60 Schadenspunkte mehr zu.",
                "pt-br": "Jogue uma moeda. Se sair cara, este ataque causará 60 pontos de dano a mais.",
                "zh-tw": "擲1次硬幣若為正面,則增加60點傷害。"
            },
            damage: "40+"
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
