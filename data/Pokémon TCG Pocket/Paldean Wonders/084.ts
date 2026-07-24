import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    name: {
        en: "Cyclizar",
        fr: "Motorizard",
        es: "Cyclizar",
        it: "Cyclizar",
        de: "Mopex",
        'pt-br': "Cyclizar",
        "zh-tw": "摩托蜥",
        ko: "모토마"
    },
    illustrator: "AKIRA EGAWA",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Colorless"],
    dexId: [967],
    description: {
        en: "It can sprint at over 70 mph while carrying a human. The rider's body heat warms Cyclizar's back and lifts the Pokémon's spirit.",
        "fr": "Il peut sprinter à plus de 70 mph tout en transportant un humain. La chaleur corporelle du cavalier réchauffe le dos de Motorizard et élève l'esprit du Pokémon.",
        "es": "Puede correr a más de 70 mph mientras lleva a un humano. El calor corporal del jinete calienta la espalda de Cyclizar y levanta el espíritu del Pokémon.",
        "it": "Può scattare a oltre 70 mph mentre trasporta un essere umano. Il calore corporeo del cavaliere riscalda la schiena di Cyclizar e solleva lo spirito del Pokémon.",
        "de": "Es kann mit einer Geschwindigkeit von über 70 Meilen pro Stunde sprinten, während es einen Menschen trägt. Die Körperwärme des Reiters wärmt den Rücken von Mopex und hebt den Geist des Pokémon.",
        "pt-br": "Ele pode correr a mais de 70 mph enquanto carrega um humano. O calor do corpo do cavaleiro aquece as costas de Cyclizar e eleva o espírito do Pokémon.",
        "zh-tw": "它載人時可以以超過 70 英里/小時的速度衝刺。騎士的體溫溫暖了 摩托蜥 的背部並提升了寶可夢的精神。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Driving Buddy",
                fr: "Copilote",
                es: "Amigo Conductor",
                it: "Compagno di Guida",
                de: "Mitfahrkumpel",
                "pt-br": "Amigo de condução",
                "zh-tw": "駕駛夥伴",
                pt: "Carona Amiga"
            },
            damage: "40+",
            cost: ["Colorless", "Colorless", "Colorless"],
            effect: {
                en: "If you played a Supporter card from your hand during this turn, this attack does 60 more damage.",
                fr: "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 60 dégâts supplémentaires.",
                es: "Si has jugado una carta de Partidario de tu mano durante este turno, este ataque hace 60 puntos de daño más.",
                it: "Se hai giocato una carta Aiuto dalla tua mano durante questo turno, questo attacco infligge 60 danni in più.",
                de: "Wenn du eine Unterstützerkarte während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 60 Schadenspunkte mehr zu.",
                "pt-br": "Se você jogou uma carta de Apoiador da sua mão durante este turno, este ataque causará 60 de dano a mais.",
                "zh-tw": "如果你在本回合中從手牌中打出了支持者卡，則此攻擊造成的傷害增加 60 點。",
                pt: "Se você jogou uma carta de Apoiador da sua mão durante este turno, este ataque causará 60 pontos de dano a mais."
            },
        },
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
