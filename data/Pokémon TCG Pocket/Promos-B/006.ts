import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/006/9852b764328fa16c",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/006/9852b764328fa16c",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/006/9852b764328fa16c",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/006/9852b764328fa16c",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/006/9852b764328fa16c",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/006/9852b764328fa16c",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/006/9852b764328fa16c",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/006/9852b764328fa16c",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/006/9852b764328fa16c"
    },
    name: {
        en: "Mega Pidgeot ex",
        fr: "Méga-Roucarnage-ex",
        es: "Mega-Pidgeot ex",
        it: "Mega Pidgeot-ex",
        de: "Mega-Tauboss-ex",
        "pt-br": "Mega Pidgeot ex",
        "zh-tw": "超級大比鳥ex",
        ko: "메가피죤투 ex",
        ja: "メガピジョットex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 210,
    types: ["Colorless"],
    dexId: [18],
    evolveFrom: {
        en: "Pidgeotto",
        fr: "Roucoups",
        es: "Pidgeotto",
        it: "Pidgeotto",
        de: "Tauboga",
        "pt-br": "Pidgeotto",
        "zh-tw": "比比鳥",
        ko: "피죤",
        ja: "ピジョン"
    },
    stage: "Stage2",
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Giant Twister",
                fr: "Tornade Géante",
                es: "Tornado Gigante",
                it: "Tornado Gigante",
                de: "Gigantischer Wirbel",
                "pt-br": "Tornado Gigante",
                "zh-tw": "巨型龍捲風",
                ja: "ジャイアントツイスター",
                ko: "자이언트 트위스터"
            },
            effect: {
                en: "Flip 3 coins. For each heads, discard a random Energy from your opponent's Active Pokémon. If all of them are tails, this attack does nothing.",
                fr: "Lancez 3 pièces. Pour chaque côté face, défaussez au hasard une Énergie du Pokémon Actif de votre adversaire. Si toutes sont côté pile, cette attaque ne fait rien.",
                es: "Lanza 3 monedas. Por cada cara, descarta 1 Energía aleatoria del Pokémon Activo de tu rival. Si en todas sale cruz, este ataque no hace nada.",
                it: "Lancia 3 volte una moneta. Ogni volta che esce testa, rimuovi un’Energia a caso dal Pokémon attivo del tuo avversario. Se esce croce tutte le volte, questo attacco non ha effetto.",
                de: "Wirf 3 Münzen. Lege pro Kopf 1 zufällige Energie vom Aktiven Pokémon deines Gegners ab. Zeigen alle Münzen Zahl, hat diese Attacke keine Auswirkungen.",
                "pt-br": "Jogue 3 moedas. Para cada cara, descarte uma Energia aleatória do Pokémon Ativo do seu oponente. Se todas saírem coroa, este ataque não fará nada.",
                "zh-tw": "擲3次硬幣,將對手的戰鬥寶可夢身上的能量隨機丟棄與正面出現的次數相同的數量。若全部為反面,則這個招式失敗。",
                ja: "コインを3回投げ、オモテの数ぶん、相手のバトルポケモンからエネルギーをランダムにトラッシュ。すべてウラなら、このワザは失敗。",
                ko: "동전을 3번 던져서 앞면이 나온 수만큼 상대의 배틀 포켓몬에서 에너지를 랜덤으로 트래쉬한다. 모두 뒷면이 나오면 이 기술은 실패한다."
            },
            damage: 100
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 2,
    boosters: ["vol1"]
};

export default card;
