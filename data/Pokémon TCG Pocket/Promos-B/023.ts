import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/023/8bf607df3d92df8c",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/023/8bf607df3d92df8c",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/023/8bf607df3d92df8c",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/023/8bf607df3d92df8c",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/023/8bf607df3d92df8c",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/023/8bf607df3d92df8c",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/023/8bf607df3d92df8c",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/023/8bf607df3d92df8c",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/023/8bf607df3d92df8c"
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
    illustrator: "Anesaki Dynamic",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Metal"],
    dexId: [649],
    stage: "Basic",
    description: {
        en: "This Pokémon existed 300 million years ago. Team Plasma altered it and attached a cannon to its back.",
        fr: "Un Pokémon existant depuis 300 millions d'années, et modifié par la Team Plasma. Il a maintenant un canon dans le dos.",
        es: "Un Pokémon de hace 300 millones de años y alterado por el Equipo Plasma, quienes le han equipado con un cañón en el lomo.",
        it: "Esiste da più di 300 milioni di anni. Il Team Plasma ne ha modificato il corpo montandogli un cannone sul dorso.",
        de: "Es lebte vor 300 Millionen Jahren. Team Plasma modifizierte es und pflanzte ihm am Rücken eine Kanone ein.",
        "pt-br": "Esse Pokémon existiu há 300 milhões de anos. A Equipe Plasma o alterou e acoplou um canhão em suas costas.",
        "zh-tw": "存在於3億年前的寶可夢。被等離子隊改造，在背部裝了砲台。",
        ja: "３億年前に いた ポケモン。 プラズマ団に 改造 され 背中に 砲台を つけられた。",
        ko: "3억 년 전에 있었던 포켓몬.\n플라스마단에게 개조당해\n등에 대포가 붙여졌다."
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Metal Blast",
                fr: "Explosion Métallique",
                es: "Explosión Metálica",
                it: "Metalbomba",
                de: "Metallexplosion",
                "pt-br": "Explosão de Metal",
                "zh-tw": "金屬爆破",
                ja: "メタルブラスト",
                ko: "메탈블라스트"
            },
            effect: {
                en: "This attack does 20 more damage for each {M} Energy attached to this Pokémon.",
                fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque {M} Énergie attachée à ce Pokémon.",
                es: "Este ataque hace 20 puntos de daño más por cada Energía {M} unida a este Pokémon.",
                it: "Questo attacco infligge 20 danni in più per ogni Energia {M} assegnata a questo Pokémon.",
                de: "Diese Attacke fügt für jede an dieses Pokémon angelegte {M}-Energie 20 Schadenspunkte mehr zu.",
                "pt-br": "Este ataque causa 20 pontos de dano a mais para cada Energia {M} ligada a este Pokémon.",
                "zh-tw": "增加這隻寶可夢身上的{M}能量的數量×20點傷害。",
                ja: "このポケモンの{M}エネルギーの数×20ダメージ追加。",
                ko: "이 포켓몬의 {M}에너지의 개수 × 20데미지를 추가한다."
            },
            damage: "10+"
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 2,
    boosters: ["vol3"]
};

export default card;
