import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/006",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/006",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/006",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/006",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/006",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/006",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/006"
    },
    name: {
        en: "Team Rocket's Magmar",
        fr: "Magmar de la Team Rocket",
        es: "Magmar del Team Rocket",
        it: "Magmar del Team Rocket",
        de: "Team Rockets Magmar",
        "pt-br": "Magmar da Equipe Rocket",
        "zh-tw": "火箭隊的鴨嘴火獸",
        ko: "로켓단의 마그마",
        ja: "ロケット団のブーバー"
    },
    illustrator: "matazo",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fire"],
    stage: "Basic",
    description: {
        en: "Wavering flames similar to those of the sun appear on the surface of this Pokémon's body.",
        fr: "Son corps émet des flammes ondoyantes comparables à celles du soleil.",
        es: "La superficie de su cuerpo desprende unas ondeantes llamaradas que recuerdan a las fulguraciones solares.",
        it: "La superficie del suo corpo emana fiamme tremolanti simili a quelle del sole.",
        de: "Auf der Oberfläche seines Körpers entstehen lodernde Flammen, die an die der Sonne erinnern.",
        "pt-br": "Chamas tremeluzentes, similares às do sol, surgem na superficie do corpo deste Pokémon.",
        "zh-tw": "身體表面會產生像太陽一樣的火焰熱浪。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Derisive Roasting",
                fr: "Raillerie Roussie",
                es: "Escarnio Abrasador",
                it: "Scherno Rovente",
                de: "Höhnisches Rösten",
                "pt-br": "Calcinação Sarcástica",
                "zh-tw": "燒壞"
            },
            effect: {
                en: "This attack does 50 more damage for each Special Condition affecting your opponent's Active Pokémon.",
                fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque État Spécial affectant le Pokémon Actif de votre adversaire.",
                es: "Este ataque hace 50 puntos de daño más por cada Condición Especial que afecte al Pokémon Activo de tu rival.",
                it: "Questo attacco infligge 50 danni in più per ogni condizione speciale che influenza il Pokémon attivo del tuo avversario.",
                de: "Diese Attacke fügt für jeden Speziellen Zustand, von dem das Aktive Pokémon deines Gegners betroffen ist, 50 Schadenspunkte mehr zu.",
                "pt-br": "Este ataque causa 50 pontos de dano a mais para cada Condição Especial que estiver afetando o Pokémon Ativo do seu oponente.",
                "zh-tw": "增加對手的戰鬥寶可夢處於特殊狀態的數量×50點傷害。"
            },
            damage: "10+"
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
