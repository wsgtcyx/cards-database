import { Card } from "../../../interfaces";
import Set from "../Celestial Guardians";
const card: Card = {
    set: Set,
    name: {
        en: "Conkeldurr",
        fr: "Bétochef",
        es: "Conkeldurr",
        it: "Conkeldurr",
        de: "Meistagrif",
        'pt-br': "Conkeldurr",
        ko: "노보청",
        "zh-tw": "康克爾杜爾"
    },
    illustrator: "kawayoo",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Fighting"],
    evolveFrom: {
        en: "Gurdurr",
        "fr": "Gurdurr",
        "es": "Gurdurr",
        "it": "Gurdurr",
        "de": "Gurdurr",
        "pt-br": "Gurdur",
        "zh-tw": "古杜爾"
    },
    description: {
        en: "Concrete mixed by Conkeldurr is much more durable than normal concrete, even when the compositions of the two materials are the same.",
        fr: "Le béton préparé par Bétochef est bien\nplus solide qu'un béton ordinaire, même\nsi les mêmes ingrédients sont utilisés.",
        es: "El hormigón que preparan los Conkeldurr es mucho más duro y\nresistente que el ordinario, aunque la composición sea la misma.",
        it: "Il cemento preparato da Conkeldurr è molto più duro e resistente\ndella media, anche se la sua composizione non ha nulla di diverso.",
        de: "Beton, der von Meistagrif angerührt wurde,\nist härter und robuster als jeder andere Beton,\nselbst wenn die Inhaltsstoffe identisch sind.",
        'pt-br': "O concreto misturado por Conkeldurr é muito mais\nduradouro do que o concreto normal, mesmo quando\na composição dos dois materiais é a mesma.",
        ko: "같은 성분이라도 노보청이\n배합한 콘크리트가\n훨씬 견고하고 튼튼하다.",
        "zh-tw": "即使兩種材料的成分相同，Conkeldurr 混合的混凝土也比普通混凝土更耐用。"
    },
    stage: "Stage2",
    abilities: [{
            type: "Ability",
            name: {
                en: "Guts",
                fr: "Cran",
                es: "Agallas",
                it: "Dentistretti",
                de: "Adrenalin",
                'pt-br': "Tenacidade",
                ko: "근성",
                "zh-tw": "膽量"
            },
            effect: {
                en: "If this Pokémon would be Knocked Out by damage from an attack, flip a coin. If heads, this Pokémon is not Knocked Out, and its remaining HP becomes 10.",
                fr: "Si ce Pokémon doit être mis K.O. par les dégâts d'une attaque, lancez une pièce. Si c'est face, ce Pokémon n'est pas mis K.O. et il lui reste 10 PV.",
                es: "Si este Pokémon fuese a quedar Fuera de Combate por el daño de un ataque, lanza 1 moneda. Si sale cara, este Pokémon no queda Fuera de Combate, y sus PS restantes pasan a ser 10.",
                it: "Se questo Pokémon sta per essere messo KO dai danni di un attacco, lancia una moneta. Se esce testa, il Pokémon non viene messo KO e i suoi PS rimanenti diventano 10.",
                de: "Wenn dieses Pokémon durch Schaden einer Attacke kampfunfähig würde, wirf 1 Münze. Bei Kopf wird dieses Pokémon nicht kampfunfähig und seine verbleibenden KP sind gleich 10.",
                'pt-br': "Se este Pokémon estiver prestes a ser Nocauteado pelo dano de um ataque, jogue uma moeda. Se sair cara, este Pokémon não será Nocauteado e o PS restante dele será 10.",
                ko: "이 포켓몬이 기술의 데미지를 받아 기절할 때 자신은 동전을 1번 던진다. 앞면이 나오면 이 포켓몬은 기절하지 않고 남은 HP가 10인 상태로 필드에 남는다.",
                "zh-tw": "如果這只神奇寶貝因攻擊造成的傷害而被擊倒，則擲硬幣。如果正面，則該寶可夢不會被擊倒，其剩餘 HP 變為 10。"
            }
        }],
    attacks: [{
            name: {
                en: "Mega Punch",
                fr: "Ultimapoing",
                es: "Megapuño",
                it: "Megapugno",
                de: "Megahieb",
                'pt-br': "Megassoco",
                ko: "메가톤펀치",
                "zh-tw": "超級沖床"
            },
            damage: 80,
            cost: ["Fighting", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 3,
    boosters: ["lunala"]
};
export default card;
