import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/050",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/050",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/050",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/050",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/050",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/050",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/050"
    },
    name: {
        en: "Raichu",
        fr: "Raichu",
        es: "Raichu",
        it: "Raichu",
        de: "Raichu",
        "pt-br": "Raichu",
        "zh-tw": "雷丘",
        ko: "라이츄",
        ja: "ライチュウ"
    },
    illustrator: "GIDORA",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Lightning"],
    dexId: [26],
    evolveFrom: {
        en: "Pikachu",
        fr: "Pikachu",
        es: "Pikachu",
        it: "Pikachu",
        de: "Pikachu",
        "pt-br": "Pikachu",
        "zh-tw": "皮卡丘",
        ko: "피카츄",
        ja: "ピカチュウ"
    },
    stage: "Stage1",
    description: {
        en: "If the electric pouches in its cheeks become fully charged, both ears will stand straight up.",
        fr: "Si les poches électriques dans ses joues sont complètement chargées, les deux oreilles se redresseront.",
        es: "Si las bolsas eléctricas de sus mejillas se cargan por completo, ambas orejas se levantarán.",
        it: "Se le tasche elettriche sulle sue guance si caricano completamente, entrambe le orecchie rimarranno dritte.",
        de: "Wenn die elektrischen Beutel in seinen Wangen vollständig aufgeladen sind, stellen sich beide Ohren gerade auf.",
        "pt-br": "Se as bolsas elétricas em suas bochechas ficarem totalmente carregadas, ambas as orelhas ficarão retas.",
        "zh-tw": "如果臉頰上的電袋充滿電，兩隻耳朵就會直立起來。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Evoshock",
                fr: "Choc Évolutif",
                es: "Evoimpacto",
                "pt-br": "Evochoque",
                "zh-tw": "進化衝擊"
            },
            effect: {
                en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
                fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer un de vos Pokémon, vous pouvez lancer une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
                es: "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon, puedes lanzar 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
                "pt-br": "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá jogar uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
                "zh-tw": "在自己的回合,當從手牌使出這張卡並完成進化時,可使用1次。擲1次硬幣若為正面,則將對手的戰鬥寶可夢麻痺。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Lightning", "Colorless"],
            name: {
                en: "Electro Ball",
                fr: "Boule Élek",
                es: "Bola Voltio",
                it: "Energisfera",
                de: "Elektroball",
                "pt-br": "Bola Elétrica",
                "zh-tw": "電球"
            },
            damage: 50
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
