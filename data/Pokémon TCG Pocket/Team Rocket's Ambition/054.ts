import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/054",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/054",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/054",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/054",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/054",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/054",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/054"
    },
    name: {
        en: "Garchomp",
        fr: "Carchacrok",
        es: "Garchomp",
        it: "Garchomp",
        de: "Knakrack",
        "pt-br": "Garchomp",
        "zh-tw": "烈咬陸鯊",
        ko: "한카리아스",
        ja: "ガブリアス"
    },
    illustrator: "Naoki Saito",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Dragon"],
    dexId: [445],
    evolveFrom: {
        en: "Gabite",
        fr: "Carmache",
        es: "Gabite",
        it: "Gabite",
        de: "Knarksel",
        "pt-br": "Gabite",
        "zh-tw": "尖牙陸鯊",
        ko: "한바이트",
        ja: "ガバイト"
    },
    stage: "Stage2",
    description: {
        en: "The protuberances on its head serve as sensors. It can even detect distant prey.",
        fr: "Les deux protubérances sur sa tête lui servent de capteurs. Il peut ainsi détecter les mouvements des proies très éloignées.",
        es: "Las dos protuberancias que tiene en la cabeza le sirven de sensores, Puede rastrear presas que se encuentren a gran distancia.",
        it: "Le protuberanze che ha ai lati della testa hanno funzione di sensori e percepiscono le prede anche a grande distanza.",
        de: "Die beiden Fortslätze an seinem Kopf haben die Funktion eines Sensors. Mit ihnen kann es auch weit entfernte Beute aufsoüren.",
        "pt-br": "As protuberâncias na sua cabeça servem como sensores. Podem detectar até presas distantes.",
        "zh-tw": "頭上長著的２個突起物是作為感應器的用途。就連遠處獵物的狀況也能察覺。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Mach Stealth",
                fr: "Évasion Éclair",
                es: "Sigilo Mach",
                it: "Occultamento Mach",
                de: "Rasantes Tarnen",
                "pt-br": "Furtividade Supersônica",
                "zh-tw": "音速隱形"
            },
            effect: {
                en: "If your opponent's Pokémon is Knocked Out by damage from this Pokémon's attacks, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon.",
                fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts des attaques de ce Pokémon, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
                es: "Si alguno de los Pokémon de tu rival queda Fuera de Combate por el daño de los ataques de este Pokémon, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
                it: "Se un Pokémon del tuo avversario viene messo KO dai danni degli attacchi di questo Pokémon, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
                de: "Wenn das Pokémon deines Gegners durch Schaden der Attacken dieses Pokémon kampfunfähig wird, verhindere während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden.",
                "pt-br": "Se o Pokémon do seu oponente for Nocauteado pelo dano dos ataques deste Pokémon, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
                "zh-tw": "若對手的寶可夢因這隻寶可夢招式的傷害而昏厥了,則在下個對手的回合,這隻寶可夢不會受到招式的傷害與效果的影響。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Water", "Fighting", "Colorless"],
            name: {
                en: "Land Crush",
                fr: "Écras'Terre",
                es: "Aterrizaje",
                it: "Schiacciaterra",
                de: "Schollenbrecher",
                "pt-br": "Aperto de Terra",
                "zh-tw": "大地粉碎"
            },
            damage: 120
        }
    ],
    retreat: 1
};

export default card;
