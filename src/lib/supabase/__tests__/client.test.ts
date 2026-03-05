import { supabase } from '../client';

describe('Supabase Client', () => {
    it('should be defined', () => {
        expect(supabase).toBeDefined();
    });

    it('should have auth methods', () => {
        expect(supabase.auth).toBeDefined();
    });

    it('should have from method for queries', () => {
        expect(typeof supabase.from).toBe('function');
    });

    it('should have channel method for realtime', () => {
        expect(typeof supabase.channel).toBe('function');
    });

    it('should have removeChannel method', () => {
        expect(typeof supabase.removeChannel).toBe('function');
    });
});
