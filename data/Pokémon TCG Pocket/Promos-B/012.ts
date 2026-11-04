import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/012/8d2155c7d85c596e",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/012/8d2155c7d85c596e",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/012/8d2155c7d85c596e",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/012/8d2155c7d85c596e",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/012/8d2155c7d85c596e",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/012/8d2155c7d85c596e",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/012/8d2155c7d85c596e",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/012/8d2155c7d85c596e",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/012/8d2155c7d85c596e"
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
    illustrator: "buchi",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    dexId: [132],
    stage: "Basic",
    description: {
        en: "It can freely recombine its own cellular structure to transform into other life-forms.",
        fr: "Métamorph peut modifier sa structure cellulaire à sa guise pour se transformer en n'importe quelle forme de vie.",
        es: "Tiene la capacidad de reorganizar su estructura celular\npara convertirse en otras formas de vida.",
        it: "Può ricombinare a piacere la propria struttura cellulare per trasformarsi in altre forme di vita.",
        de: "Es kann seine eigene Zellstruktur frei zusammensetzen\nund sich in jede andere Lebensform verwandeln.",
        "pt-br": "É capaz de recombinar sua própria estrutura celular para se transformar em outras formas de vida.",
        "zh-tw": "將自己體內細胞的結構改變，變身成其他的生命體。",
        ja: "体の 細胞の 作りを 自分で 組み替えて ほかの 生命体に 変身する。",
        ko: "몸의 세포 구성을\n스스로 바꿔서\n다른 생명체로 변신한다."
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
                "zh-tw": "朋友複製",
                ja: "ともだちコピー",
                ko: "친구복사"
            },
            effect: {
                en: "Choose 1 of your Benched Pokémon's attacks, except any Pokémon ex, and use it as this attack. If this Pokémon doesn't have the necessary Energy to use that attack, this attack does nothing.",
                fr: "Choisissez une des attaques d'un de vos Pokémon de Banc, à l'exception des Pokémon‐ex, et utilisez‐la en tant que cette attaque. Si ce Pokémon n'a pas l'Énergie nécessaire pour utiliser cette attaque, cette attaque ne fait rien.",
                es: "Elige 1 de los ataques de tus Pokémon en Banca, excepto cualquier Pokémon ex, y úsalo para este ataque. Si este Pokémon no tiene la Energía necesaria para usar ese ataque, este ataque no hace nada.",
                it: "Scegli un attacco dei tuoi Pokémon in panchina, a eccezione di qualsiasi Pokémon-ex, e usalo al posto di questo attacco. Se questo Pokémon non ha l’Energia necessaria per quell’attacco, l’attacco non ha effetto.",
                de: "Wähle 1 Attacke der Pokémon auf deiner Bank, außer Pokémon-ex, und setze sie als diese Attacke ein. Wenn dieses Pokémon nicht die für jene Attacke notwendige Energie hat, hat diese Attacke keine Auswirkungen.",
                "pt-br": "Escolha 1 dos ataques dos seus Pokémon no Banco, exceto por quaisquer Pokémon ex, e use como este ataque. Se este Pokémon não tiver a Energia necessária para usar aquele ataque, este ataque não fará nada.",
                "zh-tw": "選擇1個自己的備戰寶可夢(「寶可夢ex」除外)持有的招式,作為這個招式使用。若所選招式所需的能量沒有附於這隻寶可夢身上,則這個招式失敗。",
                ja: "自分のベンチポケモン(「ポケモンex」をのぞく)が持つワザを1つ選び、このワザとして使う。選んだワザに必要なエネルギーがこのポケモンについていなければ、このワザは失敗。",
                ko: "자신의 벤치 포켓몬(「포켓몬ex」는 제외)이 가진 기술을 1개 선택해서 이 기술로써 사용한다. 선택한 기술에 필요한 에너지가 이 포켓몬에게 붙어 있지 않으면 이 기술은 실패한다."
            }
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: []
};

export default card;
