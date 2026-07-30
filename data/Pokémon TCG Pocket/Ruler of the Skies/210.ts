import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/210"
    },
    name: {
        en: "Minun",
        fr: "Négapi",
        es: "Minun",
        it: "Minun",
        de: "Minun",
        "pt-br": "Minun",
        "zh-tw": "負電拍拍",
        ko: "마이농",
        ja: "マイナン"
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 70,
    types: ["Lightning"],
    dexId: [312],
    stage: "Basic",
    description: {
        en: "Its dislike of water makes it take shelter under the eaves of houses in rain. It uses pom-poms made of sparks for cheering."
    },
    attacks: [
        {
            cost: ["Lightning"],
            name: {
                en: "Buddy Spark",
                fr: "Copain étincelle",
                es: "amigo chispa",
                it: "Amico Scintilla",
                de: "Kumpel Spark",
                "pt-br": "Amigo Faísca",
                "zh-tw": "拍檔電光"
            },
            effect: {
                en: "If Plusle is on your Bench, this attack also does 10 damage to each of your opponent's Benched Pokémon.",
                fr: "Si Plusle est sur votre Banc, cette attaque inflige également 10 dégâts à chacun des Pokémon de Banc de votre adversaire.",
                es: "Si Plusle está en tu Banca, este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival.",
                it: "Se Plusle è nella tua panchina, questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella panchina del tuo avversario.",
                de: "Wenn sich Plusle auf deiner Bank befindet, fügt dieser Angriff außerdem jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu.",
                "pt-br": "Se Plusle estiver no seu Banco, este ataque também causará 10 pontos de dano a cada um dos Pokémon no Banco do seu oponente.",
                "zh-tw": "如果Plusle在你的替補席上，這次攻擊也會對對手的替補席上的每隻寶可夢造成10點傷害。"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
