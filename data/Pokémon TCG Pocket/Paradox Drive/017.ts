import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/017",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/017"
    },
    name: {
        en: "Iron Hands",
        fr: "Paume-de-Fer",
        es: "Ferropalmas",
        it: "Manoferrea",
        de: "Eisenhand",
        "pt-br": "Mãos Férreas",
        "zh-tw": "鐵臂膀",
        ko: "무쇠손",
        ja: "テツノカイナ"
    },
    illustrator: "Nisota Niso",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Lightning"],
    dexId: [992],
    stage: "Basic",
    description: {
        en: "This Pokémon shares many similarities with Iron Hands, an object mentioned in a certain expedition journal.",
        fr: "Ce Pokémon partage de nombreuses similitudes avec Paume-de-Fer, un objet mentionné dans un certain journal d'expédition.",
        es: "Este Pokémon comparte muchas similitudes con Ferropalmas, un objeto mencionado en cierto diario de expedición.",
        it: "Questo Pokémon ha molte somiglianze con Manoferrea, un oggetto menzionato in un certo diario di spedizione.",
        de: "Dieses Pokémon hat viele Ähnlichkeiten mit Eisenhand, einem Objekt, das in einem bestimmten Expeditionstagebuch erwähnt wird.",
        "pt-br": "Este Pokémon compartilha muitas semelhanças com Mãos Férreas, um objeto mencionado em um determinado diário de expedição.",
        "zh-tw": "這隻寶可夢與某探險日記中提到的鐵臂膀有許多相似之處。"
    },
    attacks: [
        {
            cost: ["Lightning", "Lightning", "Colorless"],
            name: {
                en: "Successive Slapping",
                fr: "Gifles Successives",
                es: "Bofetadas sucesivas",
                it: "Schiaffi successivi",
                de: "Aufeinanderfolgende Ohrfeigen",
                "pt-br": "Tapas Sucessivas",
                "zh-tw": "連摑掌"
            },
            effect: {
                en: "Flip 2 coins. This attack does 70 damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 70 dégâts pour chaque tête.",
                es: "Lanza 2 monedas. Este ataque hace 70 daños por cada cabeza.",
                it: "Lancia 2 monete. Questo attacco infligge 70 danni per ogni testa.",
                de: "Wirf 2 Münzen. Dieser Angriff verursacht 70 Schaden pro Kopf.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 70 de dano para cada cabeça.",
                "zh-tw": "翻轉 2 個硬幣。這次攻擊對每個頭造成 70 點傷害。"
            },
            damage: "70x"
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
