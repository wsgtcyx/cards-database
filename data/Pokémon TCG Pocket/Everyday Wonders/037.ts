import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/037",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/037"
    },
    name: {
        en: "Quagsire",
        fr: "Maraiste",
        es: "Quagsire",
        it: "Quagsire",
        de: "Morlord",
        "pt-br": "Quagsire",
        "zh-tw": "沼王",
        ko: "누오",
        ja: "ヌオー"
    },
    illustrator: "USGMEN",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Fighting"],
    dexId: [195],
    evolveFrom: {
        en: "Wooper",
        fr: "Axoloto",
        es: "Wooper",
        it: "Wooper",
        de: "Felino",
        "pt-br": "Wooper",
        "zh-tw": "烏波",
        ko: "우파",
        ja: "ウパー"
    },
    stage: "Stage1",
    description: {
        en: "Its body is always slimy. It often bangs its head on the river bottom as it swims but seems not to care.",
        fr: "Il est toujours gluant. Quand il nage, il se cogne\nsouvent la tête au fond des rivières, mais semble\ns’en moquer.",
        es: "Su cuerpo siempre resulta escurridizo al tacto.\nSuele chocarse contra el lecho del río al nadar,\npero no le importa demasiado.",
        it: "Ha un corpo molto viscido. Spesso, nuotando,\nsbatte la testa sul letto dei fiumi, ma non\nse ne preoccupa.",
        de: "Es hat einen äußerst glitschigen Körper. Beim\nSchwimmen stößt es sich regelmäßig den Kopf\nam Flussgrund, was ihm aber egal zu sein scheint.",
        "pt-br": "Seu corpo é sempre viscoso. Muitas vezes bate a cabeça no fundo do rio enquanto nada, mas parece não se importar.",
        "zh-tw": "身體總是滑溜溜的。\n雖然游泳時頭總會撞到河底，\n但牠自己毫不在意。"
    },
    attacks: [
        {
            cost: ["Fighting", "Fighting", "Colorless"],
            name: {
                en: "Amnesia",
                fr: "Amnésie",
                es: "Amnesia",
                it: "Amnesia",
                de: "Amnesie",
                "pt-br": "Amnésia",
                "zh-tw": "瞬間失憶"
            },
            effect: {
                en: "1 of your opponent's Active Pokémon's attacks is chosen at random. During your opponent's next turn, that Pokémon can't use the chosen attack.",
                fr: "1 des attaques du Pokémon Actif de votre adversaire est choisie au hasard. Lors du prochain tour de votre adversaire, ce Pokémon ne pourra pas utiliser l'attaque choisie.",
                es: "1 de los ataques del Pokémon Activo de tu rival se elige al azar. Durante el próximo turno de tu rival, ese Pokémon no podrá utilizar el ataque elegido.",
                it: "1 degli attacchi del Pokémon attivo del tuo avversario viene scelto a caso. Durante il prossimo turno del tuo avversario, quel Pokémon non potrà usare l'attacco scelto.",
                de: "1 Angriff des Aktiven Pokémon deines Gegners wird zufällig ausgewählt. Während des nächsten Zuges deines Gegners kann dieses Pokémon den gewählten Angriff nicht verwenden.",
                "pt-br": "1 dos ataques do Pokémon Ativo do seu oponente é escolhido aleatoriamente. Durante o próximo turno do seu oponente, esse Pokémon não poderá usar o ataque escolhido.",
                "zh-tw": "隨機選擇 1 隻對手的活躍寶可夢的攻擊。在對手的下一個回合中，該寶可夢不能使用所選的攻擊。"
            },
            damage: 60
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
