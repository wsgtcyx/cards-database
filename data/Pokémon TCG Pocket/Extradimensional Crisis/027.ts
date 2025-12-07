import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Shiinotic",
        "fr": "Shiinotique",
        "es": "shiinótico",
        "it": "Shiinotico",
        "de": "Shiinotisch",
        "pt-br": "Shiinótico",
        "zh-tw": "燈罩夜菇",
    },
    illustrator: "kawayoo",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Psychic"],
    evolveFrom: {
        en: "Morelull",
        "fr": "Morelull",
        "es": "Morelull",
        "it": "Morelull",
        "de": "Morelull",
        "pt-br": "Morelull",
        "zh-tw": "睡睡菇",
    },
    description: {
        en: "Its flickering spores lure in prey and put them to\nsleep. Once this Pokémon has its prey snoozing,\nit drains their vitality with its fingertips.",
        "fr": "Ses spores vacillantes attirent les proies et les mettent en danger.\ndormir. Une fois que ce Pokémon a fait dormir sa proie,\nil draine leur vitalité du bout des doigts.",
        "es": "Sus esporas parpadeantes atraen a sus presas y las ponen en peligro.\ndormir. Una vez que este Pokémon tenga a su presa dormitando,\nles drena la vitalidad con las yemas de los dedos.",
        "it": "Le sue spore tremolanti attirano le prede e le attirano\ndormire. Una volta che questo Pokémon ha fatto sonnecchiare la preda,\nprosciuga la loro vitalità con la punta delle dita.",
        "de": "Seine flackernden Sporen locken Beute an und vertreiben sie\nschlafen. Sobald die Beute dieses Pokémon schläft,\nes entzieht ihnen mit seinen Fingerspitzen ihre Lebenskraft.",
        "pt-br": "Seus esporos tremeluzentes atraem as presas e as colocam para\ndormir. Assim que este Pokémon tiver sua presa cochilando,\ndrena sua vitalidade com as pontas dos dedos.",
        "zh-tw": "它閃爍的孢子引誘獵物並將其置於死地\n睡覺。一旦這只神奇寶貝的獵物打瞌睡，\n它用指尖耗盡他們的生命力。"
    },
    stage: "Stage1",
    abilities: [{
            type: "Ability",
            name: {
                en: "Illuminate",
                "fr": "Éclairer",
                "es": "Iluminar",
                "it": "Illuminare",
                "de": "Beleuchten",
                "pt-br": "Iluminar",
                "zh-tw": "照亮"
            },
            effect: {
                en: "Once during your turn, you may put a random Pokémon from your deck into your hand.",
                "fr": "Une fois pendant votre tour, vous pouvez mettre un Pokémon aléatoire de votre deck dans votre main.",
                "es": "Una vez durante tu turno, puedes poner un Pokémon aleatorio de tu mazo en tu mano.",
                "it": "Una sola volta durante il tuo turno, puoi mettere nella tua mano un Pokémon casuale dal tuo mazzo.",
                "de": "Einmal während deines Zuges darfst du ein zufälliges Pokémon aus deinem Deck auf deine Hand nehmen.",
                "pt-br": "Uma vez durante o seu turno, você pode colocar um Pokémon aleatório do seu baralho na sua mão.",
                "zh-tw": "在你的回合中，你可以從你的牌組中隨機將一隻神奇寶貝放入你的手牌。"
            }
        }],
    attacks: [{
            name: {
                en: "Gentle Slap",
                "fr": "Gifle douce",
                "es": "Bofetada suave",
                "it": "Schiaffo gentile",
                "de": "Sanfter Schlag",
                "pt-br": "Tapa suave",
                "zh-tw": "輕輕一巴掌"
            },
            damage: 40,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 2
};
export default card;
