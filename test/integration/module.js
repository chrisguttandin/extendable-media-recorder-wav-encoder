import { wavEncoder } from '../../src/module';

describe('module', () => {

    let audioContext;
    let frequency;
    let mediaStream;

    afterEach(() => audioContext.close());

    beforeEach((done) => {
        audioContext = new AudioContext();

        frequency = 441;

        const mediaStreamDestination = audioContext.createMediaStreamDestination();
        const oscillator = audioContext.createOscillator();

        oscillator.frequency.value = frequency;

        oscillator.connect(mediaStreamDestination);

        oscillator.start();

        mediaStream = mediaStreamDestination.stream;

        // Wait a second before starting the recording.
        setTimeout(done, 1000);
    });

    it('should encode a mediaStream', function (done) {
        this.timeout(10000);

        const wavRecorder = wavEncoder.start(mediaStream);

        setTimeout(() => {
            wavRecorder
                .stop()
                // Test if the arrayBuffer is decodable.
                .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
                .then((audioBuffer) => {
                    // Test if the audioBuffer is at least half a second long.
                    expect(audioBuffer.duration).to.above(0.5);

                    // Test if the audioBuffer contains the ouput of the oscillator.
                    const bufferLength = audioContext.sampleRate / frequency;

                    let rotatingBuffers = [ new Float32Array(bufferLength), new Float32Array(bufferLength) ];

                    audioBuffer.copyFromChannel(rotatingBuffers[0], 0);

                    let startInChannel = bufferLength;

                    while (startInChannel < audioBuffer.length - bufferLength) {
                        audioBuffer.copyFromChannel(rotatingBuffers[1], 0, startInChannel);

                        for (let j = 0; j < bufferLength; j += 1) {
                            try {
                                expect(rotatingBuffers[0][j]).to.be.closeTo(rotatingBuffers[1][j], 0.0001);
                            } catch (err) {
                                // For unknown reasons a oscillator can be silent in Chrome.
                                if (rotatingBuffers[0][j] !== 0 && rotatingBuffers[1][j] !== 0) {
                                    throw err;
                                }
                            }
                        }

                        rotatingBuffers = [ rotatingBuffers[1], rotatingBuffers[0] ];
                        startInChannel += bufferLength;
                    }

                    done();
                })
                .catch((err) => done(err));
        }, 1000);
    });

});
