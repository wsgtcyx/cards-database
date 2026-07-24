import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/118",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/118"
    },
    name: {
        en: "Bronzong",
        fr: "Archéodong",
        es: "Bronzong",
        it: "Bronzong",
        de: "Bronzong",
        "pt-br": "Bronzong",
        "zh-tw": "青銅鐘",
        ko: "동탁군",
        ja: "ドータクン"
    },
    illustrator: "Shinji Kanda",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Metal"],
    dexId: [437],
    evolveFrom: {
        en: "Bronzor",
        fr: "Archéomire",
        es: "Bronzor",
        it: "Bronzor",
        de: "Bronzel",
        "pt-br": "Bronzor",
        "zh-tw": "銅鏡怪",
        ko: "동미러",
        ja: "ドーミラー"
    },
    stage: "Stage1",
    description: {
        en: "It brought rains by opening portals to another world. It was revered as a bringer of plentiful harvests.",
        fr: "Il apportait la pluie en créant un\nportail vers une autre dimension.\nIl était synonyme de bonne récolte.",
        es: "Trajo lluvias abriendo portales a otro mundo. Era venerado como portador de abundantes cosechas.",
        it: "Ha portato le piogge aprendo portali verso un altro mondo. Era venerato come portatore di raccolti abbondanti.",
        de: "Es brachte Regen, indem es Portale zu einer anderen Welt öffnete. Es wurde als Bringer reicher Ernten verehrt.",
        "pt-br": "Trouxe chuvas abrindo portais para outro mundo. Foi reverenciado como portador de colheitas abundantes.",
        "zh-tw": "它透過打開通往另一個世界的門戶帶來了降雨。它被尊崇為五穀豐登的使者。"
    },
    attacks: [
        {
            cost: ["Metal", "Colorless"],
            name: {
                en: "Psychic Resonance",
                fr: "Résonance Psychique",
                es: "Resonancia Psíquica",
                it: "Risonanza Psichica",
                de: "Psycho-Resonanz",
                "pt-br": "Ressonância Psíquica",
                "zh-tw": "精神共鳴"
            },
            effect: {
                en: "If your opponent has any {P} Pokémon in play, this attack does 50 more damage.",
                fr: "Si votre adversaire a {P} Pokémon en jeu, cette attaque inflige 50 dégâts supplémentaires.",
                es: "Si tu oponente tiene algún Pokémon {P} en juego, este ataque hace 50 daños más.",
                it: "Se il tuo avversario ha dei Pokémon {P} in gioco, questo attacco infligge 50 danni in più.",
                de: "Wenn dein Gegner ein {P}-Pokémon im Spiel hat, fügt dieser Angriff 50 weitere Schadenspunkte zu.",
                "pt-br": "Se seu oponente tiver algum Pokémon {P} em jogo, este ataque causará 50 de dano a mais.",
                "zh-tw": "如果對手場上有任何 {P} 寶可夢，則此攻擊造成的傷害增加 50 點。"
            },
            damage: "50+"
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
