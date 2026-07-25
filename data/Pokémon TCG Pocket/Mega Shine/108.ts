import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/108",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/108",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/108",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/108",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/108",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/108"
    },
    name: {
        en: "Axew",
        fr: "Coupenotte",
        es: "Axew",
        it: "Axew",
        de: "Milza",
        "pt-br": "Axew",
        "zh-tw": "牙牙",
        ko: "터검니",
        ja: "キバゴ"
    },
    illustrator: "Nisota Niso",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 70,
    types: ["Dragon"],
    dexId: [610],
    stage: "Basic",
    description: {
        en: "If you see peculiar teeth marks on boulders or trees, it means an Axew is likely living nearby.",
        fr: "Si vous voyez des marques de dents particulières sur des rochers ou des arbres, cela signifie qu'un Coupenotte vit probablement à proximité.",
        es: "Si ve marcas de dientes peculiares en rocas o árboles, significa que es probable que un Axew viva cerca.",
        it: "Se vedi strani segni di denti su massi o alberi, significa che probabilmente uno Axew vive nelle vicinanze.",
        de: "Wenn Sie auf Felsbrocken oder Bäumen seltsame Zahnspuren sehen, bedeutet das, dass wahrscheinlich ein Milza in der Nähe lebt.",
        "pt-br": "Se você vir marcas peculiares de dentes em pedras ou árvores, significa que provavelmente um Axew mora nas proximidades.",
        "zh-tw": "如果您在巨石或樹木上看到特殊的齒痕，則表示 牙牙 很可能居住在附近。"
    },
    attacks: [
        {
            cost: ["Fighting", "Metal"],
            name: {
                en: "Sharp Fang",
                fr: "Croc Aiguisé",
                es: "Colmillo Afilado",
                it: "Zannaffilata",
                de: "Scharfe Fänge",
                "pt-br": "Presa Afiada",
                "zh-tw": "銳利之牙"
            },
            damage: 40
        }
    ],
    retreat: 1
};

export default card;
