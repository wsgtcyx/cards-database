import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/182",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/182",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/182",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/182",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/182",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/182",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/182",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/182",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/182"
    },
    name: {
        en: "Pidgeot",
        "fr": "Roucarnage",
        "es": "Pidgeot",
        "it": "Pidgeot",
        "de": "Tauboss",
        "pt-br": "Pidgeot",
        "zh-tw": "大比鳥",
        ja: "ピジョット",
        ko: "피죤투",
    },
    illustrator: "Akira Komayama",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Colorless"],
    evolveFrom: {
        en: "Pidgeotto",
        "fr": "Roucoups",
        "es": "Pidgeotto",
        "it": "Pidgeotto",
        "de": "Tauboga",
        "pt-br": "Pidgeotto",
        "zh-tw": "比比鳥",
        ja: "ピジョン",
        ko: "피죤"
    },
    description: {
        en: "It spreads its gorgeous wings widely to intimidate\nenemies. It races through the skies at\nMach-2 speed.",
        "fr": "Il déploie largement ses magnifiques ailes pour intimider\nennemis. Il court dans les cieux à\nVitesse Mach-2.",
        "es": "Extiende ampliamente sus hermosas alas para intimidar.\nenemigos. Corre por los cielos en\nVelocidad Mach-2.",
        "it": "Allarga ampiamente le sue splendide ali per intimidire\nnemici. Corre attraverso i cieli a\nVelocità Mach-2.",
        "de": "Es breitet seine prächtigen Flügel weit aus, um einzuschüchtern\nFeinde. Es rast durch die Lüfte\nMach-2-Geschwindigkeit.",
        "pt-br": "Ele abre amplamente suas lindas asas para intimidar\ninimigos. Ele corre pelos céus em\nVelocidade Mach-2.",
        "zh-tw": "它張開華麗的翅膀來恐嚇\n敵人。它在天空中奔跑\n2 馬赫速度。",
        ja: "美しい 羽を 広げて 相手を 威嚇する。 マッハ２で 空を 飛び回る。",
        ko: "아름다운 날개를 펼쳐\n상대를 위협한다.\n마하2로 하늘을 날아다닌다."
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Twister",
                "fr": "Tornade",
                "es": "Tornado",
                "it": "Torsione",
                "de": "Twister",
                "pt-br": "Torcido",
                "zh-tw": "龍捲風",
                ja: "たつまき",
                ko: "회오리"
            },
            damage: 80,
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "Flip 2 coins. For each heads, discard a random Energy from your opponent's Active Pokémon. If both of them are tails, this attack does nothing.",
                "fr": "Lancez 2 pièces. Pour chaque face, défaussez une Énergie aléatoire du Pokémon Actif de votre adversaire. Si les deux sont face, cette attaque ne fait rien.",
                "es": "Lanza 2 monedas. Por cada cara, descarta una Energía aleatoria del Pokémon Activo de tu rival. Si ambos son cruz, este ataque no hace nada.",
                "it": "Lancia 2 monete. Per ogni testa, scarta un'Energia casuale dal Pokémon attivo del tuo avversario. Se entrambi escono croce, questo attacco non ha alcun effetto.",
                "de": "Wirf 2 Münzen. Lege für jeden Kopf eine zufällige Energie vom Aktiven Pokémon deines Gegners ab. Wenn beide Schwänze sind, hat dieser Angriff keine Wirkung.",
                "pt-br": "Jogue 2 moedas. Para cada cara, descarte uma Energia aleatória do Pokémon Ativo do seu oponente. Se ambos derem coroa, este ataque não fará nada.",
                "zh-tw": "翻轉 2 個硬幣。對於每個頭，丟棄對手的活躍神奇寶貝中的隨機能量。如果兩者都是反面，則此攻擊不起作用。",
                ja: "コインを2回投げ、オモテの数ぶん、相手のバトルポケモンからエネルギーをランダムにトラッシュ。すべてウラなら、このワザは失敗。",
                ko: "동전을 2번 던져서 앞면이 나온 수만큼 상대의 배틀 포켓몬에서 에너지를 랜덤으로 트래쉬한다. 모두 뒷면이 나오면 이 기술은 실패한다."
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2,
	boosters: [
		"mega-altaria",
		"mega-blaziken",
		"mega-gyarados"
	]
};
export default card;
