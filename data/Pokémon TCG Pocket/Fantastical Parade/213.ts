import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/213",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/213",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/213",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/213",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/213",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/213",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/213",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2/213",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2/213"
    },
    name: {
        en: "Pichu",
        "fr": "Pichu",
        "es": "Pichu",
        "it": "Pichu",
        "de": "Pichu",
        "pt-br": "Pichu",
        "zh-tw": "皮丘",
        ja: "ピチュー",
        ko: "피츄"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 30,
    types: ["Lightning"],
    description: {
        en: "It is unskilled at storing electric power.\nAny kind of shock causes it to discharge\nenergy spontaneously.",
        "fr": "Il n’est pas doué pour stocker l’énergie électrique.\nTout type de choc provoque sa décharge\nl'énergie spontanément.",
        "es": "No está capacitado para almacenar energía eléctrica.\nCualquier tipo de shock hace que se descargue.\nenergía de forma espontánea.",
        "it": "Non è abile nell’immagazzinare energia elettrica.\nQualsiasi tipo di shock ne provoca la scarica\nenergia spontaneamente.",
        "de": "Es ist nicht in der Lage, elektrische Energie zu speichern.\nJede Art von Erschütterung führt zur Entladung\nEnergie spontan.",
        "pt-br": "Não é qualificado para armazenar energia elétrica.\nQualquer tipo de choque faz com que ele descarregue\nenergia espontaneamente.",
        "zh-tw": "它不擅長儲存電力。\n任何形式的衝擊都會導致其放電\n自發的能量。",
        ja: "電気を 溜めこむのが 下手。 なんらかの ショックを 受けると すぐに 放電 してしまう。",
        ko: "전기를 모으는 게 서툴다.\n조금만 충격을 받아도\n금방 방전해 버린다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Crackly Toss",
                "fr": "Lancer crépitant",
                "es": "Lanzamiento crujiente",
                "it": "Lancio scoppiettante",
                "de": "Knisternder Wurf",
                "pt-br": "Lançamento estaladiço",
                "zh-tw": "爆裂拋擲",
                ja: "ぱちぱちトス",
                ko: "파칙파칙토스"
            },
            effect: {
                en: "Take a {L} Energy from your Energy Zone and attach it to 1 of your Benched Basic Pokémon.",
                "fr": "Prenez une Énergie {L} de votre Zone d'Énergie et attachez-la à l'un de vos Pokémon de Base de Banc.",
                "es": "Toma una Energía {L} de tu Zona de Energía y únela a 1 de tus Pokémon Básicos en Banca.",
                "it": "Prendi un'Energia {L} dalla tua Zona Energetica e assegnala a 1 dei tuoi Pokémon Base in panchina.",
                "de": "Nimm eine {L}-Energie aus deiner Energiezone und lege sie an eines deiner Basis-Pokémon auf deiner Bank an.",
                "pt-br": "Pegue uma Energia {L} da sua Zona de Energia e ligue-a a 1 dos seus Pokémon Básicos no Banco.",
                "zh-tw": "從你的能量區取出一個{L}能量並將其附加到你的1只後備基礎神奇寶貝上。",
                ja: "自分のエネルギーゾーンから{L}エネルギーを1個出し、ベンチのたねポケモンにつける。",
                ko: "자신의 에너지존에서 {L}에너지를 1개 내보내 벤치의 기본 포켓몬에게 붙인다."
            }
        }],
    retreat: 0
};
export default card;
