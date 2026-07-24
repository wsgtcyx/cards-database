import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/018"
    },
    name: {
        en: "Alolan Marowak",
        "fr": "Ossatueurd'Alola",
        "es": "Marowakde Alola",
        "it": "Marowakdi Alola",
        "de": "Alola-Knogga",
        "pt-br": "Marowakde Alola",
        "zh-tw": "阿羅蘭·馬洛瓦克"
    },
    illustrator: "Dsuke",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fire"],
    evolveFrom: {
        en: "Cubone",
        "fr": "Cubone",
        "es": "cubone",
        "it": "Cubone",
        "de": "Cubone",
        "pt-br": "Cubo",
        "zh-tw": "庫博內"
    },
    description: {
        en: "The cursed flames that light up the bone carried\nby this Pokémon are said to cause both mental\nand physical pain that will never fade.",
        "fr": "Les flammes maudites qui éclairent l'os porté\npar ce Pokémon sont censés provoquer à la fois des troubles mentaux\net une douleur physique qui ne s'estompera jamais.",
        "es": "Las llamas malditas que iluminan el hueso llevado\nSe dice que este Pokémon causa problemas mentales.\ny dolor físico que nunca desaparecerá.",
        "it": "Le fiamme maledette che illuminano l'osso trasportato\nsi dice che questo Pokémon causi entrambi danni mentali\ne un dolore fisico che non svanirà mai.",
        "de": "Die verfluchten Flammen, die den getragenen Knochen erleuchten\nVon diesem Pokémon wird gesagt, dass es beides mental auslöst\nund körperliche Schmerzen, die niemals nachlassen werden.",
        "pt-br": "As chamas amaldiçoadas que iluminam o osso carregado\npor este Pokémon causam tanto problemas mentais\ne dor física que nunca desaparecerá.",
        "zh-tw": "點燃骨頭的詛咒火焰\n據說這個神奇寶貝會引起精神\n以及永遠不會消失的肉體痛苦。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Fiery Bone",
                "fr": "Os ardent",
                "es": "Hueso ardiente",
                "it": "Osso ardente",
                "de": "Feuriger Knochen",
                "pt-br": "Osso de Fogo",
                "zh-tw": "火骨"
            },
            damage: 40,
            cost: ["Fire", "Fire"],
            effect: {
                en: "Your opponent's Active Pokémon is now Burned.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Brûlé.",
                "es": "El Pokémon Activo de tu rival ahora está Quemado.",
                "it": "Il Pokémon attivo del tuo avversario è ora bruciato.",
                "de": "Das aktive Pokémon deines Gegners ist jetzt verbrannt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Queimado.",
                "zh-tw": "你對手的活躍神奇寶貝現在被燒毀了。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2
};
export default card;
