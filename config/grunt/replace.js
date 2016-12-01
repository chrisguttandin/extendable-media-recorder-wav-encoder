const readFileSync = require('fs').readFileSync;

module.exports = {
    worker: {
        files: {
            'src/worker/worker.ts': [
                'src/worker/worker.ts'
            ]
        },
        options: {
            patterns: [ {
                match: /export\sconst\sworker\s=\s`(.*)`;/g,
                replacement: () => {
                    return `export const worker = \`${ readFileSync(require.resolve('extendable-media-recorder-wav-encoder-worker/build/es5/worker.min')) }\`;`;
                }
            } ]
        }
    }
};
