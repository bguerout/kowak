const { fail } = require('assert');
const { microtask, timer, immediate, nexttick } = require('../lib/native-promise');
const { assertFullStackIsMissing, assertFullStackIsPresent } = require('./utils');

describe(__filename, () => {

    it('[native-promise] microtask', () => {
        return microtask()
        .then(() => fail())
        .catch(e => assertFullStackIsPresent('native-promise', 'microtask', e));
    });

    it('[native-promise] timer', () => {
        return timer()
        .then(() => fail())
        .catch(e => assertFullStackIsMissing('native-promise', 'timer', e));
    });

    it('[native-promise] immediate', () => {
        return immediate()
        .then(() => fail())
        .catch(e => assertFullStackIsMissing('native-promise', 'immediate', e));
    });

    it('[native-promise] nexttick', () => {
        return nexttick()
        .then(() => fail())
        .catch(e => assertFullStackIsMissing('native-promise', 'nexttick', e));
    });
});
