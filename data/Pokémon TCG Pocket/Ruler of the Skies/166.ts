import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/166",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/166",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/166",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/166",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/166",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/166",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/166"
    },
    name: {
        en: "Clefairy",
        fr: "Mélofée",
        es: "Clefairy",
        it: "Clefairy",
        de: "Piepi",
        "pt-br": "Clefairy",
        "zh-tw": "皮皮",
        ko: "삐삐",
        ja: "ピッピ"
    },
    illustrator: "REND",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    dexId: [35],
    stage: "Basic",
    description: {
        en: "On nights with a full moon, they gather together and dance. The surrounding area is enveloped in an abnormal magnetic field.",
        fr: "Ce Pokémon retrouve ses congénères et danse\nlors des nuits de pleine lune. Un champ\nmagnétique mystérieux s’étend alors alentour.",
        es: "Cuando hay luna llena, los Clefairy salen en\ngrupo a bailar. A su alrededor se genera un\nmisterioso campo magnético.",
        it: "Nelle notti di luna piena, i Clefairy si radunano\nper danzare. Intorno a loro si crea un misterioso\ncampo magnetico.",
        de: "Bei Vollmond versammeln sie sich und tanzen\ngemeinsam. Um sie herum entsteht dadurch\nein ungewöhnliches Magnetfeld.",
        "zh-tw": "在月圓之夜聚集，和夥伴一起跳舞。\n周圍被異常的磁場包圍著。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Mini-Metronome",
                fr: "Mini-Métronome",
                es: "Minimetrónomo",
                "pt-br": "Mini-metrônomo",
                "zh-tw": "小揮指"
            },
            effect: {
                en: "Flip a coin. If heads, choose 1 of your opponent's Active Pokémon's attacks and use it as this attack.",
                fr: "Lancez une pièce. Si c'est face, choisissez l'une des attaques du Pokémon Actif de votre adversaire et utilisez‐la en tant que cette attaque.",
                es: "Lanza 1 moneda. Si sale cara, elige 1 de los ataques del Pokémon Activo de tu rival y úsalo para este ataque.",
                it: "Lancia una moneta. Se esce testa, scegli 1 degli attacchi del Pokémon attivo del tuo avversario e usalo come questo attacco.",
                de: "Wirf eine Münze. Bei „Kopf“ wähle 1 Angriff des Aktiven Pokémon deines Gegners und verwende ihn als diesen Angriff.",
                "pt-br": "Jogue uma moeda. Se sair cara, escolha 1 dos ataques do Pokémon Ativo do seu oponente e use-o como este ataque.",
                "zh-tw": "擲1次硬幣若為正面,則選擇對手的戰鬥寶可夢持有的1個招式,作為這個招式使用。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
