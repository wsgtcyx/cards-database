import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Basculin",
        "fr": "Bargantua",
        "es": "Basculin",
        "it": "Basculin",
        "de": "Barschuft",
        "pt-br": "Basculin",
        "zh-tw": "野蠻鱸魚"
    },
    illustrator: "Naoyo Kimura",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Water"],
    description: {
        en: "Anglers love the fight this Pokémon puts up on\nthe hook. And there are always more to catch—\nmany people release them into lakes illicitly.",
        "fr": "Les pêcheurs adorent le combat que mène ce Pokémon\nle crochet. Et il y en a toujours plus à attraper...\nde nombreuses personnes les rejettent illégalement dans les lacs.",
        "es": "A los pescadores les encanta la pelea que ofrece este Pokémon.\nel gancho. Y siempre hay más para atrapar.\nMucha gente los libera en lagos de forma ilícita.",
        "it": "I pescatori adorano la lotta che questo Pokémon affronta\nil gancio. E ce ne sono sempre altri da catturare—\nmolte persone li rilasciano illegalmente nei laghi.",
        "de": "Angler lieben den Kampf, den dieses Pokémon führt\nder Haken. Und es gibt immer noch mehr zu fangen –\nViele Menschen setzen sie illegal in Seen frei.",
        "pt-br": "Os pescadores adoram a luta que este Pokémon trava\no gancho. E sempre há mais para capturar—\nmuitas pessoas os liberam ilicitamente nos lagos.",
        "zh-tw": "釣魚者喜歡這只神奇寶貝的戰鬥\n鉤子。而且總是有更多的東西可以捕捉——\n許多人將它們非法釋放到湖泊中。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Surprise Strike",
                "fr": "Grève surprise",
                "es": "Golpe sorpresa",
                "it": "Colpo a sorpresa",
                "de": "Überraschungsschlag",
                "pt-br": "Greve Surpresa",
                "zh-tw": "奇襲"
            },
            damage: 40,
            cost: ["Water", "Colorless"],
            effect: {
                en: "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 40 more damage.",
                "fr": "Si ce Pokémon est passé de votre Banc au Point Actif ce tour-ci, cette attaque inflige 40 dégâts supplémentaires.",
                "es": "Si este Pokémon se movió de tu Banca al Punto Activo este turno, este ataque hace 40 puntos de daño más.",
                "it": "Se questo Pokémon è passato dalla tua panchina al posto attivo in questo turno, questo attacco infligge 40 danni in più.",
                "de": "Wenn dieses Pokémon in diesem Zug von deiner Bank auf den aktiven Platz verschoben wurde, fügt dieser Angriff 40 weitere Schadenspunkte zu.",
                "pt-br": "Se este Pokémon for movido do seu Banco para o Local Ativo neste turno, este ataque causará 40 de dano a mais.",
                "zh-tw": "如果本回合這只神奇寶貝從你的替補席移至活躍位置，則這次攻擊造成的傷害增加 40 點。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
