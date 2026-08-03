import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/071",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/071",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/071",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/071",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/071",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/071",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/071"
    },
    name: {
        en: "Hatterene",
        fr: "Sorcilence",
        es: "Hatterene",
        it: "Hatterene",
        de: "Silembrim",
        "pt-br": "Hatterene",
        "zh-tw": "布莉姆溫",
        ko: "브리무음",
        ja: "ブリムオン"
    },
    illustrator: "chibi",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Psychic"],
    dexId: [858],
    evolveFrom: {
        en: "Hattrem",
        fr: "Chapotus",
        es: "Hattrem",
        it: "Hattrem",
        de: "Brimano",
        "pt-br": "Hattrem",
        "zh-tw": "提布莉姆",
        ko: "손지브림",
        ja: "テブリム"
    },
    stage: "Stage2",
    description: {
        en: "Beware of forests that show no signs of living creatures within. You may have wandered into Hatterene’s territory.",
        fr: "Méfiez-vous des forêts qui ne montrent aucun signe de créature vivante. Vous avez peut-être erré sur le territoire de Sorcilence.",
        es: "Tenga cuidado con los bosques que no muestran signos de criaturas vivientes en su interior. Es posible que hayas entrado en el territorio de Hatterene.",
        it: "Fai attenzione alle foreste che non mostrano segni di creature viventi al loro interno. Potresti aver vagato nel territorio di Hatterene.",
        de: "Hüten Sie sich vor Wäldern, in denen sich keine Lebewesen befinden. Möglicherweise sind Sie in das Revier von Silembrim geraten.",
        "pt-br": "Cuidado com as florestas que não mostram sinais de criaturas vivas. Você pode ter entrado no território de Hatterene.",
        "zh-tw": "小心那些沒有任何生物跡象的森林。您可能已經進入了 布莉姆溫 的領域。"
    },
    attacks: [
        {
            cost: ["Psychic", "Psychic"],
            name: {
                en: "Mental Crush",
                fr: "Écrasement Mental",
                es: "Aplastamiento Mental",
                it: "Sbriciolamente",
                de: "Mentaler Zermalmer",
                "pt-br": "Esmagamento Mental",
                "zh-tw": "心靈粉碎"
            },
            effect: {
                en: "If your opponent's Active Pokémon is Confused, this attack does 70 more damage.",
                fr: "Si le Pokémon Actif de votre adversaire est Confus, cette attaque inflige 70 dégâts supplémentaires.",
                es: "Si el Pokémon Activo de tu rival está Confundido, este ataque hace 70 puntos de daño más.",
                it: "Se il Pokémon attivo del tuo avversario è confuso, questo attacco infligge 70 danni in più.",
                de: "Wenn das Aktive Pokémon deines Gegners verwirrt ist, fügt dieser Angriff 70 weitere Schadenspunkte zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente estiver Confuso, este ataque causará 70 de dano a mais.",
                "zh-tw": "如果對手的出戰寶可夢處於混亂狀態，則這次攻擊造成的傷害增加 70 點。"
            },
            damage: "70+"
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
