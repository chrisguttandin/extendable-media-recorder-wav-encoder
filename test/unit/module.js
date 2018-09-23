import { connect, disconnect, isSupported } from '../../src/module';

describe('module', () => {

    describe('characterize()', () => {

        // @todo

    });

    describe('connect()', () => {

        it('should connect a port', () => {
            return connect()
                .then((port) => {
                    expect(port).to.be.an.instanceOf(MessagePort);
                });
        });

    });

    describe('disconnect()', () => {

        let port;

        beforeEach(() => connect()
            .then((prt) => port = prt));

        it('should disconnect a port', () => {
            return disconnect(port);
        });

    });

    describe('encode()', () => {

        // @todo

    });

    describe('isSupported()', () => {

        it('should check the browser support', () => {
            return isSupported();
        });

    });

    describe('record()', () => {

        // @todo

    });

});
