import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/079/61f1fe1c11f209ec",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/079/61f1fe1c11f209ec",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/079/61f1fe1c11f209ec",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/079/61f1fe1c11f209ec",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/079/61f1fe1c11f209ec",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/079/61f1fe1c11f209ec",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/079/61f1fe1c11f209ec",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/079/61f1fe1c11f209ec",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/079/61f1fe1c11f209ec"
    },
    name: {
        en: "Dusk Mane Necrozma",
        es: "Necrozma Melena Crepuscular",
        "fr": "Necrozma Crinière du Couchant",
        "it": "Necrozma Criniera del Vespro",
        "de": "Abendmähne-Necrozma",
        "pt-br": "Necrozma Juba Crepúsculo",
        "zh-tw": "奈克洛茲瑪黃昏之鬃",
        ja: "ネクロズマたそがれのたてがみ",
        ko: "네크로즈마 황혼의 갈기",
    },
    illustrator: "nagimiso",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Metal"],
    description: {
        en: "This is its form while it is devouring the light of\nSolgaleo. It pounces on foes and then slashes\nthem with the claws on its four limbs and back.",
        es: "Forma que adopta tras alimentarse de la luz de Solgaleo.\nSe lanza sobre su oponente y lo desgarra sin piedad.",
        "fr": "La forme que Necrozma prend lorsqu'il absorbe la lumière de Solgaleo. Il bondit sur ses ennemis et leur assène des coups de griffes.",
        "it": "Necrozma assume questa forma quando si nutre della luce di Solgaleo. Lacera i nemici con gli artigli che ha sulla schiena e sugli arti.",
        "de": "Necrozma nimmt diese Form an, wenn es das Licht von Solgaleo verschlingt. Es schlitzt Gegner mit seinen vielen scharfen Krallen auf.",
        "pt-br": "Esta é sua forma enquanto devora a luz de Solgaleo. Atira-se nos seus oponentes e os corta com suas garras sem dó ou piedade.",
        "zh-tw": "不斷吞食著索爾迦雷歐的光。會撲向敵人，用背上和四肢的爪子將對手斬斷。",
        ja: "ソルガレオの光を 喰らい続ける姿。 敵に とびかかり 背中と四肢のツメで 相手を 切り裂く。",
        ko: "솔가레오의 빛을 먹어치우는\n모습이다. 적에게 덤벼들어 등과\n사지의 발톱으로 상대를 베어 가른다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Black Metal",
                es: "Black Metal",
                "fr": "Black Metal",
                "it": "Black Metal",
                "de": "Black Metal",
                "pt-br": "Black Metal",
                "zh-tw": "鬃黑金屬",
                ja: "ブラックメタル",
                ko: "블랙메탈"
            },
            damage: 100,
            cost: ["Metal", "Colorless", "Colorless"],
            effect: {
                en: "Discard a {M} Energy from this Pokémon.",
                es: "Descarta 1 Energía {M} de este Pokémon.",
                "fr": "Défaussez une {M} Énergie de ce Pokémon.",
                "it": "Rimuovi un’Energia {M} da questo Pokémon.",
                "de": "Lege 1 {M}-Energie von diesem Pokémon ab.",
                "pt-br": "Descarte 1 Energia {M} deste Pokémon.",
                "zh-tw": "將這隻寶可夢身上的1個{M}能量丟棄。",
                ja: "このポケモンから{M}エネルギーを1個トラッシュ。",
                ko: "이 포켓몬에서 {M}에너지를 1개 트래쉬한다."
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["vol9"]
};
export default card;
