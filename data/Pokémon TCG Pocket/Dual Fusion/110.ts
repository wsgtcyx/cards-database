import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/110",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/110",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/110",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/110",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/110",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/110",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/110",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/110"
    },
    name: {
        en: "Porygon-Z",
        fr: "Porygon-Z",
        es: "Porygon-Z",
        "pt-br": "Porygon-Z",
        "zh-tw": "多邊獸Ｚ",
        ja: "ポリゴンZ",
        ko: "폴리곤Z[Gr:Pron v=\"제트\" ]",
        it: "Porygon-Z",
        de: "Porygon-Z"
    },
    illustrator: "Kagemaru Himeno",
    rarity: "Three Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 130,
    types: [
        "Colorless"
    ],
    stage: "Stage2",
    retreat: 1,
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Porygon2",
        fr: "Porygon2",
        es: "Porygon2",
        it: "Porygon2",
        de: "Porygon2",
        "pt-br": "Porygon2",
        "zh-tw": "多邊獸Ⅱ",
        ja: "ポリゴン2",
        ko: "Porygon2"
    },
    attacks: [
        {
            name: {
                en: "Overdrive Smash",
                fr: "Boost Atomisant",
                es: "Sacudida Superdirecta",
                it: "Devastacolpo",
                de: "Turbosmash",
                "pt-br": "Golpe Exaustivo",
                "zh-tw": "超頻擊碎",
                ja: "オーバースマッシュ",
                ko: "Overdrive Smash"
            },
            cost: [
                "Colorless"
            ],
            damage: 50,
            effect: {
                en: "During your next turn, this Pokémon's Overdrive Smash attack does +50 damage.",
                fr: "Pendant votre prochain tour, l'attaque Boost Atomisant de ce Pokémon inflige + 50 dégâts.",
                es: "Durante tu próximo turno, el ataque Sacudida Superdirecta de este Pokémon hace +50 puntos de daño.",
                it: "Durante il tuo prossimo turno, l’attacco Devastacolpo di questo Pokémon infligge +50 danni.",
                de: "Während deines nächsten Zuges fügt die Attacke Turbosmash von diesem Pokémon + 50 Schadenspunkte zu.",
                "pt-br": "Durante o seu próximo turno, o ataque Golpe Exaustivo deste Pokémon causará + 50 pontos de dano.",
                "zh-tw": "在下個自己的回合,這隻寶可夢「超頻擊碎」的傷害+50點。",
                ja: "次の自分の番、このポケモンの「オーバースマッシュ」のダメージを+50する。",
                ko: "During your next turn, this Pokémon's Overdrive Smash attack does +50 damage."
            }
        }
    ],
    abilities: [],
    description: {
        en: "An additional program was installed to create a more advanced Pokémon, but it was apparently flawed. Porygon-Z moves oddly as a result.",
        fr: "On lui a installé un logiciel afin de l’améliorer, mais cela a entraîné plusieurs bugs. Maintenant, il se conduit très bizarrement.",
        es: "Se le instaló un software para convertirlo en un Pokémon más avanzado. Sin embargo, algo salió mal y por eso se mueve de manera extraña.",
        it: "Si muove in maniera bizzarra a causa di un bug nel software aggiuntivo, originariamente installato per migliorarne le prestazioni.",
        de: "Um das Pokémon zu verbessern, wurde eine zusätzliche Software installiert, die aber offenbar fehlerhaft war. Seitdem bewegt es sich seltsam.",
        "pt-br": "Um programa adicional foi instalado para criar um Pokémon mais avançado, mas parece que estava defeituoso. Porygon-Z se move de forma estranha por causa disso.",
        "zh-tw": "以成為更優秀的寶可夢為目標所新追加的程式好像狀況不佳，使得動作變得很奇怪。",
        ja: "さらに 優れた ポケモンを 目指し 追加した プログラムに 不具合が あったらしく 動きが おかしい。",
        ko: "An additional program was installed to create a more advanced Pokémon, but it was apparently flawed. Porygon-Z moves oddly as a result."
    }
};

export default card;
