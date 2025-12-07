import { Card } from "../../../interfaces";
import Set from "../Space-Time Smackdown";
const card: Card = {
    set: Set,
    name: {
        en: "Rampardos",
        fr: "Charkos",
        es: "Rampardos",
        it: "Rampardos",
        de: "Rameidon",
        'pt-br': "Rampardos",
        ko: "램펄드",
        "zh-tw": "戰槌龍",
    },
    illustrator: "Yoshinobu Saito",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Fighting"],
    evolveFrom: {
        en: "Cranidos",
        "fr": "Cranidos",
        "es": "Cránidos",
        "it": "Cranidos",
        "de": "Cranidos",
        "pt-br": "Cranidos",
        "zh-tw": "克拉尼多斯"
    },
    description: {
        en: "In ancient times, people would dig up fossils of this Pokémon and use its skull, which is harder than steel, to make helmets.",
        fr: "Il y a bien longtemps, les hommes fabriquaient\ndes casques plus solides que l'acier à partir\nde crânes de Charkos fossilisés.",
        es: "Los hombres de antaño que encontraban restos\nfosilizados de Rampardos usaban su cráneo,\nmás duro que el metal, para fabricar cascos.",
        it: "In tempi antichi gli uomini si servivano dei fossili del cranio\ndi questi Pokémon, più duro dell'acciaio, per fabbricare elmi.",
        de: "Vor langer Zeit wurden die Fossilien dieses\nPokémon ausgegraben und aus den stahlharten\nSchädeln Helme hergestellt.",
        'pt-br': "Antigamente, as pessoas escavavam os fósseis\ndeste Pokémon e usavam seu crânio, que é mais duro\ndo que aço, para criar capacetes.",
        ko: "먼 옛날 사람은 화석을 발굴하여\n강철보다 딱딱한 두개골로\n투구를 만들었다.",
        "zh-tw": "在古代，人們會挖掘這種神奇寶貝的化石，並用它比鋼鐵還硬的頭骨來製作頭盔。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Head Smash",
                fr: "Fracass'Tête",
                es: "Testarazo",
                it: "Zuccata",
                de: "Kopfstoß",
                'pt-br': "Bate Cabeça",
                ko: "양날박치기",
                "zh-tw": "頭部粉碎"
            },
            damage: 130,
            cost: ["Fighting"],
            effect: {
                en: "If your opponent's Pokémon is Knocked Out by damage from this attack, this Pokémon also does 50 damage to itself.",
                fr: "Si le Pokémon de l'adversaire est mis K.O. par les dégâts de cette attaque, ce Pokémon s'inflige aussi 50 dégâts.",
                es: "Si el Pokémon de tu rival queda Fuera de Combate por el daño de este ataque, este Pokémon también se hace 50 puntos de daño a sí mismo.",
                it: "Se un Pokémon del tuo avversario viene messo KO dai danni di questo attacco, questo Pokémon infligge anche 50 danni a se stesso.",
                de: "Wenn das Pokémon deines Gegners durch Schaden dieser Attacke kampfunfähig wird, fügt dieses Pokémon auch sich selbst 50 Schadenspunkte zu.",
                'pt-br': "Se o Pokémon do seu oponente for Nocauteado pelo dano deste ataque, este Pokémon também causará 50 pontos de dano a si mesmo.",
                ko: "이 기술의 데미지로 상대의 포켓몬이 기절했다면 이 포켓몬에게도 50데미지를 준다.",
                "zh-tw": "如果對手的寶可夢因這次攻擊而被擊倒，則該寶可夢也會對其自身造成 50 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["dialga"]
};
export default card;
