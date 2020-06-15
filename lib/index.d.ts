/// <reference types="node" />
import { EventEmitter } from 'events';
declare class T extends EventEmitter {
}
declare const main: (emitter: T) => number;
export { T, main };
