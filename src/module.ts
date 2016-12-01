import { worker } from './worker/worker';
import { load } from 'extendable-media-recorder-wav-encoder-broker';

const blob: Blob = new Blob([ worker ], { type: 'application/javascript' });

const url: string = URL.createObjectURL(blob);

export const wavEncoder = load(url);
