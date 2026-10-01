import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/356",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/356",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/356",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/356",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/356",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/356",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/356"
    },
    name: {
        en: "Swablu",
        fr: "Tylton",
        es: "Swablu",
        it: "Swablu",
        de: "Wablu",
        "pt-br": "Swablu",
        "zh-tw": "青綿鳥",
        ja: "チルット",
        ko: "파비코"
    },
    illustrator: "Kanako Eo",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: [
        "Colorless"
    ],
    description: {
        en: "It can't relax if it or its surroundings are not clean.\nIt wipes off dirt with its wings.",
        fr: "Tylton repousse les saletés avec ses ailes. Il ne se sent à l'aise que lorsque l'endroit dans lequel il se trouve est aussi propre que lui.",
        es: "Si su cuerpo o su entorno no están limpios, no puede relajarse. En cuanto ve algo de mugre, la limpia con las alas.",
        it: "Non riesce a star tranquillo se c'è sporcizia su di sé o attorno a sé. Quando la trova, la spazza subito via con le ali.",
        de: "Es kann nicht entspannen, solange es selbst oder seine Umgebung dreckig sind. Wenn es Schmutz bemerkt, wischt es diesen mit seinen Flügeln weg.",
        "pt-br": "Não consegue relaxar quando ele ou o ambiente não estão limpos. Ele esfrega a sujeira com as asas para removê-la.",
        "zh-tw": "如果自己和周圍不乾淨，就靜不下心來的性格。見到髒污會用羽毛擦掉。",
        ja: "It can't relax if it or its surroundings are not clean.\nIt wipes off dirt with its wings.",
        ko: "It can't relax if it or its surroundings are not clean.\nIt wipes off dirt with its wings."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Sing",
                fr: "Berceuse",
                es: "Canto",
                it: "Canto",
                de: "Gesang",
                "pt-br": "Canção",
                "zh-tw": "唱歌",
                ja: "Sing",
                ko: "Sing"
            },
            cost: [
                "Colorless"
            ],
            effect: {
                en: "Your opponent's Active Pokémon is now Asleep.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
                es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
                it: "Il Pokémon attivo del tuo avversario viene addormentato.",
                de: "Das Aktive Pokémon deines Gegners schläft jetzt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Adormecido.",
                "zh-tw": "將對手的戰鬥寶可夢睡眠。",
                ja: "Your opponent's Active Pokémon is now Asleep.",
                ko: "Your opponent's Active Pokémon is now Asleep."
            }
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
