import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/210",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/210",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/210",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/210",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/210",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/210",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/210"
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
        en: "Its dislike of water makes it take shelter under the eaves of houses in rain. It uses pom-poms made of sparks for cheering.",
        fr: "Il déteste tellement l'eau qu'il se réfugie sous les porches à la moindre averse. Il soutient ses camarades avec des pompons d'étincelles.",
        es: "Como odia el agua, se protege bajo los aleros de las casas si llueve. Anima a sus compañeros con pompones de chispas.",
        it: "Poiché odia l'acqua, quando piove si rifugia sotto i cornicioni. Incita i compagni con pompon di scintille.",
        de: "Da es Wasser verabscheut, versteckt es sich bei Regen unter Dachvorsprüngen. Es setzt Pompons aus Funken zum Anfeuern ein.",
        "pt-br": "Detesta água, por isso se esconde sob as calhas das casas quando chove. Torce com pompons feitos de fagulhas.",
        "zh-tw": "討厭碰到水，一旦下起雨\n就會到屋簷下避雨。\n會用火花彩球幫夥伴加油。"
    },
    attacks: [
        {
            cost: ["Lightning"],
            name: {
                en: "Buddy Spark",
                fr: "Étincelle Partenaire",
                es: "Chispa Amiga",
                it: "Amico Scintilla",
                de: "Kumpel Spark",
                "pt-br": "Fagulha Amiga",
                "zh-tw": "拍檔電光"
            },
            effect: {
                en: "If Plusle is on your Bench, this attack also does 10 damage to each of your opponent's Benched Pokémon.",
                fr: "Si Posipi est sur votre Banc, cette attaque inflige aussi 10 dégâts à chacun des Pokémon de Banc de votre adversaire.",
                es: "Si Plusle está en tu Banca, este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival.",
                it: "Se Plusle è nella tua panchina, questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella panchina del tuo avversario.",
                de: "Wenn sich Plusle auf deiner Bank befindet, fügt dieser Angriff außerdem jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu.",
                "pt-br": "Se Plusle estiver no seu Banco, este ataque também causará 10 pontos de dano a cada um dos Pokémon no Banco do seu oponente.",
                "zh-tw": "若自己的備戰區有「正電拍拍」,則對手的所有備戰寶可夢也受到10點傷害。"
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
