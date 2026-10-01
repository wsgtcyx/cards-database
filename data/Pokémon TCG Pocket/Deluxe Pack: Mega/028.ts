import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/028",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/028",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/028",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/028",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/028",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/028",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/028"
    },
    name: {
        en: "Teal Mask Ogerpon ex",
        fr: "Ogerpon Masque Turquoise-ex",
        es: "Ogerpon Máscara Turquesa ex",
        it: "Ogerpon Maschera Turchese-ex",
        de: "Türkisgrüne-Maske-Ogerpon-ex",
        "pt-br": "Ogerpon Máscara Turquesa ex",
        "zh-tw": "厄鬼椪碧草面具ex",
        ja: "オーガポンみどりのめんex",
        ko: "오거폰벽록의 가면 ex"
    },
    illustrator: "5ban Graphics",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 130,
    types: [
        "Grass"
    ],
    stage: "Basic",
    suffix: "EX",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Soothing Wind",
                fr: "Brise Apaisante",
                es: "Viento Reparador",
                it: "Vento Lenitivo",
                de: "Wohltuender Wind",
                "pt-br": "Vento Acalentador",
                "zh-tw": "平和之風",
                ja: "Soothing Wind",
                ko: "Soothing Wind"
            },
            effect: {
                en: "Each of your Pokémon that has any Energy attached recovers from all Special Conditions and can't be affected by any Special Conditions.",
                fr: "Chacun de vos Pokémon auquel de l'Énergie est attachée guérit de tous les États Spéciaux et ne peut être affecté par aucun État Spécial.",
                es: "Cada uno de tus Pokémon que tenga alguna Energía unida a él se recupera de todas las Condiciones Especiales y no puede verse afectado por ninguna Condición Especial.",
                it: "Ciascuno dei tuoi Pokémon che ha delle Energie assegnate guarisce da tutte le condizioni speciali e non può essere influenzato da condizioni speciali.",
                de: "Jedes deiner Pokémon, an das mindestens 1 Energie angelegt ist, erholt sich von allen Speziellen Zuständen und kann von keinen Speziellen Zuständen betroffen werden.",
                "pt-br": "Cada um dos seus Pokémon que tiver alguma Energia ligada a ele se recupera de todas as Condições Especiais e não pode ser afetado por quaisquer Condições Especiais.",
                "zh-tw": "只要這隻寶可夢在場上,自己的所有身上附有能量的寶可夢不會陷入特殊狀態,並將受到的特殊狀態全部恢復。",
                ja: "Each of your Pokémon that has any Energy attached recovers from all Special Conditions and can't be affected by any Special Conditions.",
                ko: "Each of your Pokémon that has any Energy attached recovers from all Special Conditions and can't be affected by any Special Conditions."
            }
        }
    ],
    attacks: [
        {
            name: {
                en: "Energized Leaves",
                fr: "Feuilles Énergisées",
                es: "Follaje Energético",
                it: "Foglie Energizzate",
                de: "Energiegeladene Blätter",
                "pt-br": "Folhas Energizadas",
                "zh-tw": "能量綠葉",
                ja: "Energized Leaves",
                ko: "Energized Leaves"
            },
            damage: "60+",
            cost: [
                "Grass",
                "Grass"
            ],
            effect: {
                en: "If the amount of Energy attached to both Active Pokémon is 5 or more, this attack does 60 more damage.",
                fr: "Si la somme des Énergies attachées aux deux Pokémon Actifs est égale à 5 ou plus, cette attaque inflige 60 dégâts supplémentaires.",
                es: "Si la cantidad de Energía unida a ambos Pokémon Activos es de 5 o más, este ataque hace 60 puntos de daño más.",
                it: "Se il totale di Energie assegnate a entrambi i Pokémon attivi è 5 o più, questo attacco infligge 60 danni in più.",
                de: "Wenn die Anzahl der Energien, die an beide Aktiven Pokémon angelegt sind, 5 oder mehr ist, fügt diese Attacke 60 Schadenspunkte mehr zu.",
                "pt-br": "Se a quantidade de Energia ligada a ambos os Pokémon Ativos for 5 ou mais, este ataque causará 60 pontos de dano a mais.",
                "zh-tw": "若雙方的戰鬥寶可夢身上的能量為5個以上,則增加60點傷害。",
                ja: "If the amount of Energy attached to both Active Pokémon is 5 or more, this attack does 60 more damage.",
                ko: "If the amount of Energy attached to both Active Pokémon is 5 or more, this attack does 60 more damage."
            }
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
