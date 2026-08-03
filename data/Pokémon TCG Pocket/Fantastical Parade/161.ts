import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/161",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/161",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/161",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/161",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/161",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/161"
    },
    name: {
        en: "Oricorio",
        "fr": "Plumeline",
        "es": "Oricorio",
        "it": "Oricorio",
        "de": "Choreogel",
        "pt-br": "Oricorio",
        "zh-tw": "花舞鳥"
    },
    illustrator: "0313",
    rarity: "One Star",
    category: "Pokemon",
    hp: 70,
    types: ["Fire"],
    description: {
        en: "This form of Oricorio has sipped red nectar. It whips up\nblazing flames as it moves to the steps of its passionate dance.",
        "fr": "Cette forme d'Oricorio a siroté du nectar rouge. Ça fouette\ndes flammes flamboyantes alors qu'il avance sur les pas de sa danse passionnée.",
        "es": "Esta forma de Oricorio ha sorbido néctar rojo. se agita\nllamas ardientes mientras avanza al ritmo de su danza apasionada.",
        "it": "Questa forma di Oricorio ha sorseggiato nettare rosso. Si scatena\nfiamme ardenti mentre si muove sui passi della sua danza appassionata.",
        "de": "Diese Form von Oricorio hat roten Nektar getrunken. Es peitscht\nlodernde Flammen, während es sich zu den Schritten seines leidenschaftlichen Tanzes bewegt.",
        "pt-br": "Esta forma de Oricorio bebeu néctar vermelho. Isso chicoteia\nchamas ardentes enquanto segue os passos de sua dança apaixonada.",
        "zh-tw": "這種形態的奧里科里奧正在啜飲著紅色的花蜜。它激起\n當它邁著充滿激情的舞步時，熊熊燃燒的火焰。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Inspiring Dance",
                "fr": "Danse inspirante",
                "es": "Danza inspiradora",
                "it": "Danza ispiratrice",
                "de": "Inspirierender Tanz",
                "pt-br": "Dança inspiradora",
                "zh-tw": "鼓舞人心的舞蹈"
            },
            damage: 10,
            cost: ["Fire"],
            effect: {
                en: "During your next turn, attacks used by your Pokémon do +20 damage to your opponent's Active Pokémon.",
                "fr": "Lors de votre prochain tour, les attaques utilisées par votre Pokémon infligent +20 dégâts au Pokémon Actif de votre adversaire.",
                "es": "Durante tu próximo turno, los ataques utilizados por tus Pokémon hacen +20 de daño al Pokémon Activo de tu rival.",
                "it": "Durante il tuo prossimo turno, gli attacchi usati dai tuoi Pokémon infliggono +20 danni al Pokémon attivo del tuo avversario.",
                "de": "Während deines nächsten Zuges fügen Angriffe deines Pokémon dem aktiven Pokémon deines Gegners +20 Schaden zu.",
                "pt-br": "Durante o seu próximo turno, os ataques usados ​​pelos seus Pokémon causam +20 de dano ao Pokémon Ativo do seu oponente.",
                "zh-tw": "在你的下一個回合中，你的神奇寶貝使用的攻擊對對手的活躍神奇寶貝造成+20傷害。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1
};
export default card;
