import { DEFAULT_GRAINIENT_VALUES } from '../grainient.constants';

describe('Grainient Constants', () => {
    it('should have default timeSpeed', () => {
        expect(DEFAULT_GRAINIENT_VALUES.timeSpeed).toBeDefined();
        expect(typeof DEFAULT_GRAINIENT_VALUES.timeSpeed).toBe('number');
    });

    it('should have default color values', () => {
        expect(DEFAULT_GRAINIENT_VALUES.color1).toBeDefined();
        expect(DEFAULT_GRAINIENT_VALUES.color2).toBeDefined();
        expect(DEFAULT_GRAINIENT_VALUES.color3).toBeDefined();
    });

    it('should have default animation properties', () => {
        expect(DEFAULT_GRAINIENT_VALUES.warpStrength).toBeDefined();
        expect(DEFAULT_GRAINIENT_VALUES.warpFrequency).toBeDefined();
        expect(DEFAULT_GRAINIENT_VALUES.warpSpeed).toBeDefined();
    });

    it('should have default grain properties', () => {
        expect(DEFAULT_GRAINIENT_VALUES.grainAmount).toBeDefined();
        expect(DEFAULT_GRAINIENT_VALUES.grainScale).toBeDefined();
        expect(DEFAULT_GRAINIENT_VALUES.grainAnimated).toBeDefined();
    });

    it('should have default center and zoom', () => {
        expect(DEFAULT_GRAINIENT_VALUES.centerX).toBeDefined();
        expect(DEFAULT_GRAINIENT_VALUES.centerY).toBeDefined();
        expect(DEFAULT_GRAINIENT_VALUES.zoom).toBeDefined();
    });

    it('should have numeric values within valid ranges', () => {
        expect(DEFAULT_GRAINIENT_VALUES.timeSpeed).toBeGreaterThan(0);
        expect(DEFAULT_GRAINIENT_VALUES.zoom).toBeGreaterThan(0);
    });
});
