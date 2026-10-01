import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/164",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/164",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/164",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/164",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/164",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/164",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/164"
    },
    name: {
        en: "Aegislash",
        fr: "Exagide",
        es: "Aegislash",
        it: "Aegislash",
        de: "Durengard",
        "pt-br": "Aegislash",
        "zh-tw": "堅盾劍怪",
        ja: "ギルガルド",
        ko: "킬가르도"
    },
    illustrator: "miki kudo",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 140,
    types: [
        "Metal"
    ],
    evolveFrom: {
        en: "Doublade",
        fr: "Dimoclès",
        es: "Doublade",
        it: "Doublade",
        de: "Duokles",
        "pt-br": "Doublade",
        "zh-tw": "雙劍鞘",
        ja: "Doublade",
        ko: "Doublade"
    },
    description: {
        en: "Once upon a time, a king with an Aegislash\nreigned over the land. His Pokémon eventually\ndrained him of life, and his kingdom fell with him.",
        fr: "Un roi régnait jadis, un Exagide à ses côtés. L'absorption de l'énergie vitale du souverain causa sa perte, ainsi que celle de son royaume.",
        es: "Antiguamente, un rey logró conquistar un país con la ayuda de este Pokémon, pero le costó la vida y condenó su nación a la ruina.",
        it: "In passato, un re conquistò un paese affiancato da un Aegislash, ma la sua energia vitale venne assorbita e il regno cadde in rovina.",
        de: "Einst regierte ein König mit einem Durengard an seiner Seite. Er und sein Königreich fielen jedoch, als ihm das Pokémon die Lebensenergie entzog.",
        "pt-br": "Era uma vez um monarca que reinou sobre as terras com seu Aegislash. Por fim, o Pokémon drenou a vida do rei, e seu reino ruiu junto com ele.",
        "zh-tw": "雖然帶著堅盾劍怪的國王曾經支配了整個國家，最後卻被牠吸走了精氣，國家也滅亡了。",
        ja: "Once upon a time, a king with an Aegislash\nreigned over the land. His Pokémon eventually\ndrained him of life, and his kingdom fell with him.",
        ko: "Once upon a time, a king with an Aegislash\nreigned over the land. His Pokémon eventually\ndrained him of life, and his kingdom fell with him."
    },
    stage: "Stage2",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Cursed Metal",
                fr: "Métal Maudit",
                es: "Metal Maldito",
                it: "Metallo Funesto",
                de: "Verfluchtes Metall",
                "pt-br": "Metal Amaldiçoado",
                "zh-tw": "咒詛金屬",
                ja: "Cursed Metal",
                ko: "Cursed Metal"
            },
            effect: {
                en: "Attacks used by your {P} Pokémon and {M} Pokémon do +30 damage to your opponent's Active Pokémon.",
                fr: "Les attaques de vos Pokémon {P} et {M} infligent + 30 dégâts au Pokémon Actif de votre adversaire.",
                es: "Los ataques de tus Pokémon {P} y Pokémon {M} hacen +30 puntos de daño al Pokémon Activo de tu rival.",
                it: "Gli attacchi usati dai tuoi Pokémon {P} e {M} infliggono +30 danni al Pokémon attivo del tuo avversario.",
                de: "Die Attacken deiner {P}-Pokémon und {M}-Pokémon fügen dem Aktiven Pokémon deines Gegners +30 Schadenspunkte zu.",
                "pt-br": "Os ataques usados pelos seus Pokémon {P} e Pokémon {M} causam +30 pontos de dano ao Pokémon Ativo do seu oponente.",
                "zh-tw": "只要這隻寶可夢在場上,自己的{P}或者{M}寶可夢使用的招式,對對手的戰鬥寶可夢造成的傷害+30點。",
                ja: "Attacks used by your {P} Pokémon and {M} Pokémon do +30 damage to your opponent's Active Pokémon.",
                ko: "Attacks used by your {P} Pokémon and {M} Pokémon do +30 damage to your opponent's Active Pokémon."
            }
        }
    ],
    attacks: [
        {
            name: {
                en: "Slicing Blade",
                fr: "Lame Tranchante",
                es: "Cuchilla Cortante",
                it: "Affettalama",
                de: "Schwertschneide",
                "pt-br": "Lâmina Fatiante",
                "zh-tw": "利刃切割",
                ja: "Slicing Blade",
                ko: "Slicing Blade"
            },
            damage: 70,
            cost: [
                "Metal",
                "Colorless",
                "Colorless"
            ]
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
