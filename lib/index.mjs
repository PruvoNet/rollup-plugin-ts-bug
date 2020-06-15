import { EventEmitter } from 'events';

class T extends EventEmitter {
}
const main = (emitter) => {
    return emitter.getMaxListeners();
};

export { T, main };
