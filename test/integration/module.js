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
                    // Test if the audioBuffer is about one second long.
                    expect(audioBuffer.duration).to.closeTo(1, 0.3);

                    done();
                })
                .catch((err) => done(err));
        }, 1000);
    });

});
