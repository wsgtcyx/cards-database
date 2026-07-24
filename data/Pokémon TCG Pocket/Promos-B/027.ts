import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/027",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/027"
    },
    name: {
        en: "Plusle",
        fr: "Posipi",
        es: "Plusle",
        it: "Plusle",
        de: "Plusle",
        "pt-br": "Plusle",
        "zh-tw": "正電拍拍",
        ko: "플러시",
        ja: "プラスル"
    },
    illustrator: "Yuka Morii",
    rarity: "None",
    category: "Pokemon",
    hp: 70,
    types: ["Lightning"],
    dexId: [311],
    stage: "Basic",
    description: {
        en: "This Pokémon absorbs electricity from telephone poles. It shorts out the electricity stored inside its body to create noises.",
        fr: "Ce Pokémon absorbe l'électricité des poteaux téléphoniques. Il court-circuite l’électricité stockée à l’intérieur de son corps pour créer des bruits.",
        es: "Este Pokémon absorbe electricidad de los postes telefónicos. Corta la electricidad almacenada dentro de su cuerpo para crear ruidos.",
        it: "Questo Pokémon assorbe l'elettricità dai pali del telefono. Mette in cortocircuito l'elettricità immagazzinata nel suo corpo per creare rumori.",
        de: "Dieses Pokémon absorbiert Elektrizität von Telefonmasten. Es schließt die in seinem Körper gespeicherte Elektrizität kurz und erzeugt Geräusche.",
        "pt-br": "Este Pokémon absorve eletricidade de postes telefônicos. Ele causa um curto-circuito na eletricidade armazenada dentro de seu corpo para criar ruídos.",
        "zh-tw": "這隻寶可夢從電線桿吸收電力。它使體內儲存的電流短路，從而產生噪音。"
    },
    attacks: [
        {
            cost: ["Lightning"],
            name: {
                en: "Electric Tail",
                fr: "Électro-Queue",
                es: "Cola Eléctrica",
                it: "Elettrocoda",
                de: "Stromschweif",
                "pt-br": "Cauda Elétrica",
                "zh-tw": "電尾"
            },
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
                fr: "Lancez une pièce de monnaie. Si c'est face, le Pokémon Actif de votre adversaire est désormais Paralysé.",
                es: "Lanza una moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
                it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario è paralizzato.",
                de: "Wirf eine Münze. Bei „Kopf“ ist das Aktive Pokémon deines Gegners jetzt gelähmt.",
                "pt-br": "Jogue uma moeda. Se der cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
                "zh-tw": "拋一枚硬幣。如果正面，則對手的戰鬥寶可夢現在處於麻痺狀態。"
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol4"]
};

export default card;
