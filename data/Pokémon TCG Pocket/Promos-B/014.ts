import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/014/21515f5e719f544f",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/014/21515f5e719f544f",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/014/21515f5e719f544f",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/014/21515f5e719f544f",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/014/21515f5e719f544f",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/014/21515f5e719f544f",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/014/21515f5e719f544f",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/014/21515f5e719f544f",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/014/21515f5e719f544f"
    },
    name: {
        en: "Magikarp",
        fr: "Magicarpe",
        es: "Magikarp",
        it: "Magikarp",
        de: "Karpador",
        "pt-br": "Magikarp",
        "zh-tw": "鯉魚王",
        ko: "잉어킹",
        ja: "コイキング"
    },
    illustrator: "sui",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 30,
    types: ["Water"],
    dexId: [129],
    stage: "Basic",
    description: {
        en: "In the distant past, it was somewhat stronger than the horribly weak descendants that exist today.",
        fr: "Il paraît que ses lointains ancêtres étaient assez puissants, mais les spécimens d'aujourd'hui sont extrêmement faibles.",
        es: "En un pasado lejano, era más fuerte de lo que hoy\nson sus débiles descendientes.",
        it: "Pare che anticamente fosse un tantino più forte. Oggi è così debole da fare quasi pena.",
        de: "Die urzeitlichen Vorfahren dieses Pokémon waren etwas stärker als ihre heutigen, kümmerlichen Nachkommen.",
        "pt-br": "No passado distante, era um pouco mais forte do que os descendentes terrivelmente fracos que existem hoje.",
        "zh-tw": "很久以前的鯉魚王好像比現在強上一些，但是現在卻弱得可憐。",
        ja: "大昔は まだ もう少し 強かったらしい。しかし 今は 悲しいくらいに 弱いのだ。",
        ko: "아주 먼 옛날에는 좀 더\n강했던 것 같다. 그러나 지금은\n안쓰러울 정도로 약하다."
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Expert Splasher",
                fr: "Éclabousseur Expert",
                es: "As del Chapoteo",
                it: "Specialista di Splash",
                de: "Platschexperte",
                "pt-br": "Borrifador Experiente",
                "zh-tw": "跳躍高手",
                ja: "はねじょうず",
                ko: "튀어오르기 고수"
            },
            effect: {
                en: "Flip 2 coins. If both of them are heads, this attack does 20 more damage.",
                fr: "Lancez 2 pièces. Si toutes sont côté face, cette attaque inflige 20 dégâts de plus.",
                es: "Lanza 2 monedas. Si en las dos sale cara, este ataque hace 20 puntos de daño más.",
                it: "Lancia 2 volte una moneta. Se esce testa entrambe le volte, questo attacco infligge 20 danni in più.",
                de: "Wirf 2 Münzen. Zeigen beide Münzen Kopf, fügt diese Attacke 20 Schadenspunkte mehr zu.",
                "pt-br": "Jogue 2 moedas. Se as duas saírem cara, este ataque causará 20 pontos de dano a mais.",
                "zh-tw": "擲2次硬幣,若全部為正面,則增加20點傷害。",
                ja: "コインを2回投げ、すべてオモテなら、20ダメージ追加。",
                ko: "동전을 2번 던져서 모두 앞면이 나오면 20데미지를 추가한다."
            },
            damage: "10+"
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
