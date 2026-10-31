import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1a/015",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1a/015",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1a/015",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1a/015",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1a/015",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1a/015",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1a/015",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1a/015",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1a/015"
    },
    name: {
        en: "Houndour",
        "fr": "Malosse",
        "es": "Houndour",
        "it": "Houndour",
        "de": "Hunduster",
        "pt-br": "Houndour",
        "zh-tw": "戴魯比",
        ja: "デルビル",
        ko: "델빌"
    },
    illustrator: "Naoyo Kimura",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fire"],
    description: {
        en: "It uses different kinds of cries for communicating\nwith others of its kind and for pursuing its prey.",
        "fr": "Il utilise différents types de cris pour communiquer\navec d'autres de son espèce et pour poursuivre ses proies.",
        "es": "Utiliza diferentes tipos de gritos para comunicarse.\ncon otros de su especie y para perseguir a sus presas.",
        "it": "Utilizza diversi tipi di grida per comunicare\ncon altri della sua specie e per inseguire la sua preda.",
        "de": "Es verwendet verschiedene Arten von Schreien zur Kommunikation\nmit anderen seiner Art und für die Verfolgung seiner Beute.",
        "pt-br": "Ele usa diferentes tipos de gritos para se comunicar\ncom outros de sua espécie e para perseguir suas presas.",
        "zh-tw": "它使用不同種類的叫聲進行交流\n與其他同類並追捕獵物。",
        ja: "仲間に 連絡するときと 獲物を 追いつめるときでは 鳴き声の 種類が 違うのだ。",
        ko: "동료에게 연락할 때와\n먹이를 쫓을 때\n울음소리의 종류가 다르다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Roar",
                "fr": "Rugir",
                "es": "Rugido",
                "it": "Ruggito",
                "de": "Brüllen",
                "pt-br": "Rugido",
                "zh-tw": "吼",
                ja: "ほえる",
                ko: "울부짖기"
            },
            cost: ["Colorless"],
            effect: {
                en: "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
                "fr": "Remplacez le Pokémon Actif de votre adversaire par le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
                "es": "Cambia el Pokémon Activo de tu rival a la Banca. (Tu oponente elige el nuevo Pokémon Activo).",
                "it": "Scambia il Pokémon attivo del tuo avversario nella panchina. (Il tuo avversario sceglie il nuovo Pokémon attivo.)",
                "de": "Tauschen Sie das aktive Pokémon Ihres Gegners auf die Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)",
                "pt-br": "Troque o Pokémon Ativo do seu oponente para o Banco. (Seu oponente escolhe o novo Pokémon Ativo.)",
                "zh-tw": "將對手的活躍神奇寶貝移至替補席。 （你的對手選擇新的活躍神奇寶貝。）",
                ja: "相手のバトルポケモンをベンチポケモンと入れ替える。[バトル場に出すポケモンは相手が選ぶ。]",
                ko: "상대의 배틀 포켓몬을 벤치 포켓몬과 교체한다. (배틀필드로 내보낼 포켓몬은 상대가 선택한다.)"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1
};
export default card;
