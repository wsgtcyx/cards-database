import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/047",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/047"
    },
    name: {
        en: "Mega Scizor ex",
        fr: "Méga-Cizayox-ex",
        es: "Mega-Scizor ex",
        it: "Mega Scizor-ex",
        de: "Mega-Scherox-ex",
        "pt-br": "Mega Scizor ex",
        "zh-tw": "超級巨鉗螳螂ex",
        ko: "메가핫삼 ex",
        ja: "メガハッサムex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 200,
    types: ["Metal"],
    dexId: [212],
    evolveFrom: {
        en: "Scyther",
        fr: "Insécateur",
        es: "Scyther",
        it: "Scyther",
        de: "Sichlor",
        "pt-br": "Scyther",
        "zh-tw": "飛天螳螂",
        ko: "스라크",
        ja: "ストライク"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: ["Metal", "Metal", "Colorless"],
            name: {
                en: "Bullet Slugger",
                fr: "Balle Percutante",
                es: "Golpazo Balístico",
                it: "Mazzata Repentina",
                de: "Kugelschwung",
                "pt-br": "Socão Disparado",
                "zh-tw": "子彈強擊"
            },
            effect: {
                en: "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 50 more damage.",
                fr: "Si ce Pokémon est passé de votre Banc au Point Actif ce tour-ci, cette attaque inflige 50 dégâts supplémentaires.",
                es: "Si este Pokémon se movió de tu Banca al Punto Activo este turno, este ataque hace 50 puntos de daño más.",
                it: "Se questo Pokémon è passato dalla tua panchina al posto attivo in questo turno, questo attacco infligge 50 danni in più.",
                de: "Wenn dieses Pokémon in diesem Zug von deiner Bank auf den aktiven Platz verschoben wurde, fügt dieser Angriff 50 weitere Schadenspunkte zu.",
                "pt-br": "Se este Pokémon for movido do seu Banco para o Local Ativo neste turno, este ataque causará 50 de dano a mais.",
                "zh-tw": "如果本回合這只寶可夢從你的替補席移動到活躍位置，則這次攻擊造成的傷害增加 50 點。"
            },
            damage: "100+"
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
