import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/115"
    },
    name: {
        en: "Revavroom",
        fr: "Vrombotor",
        es: "Revavroom",
        it: "Revavroom",
        de: "Knattatox",
        "pt-br": "Revavroom",
        "zh-tw": "普隆隆姆",
        ko: "부르르룸",
        ja: "ブロロローム"
    },
    illustrator: "Sanosuke Sakuma",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Metal"],
    dexId: [966],
    evolveFrom: {
        en: "Varoom",
        fr: "Vrombi",
        es: "Varoom",
        it: "Varoom",
        de: "Knattox",
        "pt-br": "Varoom",
        "zh-tw": "噗隆隆",
        ko: "부르롱",
        ja: "ブロロン"
    },
    stage: "Stage1",
    description: {
        en: "Revavroom viciously threatens others with the sound of its exhaust. It sticks its tongue out from its cylindrical mouth and sprays toxic fluids.",
        fr: "Vrombotor menace vicieusement les autres avec le bruit de son échappement. Il sort sa langue de sa bouche cylindrique et pulvérise des fluides toxiques.",
        es: "Revavroom amenaza brutalmente a otros con el sonido de su escape. Saca la lengua de su boca cilíndrica y rocía fluidos tóxicos.",
        it: "Revavroom minaccia ferocemente gli altri con il suono del suo scarico. Tira fuori la lingua dalla bocca cilindrica e spruzza fluidi tossici.",
        de: "Knattatox bedroht andere brutal mit dem Geräusch seines Auspuffs. Es streckt seine Zunge aus seinem zylindrischen Mund heraus und versprüht giftige Flüssigkeiten.",
        "pt-br": "Revavroom ameaça violentamente os outros com o som de seu escapamento. Ele coloca a língua para fora da boca cilíndrica e borrifa fluidos tóxicos.",
        "zh-tw": "普隆隆姆用排氣聲惡毒地威脅別人。它從圓柱形的嘴中伸出舌頭並噴出有毒液體。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Dual Customization"
            },
            effect: {
                en: "This Pokémon may have up to 2 Pokémon Tool cards attached to it."
            }
        }
    ],
    attacks: [
        {
            cost: ["Metal", "Metal", "Colorless", "Colorless"],
            name: {
                en: "Overacceleration",
                fr: "Suraccélération",
                es: "Sobreaceleración",
                it: "Accelerazione eccessiva",
                de: "Überbeschleunigung",
                "pt-br": "Superaceleração",
                "zh-tw": "失控暴衝"
            },
            effect: {
                en: "During your next turn, this Pokémon's Overacceleration attack does +70 damage."
            },
            damage: 70
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
