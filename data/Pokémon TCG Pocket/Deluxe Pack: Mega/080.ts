import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/080",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/080",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/080",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/080",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/080",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/080",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/080",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4b/080",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4b/080"
    },
    name: {
        en: "Baxcalibur",
        fr: "Glaivodo",
        es: "Baxcalibur",
        it: "Baxcalibur",
        de: "Espinodon",
        "pt-br": "Baxcalibur",
        "zh-tw": "戟脊龍",
        ja: "セグレイブ",
        ko: "드닐레이브"
    },
    illustrator: "Oswaldo KATO",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 140,
    types: [
        "Water"
    ],
    dexId: [
        998
    ],
    evolveFrom: {
        en: "Arctibax",
        fr: "Cryodo",
        es: "Arctibax",
        it: "Arctibax",
        de: "Cryospino",
        "pt-br": "Arctibax",
        "zh-tw": "凍脊龍",
        ja: "セゴール",
        ko: "드니꽁"
    },
    description: {
        en: "It launches itself into battle by flipping upside down and spewing frigid air from its mouth. It finishes opponents off with its dorsal blade.",
        fr: "Il se met tête en bas et crache de l'air glacé pour se propulser dans les airs et charger ses ennemis, qu'il élimine avec sa crête dorsale acérée.",
        es: "Se coloca boca abajo y se propulsa con su aliento gélido para cargar contra sus rivales, a los que remata con la hoja de su placa dorsal.",
        it: "Si mette a testa in giù e soffia un vento gelido dalla bocca per spingersi contro il nemico e trafiggerlo con la lama della sua cresta dorsale.",
        de: "Es stürzt sich kopfüber in den Kampf, indem es eisigen Atem aus dem Maul stößt. Mit seiner Rückenflossenklinge erledigt es Feinde.",
        "pt-br": "Parte para a batalha saltando de cabeça para baixo e exalando ar frio pela boca. Acaba com seus oponentes com sua lâmina dorsal.",
        "zh-tw": "會倒轉身體並從口中吐出冷氣，然後利用其推力朝敵人猛衝，以背鰭的劍給予致命一擊。",
        ja: "逆さまになり 口から 冷気を 吹きだす 力で 突進。 背びれの剣で 敵を 仕留める。",
        ko: "물구나무선 채 입으로 냉기를 뿜어내서\n그 추진력으로 돌진하고는\n등지느러미의 검으로 적을 처치한다."
    },
    stage: "Stage2",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Ice Maker",
                fr: "Création de Glace",
                es: "Criogenia",
                it: "Criogenesi",
                de: "Eismacher",
                "pt-br": "Criador Criogênico",
                "zh-tw": "製冰者",
                ja: "アイスメーカー",
                ko: "아이스 메이커"
            },
            effect: {
                en: "Once during your turn, you may take a {W} Energy from your Energy Zone and attach it to the {W} Pokémon in the Active Spot.",
                fr: "Une fois pendant votre tour, vous pouvez prendre une Énergie {W} de votre zone Énergie et l'attacher au Pokémon {W} sur le Poste Actif.",
                es: "Una vez durante tu turno, puedes unir 1 Energía {W} de tu área de Energía al Pokémon {W} en el Puesto Activo.",
                it: "Una sola volta durante il tuo turno, puoi prendere un'Energia {W} dalla tua Zona Energia e assegnarla al Pokémon {W} in posizione attiva.",
                de: "Einmal während deines Zuges kannst du 1 {W}-Energie aus deinem Energiebereich an dein Aktives {W}-Pokémon anlegen.",
                "pt-br": "Uma vez durante o seu turno, você poderá pegar 1 Energia {W} da sua Zona de Energia e ligá-la ao Pokémon {W} no Campo Ativo.",
                "zh-tw": "在自己的回合時,可使用1次。從自己的能量區抽出1個{W}能量,附於戰鬥場的{W}寶可夢身上。",
                ja: "自分の番に1回使える。自分のエネルギーゾーンから{W}エネルギーを1個出し、バトル場の{W}ポケモンにつける。",
                ko: "자신의 차례에 1번 사용할 수 있다. 자신의 에너지존에서 {W}에너지를 1개 내보내 배틀필드의 {W}포켓몬에게 붙인다."
            }
        }
    ],
    attacks: [
        {
            name: {
                en: "Buster Tail",
                fr: "Queue Destructrice",
                es: "Cola Destructora",
                it: "Coda Distruttrice",
                de: "Zertrümmernder Schweif",
                "pt-br": "Cauda Aniquiladora",
                "zh-tw": "光炮尾",
                pt: "Cauda Aniquiladora",
                ja: "バスターテール",
                ko: "버스터테일"
            },
            damage: 90,
            cost: [
                "Water",
                "Water",
                "Water"
            ]
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
