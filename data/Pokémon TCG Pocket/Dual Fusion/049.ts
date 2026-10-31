import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/049",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/049",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/049",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/049",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/049",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/049",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/049",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/049"
    },
    name: {
        en: "Pawmo",
        fr: "Pohmotte",
        es: "Pawmo",
        "pt-br": "Pawmo",
        "zh-tw": "布土撥",
        ja: "パモット",
        ko: "빠모트",
        it: "Pawmo",
        de: "Pamamo"
    },
    illustrator: "Hitoshi Ariga",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 80,
    types: [
        "Lightning"
    ],
    stage: "Stage1",
    retreat: 1,
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Pawmi",
        fr: "Pohm",
        es: "Pawmi",
        it: "Pawmi",
        de: "Pamo",
        "pt-br": "Pawmi",
        "zh-tw": "布撥",
        ja: "パモ",
        ko: "Pawmi"
    },
    attacks: [
        {
            name: {
                en: "Electric Punch",
                fr: "Poing Électrique",
                es: "Puño Eléctrico",
                it: "Pugno Elettrico",
                de: "Elektroschlag",
                "pt-br": "Murro Elétrico",
                "zh-tw": "麻麻拳",
                ja: "ビリリパンチ",
                ko: "Electric Punch"
            },
            cost: [
                "Lightning"
            ],
            damage: 40
        }
    ],
    abilities: [],
    description: {
        en: "When its group is attacked, Pawmo is the first to leap into battle, defeating enemies with a fighting technique that utilizes electric shocks.",
        fr: "Quand on attaque son groupe, ce Pokémon est le premier à riposter. Il défait ses adversaires avec un art martial qui repose sur l’électricité.",
        es: "Cuando su manada se ve amenazada, atacan a la vanguardia usando un arte marcial caracterizado por el empleo de descargas eléctricas.",
        it: "Quando il branco viene attaccato, lotta in prima fila contro il nemico per sotterrarlo con tecniche marziali che rilasciano scariche elettriche.",
        de: "Wird seine Kolonie angegriffen, stürzt es sich sofort in den Kampf und besiegt den Feind mit Kampftechniken, die auf Elektroschocks setzen.",
        "pt-br": "Quando seu grupo é atacado, Pawmo é o primeiro a entrar na batalha, derrotando os inimigos com uma técnica de combate que utiliza choques elétricos.",
        "zh-tw": "當群體受到襲擊的時候，會率先挑戰敵人，以結合了電擊的格鬥技痛毆敵人。",
        ja: "群れが 襲われたときは 電撃を 駆使した 格闘技で 真っ先に 戦いを 挑み 敵を 倒す。",
        ko: "When its group is attacked, Pawmo is the first to leap into battle, defeating enemies with a fighting technique that utilizes electric shocks."
    }
};

export default card;
