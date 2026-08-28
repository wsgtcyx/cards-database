import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/048",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/048",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/048",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/048",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/048",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/048",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/048"
    },
    name: {
        en: "Team Rocket's Tinkatink",
        fr: "Forgerette de la Team Rocket",
        es: "Tinkatink del Team Rocket",
        it: "Tinkatink del Team Rocket",
        de: "Team Rockets Forgita",
        "pt-br": "Tinkatink da Equipe Rocket",
        "zh-tw": "火箭隊的小鍛匠",
        ko: "로켓단의 어리짱",
        ja: "ロケット団のカヌチャン"
    },
    illustrator: "mingo",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Metal"],
    stage: "Basic",
    description: {
        en: "This Pokémon pounds iron scraps together to make a hammer. It will remake the hammer again and again until it's satisfied with the result.",
        fr: "Ce Pokémon frappe des copeaux de ferraille afin de se fabriquer un marteau, ll persévère jusqu'à ce quil soit satisfait du résultat.",
        es: "Forja su martillo golpeando residuos metálicos. Repite este proceso todas las veces que sean necesarias hasta que le satisfaga el resultado.",
        it: "Forgia il suo martello colpendo ripetutamente dei pezzi di ferraglia. Se non è soddisfatto del risultato, ricomincia più e più volte da capo.",
        de: "Es stellt seinen Hammer her, indem es Eisenspäne zusammenstampft. Diesen Vorgang wiederholt es so oft, bis es mit dem Ergebnis zufrieden ist.",
        "pt-br": "Este Pokémon usa ferro sucateado para fazer um martelo. Vai refazê-lo o quanto for preciso até ficar contente com o resultado.",
        "zh-tw": "敲打鐵屑來製作錘子。直到做出自己滿意的作品前，會一次又一次地重做。"
    },
    attacks: [
        {
            cost: ["Metal"],
            name: {
                en: "Lunge Out",
                fr: "Allonger",
                es: "Arremeter",
                it: "Affondo Lungo",
                de: "Sprungangriff",
                "pt-br": "Bote",
                "zh-tw": "撞倒"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
