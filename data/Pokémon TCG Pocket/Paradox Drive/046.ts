import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/046",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/046"
    },
    name: {
        en: "Iron Jugulis",
        fr: "Têtes-de-Fer",
        es: "Ferrocuello",
        it: "Colloferreo",
        de: "Eisenhals",
        "pt-br": "Jugulares Férreas",
        "zh-tw": "鐵脖頸",
        ko: "무쇠머리",
        ja: "テツノコウベ"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Darkness"],
    dexId: [993],
    stage: "Basic",
    description: {
        en: "It’s possible that Iron Jugulis, an object described in an old book, may actually be this Pokémon.",
        fr: "Il est possible que Têtes-de-Fer, un objet décrit dans un vieux livre, soit en réalité ce Pokémon.",
        es: "Es posible que Ferrocuello, un objeto descrito en un libro antiguo, sea en realidad este Pokémon.",
        it: "È possibile che Colloferreo, un oggetto descritto in un vecchio libro, possa effettivamente essere questo Pokémon.",
        de: "Es ist möglich, dass Eisenhals, ein in einem alten Buch beschriebenes Objekt, tatsächlich dieses Pokémon ist.",
        "pt-br": "É possível que Jugulares Férreas, um objeto descrito em um livro antigo, seja na verdade este Pokémon.",
        "zh-tw": "一本舊書中描述的物件 鐵脖頸 可能就是這隻寶可夢。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Automated Combat",
                fr: "Combat automatisé",
                es: "Combate automatizado",
                it: "Combattimento automatizzato",
                de: "Automatisierter Kampf",
                "pt-br": "Combate Automatizado",
                "zh-tw": "自動用武"
            },
            effect: {
                en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon, do 20 damage to the Attacking Pokémon.",
                fr: "Si ce Pokémon est dans le Point Actif et est endommagé par une attaque du Pokémon de votre adversaire, infligez 20 dégâts au Pokémon attaquant.",
                es: "Si este Pokémon está en el Punto Activo y es dañado por un ataque del Pokémon de tu rival, haz 20 puntos de daño al Pokémon Atacante.",
                it: "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco dei Pokémon del tuo avversario, infliggi 20 danni al Pokémon attaccante.",
                de: "Wenn sich dieses Pokémon an der aktiven Stelle befindet und durch einen Angriff des Pokémon deines Gegners beschädigt wird, füge dem angreifenden Pokémon 20 Schadenspunkte zu.",
                "pt-br": "Se este Pokémon estiver no Ponto Ativo e for danificado por um ataque do Pokémon do seu oponente, cause 20 pontos de dano ao Pokémon Atacante.",
                "zh-tw": "如果這只寶可夢位於活動區域並因對方寶可夢的攻擊而受到傷害，則對攻擊的寶可夢造成 20 點傷害。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Darkness", "Darkness", "Colorless"],
            name: {
                en: "Blasting Wind",
                fr: "Vent explosif",
                es: "Viento explosivo",
                it: "Vento sferzante",
                de: "Blasender Wind",
                "pt-br": "Vento forte",
                "zh-tw": "爆破之風"
            },
            damage: 70
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
