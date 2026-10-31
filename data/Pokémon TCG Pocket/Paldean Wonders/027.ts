import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/027",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/027",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/027",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/027",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/027",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/027",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2a/027",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2a/027",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2a/027"
    },
    name: {
        en: "Finizen",
        fr: "Dofin",
        es: "Finizen",
        it: "Finizen",
        de: "Normifin",
        "pt-br": "Finizen",
        "zh-tw": "波普海豚",
        ja: "ナミイルカ",
        ko: "맨돌핀",
        pt: "Finizen"
    },
    illustrator: "kodama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    dexId: [963],
    description: {
        en: "Its water ring is made from seawater mixed with a sticky fluid that Finizen secretes from its blowhole.",
        "fr": "Son anneau d'eau est composé d'eau de mer mélangée à un fluide collant que Dofin sécrète par son évent.",
        "es": "Su anillo de agua está hecho de agua de mar mezclada con un fluido pegajoso que Finizen secreta por su espiráculo.",
        "it": "Il suo anello d'acqua è costituito da acqua di mare mescolata con un fluido appiccicoso che Finizen secerne dal suo sfiatatoio.",
        "de": "Sein Wasserring besteht aus Meerwasser, gemischt mit einer klebrigen Flüssigkeit, die Normifin aus seinem Blasloch absondert.",
        "pt-br": "Seu anel de água é feito de água do mar misturada com um fluido pegajoso que Finizen secreta de seu respiradouro.",
        "zh-tw": "它的水環是由海水與波普海豚從其氣孔分泌的黏性液體混合而成。",
        ja: "水のリングは 頭の 穴から 出る 粘着液と 海の水を 混ぜて 作り出したものなのだ。",
        ko: "물의 고리는\n머리의 구멍에서 나오는 점액질과\n바닷물을 섞어서 만들어 낸 것이다."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Razor Fin",
                fr: "Aileron-Rasoir",
                es: "Aleta Afilada",
                it: "Pinnalama",
                de: "Rasierflosse",
                'pt-br': "Barbatana Cortante",
                "zh-tw": "刀鰭",
                ja: "ひれカッター",
                ko: "지느러미 커터"
            },
            damage: "20",
            cost: ["Water"],
        },
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
