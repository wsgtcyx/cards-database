import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/198",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/198",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/198",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/198",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/198",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/198",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/198",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/198"
    },
    name: {
        en: "Lunala",
        fr: "Lunala",
        es: "Lunala",
        "pt-br": "Lunala",
        "zh-tw": "露奈雅拉",
        ja: "ルナアーラ",
        ko: "루나아라",
        it: "Lunala",
        de: "Lunala"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 150,
    types: [
        "Psychic"
    ],
    stage: "Stage2",
    retreat: 1,
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Cosmoem",
        fr: "Cosmovum",
        es: "Cosmoem",
        it: "Cosmoem",
        de: "Cosmovum",
        "pt-br": "Cosmoem",
        "zh-tw": "科斯莫姆",
        ja: "コスモウム",
        ko: "Cosmoem"
    },
    attacks: [
        {
            name: {
                en: "Wings of the Moone",
                fr: "Ailes du Halo Lunaire",
                es: "Alas de la Luna",
                it: "Ali Lunari",
                de: "Mondscheiben-Flügel",
                "pt-br": "Asas Lunares",
                "zh-tw": "月輪之翼",
                ja: "がちりんのつばさ",
                ko: "Wings of the Moone"
            },
            cost: [
                "Psychic",
                "Psychic"
            ],
            damage: 110,
            effect: {
                en: "Move all Energy from this Pokémon to your Benched Pokémon in any way you like.",
                fr: "Déplacez toutes les Énergies de ce Pokémon vers vos Pokémon de Banc comme il vous plaît.",
                es: "Mueve todas las Energías de este Pokémon a tus Pokémon en Banca de la manera que desees.",
                it: "Sposta tutte le Energie da questo Pokémon a quelli nella tua panchina nel modo che preferisci.",
                de: "Verschiebe alle Energien von diesem Pokémon beliebig auf die Pokémon auf deiner Bank.",
                "pt-br": "Mova todas as Energias deste Pokémon para os seus Pokémon no Banco como desejar.",
                "zh-tw": "將這隻寶可夢身上的能量,全部以任意方式改附於備戰寶可夢身上。",
                ja: "このポケモンからエネルギーをすべて、ベンチポケモンに好きなようにつけ替える。",
                ko: "Move all Energy from this Pokémon to your Benched Pokémon in any way you like."
            }
        }
    ],
    abilities: [],
    description: {
        en: "Known as the Beast That Calls the Moon, this Pokémon lives by taking in any and all light and converting it into its own energy.",
        fr: "Il a pour surnom « celui qui invite la lune ». Il vit en transformant toutes sortes de lumière en énergie.",
        es: "Lo llaman la Criatura que Invoca a la Luna. Convierte cualquier forma de luz en energía para sustentarse.",
        it: "Viene chiamato “la creatura che evoca la luna”. Converte qualsiasi tipo di luce in energia per sostentarsi.",
        de: "Ihm wurde der Name „Mondbringer“ verliehen. Solange es lebt, wandelt es jedes Licht in Energie um.",
        "pt-br": "Conhecido como A Criatura que Traz a Lua, este Pokémon converte toda a luz ao seu alcance em sua própria energia para sobreviver.",
        "zh-tw": "被稱為招引月亮之獸。將照耀一切的光轉化為能量來維持生命。",
        ja: "月を 誘いし 獣 という 名前を もつ。 あらゆる 光を エネルギーに 変えて 生きている。",
        ko: "Known as the Beast That Calls the Moon, this Pokémon lives by taking in any and all light and converting it into its own energy."
    }
};

export default card;
