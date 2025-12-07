import { Card } from "../../../interfaces";
import Set from "../Celestial Guardians";
const card: Card = {
    set: Set,
    name: {
        en: "Crabominable ex",
        fr: "Crabominable-ex",
        es: "Crabominable ex",
        it: "Crabominable-ex",
        de: "Krawell-ex",
        'pt-br': "Crabominable ex",
        ko: "모단단게 ex",
        "zh-tw": "Crabominable 超級"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 160,
    types: ["Water"],
    evolveFrom: {
        en: "Crabrawler",
        "fr": "Crabrawler",
        "es": "cangrejo",
        "it": "Crabrawler",
        "de": "Krabbenjäger",
        "pt-br": "Caranguejo",
        "zh-tw": "爬行者"
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Insatiable Striking",
                fr: "Tacle Insatiable",
                es: "Aporreo Insaciable",
                it: "Colpi Irrefrenabili",
                de: "Unersättliches Prügeln",
                'pt-br': "Golpe Insaciável",
                ko: "더욱더욱봄버",
                "zh-tw": "貪得無厭的打擊"
            },
            damage: 40,
            cost: ["Water"],
            effect: {
                en: "During your next turn, this Pokémon's Insatiable Striking attack does +40 damage.",
                fr: "Pendant votre prochain tour, l'attaque Tacle Insatiable de ce Pokémon inflige + 40 dégâts.",
                es: "Durante tu próximo turno, el ataque Aporreo Insaciable de este Pokémon hace Insatiable Striking+40 puntos[/Ctrl:NoBreak] de daño.",
                it: "Durante il tuo prossimo turno, l'attacco Colpi Irrefrenabili di questo Pokémon infligge +40 danni.",
                de: "Während deines nächsten Zuges fügt die Attacke Unersättliches Prügeln von diesem Pokémon + 40 Schadenspunkte zu.",
                'pt-br': "Durante o seu próximo turno, o ataque Golpe Insaciável deste Pokémon causará + 40 pontos de dano.",
                ko: "자신의 다음 차례에 이 포켓몬의 「더욱더욱봄버」의 데미지를 +40한다.",
                "zh-tw": "在你的下一個回合中，這只神奇寶貝的貪得無厭攻擊造成+40點傷害。"
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 3,
    boosters: ["solgaleo"]
};
export default card;
