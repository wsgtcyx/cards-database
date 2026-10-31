import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/017",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/017",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/017",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/017",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/017",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/017",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3a/017",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B3a/017",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B3a/017"
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
        "zh-tw": "這隻寶可夢與某探險日記中提到的鐵臂膀有許多相似之處。",
        ja: "ある探検記に 記された テツノカイナという 物体と 似た点が 多い ポケモン。",
        ko: "어느 탐험기에 기록된\n\"무쇠손\"이라는 물체와\n닮은 점이 많은 포켓몬."
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
                "zh-tw": "連摑掌",
                ja: "リピートスラップ",
                ko: "리피트슬랩"
            },
            effect: {
                en: "Flip 2 coins. This attack does 70 damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 70 dégâts pour chaque tête.",
                es: "Lanza 2 monedas. Este ataque hace 70 daños por cada cabeza.",
                it: "Lancia 2 monete. Questo attacco infligge 70 danni per ogni testa.",
                de: "Wirf 2 Münzen. Dieser Angriff verursacht 70 Schaden pro Kopf.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 70 de dano para cada cabeça.",
                "zh-tw": "翻轉 2 個硬幣。這次攻擊對每個頭造成 70 點傷害。",
                ja: "コインを2回投げ、オモテの数×70ダメージ。",
                ko: "동전을 2번 던져서 앞면이 나온 수 × 70데미지를 준다."
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
