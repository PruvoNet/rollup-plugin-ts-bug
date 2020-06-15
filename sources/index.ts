import {EventEmitter} from 'events';

export class T extends EventEmitter {

}

export const main = (emitter: T): number => {
    return emitter.getMaxListeners();
}
