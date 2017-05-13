import { wavEncoder } from '../../src/module';

describe('module', () => {

    let audioContext;
    let mediaStream;

    afterEach(() => audioContext.close());

    beforeEach(() => {
        audioContext = new AudioContext();

        const oscillator = audioContext.createOscillator();
        const mediaStreamDestination = audioContext.createMediaStreamDestination();

        oscillator.connect(mediaStreamDestination);

        oscillator.start();

        mediaStream = mediaStreamDestination.stream;
    });

    it('should encode a mediaStream', (done) => {
        const wavRecorder = wavEncoder.start(mediaStream);

        setTimeout(() => {
            wavRecorder
                .stop()
                // Test if the arrayBuffer is decodable.
                .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
                .then((audioBuffer) => {
                    // Test if the audioBuffer is at least half a second long.
                    expect(audioBuffer.duration).to.above(0.5);

                    done();
                })
                .catch((err) => done(err));
        }, 1000);
    });

});
