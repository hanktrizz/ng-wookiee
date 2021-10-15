import { StripUnderscorePipe } from './strip-underscore.pipe';

describe('StripUnderscorePipe', () => {
    it('create an instance', () => {
        const pipe = new StripUnderscorePipe();
        expect(pipe).toBeTruthy();
    });
});
