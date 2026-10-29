import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/015",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/015",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/015",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/015",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/015",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/015",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/015"
    },
    name: {
        en: "Ribombee",
        fr: "Rubombelle",
        es: "Ribombee",
        "pt-br": "Ribombee",
        "zh-tw": "蝶結萌虻",
        ja: "アブリボン",
        ko: "에리본",
        it: "Ribombee",
        de: "Bandelby"
    },
    illustrator: "Narumi Sato",
    rarity: "Three Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 70,
    types: [
        "Grass"
    ],
    stage: "Stage1",
    retreat: 1,
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Cutiefly",
        fr: "Bombydou",
        es: "Cutiefly",
        it: "Cutiefly",
        de: "Wommel",
        "pt-br": "Cutiefly",
        "zh-tw": "萌虻",
        ja: "Cutiefly",
        ko: "Cutiefly"
    },
    attacks: [
        {
            name: {
                en: "Bug Buzz",
                fr: "Bourdon",
                es: "Zumbido",
                it: "Ronzio",
                de: "Käfergebrumm",
                "pt-br": "Zumbido de Inseto",
                "zh-tw": "蟲鳴",
                ja: "Bug Buzz",
                ko: "Bug Buzz"
            },
            cost: [
                "Grass"
            ],
            damage: 40
        }
    ],
    abilities: [
        {
            name: {
                en: "Honey Gather",
                fr: "Cherche Miel",
                es: "Recogemiel",
                it: "Mielincetta",
                de: "Honigmaul",
                "pt-br": "Pegar Mel",
                "zh-tw": "採蜜",
                ja: "Honey Gather",
                ko: "Honey Gather"
            },
            effect: {
                en: "Once during your turn, you may use this Ability. Put a Sweet Honey rental card into your hand.",
                fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Ajoutez une carte d'emprunt Miel à votre main.",
                es: "Una vez durante tu turno, puedes usar esta habilidad. Pon 1 carta de préstamo Miel en tu mano.",
                it: "Una sola volta durante il tuo turno, puoi usare questa abilità. Prendi una carta a nolo Miele e aggiungila alle carte che hai in mano.",
                de: "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Nimm 1 Honig-Leihkarte auf deine Hand.",
                "pt-br": "Uma vez durante o seu turno, você poderá usar esta Habilidade. Coloque 1 carta de aluguel Mel Doce na sua mão.",
                "zh-tw": "在自己的回合時,可使用1次。將1張租用卡牌的「甜甜蜜」加入手牌。",
                ja: "Once during your turn, you may use this Ability. Put a Sweet Honey rental card into your hand.",
                ko: "Once during your turn, you may use this Ability. Put a Sweet Honey rental card into your hand."
            },
            type: "Ability"
        }
    ],
    description: {
        en: "Ribombee can sense when people or Pokémon are feeling down, and it will cheer them up with handmade pollen puffs.",
        fr: "S’il perçoit les émotions d’un être humain ou d’un Pokémon déprimé, il lui remonte le moral grâce à une boule de pollen qu’il a confectionnée.",
        es: "Si percibe un ser humano o Pokémon invadido por la desazón, lo insufla ánimos con las bolas de polen que produce.",
        it: "Quando sente che un Pokémon o un essere umano è triste, lo rincuora con le sfere di polline che produce.",
        de: "Wenn es die Gefühle niedergeschlagener Menschen oder Pokémon wahrnimmt, heitert es sie mit selbstgemachten Pollenkugeln auf.",
        "pt-br": "Ribombee consegue perceber quando pessoas ou Pokémon estão deprimidos e os anima com bolas de pólen feitas à mão.",
        "zh-tw": "只要感覺到人類或寶可夢沮喪的情緒，就會送上自製的花粉團來為其打氣。",
        ja: "Ribombee can sense when people or Pokémon are feeling down, and it will cheer them up with handmade pollen puffs.",
        ko: "Ribombee can sense when people or Pokémon are feeling down, and it will cheer them up with handmade pollen puffs."
    }
};

export default card;
