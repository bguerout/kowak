const { fail } = require('assert');
const { microtask, timer, immediate, nexttick } = require('../lib/fibers');
const { assertFullStackIsPartial } = require('./utils');

describe(__filename, () => {

    it('[fibers] microtask', () => {
        return microtask()
        .then(() => fail())
        .catch(e => assertFullStackIsPartial('fibers', 'microtask', e));
    });

    it('[fibers] timer', () => {
        return timer()
        .then(() => fail())
        .catch(e => assertFullStackIsPartial('fibers', 'timer', e));
    });

    it('[fibers] immediate', () => {
        return immediate()
        .then(() => fail())
        .catch(e => assertFullStackIsPartial('fibers', 'immediate', e));
    });

    it('[fibers] nexttick', () => {
        return nexttick()
        .then(() => fail())
        .catch(e => assertFullStackIsPartial('fibers', 'nexttick', e));
    });
});
