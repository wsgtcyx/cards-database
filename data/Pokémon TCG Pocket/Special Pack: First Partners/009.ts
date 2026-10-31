import { Card } from "../../../interfaces";
import Set from "../Special Pack: First Partners";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/SP1/009",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/SP1/009",
        es: "https://game.pokemontcgpocket.app/es/tcgp/SP1/009",
        it: "https://game.pokemontcgpocket.app/it/tcgp/SP1/009",
        de: "https://game.pokemontcgpocket.app/de/tcgp/SP1/009",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/SP1/009",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/SP1/009"
    },
    name: {
        en: "Mudkip",
        fr: "Gobou",
        es: "Mudkip",
        "pt-br": "Mudkip",
        "zh-tw": "水躍魚",
        ja: "ミズゴロウ",
        ko: "물짱이",
        it: "Mudkip",
        de: "Hydropi"
    },
    illustrator: "Saboteri",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: [
        "Water"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Mud-Slap",
                fr: "Coud'Boue",
                es: "Bofetón Lodo",
                it: "Fangosberla",
                de: "Lehmschelle",
                "pt-br": "Tapa de Lama",
                "zh-tw": "擲泥",
                ja: "Mud-Slap",
                ko: "Mud-Slap"
            },
            cost: [
                "Colorless",
                "Water"
            ],
            damage: 40
        }
    ],
    abilities: [],
    description: {
        en: "The fin on Mudkip’s head acts as highly sensitive radar. Using this fin to sense movements of water and air, this Pokémon can determine what is taking place around it without using its eyes.",
        fr: "La nageoire sur la tête de Gobou lui sert de radar hypersensible. Il l’utilise pour sentir les mouvements de l’eau et de l’air et savoir ce qui se passe autour de lui sans avoir à ouvrir les yeux.",
        es: "La aleta que tiene Mudkip en la cabeza actúa como un radar ultrasensible. Puede captar movimientos que se producen en el agua y en el aire, y todo lo que ocurre a su alrededor, sin necesidad de abrir los ojos.",
        it: "La pinna sulla testa di Mudkip agisce come un radar ultrasensibile. Usandola questo Pokémon può percepire i movimenti dell’acqua e dell’aria, riuscendo a determinare cosa succede attorno a lui senza bisogno di guardare.",
        de: "Die Flosse an Hydropis’ Kopf dient als hochempfindlicher Radar. Damit kann es Bewegungen im Wasser und in der Luft wahrnehmen. So weiß es jederzeit, was in seiner Umgebung passiert, ohne dabei seine Augen zu benutzen.",
        "pt-br": "A barbatana na cabeça do Mudkip funciona como um radar muito sensível. Usando-a para sentir a água e o ar, consegue determinar o que está acontecendo ao seu redor sem usar a visão.",
        "zh-tw": "牠頭上的鰭是非常靈敏的雷達，能從水或空氣的流動中感知周遭的狀況，就算不使用眼睛也能行動。",
        ja: "The fin on Mudkip’s head acts as highly sensitive radar. Using this fin to sense movements of water and air, this Pokémon can determine what is taking place around it without using its eyes.",
        ko: "The fin on Mudkip’s head acts as highly sensitive radar. Using this fin to sense movements of water and air, this Pokémon can determine what is taking place around it without using its eyes."
    }
};

export default card;
