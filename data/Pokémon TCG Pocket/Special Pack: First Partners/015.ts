import { Card } from "../../../interfaces";
import Set from "../Special Pack: First Partners";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/SP1/015",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/SP1/015",
        es: "https://game.pokemontcgpocket.app/es/tcgp/SP1/015",
        it: "https://game.pokemontcgpocket.app/it/tcgp/SP1/015",
        de: "https://game.pokemontcgpocket.app/de/tcgp/SP1/015",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/SP1/015",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/SP1/015",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/SP1/015"
    },
    name: {
        en: "Oshawott",
        fr: "Moustillon",
        es: "Oshawott",
        "pt-br": "Oshawott",
        "zh-tw": "水水獺",
        ja: "ミジュマル",
        ko: "수댕이",
        it: "Oshawott",
        de: "Ottaro"
    },
    illustrator: "Saboteri",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: [
        "Water"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Razor Shell",
                fr: "Coqui-Lame",
                es: "Concha Filo",
                it: "Conchilama",
                de: "Kalkklinge",
                "pt-br": "Concha Navalha",
                "zh-tw": "貝殼刃",
                ja: "シェルブレード",
                ko: "Razor Shell"
            },
            cost: [
                "Colorless",
                "Water"
            ],
            damage: "20+",
            effect: {
                en: "Flip a coin. If heads, this attack does 30 more damage.",
                fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts de plus.",
                es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
                de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu.",
                "pt-br": "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
                "zh-tw": "擲1次硬幣若為正面,則增加30點傷害。",
                ja: "コインを1回投げオモテなら、30ダメージ追加。",
                ko: "Flip a coin. If heads, this attack does 30 more damage."
            }
        }
    ],
    abilities: [],
    description: {
        en: "It fights using the scalchop on its stomach. In response to an attack, it retaliates immediately by slashing.",
        fr: "Il combat avec le coupillage de son ventre. Il peut parer une attaque et immédiatement contre-attaquer.",
        es: "Ataca con la vieira de su ombligo. En guardia para un ataque, pasa al contraataque de inmediato.",
        it: "Combatte con la conchiglia che ha sul ventre. Contrattacca prontamente dopo aver parato l'attacco avversario.",
        de: "Kämpft mit der Muschel auf seinem Bauch. Pariert es einen Angriff, schlägt es sofort mit einem Schalenhieb zurück.",
        "pt-br": "Luta usando a scalchop em sua barriga. Em resposta a uma agressão, retalia imediatamente atacando.",
        "zh-tw": "用腹部的扇貝貝戰鬥。面對攻擊時，會立刻用斬擊來反擊。",
        ja: "お腹の ホタチで 戦う。 攻撃を 受け止めてから すかさず 切りつけて 反撃するのだ。",
        ko: "It fights using the scalchop on its stomach. In response to an attack, it retaliates immediately by slashing."
    }
};

export default card;
