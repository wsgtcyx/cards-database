import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Poliwrath",
        "fr": "Poliwrath",
        "es": "poliira",
        "it": "Poliwrath",
        "de": "Poliwrath",
        "pt-br": "Poliira",
        "zh-tw": "波利拉特"
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 150,
    types: ["Water"],
    evolveFrom: {
        en: "Poliwhirl",
        "fr": "Tourbillon poli",
        "es": "poliwhirl",
        "it": "Polivortice",
        "de": "Poliwirbel",
        "pt-br": "Poliwhirl",
        "zh-tw": "波利惠爾"
    },
    description: {
        en: "Its body is solid muscle. When swimming through\ncold seas, Poliwrath uses its impressive arms to\nsmash through drift ice and plow forward.",
        "fr": "Son corps est solidement musclé. En nageant à travers\nmers froides, Poliwrath utilise ses bras impressionnants pour\nbrisez la glace dérivante et avancez.",
        "es": "Su cuerpo es músculo sólido. Al nadar a través\nmares fríos, Poliwrath usa sus impresionantes brazos para\nAtraviesa el hielo a la deriva y avanza.",
        "it": "Il suo corpo è un muscolo solido. Quando si nuota\nmari freddi, Poliwrath usa le sue imponenti braccia\nsfonda il ghiaccio alla deriva e avanza.",
        "de": "Sein Körper besteht aus soliden Muskeln. Beim Durchschwimmen\nKalte Meere, Poliwrath nutzt seine beeindruckenden Arme, um\nSchlagen Sie durch Treibeis und pflügen Sie vorwärts.",
        "pt-br": "Seu corpo é um músculo sólido. Ao nadar através\nmares frios, Poliwrath usa seus braços impressionantes para\nesmague o gelo à deriva e avance.",
        "zh-tw": "它的身體是堅實的肌肉。游過時\n在寒冷的海洋中，Poliwrath 使用其令人印象深刻的手臂\n衝破流冰，勇往直前。"
    },
    stage: "Stage2",
    abilities: [{
            type: "Ability",
            name: {
                en: "Counterattack",
                "fr": "Contre-attaque",
                "es": "Contraataque",
                "it": "Contrattacco",
                "de": "Gegenangriff",
                "pt-br": "Contra-ataque",
                "zh-tw": "反擊"
            },
            effect: {
                en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon, do 20 damage to the Attacking Pokémon.",
                "fr": "Si ce Pokémon est dans le Point Actif et est endommagé par une attaque du Pokémon de votre adversaire, infligez 20 dégâts au Pokémon attaquant.",
                "es": "Si este Pokémon está en el Punto Activo y es dañado por un ataque del Pokémon de tu rival, haz 20 puntos de daño al Pokémon Atacante.",
                "it": "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco dei Pokémon del tuo avversario, infliggi 20 danni al Pokémon attaccante.",
                "de": "Wenn sich dieses Pokémon an der aktiven Stelle befindet und durch einen Angriff des Pokémon deines Gegners beschädigt wird, füge dem angreifenden Pokémon 20 Schadenspunkte zu.",
                "pt-br": "Se este Pokémon estiver no Ponto Ativo e for danificado por um ataque do Pokémon do seu oponente, cause 20 pontos de dano ao Pokémon Atacante.",
                "zh-tw": "如果這只寶可夢位於活動區域並因對方寶可夢的攻擊而受到傷害，則對攻擊的寶可夢造成 20 點傷害。"
            }
        }],
    attacks: [{
            name: {
                en: "Mega Punch",
                "fr": "Méga coup de poing",
                "es": "Mega puñetazo",
                "it": "Megapugno",
                "de": "Mega-Schlag",
                "pt-br": "Mega Soco",
                "zh-tw": "超級沖床"
            },
            damage: 80,
            cost: ["Water", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2
};
export default card;
