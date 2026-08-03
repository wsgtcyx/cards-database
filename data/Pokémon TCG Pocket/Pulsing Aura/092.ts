import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/092",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/092",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/092",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/092",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/092",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/092",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/092"
    },
    name: {
        en: "Rolycoly",
        fr: "Charbi",
        es: "Rolycoly",
        it: "Rolycoly",
        de: "Klonkett",
        "pt-br": "Rolycoly",
        "zh-tw": "小炭仔",
        ko: "탄동",
        ja: "タンドン"
    },
    illustrator: "SATOSHI NAKAI",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fighting"],
    dexId: [837],
    stage: "Basic",
    description: {
        en: "Chunks of the surface of this Pokémon’s body that have grown old and flaked off have long been used for fuel as an alternative to coal.",
        fr: "Des morceaux de la surface du corps de ce Pokémon qui ont vieilli et se sont écaillés ont longtemps été utilisés comme combustible comme alternative au charbon.",
        es: "Los trozos de la superficie del cuerpo de este Pokémon que han envejecido y se han desprendido se han utilizado durante mucho tiempo como combustible como alternativa al carbón.",
        it: "I pezzi della superficie del corpo di questo Pokémon invecchiati e sfaldati sono stati a lungo utilizzati come combustibile in alternativa al carbone.",
        de: "Alt gewordene und abgeblätterte Teile der Körperoberfläche dieses Pokémon werden seit langem als Brennstoff als Alternative zu Kohle verwendet.",
        "pt-br": "Pedaços da superfície do corpo deste Pokémon que envelheceram e descamaram são usados ​​há muito tempo como combustível como alternativa ao carvão.",
        "zh-tw": "這種寶可夢身體表面老化和剝落的大塊長期以來一直被用作燃料，作為煤炭的替代品。"
    },
    attacks: [
        {
            cost: ["Fighting"],
            name: {
                en: "Rolling Tackle",
                fr: "Roulé-Boulé",
                es: "Placaje Giro",
                it: "Rollazione",
                de: "Rolltackle",
                "pt-br": "Golpe de Colisão Rolante",
                "zh-tw": "滾動衝撞"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
