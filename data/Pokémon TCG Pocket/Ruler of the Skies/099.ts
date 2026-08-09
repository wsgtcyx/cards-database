import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/099",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/099",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/099",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/099",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/099",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/099",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/099"
    },
    name: {
        en: "Swalot",
        fr: "Avaltout",
        es: "Swalot",
        it: "Swalot",
        de: "Schlukwech",
        "pt-br": "Swalot",
        "zh-tw": "吞食獸",
        ko: "꿀꺽몬",
        ja: "マルノーム"
    },
    illustrator: "Yuka Morii",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Darkness"],
    dexId: [317],
    evolveFrom: {
        en: "Gulpin",
        fr: "Gloupti",
        es: "Gulpin",
        it: "Gulpin",
        de: "Schluppuck",
        "pt-br": "Gulpin",
        "zh-tw": "溶食獸",
        ko: "꼴깍몬",
        ja: "ゴクリン"
    },
    stage: "Stage1",
    description: {
        en: "It can swallow a tire whole in one gulp. It secretes a horribly toxic fluid from the pores on its body.",
        fr: "Ce Pokémon est capable d'avaler un pneu entier d'une seule bouchée. Ses pores sécrètent un horrible fluide toxique.",
        es: "Es capaz de tragarse un neumático sin masticarlo. Segrega un fluido tremendamente tóxico por los poros.",
        it: "Può ingoiare uno pneumatico in un sol boccone. Secerne un liquido incredibilmente tossico da tutti i pori del corpo.",
        de: "Es kann einen ganzen Reifen auf einmal verschlingen. Seine Poren sondern eine äußerst giftige Flüssigkeit ab.",
        "pt-br": "É capaz de engolir um pneu inteiro de uma vez só. Libera um fluido horrivelmente tóxico pelos poros do seu corpo.",
        "zh-tw": "就連輪胎都能整個吞掉，\n會從身上的毛孔分泌出\n帶有劇毒的體液。"
    },
    attacks: [
        {
            cost: ["Darkness", "Colorless"],
            name: {
                en: "Swallow Up",
                fr: "Engloutissement",
                es: "Engullir",
                "pt-br": "Engolir por Inteiro",
                "zh-tw": "大口吞",
                "it": "Inghiottire",
                "de": "Runterschlucken"
            },
            effect: {
                en: "If your opponent's Active Pokémon has less remaining HP than this Pokémon, this attack does 80 more damage.",
                fr: "S'il reste moins de PV au Pokémon Actif de votre adversaire qu'à ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
                es: "Si al Pokémon Activo de tu rival le quedan menos PS que a este Pokémon, este ataque hace 80 puntos de daño más.",
                "pt-br": "Se o Pokémon Ativo do seu oponente tiver menos PS restante do que este Pokémon, este ataque causará 80 pontos de dano a mais.",
                "zh-tw": "若對手的戰鬥寶可夢的剩餘HP比這隻寶可夢的剩餘HP少,則增加80點傷害。",
                "it": "Se il Pokémon attivo del tuo avversario ha meno PS rimanenti di questo Pokémon, questo attacco infligge 80 danni in più.",
                "de": "Wenn das Aktive Pokémon deines Gegners weniger verbleibende KP als dieses Pokémon hat, fügt diese Attacke 80 Schadenspunkte mehr zu."
            },
            damage: "30+"
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 3
};
export default card;
