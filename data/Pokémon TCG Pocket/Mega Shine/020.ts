import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/020",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/020",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/020",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/020",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/020",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/020",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2b/020"
    },
    name: {
        en: "Empoleon",
        fr: "Pingoléon",
        es: "Empoleon",
        it: "Empoleon",
        de: "Impoleon",
        "pt-br": "Empoleon",
        "zh-tw": "帝王拿波",
        ko: "엠페르트",
        ja: "エンペルト"
    },
    illustrator: "kawayoo",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Water"],
    dexId: [395],
    evolveFrom: {
        en: "Prinplup",
        fr: "Prinplouf",
        es: "Prinplup",
        it: "Prinplup",
        de: "Pliprin",
        "pt-br": "Prinplup",
        "zh-tw": "波皇子",
        ko: "팽태자",
        ja: "ポッタイシ"
    },
    stage: "Stage2",
    description: {
        en: "It avoids unnecessary disputes, but it will mercilessly decimate anything that threatens the safety of its colony.",
        fr: "Il évite les disputes inutiles, mais il décimera sans pitié tout ce qui menace la sécurité de sa colonie.",
        es: "Evita disputas innecesarias, pero diezmará sin piedad todo lo que amenace la seguridad de su colonia.",
        it: "Evita le dispute inutili, ma decimerà senza pietà qualsiasi cosa minacci la sicurezza della sua colonia.",
        de: "Es vermeidet unnötige Streitigkeiten, dezimiert aber gnadenlos alles, was die Sicherheit seiner Kolonie gefährdet.",
        "pt-br": "Evita disputas desnecessárias, mas dizimará impiedosamente qualquer coisa que ameace a segurança da sua colónia.",
        "zh-tw": "它避免了不必要的爭端，但它會無情地消滅任何威脅其殖民地安全的東西。"
    },
    attacks: [
        {
            cost: ["Water", "Water", "Colorless"],
            name: {
                en: "Emperor’s Strike",
                fr: "Frappe Impériale",
                es: "Golpe de Emperador",
                it: "Colpimperiale",
                de: "Kaiserlicher Kahlschlag",
                "pt-br": "Ataque do Imperador",
                "zh-tw": "皇帝一擊"
            },
            effect: {
                en: "If your opponent's Active Pokémon has more remaining HP than this Pokémon, this attack does 60 more damage.",
                fr: "Si le Pokémon Actif de votre adversaire a plus de PV restants que ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
                es: "Si al Pokémon Activo de tu rival le quedan más HP que a este Pokémon, este ataque hace 60 puntos de daño más.",
                it: "Se il Pokémon attivo del tuo avversario ha più PS rimanenti di questo Pokémon, questo attacco infligge 60 danni in più.",
                de: "Wenn das Aktive Pokémon deines Gegners mehr verbleibende HP hat als dieses Pokémon, fügt dieser Angriff 60 Schadenspunkte mehr zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente tiver mais HP restante do que este Pokémon, este ataque causará 60 de dano a mais.",
                "zh-tw": "如果對手的出戰寶可夢的剩餘生命值比這隻寶可夢多，則這次攻擊造成的傷害增加 60 點。"
            },
            damage: "80+"
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
