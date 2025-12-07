import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Musharna",
        "fr": "Musharna",
        "es": "Musharna",
        "it": "Musharna",
        "de": "Musharna",
        "pt-br": "Musharna",
        "zh-tw": "夢夢蝕",
    },
    illustrator: "MAHOU",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Psychic"],
    evolveFrom: {
        en: "Munna",
        "fr": "Munna",
        "es": "Munna",
        "it": "Munna",
        "de": "Munna",
        "pt-br": "Munna",
        "zh-tw": "穆納"
    },
    description: {
        en: "When dark mists emanate from its body, don't\nget too near. If you do, your nightmares will\nbecome reality.",
        "fr": "Lorsque des brumes sombres émanent de son corps, ne le faites pas\napprochez-vous trop. Si vous le faites, vos cauchemars\ndevenir réalité.",
        "es": "Cuando nieblas oscuras emanen de su cuerpo, no\nacercarse demasiado. Si lo haces, tus pesadillas desaparecerán.\nconvertirse en realidad.",
        "it": "Quando dal suo corpo fuoriescono nebbie oscure, non farlo\navvicinarsi troppo. Se lo fai, lo faranno i tuoi incubi\ndiventare realtà.",
        "de": "Wenn dunkle Nebel von seinem Körper ausgehen, tun Sie es nicht\nzu nahe kommen. Wenn Sie das tun, werden Ihre Albträume es tun\nWirklichkeit werden.",
        "pt-br": "Quando névoas escuras emanam de seu corpo, não\nchegar muito perto. Se você fizer isso, seus pesadelos irão\ntornar-se realidade.",
        "zh-tw": "當它的身體散發出黑霧時，不要\n太近了。如果你這樣做，你的噩夢就會\n成為現實。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Dream Dance",
                "fr": "Danse de rêve",
                "es": "Danza de ensueño",
                "it": "Danza dei sogni",
                "de": "Traumtanz",
                "pt-br": "Dança dos Sonhos",
                "zh-tw": "夢幻之舞"
            },
            damage: 60,
            cost: ["Psychic", "Colorless"],
            effect: {
                en: "Both Active Pokémon are now Asleep.",
                "fr": "Les deux Pokémon actifs sont désormais endormis.",
                "es": "Ambos Pokémon Activos ahora están Dormidos.",
                "it": "Entrambi i Pokémon attivi ora sono addormentati.",
                "de": "Beide aktiven Pokémon schlafen jetzt.",
                "pt-br": "Ambos os Pokémon ativos agora estão dormindo.",
                "zh-tw": "兩隻活躍的神奇寶貝現在都睡著了。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 3,
    boosters: ["ho-oh", "lugia"]
};
export default card;
