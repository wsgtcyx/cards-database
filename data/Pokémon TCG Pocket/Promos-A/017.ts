import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/017/7123fe91038afe61",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/017/7123fe91038afe61",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/017/7123fe91038afe61",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/017/7123fe91038afe61",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/017/7123fe91038afe61",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/017/7123fe91038afe61",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/017/7123fe91038afe61",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/017/7123fe91038afe61",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/017/7123fe91038afe61"
    },
    name: {
        en: "Mankey",
        fr: "Férosinge",
        es: "Mankey",
        it: "Mankey",
        de: "Menki",
        'pt-br': "Mankey",
        ja: "マンキー",
        ko: "망키",
        "zh-tw": "猴怪"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Diamond",
    category: "Pokemon",
    types: ["Fighting"],
    stage: "Basic",
    attacks: [{
            name: {
                en: "Reckless Charge",
                fr: "Attaque Imprudente",
                es: "Carga Descuidada",
                it: "Carica Avventata",
                de: "Waghalsiger Sturmangriff",
                'pt-br': "Carga Indomável",
                ja: "とつげき",
                ko: "돌격",
                "zh-tw": "突擊"
            },
            cost: ["Fighting"],
            damage: 30,
            effect: {
                en: "This Pokémon also does 10 damage to itself.",
                fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
                es: "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
                it: "Questo Pokémon infligge anche 10 danni a se stesso.",
                de: "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu.",
                'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo.",
                ja: "このポケモンにも10ダメージ。",
                ko: "이 포켓몬에게도 10데미지를 준다.",
                "zh-tw": "這隻寶可夢也受到10點傷害。"
            }
        }],
    hp: 50,
    description: {
        en: "It lives in groups in the treetops. If it loses sight of\nits group, it becomes infuriated by its loneliness.",
        fr: "Il vit en groupe au sommet des arbres. S'il perd\nses congénères de vue, la solitude le rend furieux.",
        es: "Vive en grupos en las copas de\nlos árboles. Si pierde de vista a su\nmanada, se siente solo y se enfada.",
        it: "Vivono in branchi in cima agli alberi. Se perdono\nil contatto con il gruppo s'infuriano per la solitudine.",
        de: "Es lebt mit Artgenossen in Baumkronen.\nVerliert es sie aus den Augen, wird es\nvor Einsamkeit sofort zornig.",
        'pt-br': "Vive em grupo no topo de árvores.\nSe perde seu grupo de vista, a solidão\ndeixa este Pokémon furioso.",
        ja: "木の上で 群れをつくって 暮らす。 群れから はぐれた マンキーは 寂しくて すぐに 怒りだす。",
        ko: "나무 위에 무리 지어 산다.\n무리에서 떨어진 망키는\n외로운 나머지 금방 화를 낸다.",
        "zh-tw": "在樹上群居的寶可夢。和夥伴走散的猴怪會因為按捺不住寂寞而動不動就生氣。"
    },
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["vol1"]
};
export default card;
