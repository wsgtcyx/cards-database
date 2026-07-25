import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/007",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/007",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/007",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/007",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/007",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/007"
    },
    name: {
        en: "Hisuian Lilligant",
        fr: "Fragilady de Hisui",
        es: "Lilligant de Hisui",
        it: "Lilligant di Hisui",
        de: "Hisui-Dressella",
        "pt-br": "Lilligant de Hisui",
        "zh-tw": "洗翠 裙兒小姐",
        ko: "히스이 드레디어",
        ja: "ヒスイ ドレディア"
    },
    illustrator: "Mizue",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Grass"],
    dexId: [549],
    evolveFrom: {
        en: "Petilil",
        fr: "Chlorobule",
        es: "Petilil",
        it: "Petilil",
        de: "Lilminip",
        "pt-br": "Petilil",
        "zh-tw": "百合根娃娃",
        ko: "치릴리",
        ja: "チュリネ"
    },
    stage: "Stage1",
    description: {
        en: "I suspect that its well-developed legs are the result of a life spent on mountains covered in deep snow. The scent it exudes from its flower crown heartens those in proximity.",
        fr: "Je soupçonne que ses pattes bien développées sont le résultat d’une vie passée dans des montagnes couvertes de neige épaisse. Le parfum qu’il dégage de sa couronne de fleurs réconforte ceux qui se trouvent à proximité.",
        es: "Sospecho que sus piernas bien desarrolladas son el resultado de una vida pasada en montañas cubiertas de nieve profunda. El aroma que desprende su corona de flores anima a quienes se encuentran cerca.",
        it: "Ho il sospetto che le sue zampe ben sviluppate siano il risultato di una vita trascorsa su montagne coperte di neve profonda. Il profumo che emana dalla sua corona di fiori rincuora chi si trova nelle vicinanze.",
        de: "Ich vermute, dass seine gut entwickelten Beine das Ergebnis eines Lebens auf tief verschneiten Bergen sind. Der Duft, den seine Blütenkrone verströmt, ermuntert die Menschen in der Nähe.",
        "pt-br": "Suspeito que suas pernas bem desenvolvidas sejam o resultado de uma vida passada em montanhas cobertas de neve profunda. O perfume que exala de sua coroa de flores anima aqueles que estão próximos.",
        "zh-tw": "我懷疑它發達的腿是在厚厚的雪山上度過一生的結果。它的花冠散發出的香味使附近的人感到振奮。"
    },
    attacks: [
        {
            cost: ["Grass"],
            name: {
                en: "Dress Up",
                fr: "Se déguiser",
                es: "Disfrazarse",
                it: "Vestirsi",
                de: "Verkleiden",
                "pt-br": "Vestir-se",
                "zh-tw": "盛裝打扮"
            },
            effect: {
                en: "If this Pokémon has a Pokémon Tool attached, this attack does 20 more damage.",
                fr: "Si ce Pokémon est attaché à un Outil Pokémon, cette attaque inflige 20 dégâts supplémentaires.",
                es: "Si este Pokémon tiene una Herramienta Pokémon adjunta, este ataque hace 20 daños más.",
                it: "Se questo Pokémon ha un Oggetto Pokémon assegnato, questo attacco infligge 20 danni in più.",
                de: "Wenn an dieses Pokémon ein Pokémon-Werkzeug angelegt ist, fügt dieser Angriff 20 weitere Schadenspunkte zu.",
                "pt-br": "Se este Pokémon tiver uma Ferramenta Pokémon anexada, este ataque causará mais 20 danos.",
                "zh-tw": "如果該寶可夢附加了寶可夢工具，則此攻擊造成的傷害增加 20 點。"
            },
            damage: "40+"
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
