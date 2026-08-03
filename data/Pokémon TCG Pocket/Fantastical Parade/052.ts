import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/052",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/052",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/052",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/052",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/052",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/052"
    },
    name: {
        en: "Plusle",
        "fr": "Posipi",
        "es": "Plusle",
        "it": "Plusle",
        "de": "Plusle",
        "pt-br": "Plusle",
        "zh-tw": "正電拍拍"
    },
    illustrator: "HYOGONOSUKE",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Lightning"],
    description: {
        en: "This Pokémon absorbs electricity from telephone\npoles. It shorts out the electricity stored inside its\nbody to create noises.",
        "fr": "Ce Pokémon absorbe l'électricité du téléphone\npoteaux. Il court-circuite l'électricité stockée à l'intérieur de son\ncorps pour créer des bruits.",
        "es": "Este Pokémon absorbe electricidad del teléfono\npolos. Corta la electricidad almacenada dentro de su\ncuerpo para crear ruidos.",
        "it": "Questo Pokémon assorbe l'elettricità dal telefono\npoli. Mette in cortocircuito l'elettricità immagazzinata al suo interno\ncorpo per creare rumori.",
        "de": "Dieses Pokémon absorbiert Elektrizität vom Telefon\nStangen. Dadurch wird der darin gespeicherte Strom kurzgeschlossen\nKörper, um Geräusche zu erzeugen.",
        "pt-br": "Este Pokémon absorve eletricidade do telefone\npólos. Ele causa um curto-circuito na eletricidade armazenada dentro de seu\ncorpo para criar ruídos.",
        "zh-tw": "這個神奇寶貝可以吸收電話的電力\n兩極。它使內部存儲的電力短路\n身體產生噪音。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Electric Tail",
                "fr": "Queue électrique",
                "es": "Cola eléctrica",
                "it": "Coda elettrica",
                "de": "Elektrischer Schwanz",
                "pt-br": "Cauda Elétrica",
                "zh-tw": "電動尾翼"
            },
            damage: 10,
            cost: ["Lightning"],
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, le Pokémon Actif de votre adversaire est désormais Paralysé.",
                "es": "Lanza una moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
                "it": "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario è paralizzato.",
                "de": "Wirf eine Münze. Bei „Kopf“ ist das Aktive Pokémon deines Gegners jetzt gelähmt.",
                "pt-br": "Jogue uma moeda. Se der cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
                "zh-tw": "拋一枚硬幣。如果正面，則對手的活躍神奇寶貝現在處於麻痺狀態。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
