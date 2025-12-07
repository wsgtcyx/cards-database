import { Card } from "../../../interfaces";
import Set from "../Genetic Apex";
const card: Card = {
    set: Set,
    name: {
        en: "Venusaur",
        fr: "Florizarre",
        es: "Venusaur",
        it: "Venusaur",
        de: "Bisaflor",
        'pt-br': "Venusaur",
        ko: "이상해꽃",
        "zh-tw": "維納斯龍"
    },
    illustrator: "Ryota Murayama",
    category: "Pokemon",
    hp: 160,
    types: ["Grass"],
    stage: "Stage2",
    evolveFrom: {
        en: "Ivysaur",
        "fr": "Lierre",
        "es": "Ivysaur",
        "it": "Ivysaur",
        "de": "Efeusaurier",
        "pt-br": "Ivysauro",
        "zh-tw": "常春藤屬"
    },
    attacks: [{
            cost: ["Grass", "Grass", "Colorless", "Colorless"],
            name: {
                en: "Mega Drain",
                fr: "Méga-Sangsue",
                es: "Megaagotar",
                it: "Megassorbimento",
                de: "Megasauger",
                'pt-br': "Megadreno",
                ko: "메가드레인",
                "zh-tw": "巨型排水管"
            },
            effect: {
                en: "Heal 30 damage from this Pokémon.",
                fr: "Soignez 30 dégâts de ce Pokémon.",
                es: "Cura 30 puntos de daño a este Pokémon.",
                it: "Cura questo Pokémon da 30 danni.",
                de: "Heile 30 Schadenspunkte bei diesem Pokémon.",
                'pt-br': "Cure 30 pontos de dano deste Pokémon.",
                ko: "이 포켓몬의 HP를 30회복.",
                "zh-tw": "治療該神奇寶貝造成的 30 點傷害。"
            },
            damage: "80"
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 3,
    rarity: "Three Diamond",
    description: {
        en: "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
        fr: "Sa plante donne une grosse fleur quand\nelle absorbe les rayons du soleil. Il est toujours\nà la recherche des endroits les plus ensoleillés.",
        es: "La planta florece cuando absorbe energía solar,\nlo cual le obliga a buscar siempre la luz del sol.",
        it: "Il fiore sboccia assorbendo energia solare.\nSi muove continuamente in cerca di luce.",
        de: "Es nutzt Solarenergie als Nahrung und\nbringt so seine große Blume zum Blühen.\nEs geht dorthin, wo die Sonne scheint.",
        'pt-br': "Sua planta floresce ao absorver energia solar,\npor isso este Pokémon vive em busca da luz do sol.",
        ko: "태양에너지를 양분으로\n큰 꽃을 피운다. 양지를 향해\n이끌려가듯이 이동한다.",
        "zh-tw": "它的植物在吸收太陽能時就會開花。它不斷移動以尋找陽光。"
    },
    boosters: ["mewtwo"]
};
export default card;
