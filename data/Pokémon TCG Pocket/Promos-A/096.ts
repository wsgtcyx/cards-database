import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    boosters: ["vol11"],
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/096/fbcafe23f6a91795",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/096/fbcafe23f6a91795",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/096/fbcafe23f6a91795",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/096/fbcafe23f6a91795",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/096/fbcafe23f6a91795",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/096/fbcafe23f6a91795",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/096/fbcafe23f6a91795",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/096/fbcafe23f6a91795",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/096/fbcafe23f6a91795"
    },
    name: {
        en: "Houndoom",
        "fr": "Démolosse",
        "es": "Houndoom",
        "it": "Houndoom",
        "de": "Hundemon",
        "pt-br": "Houndoom",
        "zh-tw": "黑魯加",
        ja: "ヘルガー",
        ko: "헬가",
    },
    illustrator: "Kagemaru Himeno",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Darkness"],
    evolveFrom: {
        en: "Houndour",
        "fr": "Malosse",
        "es": "Houndour",
        "it": "Houndour",
        "de": "Hunduster",
        "pt-br": "Houndour",
        "zh-tw": "戴魯比",
        ja: "デルビル",
        ko: "델빌"
    },
    description: {
        en: "If you are burned by the flames it shoots from its\nmouth, the pain will never go away.",
        "fr": "Les blessures provoquées par son souffle enflammé sont permanentes, et la douleur ne disparaît jamais.",
        "es": "Si alguien se quema con las llamas que lanza por la boca, el dolor no desaparecerá nunca.",
        "it": "Se si viene ustionati dalle fiamme che sputa dalla bocca, il dolore rimarrà per sempre.",
        "de": "Wird man von den Flammen getroffen, die es aus seinem Maul schießt, so erleidet man eine Brandwunde, deren Schmerz nie nachlässt.",
        "pt-br": "Se você for queimado pelas chamas disparadas de sua boca, a dor nunca passará.",
        "zh-tw": "要是被牠口中噴出的火焰灼傷，傷口的部分不管過了多久都仍然會感到疼痛。",
        ja: "口から 吹き出す 炎で 火傷すると いつまでたっても 傷口が うずいてしまう。",
        ko: "입에서 뿜어내는 불꽃에 의해\n화상을 입으면 시간이 아무리 지나도\n상처 난 자리가 욱신거린다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Diving Swipe",
                "fr": "Rafle Plongeante",
                "es": "Robo en Picado",
                "it": "Tuffata",
                "de": "Sturzklau",
                "pt-br": "Mergulho Furtivo",
                "zh-tw": "行搶俯衝",
                ja: "スナッチダイブ",
                ko: "스내치다이브"
            },
            damage: 70,
            cost: ["Darkness", "Darkness", "Darkness"],
            effect: {
                en: "Discard a random card from your opponent's hand.",
                "fr": "Défaussez au hasard une carte de la main de votre adversaire.",
                "es": "Descarta 1 carta aleatoria de la mano de tu rival.",
                "it": "Scarta una carta a caso dalla mano del tuo avversario.",
                "de": "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel.",
                "pt-br": "Descarte 1 carta aleatória da mão do seu oponente.",
                "zh-tw": "從對手的手牌隨機抽出1張卡丟棄。",
                ja: "相手の手札からランダムに1枚トラッシュ。",
                ko: "상대의 패에서 랜덤으로 1장 트래쉬한다."
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
