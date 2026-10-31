import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1a/038",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1a/038",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1a/038",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1a/038",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1a/038",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1a/038",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1a/038",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1a/038",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1a/038"
    },
    name: {
        en: "Onix",
        "fr": "Onix",
        "es": "Onix",
        "it": "Onix",
        "de": "Onix",
        "pt-br": "Onix",
        "zh-tw": "大岩蛇",
        ja: "イワーク",
        ko: "롱스톤"
    },
    illustrator: "Naoyo Kimura",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fighting"],
    description: {
        en: "It rapidly bores through the ground at 50 mph by\nsquirming and twisting its massive, rugged body.",
        "fr": "Il perce rapidement le sol à 50 mph par\nse tortillant et tordant son corps massif et robuste.",
        "es": "Rápidamente perfora el suelo a 50 mph por\nretorciéndose y retorciendo su enorme y robusto cuerpo.",
        "it": "Perfora rapidamente il terreno a 50 mph\ndimenarsi e torcere il suo corpo massiccio e robusto.",
        "de": "Es bohrt sich schnell mit 80 km/h durch den Boden\ner windet und dreht seinen massiven, robusten Körper.",
        "pt-br": "Ele rapidamente perfura o solo a 80 km/h por\ncontorcendo-se e torcendo seu corpo maciço e robusto.",
        "zh-tw": "它以每小時 50 英里的速度快速鑽穿地面\n蠕動和扭曲其巨大而崎嶇的身體。",
        ja: "大きく 丈夫な 体を くねらせ よじらせ 時速８０キロで 地面を 勢いよく 掘り進む。",
        ko: "크고 튼튼한 몸을\n뒤틀고 꼬아서 시속 80km로\n힘차게 땅을 파나간다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Dig",
                "fr": "Creuser",
                "es": "Excavar",
                "it": "Scavare",
                "de": "Graben",
                "pt-br": "Escavação",
                "zh-tw": "挖",
                ja: "あなをほる",
                ko: "구멍파기"
            },
            damage: 30,
            cost: ["Colorless", "Colorless", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, lors du prochain tour de votre adversaire, prévenez tous les dégâts et effets des attaques infligées à ce Pokémon.",
                "es": "Lanza una moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y los efectos de los ataques realizados a este Pokémon.",
                "it": "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni tutti i danni e gli effetti degli attacchi inflitti a questo Pokémon.",
                "de": "Wirf eine Münze. Bei „Kopf“ verhindere im nächsten Zug deines Gegners jeglichen Schaden und alle Auswirkungen von Angriffen, die diesem Pokémon zugefügt werden.",
                "pt-br": "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, evite todos os danos e efeitos de ataques feitos a este Pokémon.",
                "zh-tw": "拋一枚硬幣。如果正面朝上，則在對手的下一回合中，阻止對該神奇寶貝造成的所有攻擊傷害及其效果。",
                ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
                ko: "동전을 1번 던져서 앞면이 나오면 상대의 다음 차례에 이 포켓몬은 기술의 데미지나 효과를 받지 않는다."
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 3
};
export default card;
