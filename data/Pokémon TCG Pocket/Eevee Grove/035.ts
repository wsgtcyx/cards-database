import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Mimikyu",
        "fr": "Mimiqui",
        "es": "Mimikyû",
        "it": "Mimikyu",
        "de": "Mimikyu",
        "pt-br": "Mimikyu",
        "zh-tw": "謎擬Ｑ",
    },
    illustrator: "Eri Yamaki",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Psychic"],
    description: {
        en: "This Pokémon lives in dark places untouched by\nsunlight. When it appears before humans, it hides\nitself under a cloth that resembles a Pikachu.",
        "fr": "Ce Pokémon vit dans des endroits sombres, épargnés par\nla lumière du soleil. Lorsqu'il apparaît devant les humains, il se cache\nlui-même sous un tissu qui ressemble à un Pikachu.",
        "es": "Este Pokémon vive en lugares oscuros que no han sido tocados por\nluz del sol. Cuando aparece ante los humanos, se esconde.\ndebajo de una tela que se asemeja a un Pikachu.",
        "it": "Questo Pokémon vive in luoghi oscuri non toccati\nluce solare. Quando appare davanti agli umani, si nasconde\nsotto un panno che ricorda un Pikachu.",
        "de": "Dieses Pokémon lebt an dunklen, unberührten Orten\nSonnenlicht. Wenn es vor den Menschen erscheint, versteckt es sich\nselbst unter einem Tuch, das einem Pikachu ähnelt.",
        "pt-br": "Este Pokémon vive em locais escuros, intocados por\nluz solar. Quando aparece diante dos humanos, esconde\n-se sob um pano que lembra um Pikachu.",
        "zh-tw": "這只神奇寶貝生活在未受污染的黑暗地方\n陽光。當它出現在人類面前時，它卻隱藏起來\n自己被包裹在一塊類似皮卡丘的布下。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Try to Imitate",
                "fr": "Essayez d'imiter",
                "es": "Intenta imitar",
                "it": "Prova a imitare",
                "de": "Versuchen Sie zu imitieren",
                "pt-br": "Tente imitar",
                "zh-tw": "嘗試模仿"
            },
            cost: ["Psychic", "Psychic"],
            effect: {
                en: "Flip a coin. If heads, choose 1 of your opponent's Active Pokémon's attacks and use it as this attack.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, choisissez 1 des attaques du Pokémon Actif de votre adversaire et utilisez-la comme cette attaque.",
                "es": "Lanza una moneda. Si sale cara, elige 1 de los ataques del Pokémon Activo de tu rival y úsalo como este ataque.",
                "it": "Lancia una moneta. Se esce testa, scegli 1 degli attacchi del Pokémon attivo del tuo avversario e usalo come questo attacco.",
                "de": "Wirf eine Münze. Bei „Kopf“ wähle 1 Angriff des Aktiven Pokémon deines Gegners und verwende ihn als diesen Angriff.",
                "pt-br": "Jogue uma moeda. Se sair cara, escolha 1 dos ataques do Pokémon Ativo do seu oponente e use-o como este ataque.",
                "zh-tw": "拋一枚硬幣。如果正面，則選擇對手的1只活躍神奇寶貝的攻擊並將其用作這次攻擊。"
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1
};
export default card;
