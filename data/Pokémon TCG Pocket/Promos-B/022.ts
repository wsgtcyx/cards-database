import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/022/e6f17ec17ad0b5a7",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/022/e6f17ec17ad0b5a7",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/022/e6f17ec17ad0b5a7",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/022/e6f17ec17ad0b5a7",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/022/e6f17ec17ad0b5a7",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/022/e6f17ec17ad0b5a7",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/022/e6f17ec17ad0b5a7",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/022/e6f17ec17ad0b5a7",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/022/e6f17ec17ad0b5a7"
    },
    name: {
        en: "Hawlucha",
        fr: "Brutalibré",
        es: "Hawlucha",
        it: "Hawlucha",
        de: "Resladero",
        "pt-br": "Hawlucha",
        "zh-tw": "摔角鷹人",
        ko: "루차불",
        ja: "ルチャブル"
    },
    illustrator: "Teeziro",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    dexId: [701],
    stage: "Basic",
    description: {
        en: "Hawlucha live quietly without flocking together. They fight constantly with their natural enemies: noisy groups of Primeape.",
        fr: "Ce Pokémon mène une vie paisible et solitaire. Il est en conflit permanent avec de bruyants groupes de Colossinge, ses ennemis jurés.",
        es: "Vive en solitario, disfrutando de la tranquilidad. Los Primeape, que forman ruidosas manadas, son su peor enemigo y no paran de enfrentarse.",
        it: "Gli Hawlucha vivono in solitudine e tranquillità. Si scontrano spesso con i Primeape, loro acerrimi nemici, perché formano branchi chiassosi.",
        de: "Resladero lebt friedlich für sich allein. Unentwegt kämpft es gegen seine natürlichen Feinde: Rasaff, die in Gruppen randalieren.",
        "pt-br": "Hawlucha vivem sossegadamente longe da muvuca. Lutam constantemente com seus inimigos naturais: os grupos de Primeape barulhentos.",
        "zh-tw": "不集結成群，過著靜靜的生活。天敵是喜歡集體大鬧的火爆猴，時不時就會起爭執。",
        ja: "群れを 作らず 静かに 暮らす。 集団で 騒ぐ オコリザルは 天敵で いつも 争いになる。",
        ko: "무리를 이루지 않고 조용히 지낸다.\n집단으로 떠드는 성원숭과는\n천적이라 언제나 싸움이 일어난다."
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Aerial Ace",
                fr: "Aéropique",
                es: "Golpe Aéreo",
                it: "Aeroassalto",
                de: "Aero-Ass",
                "pt-br": "Ás dos Ares",
                "zh-tw": "燕返",
                ja: "つばめがえし",
                ko: "제비반환"
            },
            effect: {
                en: "Flip a coin. If heads, this attack does 30 more damage.",
                fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts de plus.",
                es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
                de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu.",
                "pt-br": "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
                "zh-tw": "擲1次硬幣若為正面,則增加30點傷害。",
                ja: "コインを1回投げオモテなら、30ダメージ追加。",
                ko: "동전을 1번 던져서 앞면이 나오면 30데미지를 추가한다."
            },
            damage: "40+"
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol3"]
};

export default card;
