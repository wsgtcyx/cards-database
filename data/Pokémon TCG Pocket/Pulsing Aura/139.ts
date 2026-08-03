import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/139",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/139",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/139",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/139",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/139",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/139",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/139"
    },
    name: {
        en: "Stoutland",
        fr: "Mastouffe",
        es: "Stoutland",
        it: "Stoutland",
        de: "Bissbark",
        "pt-br": "Stoutland",
        "zh-tw": "長毛狗",
        ko: "바랜드",
        ja: "ムーランド"
    },
    illustrator: "Masakazu Fukuda",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Colorless"],
    dexId: [508],
    evolveFrom: {
        en: "Herdier",
        fr: "Ponchien",
        es: "Herdier",
        it: "Herdier",
        de: "Terribark",
        "pt-br": "Herdier",
        "zh-tw": "哈約克",
        ko: "하데리어",
        ja: "ハーデリア"
    },
    stage: "Stage2",
    description: {
        en: "Stoutland is immensely proud of its impressive moustache. It’s said that moustache length is what determines social standing among this species.",
        fr: "Sa moustache remarquable fait sa fierté,\ncar sa longueur permettrait de déterminer\nla hiérarchie au sein de l’espèce.",
        es: "Sus impresionantes bigotes son su orgullo. Entre\nlos de su especie se establece una jerarquía\nsegún su longitud.",
        it: "Va molto fiero dei suoi splendidi baffi. Si dice\nche la loro lunghezza determini la sua\nsuperiorità o inferiorità rispetto ai suoi simili.",
        de: "Seinen üppigen Schnauzbart trägt es mit Stolz.\nAngeblich entscheidet dessen Länge über die\nRangordnung innerhalb dieser Pokémon-Art.",
        "pt-br": "Stoutland está imensamente orgulhoso de seu impressionante bigode. Diz-se que o comprimento do bigode é o que determina a posição social desta espécie.",
        "zh-tw": "以氣派的鬍鬚為傲的寶可夢。\n據說在夥伴之間的階級地位\n就取決於鬍鬚的長度。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Fighting Fangs",
                fr: "Crocs Combatifs",
                es: "Colmillos Luchadores",
                it: "Zanne Combattenti",
                de: "Kämpfende Reißzähne",
                "pt-br": "Caninos de Luta",
                "zh-tw": "鬥志之牙"
            },
            effect: {
                en: "If your opponent's Active Pokémon is a Pokémon ex, this attack does 70 more damage.",
                fr: "Si le Pokémon Actif de votre adversaire est un ex Pokémon, cette attaque inflige 70 dégâts supplémentaires.",
                es: "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 70 puntos de daño más.",
                it: "Se il Pokémon attivo del tuo avversario è un Pokémon ex, questo attacco infligge 70 danni in più.",
                de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-Ex ist, fügt dieser Angriff 70 weitere Schadenspunkte zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente for um Pokémon ex, este ataque causará 70 de dano a mais.",
                "zh-tw": "如果對手的戰鬥寶可夢是寶可夢 {ex}，則此攻擊造成的傷害增加 70 點。"
            },
            damage: "70+"
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
