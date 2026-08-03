import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/053",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/053",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/053",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/053",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/053",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/053"
    },
    name: {
        en: "Minun",
        "fr": "Négapi",
        "es": "Minun",
        "it": "Minun",
        "de": "Minun",
        "pt-br": "Minun",
        "zh-tw": "負電拍拍"
    },
    illustrator: "HYOGONOSUKE",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Lightning"],
    description: {
        en: "Its dislike of water makes it take shelter under\nthe eaves of houses in rain. It uses pom-poms\nmade of sparks for cheering.",
        "fr": "Son aversion pour l'eau le pousse à s'abriter sous\nles avant-toits des maisons sous la pluie. Il utilise des pompons\nfait d'étincelles pour applaudir.",
        "es": "Su aversión al agua le hace refugiarse bajo\nlos aleros de las casas bajo la lluvia. Utiliza pompones\nhecho de chispas para animar.",
        "it": "La sua avversione per l'acqua lo spinge a rifugiarsi sott'acqua\nle grondaie delle case sotto la pioggia. Utilizza i pompon\nfatto di scintille per il tifo.",
        "de": "Da es Wasser nicht mag, sucht es Unterschlupf\ndie Dachtraufe der Häuser im Regen. Es werden Pompons verwendet\naus Funken zum Jubeln.",
        "pt-br": "Sua aversão à água faz com que ele se abrigue sob\nos beirais das casas na chuva. Ele usa pompons\nfeito de faíscas para torcer.",
        "zh-tw": "它不喜歡水，所以它躲在水下\n雨中的屋簷。它使用絨球\n由歡呼的火花組成。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Buddy Spark",
                "fr": "Copain étincelle",
                "es": "amigo chispa",
                "it": "Amico Scintilla",
                "de": "Kumpel Spark",
                "pt-br": "Amigo Faísca",
                "zh-tw": "巴迪·斯帕克"
            },
            damage: 30,
            cost: ["Lightning"],
            effect: {
                en: "If Plusle is on your Bench, this attack also does 10 damage to each of your opponent's Benched Pokémon.",
                "fr": "Si Plusle est sur votre Banc, cette attaque inflige également 10 dégâts à chacun des Pokémon de Banc de votre adversaire.",
                "es": "Si Plusle está en tu Banca, este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival.",
                "it": "Se Plusle è nella tua panchina, questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella panchina del tuo avversario.",
                "de": "Wenn sich Plusle auf deiner Bank befindet, fügt dieser Angriff außerdem jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu.",
                "pt-br": "Se Plusle estiver no seu Banco, este ataque também causará 10 pontos de dano a cada um dos Pokémon no Banco do seu oponente.",
                "zh-tw": "如果Plusle在你的替補席上，這次攻擊也會對對手的替補席上的每隻神奇寶貝造成10點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
