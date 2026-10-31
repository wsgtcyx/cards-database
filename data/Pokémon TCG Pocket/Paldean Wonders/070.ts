import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/070",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/070",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/070",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/070",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/070",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/070",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2a/070",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2a/070",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2a/070"
    },
    name: {
        en: "Grafaiai",
        fr: "Tag-Tag",
        es: "Grafaiai",
        it: "Grafaiai",
        de: "Affiti",
        'pt-br': "Grafaiai",
        "zh-tw": "塗標客",
        ja: "タギングル",
        ko: "태깅구르"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Darkness"],
    dexId: [945],
    evolveFrom: {
        en: "Shroodle",
        fr: "Gribouraigne",
        es: "Shroodle",
        it: "Shroodle",
        de: "Sproxi",
        "pt-br": "Shroodle",
        "zh-tw": "滋汁鼴",
        ja: "シルシュルー",
        ko: "땃쭈르",
        pt: "Shroodle",
        'es-mx': "Shroodle"
    },
    description: {
        en: "Each Grafaiai paints its own individual pattern, and it will paint that same pattern over and over again throughout its life.",
        "fr": "Chaque Tag-Tag peint son propre motif individuel, et il peindra ce même motif encore et encore tout au long de sa vie.",
        "es": "Cada Grafaiai pinta su propio patrón individual, y pintará ese mismo patrón una y otra vez a lo largo de su vida.",
        "it": "Ogni Grafaiai dipinge il proprio modello individuale e dipingerà lo stesso modello più e più volte per tutta la sua vita.",
        "de": "Jeder Affiti malt sein eigenes, individuelles Muster und wird im Laufe seines Lebens immer wieder dasselbe Muster malen.",
        "pt-br": "Cada Grafaiai pinta seu próprio padrão individual e pintará esse mesmo padrão repetidas vezes ao longo de sua vida.",
        "zh-tw": "每個 塗標客 都會繪製自己的單獨圖案，並且在其生命週期中一遍又一遍地繪製相同的圖案。",
        ja: "タギングルが 描く 模様は 個体によって 異なり 生涯 同じ 模様を 描き続ける。",
        ko: "태깅구르가 그리는 무늬는\n개체마다 다르며\n평생 같은 무늬만을 그린다."
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Colorful Attack",
                "fr": "Attaque colorée",
                "es": "Ataque colorido",
                "it": "Attacco colorato",
                "de": "Bunter Angriff",
                "pt-br": "Ataque Colorido",
                "zh-tw": "多彩攻擊",
                ja: "カラフルアタック",
                ko: "컬러풀어택"
            },
            damage: "30+",
            cost: ["Colorless"],
            effect: {
                en: "If your Pokémon in play have 3 or more different types of Energy attached, this attack does 60 more damage.",
                "fr": "Si vos Pokémon en jeu sont attachés à 3 types d'Énergie différents ou plus, cette attaque inflige 60 dégâts supplémentaires.",
                "es": "Si tu Pokémon en juego tiene 3 o más tipos diferentes de Energía unidas, este ataque hace 60 puntos de daño más.",
                "it": "Se i tuoi Pokémon in gioco hanno 3 o più tipi diversi di Energie assegnate, questo attacco infligge 60 danni in più.",
                "de": "Wenn an deine Pokémon im Spiel 3 oder mehr verschiedene Arten von Energie angelegt sind, fügt dieser Angriff 60 Schadenspunkte mehr zu.",
                "pt-br": "Se o seu Pokémon em jogo tiver 3 ou mais tipos diferentes de energia anexados, este ataque causará 60 de dano a mais.",
                "zh-tw": "如果場上的寶可夢附有 3 種或更多不同類型的能量，則此攻擊造成的傷害增加 60 點。",
                ja: "自分の場のポケモンに3種類以上のタイプのエネルギーがついているなら、60ダメージ追加。",
                ko: "자신의 필드의 포켓몬에게 3종류 이상의 타입의 에너지가 붙어 있다면 60데미지를 추가한다."
            },
        },
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
