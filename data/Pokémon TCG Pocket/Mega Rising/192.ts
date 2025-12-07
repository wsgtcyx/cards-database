import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Exploud",
        "fr": "Exploser",
        "es": "explotar",
        "it": "Esplodere",
        "de": "Explodieren",
        "pt-br": "Explodir",
        "zh-tw": "爆音怪",
    },
    illustrator: "kawayoo",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Colorless"],
    evolveFrom: {
        en: "Loudred",
        "fr": "Fort",
        "es": "ruidoso",
        "it": "A voce alta",
        "de": "Laut",
        "pt-br": "Alto",
        "zh-tw": "勞德雷德"
    },
    description: {
        en: "This Pokémon can do more than just shout. To\ncommunicate with others of its kind, it'll emit all\nsorts of sounds from the holes in its body.",
        "fr": "Ce Pokémon peut faire bien plus que simplement crier. À\nCommuniquez avec d'autres de son espèce, il émettra tout\nsortes de sons provenant des trous de son corps.",
        "es": "Este Pokémon puede hacer más que solo gritar. a\ncomunicarse con otros de su tipo, emitirá todos\ntipos de sonidos de los agujeros en su cuerpo.",
        "it": "Questo Pokémon può fare molto di più che limitarsi a urlare. A\ncomunica con altri della sua specie, emetterà tutto\ntipi di suoni provenienti dai buchi del suo corpo.",
        "de": "Dieses Pokémon kann mehr als nur schreien. Zu\nWenn man mit anderen seiner Art kommuniziert, wird es alles aussenden\nverschiedene Geräusche aus den Löchern in seinem Körper.",
        "pt-br": "Este Pokémon pode fazer mais do que apenas gritar. Para\nse comunicar com outros de sua espécie, ele emitirá todos\ntipos de sons vindos dos buracos em seu corpo.",
        "zh-tw": "這個神奇寶貝可以做的不僅僅是喊叫。至\n與同類的其他人交流，它會釋放出所有\n各種聲音從它身體上的孔洞中傳出。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Booming Roar",
                "fr": "Rugissement retentissant",
                "es": "Rugido en auge",
                "it": "Ruggito tonante",
                "de": "Dröhnendes Brüllen",
                "pt-br": "Rugido estrondoso",
                "zh-tw": "轟鳴轟鳴"
            },
            damage: 90,
            cost: ["Colorless", "Colorless", "Colorless"],
            effect: {
                en: "During your opponent's next turn, they can't play any Item cards from their hand.",
                "fr": "Lors du prochain tour de votre adversaire, il ne pourra jouer aucune carte Objet de sa main.",
                "es": "Durante el próximo turno de tu oponente, no puede jugar ninguna carta de Objeto de su mano.",
                "it": "Durante il prossimo turno del tuo avversario, questi non potrà giocare alcuna carta Oggetto dalla sua mano.",
                "de": "Während des nächsten Zuges deines Gegners kann er keine Gegenstandskarten aus seiner Hand spielen.",
                "pt-br": "Durante o próximo turno do seu oponente, ele não poderá jogar nenhuma carta de Item da sua mão.",
                "zh-tw": "在對手的下一個回合中，他們不能從手上打出任何物品卡。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 3
};
export default card;
