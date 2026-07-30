import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/064"
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
    illustrator: "sowsow",
    rarity: "One Diamond",
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
                en: "Mini-Metronome"
            },
            effect: {
                en: "Flip a coin. If heads, choose 1 of your opponent's Active Pokémon's attacks and use it as this attack.",
                fr: "Lancez une pièce de monnaie. Si c'est face, choisissez 1 des attaques du Pokémon Actif de votre adversaire et utilisez-la comme cette attaque.",
                es: "Lanza una moneda. Si sale cara, elige 1 de los ataques del Pokémon Activo de tu rival y úsalo como este ataque.",
                it: "Lancia una moneta. Se esce testa, scegli 1 degli attacchi del Pokémon attivo del tuo avversario e usalo come questo attacco.",
                de: "Wirf eine Münze. Bei „Kopf“ wähle 1 Angriff des Aktiven Pokémon deines Gegners und verwende ihn als diesen Angriff.",
                "pt-br": "Jogue uma moeda. Se sair cara, escolha 1 dos ataques do Pokémon Ativo do seu oponente e use-o como este ataque.",
                "zh-tw": "拋一枚硬幣。如果正面，則選擇對手的1只活躍寶可夢的攻擊並將其用作這次攻擊。"
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
