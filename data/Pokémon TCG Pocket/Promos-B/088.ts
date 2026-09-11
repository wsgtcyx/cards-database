import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/088",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/088",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/088",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/088",
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/088",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-B/088",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/088"
    },
    name: { en: "Team Rocket's Scyther", fr: "Insécateur de la Team Rocket", es: "Scyther del Team Rocket", it: "Scyther del Team Rocket", de: "Team Rockets Sichlor", "pt-br": "Scyther da Equipe Rocket", "zh-tw": "火箭隊的飛天螳螂", ko: "로켓단의 스라크", ja: "ロケット団のストライク" },
    illustrator: "Anesaki Dynamic",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    dexId: [123],
    stage: "Basic",
    description: {
        en: "The sharp scythes on its forearms become increasingly sharp by cutting through hard objects.",
        fr: "Les faux tranchantes de ses avant-bras deviennent de plus en plus tranchantes en coupant des objets durs.",
        es: "Las afiladas guadañas de sus antebrazos se vuelven cada vez más afiladas al cortar objetos duros.",
        it: "Le falci sulle sue zampe anteriori diventano sempre più affilate man mano che tranciano oggetti duri.",
        de: "Die scharfen Sicheln an den Unterarmen werden durch das Schneiden harter Objekte noch schärfer.",
        "pt-br": "As foices afiadas em seus antebraços tornam-se cada vez mais afiadas ao cortar objetos duros.",
        "zh-tw": "前臂上的鋒利鐮刀在切割堅硬的物體時變得越來越鋒利。"
    },
    attacks: [{
        cost: ["Grass", "Colorless"],
        name: { en: "Second Strike", fr: "Deuxième Coup", es: "Segundo Golpe", it: "Secondocolpo", de: "Sekundärschlag", "pt-br": "Segundo Golpe", "zh-tw": "攻擊傷口" },
        effect: {
            en: "If your opponent's Active Pokémon has damage on it, this attack does 70 more damage.",
            fr: "Si le Pokémon Actif de votre adversaire a subi des dégâts, cette attaque inflige 70 dégâts de plus.",
            es: "Si el Pokémon Activo de tu rival ya tiene daño, este ataque hace 70 puntos de daño más.",
            it: "Se il Pokémon attivo del tuo avversario è danneggiato, questo attacco infligge 70 danni in più.",
            de: "Wenn dem Aktiven Pokémon deines Gegners bereits Schaden zugefügt wurde, fügt diese Attacke 70 Schadenspunkte mehr zu.",
            "pt-br": "Se o Pokémon Ativo do seu oponente estiver danificado, este ataque causará 70 pontos de dano a mais.",
            "zh-tw": "若對手的戰鬥寶可夢有受到傷害，則增加70點傷害。"
        },
        damage: "20+"
    }],
    weaknesses: [{ type: "Fire", value: "+20" }],
    retreat: 1,
    boosters: ["vol12"]
};

export default card;
