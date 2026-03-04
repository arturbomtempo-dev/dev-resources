import { hexToRgb } from '../hexToRgb';

describe('hexToRgb Utility', () => {
    it('should convert hex to RGB array', () => {
        const result = hexToRgb('#FF0000');
        expect(result).toEqual([1, 0, 0]);
    });

    it('should handle lowercase hex', () => {
        const result = hexToRgb('#00ff00');
        expect(result).toEqual([0, 1, 0]);
    });

    it('should handle hex without hash', () => {
        const result = hexToRgb('0000FF');
        expect(result).toEqual([0, 0, 1]);
    });

    it('should normalize RGB values to 0-1 range', () => {
        const result = hexToRgb('#808080');
        expect(result[0]).toBeCloseTo(0.5, 1);
        expect(result[1]).toBeCloseTo(0.5, 1);
        expect(result[2]).toBeCloseTo(0.5, 1);
    });

    it('should handle white color', () => {
        const result = hexToRgb('#FFFFFF');
        expect(result).toEqual([1, 1, 1]);
    });

    it('should handle black color', () => {
        const result = hexToRgb('#000000');
        expect(result).toEqual([0, 0, 0]);
    });

    it('should return white fallback for invalid hex and warn', () => {
        const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();

        const result = hexToRgb('invalid');

        expect(result).toEqual([1, 1, 1]);
        expect(consoleSpy).toHaveBeenCalledWith(
            'Invalid hex color: "invalid". Using white as fallback.'
        );

        consoleSpy.mockRestore();
    });

    it('should return white fallback for short hex strings', () => {
        const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();

        const result = hexToRgb('#FFF');

        expect(result).toEqual([1, 1, 1]);
        expect(consoleSpy).toHaveBeenCalled();

        consoleSpy.mockRestore();
    });

    it('should return white fallback for empty string', () => {
        const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();

        const result = hexToRgb('');

        expect(result).toEqual([1, 1, 1]);
        expect(consoleSpy).toHaveBeenCalled();

        consoleSpy.mockRestore();
    });
});
