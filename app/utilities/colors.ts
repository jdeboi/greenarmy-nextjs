
import { Rainbow } from "./rainbow";

export const BAR_COLORS = {
	SUPPORTED: "#2ABD12",
	OPPOSED: "#F00000",
	ABSENT: "#FDD600",
	ERROR: "gray"
}

const voteColorSpectrum = new Rainbow([BAR_COLORS.OPPOSED, BAR_COLORS.ABSENT, BAR_COLORS.SUPPORTED]);
voteColorSpectrum.setNumberRange(50, 100);

// used to color districts and percentage text
export function getRatingColor(scoreStr: string | undefined) {
	if (scoreStr == '0')
		return BAR_COLORS.OPPOSED;
	if (!scoreStr || scoreStr == "N/A" || !parseInt(scoreStr))
		return BAR_COLORS.ERROR;
	return "#" + voteColorSpectrum.colorAt(parseInt(scoreStr)).toUpperCase();
}

// used for the vote / bill squares
export function getVoteColor(voteVal: string) {
	const { ERROR, ABSENT, SUPPORTED, OPPOSED } = BAR_COLORS;

	const val = parseInt(voteVal);
	if (isNaN(val)) return ERROR;
	else if (val == 0) return ABSENT;
	else if (val > 0) return SUPPORTED;
	return OPPOSED;
}

export function getGradeColor(grade: string) {
	const { ERROR, ABSENT, SUPPORTED, OPPOSED } = BAR_COLORS;

	if (grade == "A") return SUPPORTED;
	else if (grade == 'B') return SUPPORTED;
	else if (grade == 'C') return "orange";
	else if (grade == 'D') return "orange";
	else if (grade == 'F') return OPPOSED;
	else return ERROR;
}


/////////////////////////////////////////
// Color Mixing Helpers

// used to get different shades of vote / bill squares
export function getShadeColor(colorHex: string, percent: number) {
	const f = parseInt(colorHex.slice(1), 16);
	const t = percent < 0 ? 0 : 255;
	const p = percent < 0 ? percent * -1 : percent;
	const R = f >> 16, G = f >> 8 & 0x00FF, B = f & 0x0000FF;
	const col = "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
	return col.toUpperCase();
}

// takes two hex colors and blends them based on a percent
export function blendColors(col0Hex: string, col1Hex: string, percent: number) {
	const f = parseInt(col0Hex.slice(1), 16);
	const t = parseInt(col1Hex.slice(1), 16);
	const R1 = f >> 16, G1 = f >> 8 & 0x00FF;
	const B1 = f & 0x0000FF, R2 = t >> 16;
	const G2 = t >> 8 & 0x00FF;
	const B2 = t & 0x0000FF;
	const col = "#" + (0x1000000 + (Math.round((R2 - R1) * percent) + R1) * 0x10000 + (Math.round((G2 - G1) * percent) + G1) * 0x100 + (Math.round((B2 - B1) * percent) + B1)).toString(16).slice(1);
	return col.toUpperCase();
}


/////////////////////////////////////////
// Label Helpers
export const getHouseBillLabel = (index: number) => {
	switch (index) {
		case 0: return "v1";
		case 1: return "v2";
		case 2: return "v3";
		case 3: return "v5";
		case 4: return "v7";
		case 5: return "v8";
		case 6: return "v9";
		case 7: return "v10";
		case 8: return "v12";
		case 9: return "v13";
		case 10: return "v14";
		case 11: return "v15";
		case 12: return "v16";
		case 13: return "v17";
		default: return "v1"
	}
}

export const getSenateBillLabel = (index: number) => {
	switch (index) {
		case 0: return "v1";
		case 1: return "v2";
		case 2: return "v4";
		case 3: return "v5";
		case 4: return "v7";
		case 5: return "v8";
		case 6: return "v9";
		case 7: return "v10";
		case 8: return "v11";
		case 9: return "v12";
		case 10: return "v13";
		case 11: return "v14";
		case 12: return "v15";
		case 13: return "v16";
		case 14: return "v17";
		default: return "v1"
	}
}