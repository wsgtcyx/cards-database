import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/017/8ef79ec1b5f51395",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/017/8ef79ec1b5f51395",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/017/8ef79ec1b5f51395",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/017/8ef79ec1b5f51395",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/017/8ef79ec1b5f51395",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/017/8ef79ec1b5f51395",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/017/8ef79ec1b5f51395",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/017/8ef79ec1b5f51395",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/017/8ef79ec1b5f51395"
    },
    name: {
        en: "Swablu",
        fr: "Tylton",
        es: "Swablu",
        it: "Swablu",
        de: "Wablu",
        "pt-br": "Swablu",
        "zh-tw": "青綿鳥",
        ko: "파비코",
        ja: "チルット"
    },
    illustrator: "Yukiko Baba",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Colorless"],
    dexId: [333],
    stage: "Basic",
    description: {
        en: "It can’t relax if it or its surroundings are not clean. It wipes off dirt with its wings.",
        fr: "Tylton repousse les saletés avec ses ailes. Il ne se sent à l'aise que lorsque l'endroit dans lequel il se trouve est aussi propre que lui.",
        es: "Si su cuerpo o su entorno no están limpios, no puede relajarse. En cuanto ve algo de mugre, la limpia con las alas.",
        it: "Non riesce a star tranquillo se c'è sporcizia su di sé o attorno a sé. Quando la trova, la spazza subito via con le ali.",
        de: "Es kann nicht entspannen, solange es selbst oder seine Umgebung dreckig sind. Wenn es Schmutz bemerkt, wischt es diesen mit seinen Flügeln weg.",
        "pt-br": "Não consegue relaxar quando ele ou o ambiente não estão limpos. Ele esfrega a sujeira com as asas para removê-la.",
        "zh-tw": "如果自己和周圍不乾淨，就靜不下心來的性格。見到髒污會用羽毛擦掉。",
        ja: "自分も まわりも きれいでないと 落ち着かない 性格。 汚れを 見つけると 羽で ふき取る。",
        ko: "자신도 주변도 깨끗하지 않으면\n진정되지 않는 성격이다.\n더러운 것을 발견하면 날개로 닦는다."
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Find a Friend",
                fr: "Trouver un Ami",
                es: "Encontrar un Amigo",
                it: "Trovamico",
                de: "Freunde finden",
                "pt-br": "Encontre um Amigo",
                "zh-tw": "尋找朋友",
                ja: "ともだちをさがす",
                ko: "친구찾기"
            },
            effect: {
                en: "Put a random Pokémon from your deck into your hand.",
                fr: "Ajoutez au hasard un Pokémon de votre deck à votre main.",
                es: "Pon 1 Pokémon aleatorio de tu baraja en tu mano.",
                it: "Prendi un Pokémon a caso dal tuo mazzo e aggiungilo alle carte che hai in mano.",
                de: "Nimm 1 zufälliges Pokémon aus deinem Deck auf deine Hand.",
                "pt-br": "Coloque 1 Pokémon aleatório do seu baralho na sua mão.",
                "zh-tw": "從自己的牌庫隨機將1張寶可夢卡加入手牌。",
                ja: "自分の山札からポケモンをランダムに1枚、手札に加える。",
                ko: "자신의 덱에서 포켓몬을 랜덤으로 1장 패로 가져온다."
            }
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol2"]
};

export default card;
