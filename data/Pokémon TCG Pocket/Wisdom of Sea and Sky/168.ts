import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Qwilfish",
        "fr": "Qwilfish",
        "es": "Qwilfish",
        "it": "Qwilfish",
        "de": "Qwilfish",
        "pt-br": "Qwilfish",
        "zh-tw": "奎爾菲什"
    },
    illustrator: "June",
    rarity: "One Star",
    category: "Pokemon",
    hp: 80,
    types: ["Water"],
    description: {
        en: "Be cautious if this Pokémon starts sucking in\nwater—it will soon attack by scattering the toxic\nspikes that grow all over its body.",
        "fr": "Soyez prudent si ce Pokémon commence à aspirer\nl'eau - elle attaquera bientôt en dispersant les substances toxiques\ndes pointes qui poussent sur tout son corps.",
        "es": "Ten cuidado si este Pokémon comienza a succionar\nagua: pronto atacará dispersando el tóxico\npúas que crecen por todo su cuerpo.",
        "it": "Fai attenzione se questo Pokémon inizia ad aspirare\nacqua: presto attaccherà disperdendo le sostanze tossiche\nspine che crescono su tutto il corpo.",
        "de": "Seien Sie vorsichtig, wenn dieses Pokémon anfängt einzusaugen\nWasser – es wird bald angreifen, indem es das Gift verstreut\nStacheln, die über den ganzen Körper wachsen.",
        "pt-br": "Tenha cuidado se este Pokémon começar a sugar\nágua - em breve atacará, espalhando o tóxico\nespinhos que crescem por todo o seu corpo.",
        "zh-tw": "如果這只神奇寶貝開始吸入，請小心\n水——它很快就會通過散佈有毒物質進行攻擊\n全身長出尖刺。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Poison Sting",
                "fr": "Piqûre de poison",
                "es": "Picadura de veneno",
                "it": "Puntura di veleno",
                "de": "Giftstich",
                "pt-br": "Picada Venenosa",
                "zh-tw": "毒刺"
            },
            damage: 20,
            cost: ["Water"],
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Empoisonné.",
                "es": "El Pokémon Activo de tu rival ahora está Envenenado.",
                "it": "Il Pokémon attivo del tuo avversario ora è avvelenato.",
                "de": "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Envenenado.",
                "zh-tw": "你對手的主動神奇寶貝現在中毒了。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["lugia"]
};
export default card;
