import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Delcatty",
        "fr": "Delcatty",
        "es": "Delcatty",
        "it": "Delcatty",
        "de": "Delcatty",
        "pt-br": "Delcatty",
        "zh-tw": "德爾卡蒂"
    },
    illustrator: "Sekio",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Colorless"],
    evolveFrom: {
        en: "Skitty",
        "fr": "Minou",
        "es": "Skitty",
        "it": "Skitty",
        "de": "Skitty",
        "pt-br": "Skitty",
        "zh-tw": "斯基蒂"
    },
    description: {
        en: "It is highly popular among female Trainers for its\nsublime fur. It does not keep a nest.",
        "fr": "Il est très populaire parmi les dresseuses pour son\nfourrure sublime. Il ne garde pas de nid.",
        "es": "Es muy popular entre las entrenadoras por su\npelaje sublime. No guarda nido.",
        "it": "È molto popolare tra le Allenatrici per il suo\npelliccia sublime. Non mantiene il nido.",
        "de": "Es erfreut sich bei weiblichen Trainern großer Beliebtheit\nerhabenes Fell. Es hält kein Nest.",
        "pt-br": "É muito popular entre as treinadoras por seu\npele sublime. Não mantém ninho.",
        "zh-tw": "由於它的特點，深受女性訓練師的歡迎\n高貴的皮毛。它不築巢。"
    },
    stage: "Stage1",
    abilities: [{
            type: "Ability",
            name: {
                en: "Search for Friends",
                "fr": "Rechercher des amis",
                "es": "buscar amigos",
                "it": "Cerca amici",
                "de": "Suche nach Freunden",
                "pt-br": "Procure por amigos",
                "zh-tw": "尋找朋友"
            },
            effect: {
                en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may put a Supporter card from your discard pile into your hand.",
                "fr": "Une fois pendant votre tour, lorsque vous jouez ce Pokémon depuis votre main pour faire évoluer 1 de vos Pokémon, vous pouvez mettre une carte Supporter de votre défausse dans votre main.",
                "es": "Una vez durante tu turno, cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes poner una carta de Partidario de tu pila de descartes en tu mano.",
                "it": "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere 1 dei tuoi Pokémon, puoi aggiungere alla tua mano una carta Aiuto dalla tua pila degli scarti.",
                "de": "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du eine Unterstützerkarte von deinem Ablagestapel auf deine Hand nehmen.",
                "pt-br": "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá colocar uma carta de Apoiador da sua pilha de descarte na sua mão.",
                "zh-tw": "在你的回合中，當你從手牌中使用這只神奇寶貝來進化你的一隻神奇寶貝時，你可以將棄牌堆中的一張支持者卡放入你的手牌。"
            }
        }],
    attacks: [{
            name: {
                en: "Cat Kick",
                "fr": "Coup de pied de chat",
                "es": "patada de gato",
                "it": "Calcio di gatto",
                "de": "Katzentritt",
                "pt-br": "Chute de gato",
                "zh-tw": "貓踢"
            },
            damage: 40,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
