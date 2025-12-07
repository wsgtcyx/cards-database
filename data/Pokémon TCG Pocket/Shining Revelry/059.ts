import { Card } from "../../../interfaces";
import Set from "../Shining Revelry";
const card: Card = {
    set: Set,
    name: {
        en: "Raticate",
        fr: "Rattatac",
        es: "Raticate",
        it: "Raticate",
        de: "Rattikarl",
        'pt-br': "Raticate",
        ko: "레트라",
        "zh-tw": "拉拉"
    },
    illustrator: "Kyoko Umemoto",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Colorless"],
    evolveFrom: {
        en: "Rattata",
        "fr": "Rattata",
        "es": "ratata",
        "it": "Rattata",
        "de": "Rattata",
        "pt-br": "Ratata",
        "zh-tw": "拉達"
    },
    description: {
        en: "People say that it fled from its enemies by using its small webbed hind feet to swim from island to island in Alola.",
        fr: "Les petites palmes de ses pattes postérieures\nlui permettraient de se rendre d'île en île\nà la nage afin d'échapper à ses prédateurs.",
        es: "Las pequeñas membranas que tiene en las\npatas traseras le permiten nadar entre las islas\nde Alola y escapar así de sus depredadores.",
        it: "Si dice che sia sfuggito ai nemici nuotando\nda un'isola all'altra grazie alle minuscole\nmembrane tra le dita delle zampe posteriori.",
        de: "Auf der Flucht vor seinen Feinden nutzt es die\nSchwimmhäute an seinen Hinterläufen, um von\nInsel zu Insel zu schwimmen.",
        'pt-br': "Dizem que fugiu dos seus inimigos\nusando seus pés palmados para nadar\nde ilha em ilha em Alola.",
        ko: "뒷발의 작은 물갈퀴로\n바다를 헤엄쳐 섬을 건너\n적을 피해 도망쳤다고 한다.",
        "zh-tw": "人們說它是為了躲避敵人而用後足的小蹼在阿羅拉的一個島嶼之間游動。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Tackle",
                fr: "Charge",
                es: "Placaje",
                it: "Azione",
                de: "Tackle",
                'pt-br': "Investida",
                ko: "몸통박치기",
                "zh-tw": "處理"
            },
            damage: 50,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
