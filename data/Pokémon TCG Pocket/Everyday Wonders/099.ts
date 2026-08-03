import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/099",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/099",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/099",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/099",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/099",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/099",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3b/099"
    },
    name: {
        en: "Ditto",
        fr: "Métamorph",
        es: "Ditto",
        it: "Ditto",
        de: "Ditto",
        "pt-br": "Ditto",
        "zh-tw": "百變怪",
        ko: "메타몽",
        ja: "メタモン"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    dexId: [132],
    stage: "Basic",
    description: {
        en: "It can freely recombine its own cellular structure to transform into other life-forms.",
        fr: "Métamorph peut modifier sa structure cellulaire à\nsa guise pour se transformer en n’importe quelle\nforme vivante.",
        es: "Tiene la capacidad de reorganizar su estructura celular\npara convertirse en otras formas de vida.",
        it: "Può ricombinare a piacere la propria struttura\ncellulare per trasformarsi in altri esseri viventi.",
        de: "Es kann seine eigene Zellstruktur frei zusammensetzen\nund sich in jede andere Lebensform verwandeln.",
        "pt-br": "Ele pode recombinar livremente sua própria estrutura celular para se transformar em outras formas de vida.",
        "zh-tw": "它可以自由重組自身的細胞結構，轉化為其他生命形式。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Copy a Friend",
                fr: "Copitage",
                es: "Copia Aliada",
                it: "Copiamico",
                de: "Freund imitieren",
                "pt-br": "Copiar um Amigo",
                "zh-tw": "朋友複製"
            },
            effect: {
                en: "Choose 1 of your Benched Pokémon's attacks, except any Pokémon ex, and use it as this attack. If this Pokémon doesn't have the necessary Energy to use that attack, this attack does nothing.",
                fr: "Choisissez 1 des attaques de votre Pokémon de Banc, à l'exception des ex-Pokémon, et utilisez-la comme cette attaque. Si ce Pokémon n'a pas l'Énergie nécessaire pour utiliser cette attaque, cette attaque ne fait rien.",
                es: "Elige 1 de los ataques de tus Pokémon en Banca, excepto cualquier Pokémon ex, y úsalo como este ataque. Si este Pokémon no tiene la Energía necesaria para usar ese ataque, este ataque no hace nada.",
                it: "Scegli 1 degli attacchi dei tuoi Pokémon in panchina, eccetto qualsiasi Pokémon ex, e usalo come questo attacco. Se questo Pokémon non ha l'Energia necessaria per usare quell'attacco, questo attacco non ha alcun effetto.",
                de: "Wähle 1 Angriff deines Bank-Pokémon, außer einem beliebigen Pokémon-Ex, und verwende es als diesen Angriff. Wenn dieses Pokémon nicht über die nötige Energie verfügt, um diesen Angriff auszuführen, hat dieser Angriff keine Wirkung.",
                "pt-br": "Escolha 1 dos ataques do seu Pokémon no Banco, exceto qualquer Pokémon ex, e use-o como este ataque. Se este Pokémon não tiver a Energia necessária para usar aquele ataque, este ataque não fará nada.",
                "zh-tw": "選擇你後備寶可夢的 1 個攻擊（除了任何前寶可夢），並將其用作此攻擊。如果該寶可夢沒有使用該攻擊所需的能量，則該攻擊不會執行任何操作。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
