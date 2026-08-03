import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/095",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/095",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/095",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/095",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/095",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/095",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2a/095"
    },
    name: {
        en: "Greavard",
        fr: "Toutombe",
        es: "Greavard",
        it: "Greavard",
        de: "Gruff",
        "pt-br": "Greavard",
        "zh-tw": "墓仔狗",
        pt: "Greavard",
        'es-mx': "Greavard"
    },
    illustrator: "sowsow",
    rarity: "One Star",
    category: "Pokemon",
    hp: 70,
    types: ["Psychic"],
    dexId: [971],
    description: {
        en: "This friendly Pokémon doesn't like being alone. Pay it even the slightest bit of attention, and it will follow you forever.",
        "fr": "Ce sympathique Pokémon n'aime pas être seul. Accordez-lui la moindre attention et il vous suivra pour toujours.",
        "es": "A este simpático Pokémon no le gusta estar solo. Préstale incluso la más mínima atención y te seguirá para siempre.",
        "it": "A questo amichevole Pokémon non piace stare da solo. Prestagli anche la minima attenzione e ti seguirà per sempre.",
        "de": "Dieses freundliche Pokémon mag es nicht, allein zu sein. Schenken Sie ihm auch nur die geringste Aufmerksamkeit, und er wird Ihnen für immer folgen.",
        "pt-br": "Este Pokémon amigável não gosta de ficar sozinho. Preste a mínima atenção e ele o seguirá para sempre.",
        "zh-tw": "這種友善的寶可夢不喜歡獨處。即使是最輕微的關注，它也會永遠跟隨你。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Soul Shot",
                "fr": "Tir d'âme",
                "es": "Disparo del alma",
                "it": "Colpo dell'anima",
                "de": "Seelenschuss",
                "pt-br": "Tiro de alma",
                "zh-tw": "靈魂射擊"
            },
            damage: 30,
            cost: ["Psychic"],
            effect: {
                en: "Discard a card from your hand. If you can't, this attack does nothing.",
                "fr": "Défaussez une carte de votre main. Si vous n’y parvenez pas, cette attaque ne fait rien.",
                "es": "Descarta una carta de tu mano. Si no puedes, este ataque no hace nada.",
                "it": "Scarta una carta dalla tua mano. Se non puoi, questo attacco non ha alcun effetto.",
                "de": "Wirf eine Karte aus deiner Hand ab. Wenn Sie das nicht können, bewirkt dieser Angriff nichts.",
                "pt-br": "Descarte uma carta da sua mão. Se não conseguir, este ataque não fará nada.",
                "zh-tw": "棄掉你手上的一張牌。如果你做不到，那麼這次攻擊就沒有任何作用。"
            },
        },
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20",
        },
    ],
    retreat: 2,
};
export default card;
