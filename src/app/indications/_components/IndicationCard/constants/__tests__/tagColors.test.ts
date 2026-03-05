import { tagColors } from '../tagColors';

describe('Tag Colors', () => {
    it('should be defined', () => {
        expect(tagColors).toBeDefined();
    });

    it('should be an object', () => {
        expect(typeof tagColors).toBe('object');
    });

    it('should have color for common tags', () => {
        expect(tagColors['Frontend']).toBeDefined();
        expect(tagColors['Backend']).toBeDefined();
        expect(tagColors['JavaScript']).toBeDefined();
        expect(tagColors['TypeScript']).toBeDefined();
    });

    it('should have valid Tailwind classes', () => {
        Object.values(tagColors).forEach((color) => {
            expect(typeof color).toBe('string');
            expect(color.length).toBeGreaterThan(0);
        });
    });
});
 