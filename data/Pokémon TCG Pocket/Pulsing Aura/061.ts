import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/061",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/061",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/061",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/061",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/061",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/061",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/061",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B3/061",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B3/061"
    },
    name: {
        en: "Toxtricity",
        fr: "Salarsen",
        es: "Toxtricity",
        it: "Toxtricity",
        de: "Riffex",
        "pt-br": "Toxtricity",
        "zh-tw": "顫弦蠑螈",
        ko: "스트린더",
        ja: "ストリンダー"
    },
    illustrator: "Ryuta Fuse",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Lightning"],
    dexId: [849],
    evolveFrom: {
        en: "Toxel",
        fr: "Toxizap",
        es: "Toxel",
        it: "Toxel",
        de: "Toxel",
        "pt-br": "Toxel",
        "zh-tw": "毒電嬰",
        ko: "일레즌",
        ja: "エレズン"
    },
    stage: "Stage1",
    description: {
        en: "The jolts of electricity it launches by violently strumming the protrusions on its chest easily exceed 15,000 volts.",
        fr: "Les secousses électriques qu'il lance en frappant violemment les saillies de sa poitrine dépassent facilement les 15 000 volts.",
        es: "Las descargas eléctricas que lanza al rasguear violentamente las protuberancias de su pecho superan fácilmente los 15.000 voltios.",
        it: "Le scariche elettriche che lancia strimpellando violentemente le protuberanze sul petto superano facilmente i 15.000 volt.",
        de: "Die Stromstöße, die es durch heftiges Anschlagen der Vorsprünge auf seiner Brust auslöst, überschreiten leicht 15.000 Volt.",
        "pt-br": "Os choques de eletricidade que ele lança ao tocar violentamente as saliências em seu peito excedem facilmente 15.000 volts.",
        "zh-tw": "猛烈地敲擊胸口的突起，所釋放的電擊輕鬆超過一萬五千伏特。",
        ja: "荒々しく 胸もとの 突起を かき鳴らして 放つ 電撃は 15000ボルトを 軽く 超える。",
        ko: "거칠게 가슴팍의 돌기를 긁어서\n발산하는 전격은\n15000볼트를 가볍게 뛰어넘는다."
    },
    attacks: [
        {
            cost: ["Lightning", "Lightning"],
            name: {
                en: "Vengeful Shock",
                fr: "Choc Vengeur",
                es: "Descarga Vengativa",
                it: "Shock Vendicativo",
                de: "Racheschock",
                "pt-br": "Choque Vingativo",
                "zh-tw": "復仇衝擊",
                ja: "リベンジショック",
                ko: "리벤지쇼크"
            },
            effect: {
                en: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 60 more damage, and your opponent's Active Pokémon is now Paralyzed.",
                fr: "Si l'un de vos Pokémon a été mis KO par les dégâts d'une attaque lors du dernier tour de votre adversaire, cette attaque inflige 60 dégâts supplémentaires et le Pokémon actif de votre adversaire est désormais paralysé.",
                es: "Si alguno de tus Pokémon quedó Fuera de combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 60 puntos de daño más y el Pokémon Activo de tu rival ahora está Paralizado.",
                it: "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni di un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 60 danni in più e il Pokémon attivo del tuo avversario è ora Paralizzato.",
                de: "Wenn eines deiner Pokémon im letzten Zug deines Gegners durch den Schaden eines Angriffs kampfunfähig gemacht wurde, fügt dieser Angriff 60 weitere Schadenspunkte zu und das aktive Pokémon deines Gegners ist jetzt gelähmt.",
                "pt-br": "Se algum dos seus Pokémon foi Nocauteado pelo dano de um ataque durante o último turno do seu oponente, este ataque causará 60 de dano a mais e o Pokémon Ativo do seu oponente ficará Paralisado.",
                "zh-tw": "如果你的任何一隻寶可夢在對手的最後回合中因攻擊而被擊倒，則這次攻擊造成的傷害增加 60 點，並且對手的活躍寶可夢現在陷入麻痺狀態。",
                ja: "前の相手の番、ワザのダメージで、自分のポケモンがきぜつしていたなら、60ダメージ追加し、相手のバトルポケモンをマヒにする。",
                ko: "상대의 이전 차례에 기술의 데미지로 자신의 포켓몬이 기절했다면 60데미지를 추가하고 상대의 배틀 포켓몬을 마비로 만든다."
            },
            damage: "40+"
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
