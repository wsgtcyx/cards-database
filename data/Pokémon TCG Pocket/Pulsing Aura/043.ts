import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/043",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/043"
    },
    name: {
        en: "Huntail",
        fr: "Serpang",
        es: "Huntail",
        it: "Huntail",
        de: "Aalabyss",
        "pt-br": "Huntail",
        "zh-tw": "獵斑魚",
        ko: "헌테일",
        ja: "ハンテール"
    },
    illustrator: "Shigenori Negishi",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Water"],
    dexId: [367],
    evolveFrom: {
        en: "Clamperl",
        fr: "Coquiperl",
        es: "Clamperl",
        it: "Clamperl",
        de: "Perlu",
        "pt-br": "Clamperl",
        "zh-tw": "珍珠貝",
        ko: "진주몽",
        ja: "パールル"
    },
    stage: "Stage1",
    description: {
        en: "Deep seas are their habitat. According to tradition, when Huntail wash up onshore, something unfortunate will happen.",
        fr: "Il habite dans les profondeurs de l’océan.\nUn Serpang trouvé sur la plage serait\nun mauvais présage.",
        es: "Vive en los fondos marinos. Según una leyenda,\nque un Huntail aparezca varado en la playa es\nseñal de mal augurio.",
        it: "Vive nelle profondità marine. Secondo le\nleggende, quando un Huntail si arena sulla riva\nè segno che sta per accadere una disgrazia.",
        de: "Es lebt in der Tiefsee. Einer Überlieferung\nzufolge geschieht etwas Unheilvolles, wenn\nein Aalabyss am Strand auftaucht.",
        "pt-br": "Os mares profundos são o seu habitat. De acordo com a tradição, quando Huntail chegar à costa, algo infeliz acontecerá.",
        "zh-tw": "棲息在深海中。傳說如果\n有獵斑魚被沖上沙灘，\n就會有不好的事發生。"
    },
    attacks: [
        {
            cost: ["Water", "Water"],
            name: {
                en: "Hydro Splash",
                fr: "Hydro-Éclaboussure",
                es: "Hidroestallido",
                it: "Idrosplash",
                de: "Hydroplatscher",
                "pt-br": "Hidroborrifada",
                "zh-tw": "水炮濺射"
            },
            damage: 70
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
