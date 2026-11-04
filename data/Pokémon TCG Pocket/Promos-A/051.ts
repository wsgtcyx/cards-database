import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/051/778276a584f0f757",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/051/778276a584f0f757",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/051/778276a584f0f757",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/051/778276a584f0f757",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/051/778276a584f0f757",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/051/778276a584f0f757",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/051/778276a584f0f757",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/051/778276a584f0f757",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/051/778276a584f0f757"
    },
    name: {
        en: "Cyclizar",
        fr: "Motorizard",
        es: "Cyclizar",
        it: "Cyclizar",
        de: "Mopex",
        'pt-br': "Cyclizar",
        ja: "モトトカゲ",
        ko: "모토마",
        "zh-tw": "摩托蜥",
    },
    illustrator: "Shigenori Negishi",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 80,
    types: ["Colorless"],
    description: {
        en: "Apparently Cyclizar has been allowing people to\nride on its back since ancient times. Depictions of\nthis have been found in 10,000-year-old murals.",
        fr: "Des fresques vieilles de 10 000 ans laissent penser\nque ce Pokémon transporte des êtres humains\nsur son dos depuis les temps anciens.",
        es: "Según parece, ha permitido que los humanos\nmonten en él desde tiempos remotos. Aparece\nen pinturas rupestres de hace diez mil años.",
        it: "Sembra che trasportasse esseri umani sul\ndorso già nell'antichità. È rappresentato in\npitture rupestri risalenti a 10.000 anni fa.",
        de: "Seit uralten Zeiten soll es Menschen auf seinem\nRücken reiten lassen. Darstellungen davon finden\nsich auf 10 000 Jahre alten Wandmalereien.",
        'pt-br': "Aparentemente, Cyclizar permite que as pessoas o\nmontem desde os tempos antigos. Representações deste\nato foram encontradas em murais com mais de 10.000 anos.",
        ja: "大昔から 人を 背中に 乗せていたらしい。 1万年前の 壁画に 様子が 描かれている。",
        ko: "먼 옛날부터 인간을\n등에 태우고 다녔다고 한다.\n1만 년 전 벽화에도 그 모습이 그려져 있다.",
        "zh-tw": "似乎自古就會讓人類坐在背上。1萬年前的壁畫上描繪著該模樣。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Overacceleration",
                fr: "Hyperaccélération",
                es: "Alta Aceleración",
                it: "Iperaccelerazione",
                de: "Überbeschleunigung",
                'pt-br': "Superaceleração",
                ja: "オーバーアクセル",
                ko: "오버액셀",
                "zh-tw": "失控暴衝"
            },
            cost: ["Colorless"],
            damage: 20,
            effect: {
                en: "During your next turn, this Pokémon's Overacceleration attack does +20 damage.",
                fr: "Pendant votre prochain tour, l'attaque Hyperaccélération de ce Pokémon inflige + 20 dégâts.",
                es: "Durante tu próximo turno, el ataque Alta Aceleración de este Pokémon hace +20 puntos de daño.",
                it: "Durante il tuo prossimo turno, l'attacco Iperaccelerazione di questo Pokémon infligge +20 danni.",
                de: "Während deines nächsten Zuges fügt die Attacke Überbeschleunigung von diesem Pokémon + 20 Schadenspunkte zu.",
                'pt-br': "Durante o seu próximo turno, o ataque Superaceleração deste Pokémon causará + 20 pontos de dano.",
                ja: "次の自分の番、このポケモンの「オーバーアクセル」のダメージを+20する。",
                ko: "자신의 다음 차례에 이 포켓몬의 「오버액셀」의 데미지를 +20한다.",
                "zh-tw": "在下個自己的回合,這隻寶可夢「失控暴衝」的傷害+20點。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: []
};
export default card;
