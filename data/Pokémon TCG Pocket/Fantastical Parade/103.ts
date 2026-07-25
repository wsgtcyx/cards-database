import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/103",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/103",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/103",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/103",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/103"
    },
    name: {
        en: "Spiritomb",
        "fr": "Spiritomb",
        "es": "Spiritomb",
        "it": "Spiritomb",
        "de": "Kryppuk",
        "pt-br": "Spiritomb",
        "zh-tw": "靈墓"
    },
    illustrator: "Kouki Saitou",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Darkness"],
    description: {
        en: "It was formed by uniting 108 spirits. It has been\nbound to the Odd Keystone to keep it from\ndoing any mischief.",
        "fr": "Il a été formé en réunissant 108 esprits. Cela a été\nlié à l'Odd Keystone pour l'empêcher de\nfaire des méfaits.",
        "es": "Se formó uniendo 108 espíritus. ha sido\natado a la Odd Keystone para evitar que\nhaciendo cualquier travesura.",
        "it": "Si è formato unendo 108 spiriti. Lo è stato\nlegato alla Strana Chiave di Pietra per impedirglielo\nfacendo qualsiasi male.",
        "de": "Es entstand durch die Vereinigung von 108 Geistern. Das war es\nan den seltsamen Schlüsselstein gebunden, um ihn davon abzuhalten\nirgendein Unheil anrichten.",
        "pt-br": "Foi formado pela união de 108 espíritos. Foi\nvinculado à Pedra Angular Estranha para impedi-la de\nfazendo qualquer maldade.",
        "zh-tw": "它是由108個武魂聯合而成。已經是\n綁定到奇數梯形失真校正以防止其受到影響\n做任何惡作劇。"
    },
    stage: "Basic",
    abilities: [{
            type: "Ability",
            name: {
                en: "Final Scream",
                "fr": "Cri final",
                "es": "Grito final",
                "it": "Urlo finale",
                "de": "Letzter Schrei",
                "pt-br": "Grito Final",
                "zh-tw": "最後的尖叫"
            },
            effect: {
                en: "If this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon, do 10 damage to each of your opponent's Pokémon.",
                "fr": "Si ce Pokémon est dans le Point Actif et est mis KO par les dégâts d'une attaque du Pokémon de votre adversaire, infligez 10 dégâts à chacun des Pokémon de votre adversaire.",
                "es": "Si este Pokémon está en el Punto Activo y queda fuera de combate por el daño de un ataque del Pokémon de tu rival, haz 10 puntos de daño a cada uno de los Pokémon de tu rival.",
                "it": "Se questo Pokémon è in posizione attiva e viene messo KO dai danni di un attacco dei Pokémon del tuo avversario, infliggi 10 danni a ciascuno dei Pokémon del tuo avversario.",
                "de": "Wenn sich dieses Pokémon an der aktiven Stelle befindet und durch den Schaden eines Angriffs des Pokémon deines Gegners kampfunfähig gemacht wird, füge jedem Pokémon deines Gegners 10 Schadenspunkte zu.",
                "pt-br": "Se este Pokémon estiver no Ponto Ativo e for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, cause 10 pontos de dano a cada um dos Pokémon do seu oponente.",
                "zh-tw": "如果該寶可夢位於活動區域並因對手寶可夢的攻擊而被擊倒，則對對手的每隻寶可夢造成 10 點傷害。"
            }
        }],
    attacks: [{
            name: {
                en: "Spooky Shot",
                "fr": "Tir effrayant",
                "es": "Tiro espeluznante",
                "it": "Colpo spettrale",
                "de": "Gruseliger Schuss",
                "pt-br": "Tiro assustador",
                "zh-tw": "幽靈射擊"
            },
            damage: 30,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
