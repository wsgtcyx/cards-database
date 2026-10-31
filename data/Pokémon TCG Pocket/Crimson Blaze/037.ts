import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1a/037",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1a/037",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1a/037",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1a/037",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1a/037",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1a/037",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1a/037",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1a/037",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1a/037"
    },
    name: {
        en: "Xerneas",
        "fr": "Xerneas",
        "es": "Xerneas",
        "it": "Xerneas",
        "de": "Xerneas",
        "pt-br": "Xerneas",
        "zh-tw": "哲爾尼亞斯",
        ja: "ゼルネアス",
        ko: "제르네아스"
    },
    illustrator: "sui",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Psychic"],
    description: {
        en: "When the horns on its head shine\nin seven colors, it is said to be\nsharing everlasting life.",
        "fr": "Quand les cornes de sa tête brillent\nen sept couleurs, on dit que c'est\npartager la vie éternelle.",
        "es": "Cuando los cuernos de su cabeza brillan\nen siete colores, se dice que es\ncompartiendo la vida eterna.",
        "it": "Quando le corna sulla sua testa brillano\nin sette colori, si dice che sia\ncondividere la vita eterna.",
        "de": "Wenn die Hörner auf seinem Kopf leuchten\nin sieben Farben soll es sein\newiges Leben teilen.",
        "pt-br": "Quando os chifres em sua cabeça brilham\nem sete cores, diz-se que é\ncompartilhando a vida eterna.",
        "zh-tw": "當它頭上的角閃閃發光時\n據說有七種顏色\n分享永生。",
        ja: "頭の ツノが 七色に 輝くとき 永遠の 命を 分け与えると 言われている。",
        ko: "머리의 뿔이 일곱 빛깔로\n빛날 때 영원한 생명을\n나눠준다고 전해진다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Geoburst",
                "fr": "Géorafale",
                "es": "Geoburst",
                "it": "Geoburst",
                "de": "Geoburst",
                "pt-br": "Explosão geográfica",
                "zh-tw": "地裂",
                ja: "ジオバースト",
                ko: "지오버스트"
            },
            damage: "120-",
            cost: ["Psychic", "Psychic", "Colorless"],
            effect: {
                en: "This attack's damage is reduced by the amount of damage this Pokémon has on it.",
                "fr": "Les dégâts de cette attaque sont réduits de la quantité de dégâts que ce Pokémon subit.",
                "es": "El daño de este ataque se reduce según la cantidad de daño que tenga este Pokémon.",
                "it": "Il danno di questo attacco è ridotto dell'ammontare dei danni che questo Pokémon ha su di esso.",
                "de": "Der Schaden dieses Angriffs wird um die Schadensmenge verringert, die dieses Pokémon verursacht.",
                "pt-br": "O dano deste ataque é reduzido pela quantidade de dano que este Pokémon causa nele.",
                "zh-tw": "這次攻擊的傷害會根據該神奇寶貝對其造成的傷害而減少。",
                ja: "このポケモンが受けているダメージぶん、このワザのダメージを小さくする。",
                ko: "이 포켓몬이 받고 있는 데미지만큼 이 기술의 데미지를 작게 한다."
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 2
};
export default card;
