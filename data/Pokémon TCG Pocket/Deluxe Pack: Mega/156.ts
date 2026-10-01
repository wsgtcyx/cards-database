import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/156",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/156",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/156",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/156",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/156",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/156",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/156"
    },
    name: {
        en: "Mega Scizor ex",
        fr: "Méga-Cizayox-ex",
        es: "Mega-Scizor ex",
        it: "Mega Scizor-ex",
        de: "Mega-Scherox-ex",
        "pt-br": "Mega Scizor ex",
        "zh-tw": "超級巨鉗螳螂ex",
        ja: "メガハッサムex",
        ko: "메가핫삼 ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 200,
    types: [
        "Metal"
    ],
    dexId: [
        212
    ],
    evolveFrom: {
        en: "Scyther",
        fr: "Insécateur",
        es: "Scyther",
        it: "Scyther",
        de: "Sichlor",
        "pt-br": "Scyther",
        "zh-tw": "飛天螳螂",
        ja: "Scyther",
        ko: "Scyther"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: [
                "Metal",
                "Metal",
                "Colorless"
            ],
            name: {
                en: "Bullet Slugger",
                fr: "Balle Percutante",
                es: "Golpazo Balístico",
                it: "Mazzata Repentina",
                de: "Kugelschwung",
                "pt-br": "Socão Disparado",
                "zh-tw": "子彈強擊",
                ja: "Bullet Slugger",
                ko: "Bullet Slugger"
            },
            effect: {
                en: "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 50 more damage.",
                fr: "Si ce Pokémon a été déplacé de votre Banc vers le Poste Actif pendant ce tour, cette attaque inflige 50 dégâts supplémentaires.",
                es: "Si este Pokémon se ha movido de tu Banca al Puesto Activo en este turno, este ataque hace 50 puntos de daño más.",
                it: "Se questo Pokémon si è spostato dalla tua panchina in posizione attiva nel turno in corso, questo attacco infligge 50 danni in più.",
                de: "Wenn dieses Pokémon während dieses Zuges von deiner Bank in die Aktive Position gewechselt ist, fügt diese Attacke 50 Schadenspunkte mehr zu.",
                "pt-br": "Se este Pokémon foi movido do seu Banco para o Campo Ativo neste turno, este ataque causará 50 pontos de dano a mais.",
                "zh-tw": "在這個回合,若從備戰區將這隻寶可夢放置於戰鬥場,則增加50點傷害。",
                ja: "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 50 more damage.",
                ko: "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 50 more damage."
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
