import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/051",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/051",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/051",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/051",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/051",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/051",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/051"
    },
    name: {
        en: "Gholdengo",
        fr: "Gromago",
        es: "Gholdengo",
        it: "Gholdengo",
        de: "Monetigo",
        "pt-br": "Gholdengo",
        "zh-tw": "賽富豪",
        ko: "타부자고",
        ja: "サーフゴー"
    },
    illustrator: "Natsumi Yoshida",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Metal"],
    dexId: [1000],
    evolveFrom: {
        en: "Gimmighoul",
        fr: "Mordudor",
        es: "Gimmighoul",
        it: "Gimmighoul",
        de: "Gierspenst",
        "pt-br": "Gimmighoul",
        "zh-tw": "索財靈",
        ko: "모으령",
        ja: "コレクレー"
    },
    stage: "Stage1",
    description: {
        en: "It has a sturdy body made up of stacked coins. Gholdengo overwhelms its enemies by firing coin after coin at them in quick succession.",
        fr: "Son corps robuste est composé de pièces empilées. Il accable ses adversaires en leur lançant des rafales de pièces.",
        es: "Su cuerpo está compuesto de monedas unidas entre sí, por lo que es muy resistente. Abruma a sus enemigos disparándolas en ráfagas.",
        it: "Il suo corpo, formato da pile di monete, è molto robusto. Annienta i nemici lanciando raffiche di monete.",
        de: "Sein robuster Körper besteht aus gestapelten Münzen, die es in rascher Folge auf Feinde schießt, um sie zu überwältigen.",
        "pt-br": "Tem um corpo robusto feito de moedas empilhadas. Gholdengo atordoa seus inimigos ao disparar moedas freneticamente contra eles.",
        "zh-tw": "堆疊硬幣而形成的身體結實堅固。會連續發射硬幣來壓制敵人。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Luxury Coin",
                fr: "Pièce Scintillante",
                es: "Moneda Resplandeciente",
                it: "Moneta Pregiata",
                de: "Luxusmünze",
                "pt-br": "Moeda Luxuosa",
                "zh-tw": "輝煌金幣"
            },
            effect: {
                en: "Once during your turn, when you flip any coins for an effect of your Trainer cards, you may ignore all results of those coin flips and begin flipping those coins again. You can't use more than 1 Luxury Coin Ability each turn.",
                fr: "Une fois pendant votre tour, après avoir lancé des pièces pour l'effet d'une de vos cartes Dresseur, vous pouvez ignorer les résultats de ces lancers de pièces et lancer ces pièces à nouveau. Vous ne pouvez utiliser qu'un talent Pièce Scintillante par tour.",
                es: "Una vez durante tu turno, al lanzar las monedas para un efecto de tus cartas de Entrenador, puedes ignorar todos los resultados de esos lanzamientos de monedas y lanzar esas monedas de nuevo. No puedes usar más de 1 habilidad Moneda Resplandeciente en cada turno.",
                it: "Una sola volta durante il tuo turno, dopo aver lanciato la moneta tutte le volte richieste da un effetto delle tue carte Allenatore, puoi ignorare tutti i risultati di quei lanci e lanciare nuovamente la moneta. Puoi usare l'abilità Moneta Pregiata solo una volta per turno.",
                de: "Einmal während deines Zuges, nachdem du Münzen für einen Effekt von 1 deiner Trainerkarten geworfen hast, kannst du alle daraus resultierenden Effekte ignorieren und die Münzen erneut werfen. Du kannst die Fähigkeit Luxusmünze nur einmal pro Zug einsetzen.",
                "pt-br": "Uma vez durante o seu turno, quando você jogar moedas para um efeito de suas cartas de Treinador, você poderá ignorar todos os resultados das moedas e jogá‐las novamente. Você não pode usar mais de 1 Habilidade Moeda Luxuosa por turno.",
                "zh-tw": "在自己的回合,因自己的訓練家卡的效果而擲硬幣時,可使用1次。將擲硬幣的結果全部消除,重新擲硬幣。在使用了其他的「輝煌金幣」的回合,這個特性無法使用。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Power Gem",
                fr: "Rayon Gemme",
                es: "Joya de Luz",
                it: "Gemmoforza",
                de: "Juwelenkraft",
                "pt-br": "Gema Poderosa",
                "zh-tw": "力量寶石"
            },
            damage: 50
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
