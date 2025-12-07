import { Card } from "../../../interfaces";
import Set from "../Genetic Apex";
const card: Card = {
    set: Set,
    name: {
        en: "Ditto",
        fr: "Métamorph",
        es: "Ditto",
        it: "Ditto",
        de: "Ditto",
        'pt-br': "Ditto",
        ko: "메타몽",
        "zh-tw": "同上"
    },
    illustrator: "Jerky",
    category: "Pokemon",
    hp: 70,
    types: ["Colorless"],
    stage: "Basic",
    attacks: [{
            cost: ["Colorless"],
            name: {
                en: "Copy Anything",
                fr: "Copie Tout",
                es: "Copietear",
                it: "Copia Universale",
                de: "Alleskopierer",
                'pt-br': "Cópia Sem Limite",
                ko: "어디서든복사",
                "zh-tw": "複製任何內容"
            },
            effect: {
                en: "Choose 1 of your opponent’s Pokémon’s attacks and use it as this attack. If this Pokémon doesn’t have the necessary Energy to use that attack, this attack does nothing.",
                fr: "Choisissez l'une des attaques des Pokémon de votre adversaire et utilisez-la en tant que cette attaque. Si ce Pokémon n'a pas l'Énergie nécessaire pour utiliser cette attaque, cette attaque ne fait rien.",
                es: "Elige 1 de los ataques de los Pokémon de tu rival y úsalo para este ataque. Si este Pokémon no tiene la Energía necesaria para usar ese ataque, este ataque no hace nada.",
                it: "Scegli un attacco dei Pokémon del tuo avversario e usalo al posto di questo attacco. Se questo Pokémon non ha l'Energia necessaria per quell'attacco, questo attacco non ha effetto.",
                de: "Wähle 1 Attacke der Pokémon deines Gegners und setze sie als diese Attacke ein. Wenn dieses Pokémon nicht die für jene Attacke notwendige Energie hat, hat diese Attacke keine Auswirkungen.",
                'pt-br': "Escolha 1 dos ataques dos Pokémon do seu oponente e use como este ataque. Se este Pokémon não tiver a Energia necessária para atacar, este ataque não fará nada.",
                ko: "상대 필드의 포켓몬이 가지고 있는 기술을 1개 선택해서 이 기술로써 사용한다. 선택한 기술에 필요한 에너지가 이 포켓몬에게 붙어 있지 않으면 이 기술은 실패한다.",
                "zh-tw": "選擇對手寶可夢的1只攻擊，作為這次攻擊。如果該神奇寶貝沒有使用該攻擊所需的能量，則該攻擊不會執行任何操作。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    rarity: "One Star",
    description: {
        en: "Its transformation ability is perfect. However, if made to laugh, it can't maintain its disguise.",
        fr: "Il excelle dans l'art de la métamorphose, mais\nsi on le fait rire, il ne pourra rester déguisé.",
        es: "Su habilidad para transformarse es perfecta,\npero, si se le hace reír, perderá la fuerza\ny no podrá mantenerse transformado.",
        it: "Sa trasformarsi in maniera perfetta, ma se\nlo si fa ridere perde subito il travestimento.",
        de: "Seine Verwandlungskunst ist perfekt. Bringt man\nes jedoch zum Lachen, fliegt seine Tarnung auf.",
        'pt-br': "Sua capacidade de transformação é perfeita.\nNo entanto, se o fizerem rir, ele não poderá\nmanter seu disfarce.",
        ko: "변신은 완벽하지만\n웃는 바람에 힘이 빠지면\n변신이 풀려 버리고 만다.",
        "zh-tw": "其變形能力堪稱完美。然而，如果讓它笑，它就無法保持其偽裝。"
    },
    boosters: ["mewtwo"]
};
export default card;
