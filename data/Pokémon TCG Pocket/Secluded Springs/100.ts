import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Paldean Wooper",
        "fr": "Wooper paldéen",
        "es": "Wooper paldeano",
        "it": "Wooper Paldeano",
        "de": "Paldean Wooper",
        "pt-br": "Paldeano Wooper",
        "zh-tw": "帕底亞烏波",
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 50,
    types: ["Darkness"],
    description: {
        en: "After losing a territorial struggle, Wooper began\nliving on land. The Pokémon changed over time,\ndeveloping a poisonous film to protect its body.",
        "fr": "Après avoir perdu une lutte territoriale, Wooper commença\nvivant sur terre. Le Pokémon a changé au fil du temps,\ndévelopper un film toxique pour protéger son corps.",
        "es": "Después de perder una lucha territorial, Wooper comenzó\nviviendo en la tierra. Los Pokémon cambiaron con el tiempo,\ndesarrollando una película venenosa para proteger su cuerpo.",
        "it": "Dopo aver perso una lotta territoriale, Wooper iniziò\nvivere sulla terra. I Pokémon sono cambiati nel tempo,\nsviluppando una pellicola velenosa per proteggere il suo corpo.",
        "de": "Nachdem er einen Territorialkampf verloren hatte, begann Wooper\nLeben an Land. Das Pokémon hat sich im Laufe der Zeit verändert,\nEs entwickelt einen Giftfilm, um seinen Körper zu schützen.",
        "pt-br": "Depois de perder uma luta territorial, Wooper começou\nvivendo na terra. O Pokémon mudou com o tempo,\ndesenvolvendo uma película venenosa para proteger seu corpo.",
        "zh-tw": "在領土爭奪戰失敗後，伍珀開始\n生活在陸地上。神奇寶貝隨著時間的推移而改變，\n形成一層有毒的薄膜來保護它的身體。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Poison Jab",
                "fr": "Coup de poison",
                "es": "Golpe venenoso",
                "it": "Colpo di veleno",
                "de": "Giftstoß",
                "pt-br": "Golpe Venenoso",
                "zh-tw": "毒刺"
            },
            damage: 10,
            cost: ["Darkness"],
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
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
