import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Mega Steelix ex",
        "fr": "Méga-Steelix ex",
        "es": "Mega Steelix ex",
        "it": "Mega Steelix ex",
        "de": "Mega-Stahlos ex",
        "pt-br": "Mega Steelix ex",
        "zh-tw": "超級大鋼蛇 ex"
    },
    illustrator: "matazo",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 220,
    types: ["Metal"],
    evolveFrom: {
        en: "Onix",
        "fr": "Onix",
        "es": "Onix",
        "it": "Onix",
        "de": "Onix",
        "pt-br": "Onix",
        "zh-tw": "大岩蛇"
    },
    description: {
        en: "To protect itself from opponents' attacks, it uses\nmagnetism to control pieces of its hard outer\nshell that have flaked off.",
        "fr": "Pour se protéger des attaques de ses adversaires, il utilise\nmagnétisme pour contrôler des morceaux de son extérieur dur\ncoquille qui s'est écaillée.",
        "es": "Para protegerse de los ataques de sus oponentes, utiliza\nmagnetismo para controlar piezas de su exterior duro.\ncáscara que se ha desprendido.",
        "it": "Per proteggersi dagli attacchi degli avversari, utilizza\nmagnetismo per controllare pezzi del suo duro esterno\nguscio che si è sfaldato.",
        "de": "Um sich vor gegnerischen Angriffen zu schützen, nutzt es\nMagnetismus, um Teile seiner harten Außenseite zu kontrollieren\nSchale, die abgeplatzt ist.",
        "pt-br": "Para se proteger dos ataques dos oponentes, ele usa\nmagnetismo para controlar pedaços de seu exterior duro\ncasca que se descascou.",
        "zh-tw": "為了保護自己免受對手的攻擊，它使用\n磁性來控制其硬質外殼的各個部分\n已經剝落的外殼。"
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Adamantine Rolling",
                "fr": "Roulement Adamantin",
                "es": "Rodamiento Adamantino",
                "it": "Rotolamento Adamantino",
                "de": "Adamantisches Rollen",
                "pt-br": "Rolamento Adamantino",
                "zh-tw": "精金軋製"
            },
            damage: 120,
            cost: ["Metal", "Metal", "Colorless", "Colorless"],
            effect: {
                en: "During your opponent's next turn, this Pokémon takes  damage from attacks and has no Weakness.",
                "fr": "Lors du prochain tour de votre adversaire, ce Pokémon subit des dégâts d'attaques et n'a aucune Faiblesse.",
                "es": "Durante el próximo turno de tu rival, este Pokémon recibe daño de los ataques y no tiene Debilidad.",
                "it": "Durante il prossimo turno del tuo avversario, questo Pokémon subisce danni dagli attacchi e non ha debolezza.",
                "de": "Während des nächsten Zuges deines Gegners erleidet dieses Pokémon Schaden durch Angriffe und hat keine Schwäche.",
                "pt-br": "Durante o próximo turno do seu oponente, este Pokémon sofrerá danos de ataques e não terá Fraqueza.",
                "zh-tw": "在對手的下一個回合中，這只神奇寶貝受到攻擊傷害並且沒有弱點。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 4
};
export default card;
