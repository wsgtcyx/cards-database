import { Set } from "../../interfaces";
import serie from "../Pokémon TCG Pocket";

const set: Set = {
	id: "A2",

	name: {
		de: "Kollision von Raum und Zeit",
		en: "Space-Time Smackdown",
		es: "Pugna Espaciotemporal",
		fr: "Choc Spatio-Temporel",
		it: "Scontro Spaziotemporale",
		"pt-br": "Embate do Tempo e Espaço",
		ko: "시공의 격투",
		"zh-tw": "時空激戰"
	},

	serie: serie,

	cardCount: {
		official: 140,
	},

	boosters: {
		palkia: {
			name: {
				de: "Palkia",
				en: "Palkia",
				fr: "Palkia",
				es: "Palkia",
				it: "Palkia",
				"pt-br": "Palkia",
				ko: "펄기아",
				"zh-tw": "帕路奇犽",
			},
		},
		dialga: {
			name: {
				de: "Dialga",
				en: "Dialga",
				fr: "Dialga",
				es: "Dialga",
				it: "Dialga",
				"pt-br": "Dialga",
				ko: "디아루가",
				"zh-tw": "帝牙盧卡",
			},
		},
	},

	releaseDate: "2025-01-30",
};

export default set;
