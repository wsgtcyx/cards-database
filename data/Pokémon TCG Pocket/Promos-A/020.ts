import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    name: {
        en: "Haunter",
        fr: "Spectrum",
        es: "Haunter",
        it: "Haunter",
        de: "Alpollo",
        'pt-br': "Haunter",
        ko: "고우스트",
        "zh-tw": "鬼斯通",
    },
    illustrator: "Mékayu",
    rarity: "None",
    category: "Pokemon",
    types: ["Psychic"],
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Surprise Attack",
                fr: "Attaque Surprise",
                es: "Ataque Sorpresa",
                it: "Attacco a Sorpresa",
                de: "Überraschungsangriff",
                'pt-br': "Ataque Surpresa",
                ko: "허찌르기",
                "zh-tw": "偷襲"
            },
            cost: ["Psychic"],
            damage: 50,
            effect: {
                en: "Flip a coin. If tails, this attack does nothing.",
                fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
                es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
                it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
                de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
                'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
                ko: "동전을 1번 던져서 뒷면이 나오면 이 기술은 실패한다.",
                "zh-tw": "拋一枚硬幣。如果是反面，則此攻擊不會執行任何操作。"
            }
        }],
    hp: 70,
    evolveFrom: {
        en: "Gastly",
        "fr": "Gastly",
        "es": "gastly",
        "it": "Gastly",
        "de": "Gastly",
        "pt-br": "Gastosamente",
        "zh-tw": "加斯特利"
    },
    description: {
        en: "It likes to lurk in the dark and tap shoulders\nwith a gaseous hand. Its touch causes endless\nshuddering.",
        fr: "Il adore se tapir dans l'ombre et faire frissonner\nses proies pour l'éternité en leur touchant l'épaule.",
        es: "Le gusta acechar en la oscuridad y tocarles el\nhombro a sus víctimas con su mano gaseosa.\nEstas se quedan temblando para siempre.",
        it: "Adora stare in agguato nei luoghi bui e toccare\nle spalle delle vittime con le sue mani gassose.\nIl suo tocco causa brividi incontenibili.",
        de: "Es lauert gern im Dunkeln und tippt Leuten mit\nseiner gasförmigen Hand auf die Schulter.\nSeine Berührung erzeugt endloses Schaudern.",
        'pt-br': "Gosta de se esconder no escuro e bater nos\nombros dos outros com sua mão gasosa.\nSeu toque causa arrepios que não acabam mais.",
        ko: "어둠을 틈타 가스로 된 손을 뻗쳐\n사람의 어깨를 두드리기 좋아한다.\n그 손에 닿으면 떨림이 멈추지 않는다.",
        "zh-tw": "牠喜歡潛伏在黑暗中拍拍肩膀\n用氣手。它的觸動引發無盡的\n顫抖。"
    },
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["vol2"]
};
export default card;
