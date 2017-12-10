const test = require('ava');
const { assertFullStackIsMissing, assertFullStackIsPresent } = require('./utils');

test.beforeEach(t => {
    t.context = require('../lib/native-promise');
});

test('[native-promise] microtask', t => {
    const { microtask } = t.context;
    return microtask()
        .then(() => t.fail())
        .catch(assertFullStackIsPresent(t, 'native-promise', 'microtask'));
});

test('[native-promise] timer', t => {
    const { timer } = t.context;
    return timer()
        .then(() => t.fail())
        .catch(assertFullStackIsMissing(t, 'native-promise', 'timer'));
});

test('[native-promise] immediate', t => {
    const { immediate } = t.context;
    return immediate()
        .then(() => t.fail())
        .catch(assertFullStackIsMissing(t, 'native-promise', 'immediate'));
});

test('[native-promise] nexttick', t => {
    const { nexttick } = t.context;
    return nexttick()
        .then(() => t.fail())
        .catch(assertFullStackIsMissing(t, 'native-promise', 'nexttick'));
});