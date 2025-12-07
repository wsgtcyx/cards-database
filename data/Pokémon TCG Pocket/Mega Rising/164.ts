import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Morgrem",
        "fr": "Morgrem",
        "es": "Morgrem",
        "it": "Morgrem",
        "de": "Morgrem",
        "pt-br": "Morgrem",
        "zh-tw": "詐唬魔",
    },
    illustrator: "Hitoshi Ariga",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Darkness"],
    evolveFrom: {
        en: "Impidimp",
        "fr": "Impidimp",
        "es": "Impidimp",
        "it": "Impid",
        "de": "Impidimp",
        "pt-br": "Impidimp",
        "zh-tw": "因匹季普"
    },
    description: {
        en: "This Pokémon absorbs negative emotions and\nturns them into energy. It's popular with people\nwho tend to think gloomy thoughts.",
        "fr": "Ce Pokémon absorbe les émotions négatives et\nles transforme en énergie. C'est populaire auprès des gens\nqui ont tendance à avoir des pensées sombres.",
        "es": "Este Pokémon absorbe emociones negativas y\nlos convierte en energía. Es popular entre la gente.\nque tienden a tener pensamientos sombríos.",
        "it": "Questo Pokémon assorbe le emozioni negative e\nli trasforma in energia. È popolare tra le persone\nche tendono ad avere pensieri cupi.",
        "de": "Dieses Pokémon absorbiert negative Emotionen und\nverwandelt sie in Energie. Es ist bei den Leuten beliebt\ndie dazu neigen, düstere Gedanken zu hegen.",
        "pt-br": "Este Pokémon absorve emoções negativas e\nos transforma em energia. É popular entre as pessoas\nque tendem a ter pensamentos sombrios.",
        "zh-tw": "這個神奇寶貝吸收負面情緒並\n將它們轉化為能量。它很受人們歡迎\n他們往往會產生悲觀的想法。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "False Surrender",
                "fr": "Fausse reddition",
                "es": "Falsa rendición",
                "it": "Falsa resa",
                "de": "Falsche Kapitulation",
                "pt-br": "Falsa Rendição",
                "zh-tw": "假投降"
            },
            damage: 50,
            cost: ["Darkness", "Darkness"],
            effect: {
                en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
                "fr": "Les dégâts de cette attaque ne sont affectés par aucun effet sur le Pokémon Actif de votre adversaire.",
                "es": "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
                "it": "Il danno di questo attacco non è influenzato da alcun effetto sul Pokémon attivo del tuo avversario.",
                "de": "Der Schaden dieses Angriffs wird nicht durch Effekte auf das Aktive Pokémon deines Gegners beeinflusst.",
                "pt-br": "O dano deste ataque não é afetado por nenhum efeito no Pokémon Ativo do seu oponente.",
                "zh-tw": "這次攻擊的傷害不受對手的活躍神奇寶貝的任何效果影響。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
