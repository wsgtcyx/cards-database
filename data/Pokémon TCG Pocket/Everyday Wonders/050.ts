import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/050",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/050",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/050",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/050",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/050",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/050",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3b/050"
    },
    name: {
        en: "Hisuian Goodra",
        fr: "Muplodocus de Hisui",
        es: "Goodra de Hisui",
        it: "Goodra di Hisui",
        de: "Hisui-Viscogon",
        "pt-br": "Goodra de Hisui",
        "zh-tw": "洗翠黏美龍",
        ko: "히스이 미끄래곤",
        ja: "ヒスイ ヌメルゴン"
    },
    illustrator: "Akira Komayama",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Dragon"],
    dexId: [706],
    evolveFrom: {
        en: "Sliggoo",
        fr: "Colimucus",
        es: "Sliggoo",
        it: "Sliggoo",
        de: "Viscargot",
        "pt-br": "Sliggoo",
        "zh-tw": "洗翠 黏美兒",
        ko: "히스이 미끄네일",
        ja: "ヒスイ ヌメイル"
    },
    stage: "Stage2",
    description: {
        en: "Able to freely control the hardness of its metallic shell. It loathes solitude and is extremely clingy—it will fume and run riot if those dearest to it ever leave its side.",
        fr: "Capable de contrôler librement la dureté de sa coque métallique. Il déteste la solitude et est extrêmement collant : il fulminera et se déchaînera si jamais ceux qui lui sont chers le quittent.",
        es: "Capaz de controlar libremente la dureza de su carcasa metálica. Detesta la soledad y es extremadamente pegajoso: se enfurecerá y se enojará si sus seres más queridos alguna vez se alejan de su lado.",
        it: "In grado di controllare liberamente la durezza del suo guscio metallico. Detesta la solitudine ed è estremamente appiccicoso: si arrabbierà e si ribellerà se le persone a lui più care lasceranno il suo fianco.",
        de: "Kann die Härte seiner Metallhülle frei steuern. Es verabscheut die Einsamkeit und ist äußerst anhänglich – es wird wütend und außer sich vor Wut, wenn seine Liebsten jemals von seiner Seite weichen.",
        "pt-br": "Capaz de controlar livremente a dureza de sua casca metálica. Ele detesta a solidão e é extremamente pegajoso – ele ficará furioso e se revoltará se aqueles que lhe são mais queridos saírem do seu lado.",
        "zh-tw": "能夠自由控制金屬外殼的硬度。它厭惡孤獨，而且非常黏人——如果它最親愛的人離開它身邊，它就會發怒並暴動。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Securely Sheltered",
                fr: "Bien abrité",
                es: "Protegido de forma segura",
                it: "Protetto in modo sicuro",
                de: "Sicher geschützt",
                "pt-br": "Protegido com segurança",
                "zh-tw": "窩居防守"
            },
            effect: {
                en: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, this Pokémon takes -80 damage from that attack.",
                fr: "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce de monnaie. Si c'est face, ce Pokémon subit -80 dégâts de cette attaque.",
                es: "Si los ataques le hacen algún daño a este Pokémon, lanza una moneda. Si sale cara, este Pokémon recibe -80 de daño por ese ataque.",
                it: "Se gli attacchi infliggono danni a questo Pokémon, lancia una moneta. Se esce testa, questo Pokémon subisce -80 danni da quell'attacco.",
                de: "Wenn diesem Pokémon durch Angriffe Schaden zugefügt wird, wirf eine Münze. Bei „Kopf“ erleidet dieses Pokémon -80 Schaden durch diesen Angriff.",
                "pt-br": "Se algum dano for causado a este Pokémon por ataques, jogue uma moeda. Se der cara, este Pokémon sofre -80 de dano desse ataque.",
                "zh-tw": "如果這隻寶可夢受到攻擊造成的傷害，則擲硬幣。如果正面，這隻寶可夢會受到 -80 點傷害。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Water", "Metal", "Colorless"],
            name: {
                en: "Heavy Impact",
                fr: "Gros Impact",
                es: "Impacto Pesado",
                it: "Impatto Pesante",
                de: "Schwerer Einschlag",
                "pt-br": "Impacto Pesado",
                "zh-tw": "重磅衝擊"
            },
            damage: 120
        }
    ],
    retreat: 3
};

export default card;
