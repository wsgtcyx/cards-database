import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/355",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/355",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/355",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/355",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/355",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/355",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/355"
    },
    name: {
        en: "Delcatty",
        fr: "Delcatty",
        es: "Delcatty",
        it: "Delcatty",
        de: "Enekoro",
        "pt-br": "Delcatty",
        "zh-tw": "優雅貓",
        ja: "エネコロロ",
        ko: "델케티"
    },
    illustrator: "Sekio",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 80,
    types: [
        "Colorless"
    ],
    evolveFrom: {
        en: "Skitty",
        fr: "Skitty",
        es: "Skitty",
        it: "Skitty",
        de: "Eneco",
        "pt-br": "Skitty",
        "zh-tw": "向尾喵",
        ja: "Skitty",
        ko: "Skitty"
    },
    description: {
        en: "It is highly popular among female Trainers for its\nsublime fur. It does not keep a nest.",
        fr: "Les femmes Dresseurs raffolent de sa sublime fourrure. Il ne possède pas de nid.",
        es: "Tiene mucho éxito entre las Entrenadoras por su suave pelaje. No vive en un sitio fijo.",
        it: "Ha successo fra gli Allenatori di sesso femminile per la sua bellissima pelliccia. Non ha una tana fissa.",
        de: "Dieses Pokémon ist bei weiblichen Trainern aufgrund seines Fells beliebt.",
        "pt-br": "É muito popular entre Treinadoras por causa do seu pelo sublime. Não faz ninho.",
        "zh-tw": "有著美麗的毛髮，非常受女性訓練家的歡迎。沒有固定的住所。",
        ja: "It is highly popular among female Trainers for its\nsublime fur. It does not keep a nest.",
        ko: "It is highly popular among female Trainers for its\nsublime fur. It does not keep a nest."
    },
    stage: "Stage1",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Search for Friends",
                fr: "En Quête d'Amis",
                es: "Rastreo de Amigos",
                it: "Richiama Amici",
                de: "Suche nach Freunden",
                "pt-br": "Buscar Amigos",
                "zh-tw": "朋友搜索",
                ja: "Search for Friends",
                ko: "Search for Friends"
            },
            effect: {
                en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may put a Supporter card from your discard pile into your hand.",
                fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer un de vos Pokémon, vous pouvez placer une carte Supporter de votre pile de défausse dans votre main.",
                es: "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon, puedes poner 1 carta de Partidario de tu pila de descartes en tu mano.",
                it: "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi prendere una carta Aiuto dalla tua pila degli scarti e aggiungerla alle carte che hai in mano.",
                de: "Einmal während deines Zuges, wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du 1 Unterstützerkarte aus deinem Ablagestapel auf deine Hand nehmen.",
                "pt-br": "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá colocar 1 carta de Apoiador da sua pilha de descarte na sua mão.",
                "zh-tw": "在自己的回合,當從手牌使出這張卡並完成進化時,可使用1次。從自己的棄牌區選擇1張支援者卡,加入手牌。",
                ja: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may put a Supporter card from your discard pile into your hand.",
                ko: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may put a Supporter card from your discard pile into your hand."
            }
        }
    ],
    attacks: [
        {
            name: {
                en: "Cat Kick",
                fr: "Coup d'Patte",
                es: "Patada Gato",
                it: "Calciogatto",
                de: "Katzenkick",
                "pt-br": "Chute do Gato",
                "zh-tw": "喵踢",
                ja: "Cat Kick",
                ko: "Cat Kick"
            },
            damage: 40,
            cost: [
                "Colorless",
                "Colorless"
            ]
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
