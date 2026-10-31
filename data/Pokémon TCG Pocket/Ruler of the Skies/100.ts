import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/100",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/100",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/100",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/100",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/100",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/100",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/100",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4/100",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4/100"
    },
    name: {
        en: "Absol",
        fr: "Absol",
        es: "Absol",
        it: "Absol",
        de: "Absol",
        "pt-br": "Absol",
        "zh-tw": "阿勃梭魯",
        ko: "앱솔",
        ja: "アブソル"
    },
    illustrator: "Ebila",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Darkness"],
    dexId: [359],
    stage: "Basic",
    description: {
        en: "Because of this Pokémon’s ability to detect danger, people mistook Absol as a bringer of doom.",
        fr: "Sa capacité à pressentir le danger lui a autrefois\nvalu la réputation de porter malheur.",
        es: "Debido a su capacidad para predecir desastres,\nse lo ha considerado desacertadamente un\nPokémon portador de desgracias.",
        it: "A causa della sua capacità di percepire i disastri\nè stato considerato erroneamente un Pokémon\nportatore di disgrazie.",
        de: "Absol kann Gefahr verspüren, weshalb Menschen\nirrtümlicherweise dachten, dieses Pokémon\nbringe ihnen Unheil.",
        "pt-br": "Devido à capacidade deste Pokémon de detectar o perigo, as pessoas confundiram Absol com um portador da destruição.",
        "zh-tw": "由於擁有察覺危險的能力，\n因此牠被人們誤解是\n會招來災禍的寶可夢。",
        ja: "危険を 察知する 能力を 持つがゆえに 人からは 災いを もたらす ポケモンと 誤解された。",
        ko: "위험을 감지하는 능력이 있어\n사람들로부터 재앙을 불러오는\n포켓몬이라는 오해를 샀다."
    },
    attacks: [
        {
            cost: ["Darkness"],
            name: {
                en: "Enhanced Blade",
                fr: "Lame Améliorée",
                es: "Tajo Mejorado",
                "pt-br": "Espada Melhorada",
                "zh-tw": "強化斬",
                "it": "Superlama",
                "de": "Verstärkte Klinge",
                ja: "きょうかスラッシュ",
                ko: "강화슬래시"
            },
            effect: {
                en: "If this Pokémon has a Pokémon Tool attached, this attack does 30 more damage.",
                fr: "Si un Outil Pokémon est attaché à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires.",
                es: "Si este Pokémon tiene 1 Herramienta Pokémon unida a él, este ataque hace 30 puntos de daño más.",
                it: "Se questo Pokémon ha un Oggetto Pokémon assegnato, questo attacco infligge 30 danni in più.",
                de: "Wenn an dieses Pokémon 1 Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 30 Schadenspunkte mehr zu.",
                "pt-br": "Se este Pokémon tiver uma Ferramenta Pokémon ligada a ele, este ataque causará 30 pontos de dano a mais.",
                "zh-tw": "若這隻寶可夢身上附有「寶可夢道具」,則增加30點傷害。",
                ja: "このポケモンに「ポケモンのどうぐ」がついているなら、30ダメージ追加。",
                ko: "이 포켓몬에게 「포켓몬의 도구」가 붙어 있다면 30데미지를 추가한다."
            },
            damage: "20+"
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1
};
export default card;
