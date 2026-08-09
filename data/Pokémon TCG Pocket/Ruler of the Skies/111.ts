import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/111",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/111",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/111",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/111",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/111",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/111",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/111"
    },
    name: {
        en: "Genesect",
        fr: "Genesect",
        es: "Genesect",
        it: "Genesect",
        de: "Genesect",
        "pt-br": "Genesect",
        "zh-tw": "蓋諾賽克特",
        ko: "게노세크트",
        ja: "ゲノセクト"
    },
    illustrator: "Nelnal",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Metal"],
    dexId: [649],
    stage: "Basic",
    description: {
        en: "This Pokémon existed 300 million years ago. Team Plasma altered it and attached a cannon to its back.",
        fr: "Un Pokémon existant depuis 300 millions d’années, et modifié\npar la Team Plasma. Il a maintenant un canon dans le dos.",
        es: "Un Pokémon de hace 300 millones de años y alterado por el\nEquipo Plasma, quienes le han equipado con un cañón en el\nlomo.",
        it: "Esiste da più di 300 milioni di anni. Il Team Plasma ne ha\nmodificato il corpo montandogli un cannone sul dorso.",
        de: "Es lebte vor 300 Millionen Jahren. Team Plasma modifizierte\nes und pflanzte ihm am Rücken eine Kanone ein.",
        "pt-br": "Esse Pokémon existiu há 300 milhões de anos. A Equipe Plasma o alterou e acoplou um canhão em suas costas.",
        "zh-tw": "存在於3億年前的寶可夢。\n被等離子隊改造，\n在背部裝了砲台。"
    },
    attacks: [
        {
            cost: ["Metal", "Metal"],
            name: {
                en: "Techno Blast",
                fr: "Techno-Buster",
                es: "Tecno Shock",
                it: "Tecnobotto",
                de: "Techblaster",
                "zh-tw": "高科技光炮",
                "pt-br": "Rajada Tecnológica"
            },
            effect: {
                en: "During your next turn, this Pokémon can't attack.",
                fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
                es: "Durante tu próximo turno, este Pokémon no puede atacar.",
                it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
                de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
                "pt-br": "Durante o seu próximo turno, este Pokémon não poderá atacar.",
                "zh-tw": "在下個自己的回合,這隻寶可夢無法使用招式。"
            },
            damage: 70
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
