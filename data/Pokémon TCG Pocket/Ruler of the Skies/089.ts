import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/089",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/089",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/089",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/089",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/089",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/089",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/089"
    },
    name: {
        en: "Conkeldurr",
        fr: "Bétochef",
        es: "Conkeldurr",
        it: "Conkeldurr",
        de: "Meistagrif",
        "pt-br": "Conkeldurr",
        "zh-tw": "修建老匠",
        ko: "노보청",
        ja: "ローブシン"
    },
    illustrator: "Masakazu Fukuda",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Fighting"],
    dexId: [534],
    evolveFrom: {
        en: "Gurdurr",
        fr: "Ouvrifier",
        es: "Gurdurr",
        it: "Gurdurr",
        de: "Strepoli",
        "pt-br": "Gurdurr",
        "zh-tw": "鐵骨土人",
        ko: "토쇠골",
        ja: "ドテッコツ"
    },
    stage: "Stage2",
    description: {
        en: "Rather than rely on their strength, they master moves that make good use of centrifugal force to swing around concrete.",
        fr: "Au lieu de se reposer sur sa musculature, il tire parti de la force centrifuge et attaque ses ennemis en faisant tournoyer ses piliers de béton.",
        es: "En vez de depender de su propia fuerza, sus movimientos hacen perfecto uso de la fuerza centrífuga para blandir pilares de hormigón.",
        it: "Utilizza con maestria mosse con cui fa roteare pilastri di cemento, sfruttando a dovere la forza centrifuga più che i propri muscoli.",
        de: "Anstatt sich auf seine Stärke zu verlassen, setzt es Attacken ein, bei denen es seine Betonpfeiler mithilfe der Zentrifugalkraft umherschwingt.",
        "pt-br": "Em vez de depender da força física, dominam movimentos que fazem bom uso da força centrífuga para girar concreto.",
        "zh-tw": "能夠不憑蠻力，\n而是巧妙利用離心力\n來揮舞水泥柱使出招式。"
    },
    attacks: [
        {
            cost: ["Fighting", "Fighting", "Colorless"],
            name: {
                en: "Bedrock Breaker",
                fr: "Brise Fondation",
                es: "Rompecimientos",
                "pt-br": "Quebrador de Alicerce",
                "zh-tw": "岩盤崩裂",
                "it": "Infrangiroccia",
                "de": "Felsgrundbrecher"
            },
            effect: {
                en: "Discard a Stadium in play.",
                fr: "Défaussez un Stade en jeu.",
                es: "Descarta un Estadio en juego.",
                it: "Scarta uno Stadio in gioco.",
                de: "Wirf ein im Spiel befindliches Stadion ab.",
                "pt-br": "Descarte um Estádio em jogo.",
                "zh-tw": "將場上的競技場卡丟棄。"
            },
            damage: 100
        }
    ],
    weaknesses: [
        {
            type: "Psychic",
            value: "+20"
        }
    ],
    retreat: 3
};
export default card;
