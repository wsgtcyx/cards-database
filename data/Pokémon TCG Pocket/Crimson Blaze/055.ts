import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Ditto",
        "fr": "Idem",
        "es": "Ídem",
        "it": "Idem",
        "de": "Dito",
        "pt-br": "Idem",
        "zh-tw": "百變怪"
    },
    illustrator: "Yuka Morii",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    description: {
        en: "It can freely recombine its own cellular structure\nto transform into other life-forms.",
        "fr": "Il peut librement recombiner sa propre structure cellulaire\nse transformer en d’autres formes de vie.",
        "es": "Puede recombinar libremente su propia estructura celular.\ntransformarse en otras formas de vida.",
        "it": "Può ricombinare liberamente la propria struttura cellulare\ntrasformarsi in altre forme di vita.",
        "de": "Es kann seine eigene Zellstruktur frei neu kombinieren\nin andere Lebensformen verwandeln.",
        "pt-br": "Ele pode recombinar livremente sua própria estrutura celular\npara se transformar em outras formas de vida.",
        "zh-tw": "它可以自由重組自身的細胞結構\n轉變為其他生命形式。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Copy a Friend",
                "fr": "Copier un ami",
                "es": "Copiar a un amigo",
                "it": "Copia un amico",
                "de": "Einen Freund kopieren",
                "pt-br": "Copiar um amigo",
                "zh-tw": "複製好友"
            },
            cost: ["Colorless"],
            effect: {
                en: "Choose 1 of your Benched Pokémon's attacks, except any Pokémon ex, and use it as this attack. If this Pokémon doesn't have the necessary Energy to use that attack, this attack does nothing.",
                "fr": "Choisissez 1 des attaques de votre Pokémon de Banc, à l'exception des ex-Pokémon, et utilisez-la comme cette attaque. Si ce Pokémon n'a pas l'Énergie nécessaire pour utiliser cette attaque, cette attaque ne fait rien.",
                "es": "Elige 1 de los ataques de tus Pokémon en Banca, excepto cualquier Pokémon ex, y úsalo como este ataque. Si este Pokémon no tiene la Energía necesaria para usar ese ataque, este ataque no hace nada.",
                "it": "Scegli 1 degli attacchi dei tuoi Pokémon in panchina, eccetto qualsiasi Pokémon ex, e usalo come questo attacco. Se questo Pokémon non ha l'Energia necessaria per usare quell'attacco, questo attacco non ha alcun effetto.",
                "de": "Wähle 1 Angriff deines Bank-Pokémon, außer einem beliebigen Pokémon-Ex, und verwende es als diesen Angriff. Wenn dieses Pokémon nicht über die nötige Energie verfügt, um diesen Angriff auszuführen, hat dieser Angriff keine Wirkung.",
                "pt-br": "Escolha 1 dos ataques do seu Pokémon no Banco, exceto qualquer Pokémon ex, e use-o como este ataque. Se este Pokémon não tiver a Energia necessária para usar aquele ataque, este ataque não fará nada.",
                "zh-tw": "選擇你後備神奇寶貝的 1 個攻擊（除了任何前神奇寶貝），並將其用作此攻擊。如果該神奇寶貝沒有使用該攻擊所需的能量，則該攻擊不會執行任何操作。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
