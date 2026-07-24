import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/009",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/009"
    },
    name: {
        en: "Buizel",
        fr: "Mustébouée",
        es: "Buizel",
        it: "Buizel",
        de: "Bamelin",
        "pt-br": "Buizel",
        "zh-tw": "泳圈鼬",
        ko: "브이젤",
        ja: "ブイゼル"
    },
    illustrator: "Sekio",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Water"],
    dexId: [418],
    stage: "Basic",
    description: {
        en: "It inflates its flotation sac, keeping its face above water in order to watch for prey movement.",
        fr: "La bouée autour de son cou lui permet de\ngarder la tête hors de l'eau. Ainsi, il peut scruter\nles mouvements de ses proies sur la terre ferme.",
        es: "La vejiga natatoria alrededor del cuello le permite flotar\nen el agua con la cabeza fuera para divisar a sus presas.",
        it: "Gonfia il suo collare galleggiante e\nrimane con la testa fuori dall'acqua\nin cerca di prede sulla terraferma.",
        de: "Füllt es die Schwimmblase um seinen Hals mit Luft,\nragt sein Kopf aus dem Wasser und es kann die\nBewegungen von Beute an Land beobachten.",
        "pt-br": "Infla sua bolsa de flutuação e mantém o rosto acima\nda água para procurar o movimento de presas.",
        "zh-tw": "它會膨脹浮囊，將臉保持在水面以上，以觀察獵物的運動。"
    },
    attacks: [
        {
            cost: ["Water", "Water"],
            name: {
                en: "Surf",
                fr: "Surf",
                es: "Surf",
                it: "Surf",
                de: "Surfer",
                "pt-br": "Surfar",
                "zh-tw": "衝浪"
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
