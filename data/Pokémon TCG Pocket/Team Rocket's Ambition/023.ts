import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/023",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/023",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/023",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/023",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/023",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/023",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/023",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4a/023",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4a/023"
    },
    name: {
        en: "Zebstrika",
        fr: "Zéblitz",
        es: "Zebstrika",
        it: "Zebstrika",
        de: "Zebritz",
        "pt-br": "Zebstrika",
        "zh-tw": "雷電斑馬",
        ko: "제브라이카",
        ja: "ゼブライカ"
    },
    illustrator: "0313",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Lightning"],
    dexId: [523],
    evolveFrom: {
        en: "Blitzle",
        fr: "Zébibron",
        es: "Blitzle",
        it: "Blitzle",
        de: "Elezeba",
        "pt-br": "Blitzle",
        "zh-tw": "斑斑馬",
        ko: "줄뮤마",
        ja: "シママ"
    },
    stage: "Stage1",
    description: {
        en: "Once the herd hears thunder, it chases after the storm clouds so that the Blitzle in the group can use the lightning to charge up.",
        fr: "Lorsqu'ils entendent le tonnerre, ils courent après les nuages orageux en troupeau. Les Zébibron parmi eux se rechargent ainsi grâce à la foudre.",
        es: "Cuando oyen un trueno, corren en tropel tras los nubarrones para que los Blitzle de la manada puedan recargarse de electricidad con los rayos.",
        it: "Quando sentono il rombo di un tuono, seguono in gruppo le nubi temporalesche per permettere ai Blitzle della mandria di caricarsi di elettricità.",
        de: "Hören sie Donnergrollen, jagen sie in der Herde den Gewitterwolken hinterher, damit die Elezeba in ihren Reihen daraus Strom tanken können.",
        "pt-br": "Assim que a manada escuta um trovão, persegue as nuvens carregadas para que os Blitzle do grupo possam usar os raios e recarregar suas energías.",
        "zh-tw": "為了讓群體裡的斑斑馬能透過雷電充電，只要一聽到雷鳴聲，就會成群追趕雷雲。",
        ja: "雷鳴を 聞くと 群れの シママが 雷から 充電できるように 群れで 雷雲を 追いかける。",
        ko: "우렛소리를 들으면 무리의 줄뮤마가\n벼락을 통해 충전할 수 있게\n무리 지어 뇌운을 뒤쫓는다."
    },
    attacks: [
        {
            cost: ["Lightning"],
            name: {
                en: "Zap Kick",
                fr: "Coup de Pied Ravageur",
                es: "Electropatada",
                it: "Dinamocalcio",
                de: "Stromtritt",
                "pt-br": "Chute Zap",
                "zh-tw": "電氣踢",
                ja: "エレキック",
                ko: "일렉트릭킥"
            },
            damage: 50
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
