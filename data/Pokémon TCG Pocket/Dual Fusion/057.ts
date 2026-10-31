import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/057",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/057",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/057",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/057",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/057",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/057",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/057",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/057"
    },
    name: {
        en: "Mew ex",
        fr: "Mew-ex",
        es: "Mew ex",
        "pt-br": "Mew ex",
        "zh-tw": "夢幻ex",
        ja: "ミュウex",
        ko: "뮤 ex",
        it: "Mew-ex",
        de: "Mew-ex"
    },
    illustrator: "akagi",
    rarity: "Four Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 130,
    types: [
        "Psychic"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Secret Guidance",
                fr: "Conseil Secret",
                es: "Guía Secreta",
                it: "Direttive Segrete",
                de: "Geheimes Geleit",
                "pt-br": "Diretriz Secreta",
                "zh-tw": "秘密指引",
                ja: "ひみつのみちびき",
                ko: "Secret Guidance"
            },
            cost: [
                "Psychic"
            ],
            effect: {
                en: "Flip 3 coins. Take an amount of {P} Energy from your Energy Zone equal to the number of heads and attach it to your Benched {P} Pokémon in any way you like.",
                fr: "Lancez 3 pièces. Prenez le même nombre d'Énergie {P} de votre zone Énergie que le nombre de côté face obtenu et attachez-les à vos Pokémon {P} de Banc comme il vous plaît.",
                es: "Lanza 3 monedas. Une a tus Pokémon {P} en Banca, de la manera que desees, tantas Energías {P} de tu área de Energía como caras hayan salido.",
                it: "Lancia 3 volte una moneta. Prendi un numero di Energie {P} dalla tua Zona Energia uguale al numero di volte in cui è uscito testa e assegnale ai tuoi Pokémon {P} in panchina nel modo che preferisci.",
                de: "Wirf 3 Münzen. Lege pro Kopf 1 {P}-Energie aus deinem Energiebereich beliebig an die {P}-Pokémon auf deiner Bank an.",
                "pt-br": "Jogue 3 moedas. Pegue uma quantidade de Energia {P} da sua Zona de Energia equivalente ao número de caras e ligue aos seus Pokémon {P} no Banco como desejar.",
                "zh-tw": "擲3次硬幣,從自己的能量區抽出與正面出現的次數相同數量的{P}能量,以任意方式附於備戰區的{P}寶可夢身上。",
                ja: "コインを3回投げ、オモテの数ぶんの{P}エネルギーを自分のエネルギーゾーンから出し、ベンチの{P}ポケモンに好きなようにつける。",
                ko: "Flip 3 coins. Take an amount of {P} Energy from your Energy Zone equal to the number of heads and attach it to your Benched {P} Pokémon in any way you like."
            }
        },
        {
            name: {
                en: "Psyburn",
                fr: "Brûlure Psy",
                es: "Psicoquemadura",
                it: "Psicobrucia",
                de: "Psychoverbrennung",
                "pt-br": "Queimadura Psíquica",
                "zh-tw": "精神爆擊",
                ja: "サイコバーン",
                ko: "Psyburn"
            },
            cost: [
                "Colorless",
                "Psychic"
            ],
            damage: 60
        }
    ],
    abilities: []
};

export default card;
