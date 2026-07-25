import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/096",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/096",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/096",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/096",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/096",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/096"
    },
    name: {
        en: "Ampharos",
        fr: "Pharamp",
        es: "Ampharos",
        it: "Ampharos",
        de: "Ampharos",
        "pt-br": "Ampharos",
        "zh-tw": "電龍",
        ko: "전룡",
        ja: "デンリュウ"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 140,
    types: ["Lightning"],
    dexId: [181],
    evolveFrom: {
        en: "Flaaffy",
        fr: "Lainergie",
        es: "Flaaffy",
        it: "Flaaffy",
        de: "Waaty",
        "pt-br": "Flaaffy",
        "zh-tw": "茸茸羊",
        ko: "보송송",
        ja: "モココ"
    },
    stage: "Stage2",
    description: {
        en: "When it gets dark, the light from its bright, shiny tail can be seen from far away on the ocean’s surface.",
        fr: "Lorsqu’il fait sombre, la lumière de sa queue brillante et brillante peut être vue de loin à la surface de l’océan.",
        es: "Cuando oscurece, la luz de su brillante cola se puede ver desde lejos en la superficie del océano.",
        it: "Quando fa buio, la luce della sua coda brillante e brillante può essere vista da molto lontano sulla superficie dell’oceano.",
        de: "Wenn es dunkel wird, ist das Licht seines hellen, glänzenden Schwanzes schon von weitem auf der Meeresoberfläche zu sehen.",
        "pt-br": "Quando escurece, a luz de sua cauda brilhante e brilhante pode ser vista de longe na superfície do oceano.",
        "zh-tw": "當天黑時，從遠處的海面上就能看到它明亮、閃亮的尾巴發出的光。"
    },
    attacks: [
        {
            cost: ["Lightning", "Lightning", "Colorless"],
            name: {
                en: "Zapping Bullet",
                fr: "Projectile Électrisé",
                es: "Bala Electrizante",
                it: "Fulmidardo",
                de: "Stromgeschoss",
                "pt-br": "Projétil Eletrizante",
                "zh-tw": "麻麻子彈"
            },
            effect: {
                en: "1 of your opponent's Benched Pokémon is chosen at random. This attack also does 20 damage to it.",
                fr: "1 des Pokémon de Banc de votre adversaire est choisi au hasard. Cette attaque lui fait également 20 dégâts.",
                es: "Se elige al azar 1 de los Pokémon en Banca de tu rival. Este ataque también le causa 20 daños.",
                it: "1 dei Pokémon nella panchina del tuo avversario viene scelto a caso. Questo attacco gli infligge anche 20 danni.",
                de: "1 Pokémon auf der Bank deines Gegners wird zufällig ausgewählt. Dieser Angriff fügt ihm außerdem 20 Schadenspunkte zu.",
                "pt-br": "1 dos Pokémon no Banco do seu oponente é escolhido aleatoriamente. Este ataque também causa 20 de dano.",
                "zh-tw": "隨機選擇 1 只對手後備寶可夢。這次攻擊也會對其造成 20 點傷害。"
            },
            damage: 90
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
