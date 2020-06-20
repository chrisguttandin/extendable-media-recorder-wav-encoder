import { load } from 'extendable-media-recorder-wav-encoder-broker';
import { worker } from './worker/worker';

const blob: Blob = new Blob([worker], { type: 'application/javascript; charset=utf-8' });

const url: string = URL.createObjectURL(blob);

const extendableMediaRecorderWavEncoder = load(url);

export const characterize = extendableMediaRecorderWavEncoder.characterize;

export const connect = extendableMediaRecorderWavEncoder.connect;

export const disconnect = extendableMediaRecorderWavEncoder.disconnect;

export const encode = extendableMediaRecorderWavEncoder.encode;

export const isSupported = extendableMediaRecorderWavEncoder.isSupported;

export const record = extendableMediaRecorderWavEncoder.record;

URL.revokeObjectURL(url);
