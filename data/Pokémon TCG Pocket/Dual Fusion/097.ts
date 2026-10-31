import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/097",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/097",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/097",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/097",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/097",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/097",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/097",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/097",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/097"
    },
    name: {
        en: "Melmetal",
        fr: "Melmetal",
        es: "Melmetal",
        "pt-br": "Melmetal",
        "zh-tw": "美錄梅塔",
        ja: "メルメタル",
        ko: "멜메탈",
        it: "Melmetal",
        de: "Melmetal"
    },
    illustrator: "Shigenori Negishi",
    rarity: "Three Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 120,
    types: [
        "Metal"
    ],
    stage: "Stage1",
    retreat: 3,
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Meltan",
        fr: "Meltan",
        es: "Meltan",
        it: "Meltan",
        de: "Meltan",
        "pt-br": "Meltan",
        "zh-tw": "美錄坦",
        ja: "メルタン",
        ko: "멜탄"
    },
    attacks: [
        {
            name: {
                en: "Confront",
                fr: "Confrontation",
                es: "Confrontar",
                it: "Confronto",
                de: "Konfrontieren",
                "pt-br": "Confrontar",
                "zh-tw": "正面對決",
                ja: "がちんこ",
                ko: "진검승부"
            },
            cost: [
                "Colorless",
                "Metal",
                "Metal"
            ],
            damage: 70
        }
    ],
    abilities: [
        {
            name: {
                en: "Metal Scrum",
                fr: "Mêlée Métallique",
                es: "Melé Metálica",
                it: "Mischia Metallica",
                de: "Metallgedränge",
                "pt-br": "Barreira Metálica",
                "zh-tw": "金屬聯防",
                ja: "メタルスクラム",
                ko: "메탈 스크럼"
            },
            effect: {
                en: "As long as this Pokémon is in play, all of your {M} Pokémon take −20 damage from attacks from your opponent's Pokémon. This effect doesn't stack.",
                fr: "Tant que ce Pokémon est en jeu, tous vos Pokémon {M} subissent − 20 dégâts provenant des attaques des Pokémon de votre adversaire. Cet effet est non cumulable.",
                es: "Mientras este Pokémon esté en juego, los ataques de los Pokémon de tu rival hacen ‐20 puntos de daño a todos tus Pokémon {M}. Este efecto no se acumula.",
                it: "Fintanto che questo Pokémon è in gioco, tutti i tuoi Pokémon {M} subiscono -20 danni dagli attacchi dei Pokémon avversari. Questo effetto non è cumulabile.",
                de: "Solange dieses Pokémon im Spiel ist, werden allen deinen {M}-Pokémon -20 Schadenspunkte durch Attacken von Pokémon deines Gegners zugefügt. Der Effekt stapelt sich nicht.",
                "pt-br": "Enquanto este Pokémon estiver em jogo, todos os seus Pokémon {M} receberão −20 pontos de dano de ataques dos Pokémon do seu oponente. Este efeito não acumula.",
                "zh-tw": "只要這隻寶可夢在場上,自己的所有{M}寶可夢受到對手的寶可夢招式的傷害-20點。這個特性不會重複。",
                ja: "このポケモンがいるかぎり、自分の{M}ポケモン全員が、相手のポケモンから受けるワザのダメージを-20する。この特性は重ならない。",
                ko: "이 포켓몬이 있는 한, 자신의 {M}포켓몬 전원이 상대의 포켓몬으로부터 받는 기술의 데미지를 -20한다. 이 특성은 중복되지 않는다."
            },
            type: "Ability"
        }
    ],
    description: {
        en: "At the end of its life-span, Melmetal will rust and fall apart. The small shards left behind will eventually be reborn as Meltan.",
        fr: "En fin de vie, son corps rouille et se brise en mille morceaux. Ces derniers renaissent ensuite sous forme de Meltan.",
        es: "Al final de su vida, su cuerpo se oxida y se hace pedazos. Poco tiempo después, esos fragmentos que quedan dan vida a varios Meltan.",
        it: "Alla fine della sua esistenza, si arrugginisce e cade a pezzi. Dopo un po’ di tempo, i resti del suo corpo tornano in vita sotto forma di Meltan.",
        de: "Geht sein Leben dem Ende zu, rostet sein Körper und fällt auseinander. Kurz darauf erwachen die verbliebenen Fragmente als Meltan zum Leben.",
        "pt-br": "No fim de sua vida, Melmetal enferrujará e se despedaçará. Os pequenos cacos que ficarem para trás eventualmente renascerão como Meltan.",
        "zh-tw": "壽命快到盡頭的時候，身體就會生鏽碎裂。到最後細小的碎片會復活為美錄坦。",
        ja: "寿命が 尽きると 体が 錆びて 崩れる。 やがて 小さな 破片が メルタンに 復活する。",
        ko: "수명이 다하면 몸이 녹슬고\n붕괴한다. 이윽고 작은 파편이\n멜탄으로 부활한다."
    }
};

export default card;
