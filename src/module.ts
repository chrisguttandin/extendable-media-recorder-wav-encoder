import { IWavEncoder, load } from 'extendable-media-recorder-wav-encoder-broker';
import { worker } from './worker/worker';

const blob: Blob = new Blob([ worker ], { type: 'application/javascript; charset=utf-8' });

const url: string = URL.createObjectURL(blob);

export const wavEncoder: IWavEncoder = load(url);
