import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Drapion",
        "fr": "Drapion",
        "es": "Drapión",
        "it": "Drappo",
        "de": "Drapion",
        "pt-br": "Drapion",
        "zh-tw": "德拉皮翁"
    },
    illustrator: "SATOSHI NAKAI",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Darkness"],
    evolveFrom: {
        en: "Skorupi",
        "fr": "Skorupí",
        "es": "Skorupí",
        "it": "Skorupi",
        "de": "Skorupi",
        "pt-br": "Skorupi",
        "zh-tw": "斯科魯皮"
    },
    description: {
        en: "It's so vicious that it's called the Sand Demon.\nYet when confronted by Hippowdon, Drapion\nkeeps a low profile and will never pick a fight.",
        "fr": "C'est tellement vicieux qu'on l'appelle le Démon des Sables.\nPourtant, confronté à Hippodocus, Drapion\nfait profil bas et ne se battra jamais.",
        "es": "Es tan cruel que se llama Sand Demon.\nSin embargo, cuando se enfrenta a Hippowdon, Drapion\nmantiene un perfil bajo y nunca buscará pelea.",
        "it": "È così feroce che viene chiamato il Demone della Sabbia.\nTuttavia, quando viene affrontato da Hippowdon, Drapion\nmantiene un profilo basso e non litigherà mai.",
        "de": "Er ist so bösartig, dass er Sanddämon genannt wird.\nDoch als er mit Hippowdon konfrontiert wurde, Drapion\nhält sich bedeckt und wird niemals einen Streit beginnen.",
        "pt-br": "É tão cruel que é chamado de Demônio da Areia.\nNo entanto, quando confrontado por Hippowdon, Drapion\nmantém um perfil discreto e nunca vai brigar.",
        "zh-tw": "它的兇惡程度如此之高，以至於被稱為“沙魔”。\n然而，當面對希波頓時，德拉皮恩\n保持低調，絕不會挑釁。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Stun Poison",
                "fr": "Poison étourdissant",
                "es": "Veneno aturdidor",
                "it": "Veleno stordente",
                "de": "Betäubungsgift",
                "pt-br": "Veneno de atordoamento",
                "zh-tw": "眩暈毒藥"
            },
            damage: 50,
            cost: ["Darkness", "Darkness", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned and Paralyzed.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, le Pokémon Actif de votre adversaire est désormais Empoisonné et Paralysé.",
                "es": "Lanza una moneda. Si sale cara, el Pokémon Activo de tu rival ahora estará Envenenado y Paralizado.",
                "it": "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario è avvelenato e paralizzato.",
                "de": "Wirf eine Münze. Bei „Kopf“ ist das Aktive Pokémon deines Gegners jetzt vergiftet und gelähmt.",
                "pt-br": "Jogue uma moeda. Se der cara, o Pokémon Ativo do seu oponente agora está Envenenado e Paralisado.",
                "zh-tw": "拋一枚硬幣。如果正面，對手的活躍神奇寶貝現在中毒並麻痺。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 3
};
export default card;
