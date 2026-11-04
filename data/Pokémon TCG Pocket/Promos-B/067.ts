import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/067/526bbd9a187101ce",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/067/526bbd9a187101ce",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/067/526bbd9a187101ce",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/067/526bbd9a187101ce",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/067/526bbd9a187101ce",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/067/526bbd9a187101ce",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/067/526bbd9a187101ce",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/067/526bbd9a187101ce",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/067/526bbd9a187101ce"
    },
    name: {
        en: "Pawniard",
        fr: "Scalpion",
        es: "Pawniard",
        it: "Pawniard",
        de: "Gladiantri",
        "pt-br": "Pawniard",
        "zh-tw": "駒刀小兵",
        ko: "자망칼",
        ja: "コマタナ"
    },
    illustrator: "Tomokazu Komiya",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    dexId: [624],
    stage: "Basic",
    description: {
        en: "Any chips in its blades would prove fatal for it. After each battle, it diligently maintains its blades using its favorite sharpening stone.",
        fr: "Toute brèche sur ses lames lui serait fatale. Après chaque combat, il les entretient scrupuleusement en utilisant sa pierre à aiguiser préférée.",
        es: "Una mella en sus cuchillas podría resultar mortal. Al término del combate, las cuida con diligencia usando su piedra de afilar preferida.",
        it: "Avere le lame smussate gli può essere fatale. Alla fine di ogni lotta se ne prende cura scrupolosamente con la sua cote preferita.",
        de: "Nach jedem Kampf pflegt es seine Klingen sorgfältig mit seinem Lieblingswetzstein. Schartige Klingen könnten seinen Tod bedeuten.",
        "pt-br": "Qualquer lasca em suas lâminas pode ser fatal para este Pokémon. Depois de cada batalha, Pawniard cuida meticulosamente de suas lâminas com sua pedra de amolar favorita.",
        "zh-tw": "刀刃的缺損可說是致命傷。每當戰鬥結束後，就會用最愛的磨刀石來精心保養。",
        ja: "刃の 刃こぼれは 命取り。 戦いが 終わると お気に入りの 砥石で 念入りに 手入れする。",
        ko: "칼날의 이가 빠지는 것은 목숨과도 직결된다.\n싸움이 끝나면 마음에 드는 숫돌로\n정성스럽게 손질한다."
    },
    attacks: [
        {
            cost: ["Darkness"],
            name: {
                en: "Call for Family",
                fr: "Appel à la Famille",
                es: "Llamar a la Familia",
                it: "Cerca Famiglia",
                de: "Familienruf",
                "pt-br": "Chamar a Família",
                "zh-tw": "呼朋引伴",
                ja: "なかまをよぶ",
                ko: "동료부르기"
            },
            effect: {
                en: "Put 1 random Basic Pokémon from your deck onto your Bench.",
                fr: "Placez un Pokémon de base au hasard de votre deck sur votre Banc.",
                es: "Pon 1 Pokémon Básico aleatorio de tu baraja en tu Banca.",
                it: "Prendi un Pokémon Base a caso dal tuo mazzo e mettilo nella tua panchina.",
                de: "Lege 1 zufälliges Basis-Pokémon aus deinem Deck auf deine Bank.",
                "pt-br": "Coloque 1 Pokémon Básico aleatório do seu baralho no seu Banco.",
                "zh-tw": "從自己的牌庫隨機抽出1張基礎寶可夢,放置於備戰區。",
                ja: "自分の山札からたねポケモンをランダムに1枚、ベンチに出す。",
                ko: "자신의 덱에서 기본 포켓몬을 랜덤으로 1장 벤치로 내보낸다."
            }
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol9"]
};

export default card;
