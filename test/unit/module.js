import { wavEncoder } from '../../src/module';

describe('module', () => {

    it('should export the wavEncoder', () => {
        expect(wavEncoder).to.be.an('object');
    });

});
