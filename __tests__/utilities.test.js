import { BAR_COLORS, getRatingColor, getVoteColor, getGradeColor } from '../app/utilities/colors'


describe('Color utility functions', () => {

    describe('getRatingColor', () => {

        it('returns a color gradient when passed valid number string score', () => {
            expect(getRatingColor('0')).toBe(BAR_COLORS.OPPOSED);
            expect(getRatingColor('1')).toBe(BAR_COLORS.OPPOSED);
            expect(getRatingColor('100')).toBe(BAR_COLORS.SUPPORTED);
        })

        it('returns bar error (gray) when not a number string', () => {
            expect(getRatingColor('')).toBe(BAR_COLORS.ERROR)
            expect(getRatingColor('abc')).toBe(BAR_COLORS.ERROR)
            expect(getRatingColor(undefined)).toBe(BAR_COLORS.ERROR)
        })
    })
   
    describe('getVoteColor', () => {
        it('returns a bar color for vote strings -1, 0, 1', () => {
            expect(getVoteColor('-1')).toBe(BAR_COLORS.OPPOSED);
            expect(getVoteColor('0')).toBe(BAR_COLORS.ABSENT);
            expect(getVoteColor('1')).toBe(BAR_COLORS.SUPPORTED);
        })

        it('returns gray for non number vote strings', () => {
            expect(getVoteColor('abc')).toBe(BAR_COLORS.ERROR);
            expect(getVoteColor('')).toBe(BAR_COLORS.ERROR);
            expect(getVoteColor(undefined)).toBe(BAR_COLORS.ERROR);
        })
    })

    describe('getGradeColor', () => {
        it('returns correct color for each grade', () => {
            expect(getGradeColor('A')).toBe(BAR_COLORS.SUPPORTED);
            expect(getGradeColor('B')).toBe(BAR_COLORS.SUPPORTED);
            expect(getGradeColor('C')).toBe('orange');
            expect(getGradeColor('D')).toBe('orange');
            expect(getGradeColor('F')).toBe(BAR_COLORS.OPPOSED);
        });

        it('returns gray for non grades', () => {
            expect(getGradeColor('Z')).toBe(BAR_COLORS.ERROR); 
            expect(getGradeColor(undefined)).toBe(BAR_COLORS.ERROR);
        })
    });
});