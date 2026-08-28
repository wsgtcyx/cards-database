import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/045",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/045",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/045",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/045",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/045",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/045",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/045"
    },
    name: {
        en: "Togedemaru",
        fr: "Togedemaru",
        es: "Togedemaru",
        it: "Togedemaru",
        de: "Togedemaru",
        "pt-br": "Togedemaru",
        "zh-tw": "托戈德瑪爾",
        ko: "토게데마루",
        ja: "トゲデマル"
    },
    illustrator: "Megumi Mizutani",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Metal"],
    dexId: [777],
    stage: "Basic",
    description: {
        en: "When it's in trouble, it curls up into a ball, makes its fur spikes stand on end, and then discharges electricity indiscriminately.",
        fr: "En cas de danger, il se roule en boule, dresse ses épines dorsales et lance des décharges électriques au hasard.",
        es: "Cuando se encuentra en peligro, se hace una bola, eriza las púas del lomo y propina descargas eléctricas a diestro y siniestro.",
        it: "In caso di pericolo si appallottola, drizza le spine sulla schiena e scarica energia elettrica all'impazzata.",
        de: "Bei Gefahr rollt es sich zusammen, stellt seine Rückenstacheln auf und schießt willkürlich mit Elektrizität um sich.",
        "pt-br": "Quando está em apuros, Togedemaru se enrola como uma bola, levanta seus espinhos e descarrega eletricidade indiscriminadamente.",
        "zh-tw": "在危急時刻會把身體捲成一團、倒豎起背上的尖刺，不分青紅皂白地發出電擊。"
    },
    attacks: [
        {
            cost: ["Metal"],
            name: {
                en: "Tumbling Attack",
                fr: "Attaque Trébuchante",
                es: "Ataque Tambaleante",
                it: "Attacco Capriola",
                de: "Taumler",
                "pt-br": "Ataque Cambalhota",
                "zh-tw": "回轉攻擊"
            },
            effect: {
                en: "Flip a coin. If heads, this attack does 30 more damage.",
                fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts de plus.",
                es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
                de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu.",
                "pt-br": "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
                "zh-tw": "擲1次硬幣若為正面,則增加30點傷害。"
            },
            damage: "20+"
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
