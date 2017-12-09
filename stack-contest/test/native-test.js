const test = require('ava');
const { assertFullStackIsMissing, assertFullStackIsPresent } = require('./utils');

test.beforeEach(t => {
    t.context = require('../lib/native');
});

test('[native] microtask', t => {
    const { microtask } = t.context;
    return microtask()
        .then(() => t.fail())
        .catch(assertFullStackIsPresent(t, 'native', 'microtask'));
});

test('[native] timer', t => {
    const { timer } = t.context;
    return timer()
        .then(() => t.fail())
        .catch(assertFullStackIsMissing(t, 'native', 'timer'));
});

test('[native] immediate', t => {
    const { immediate } = t.context;
    return immediate()
        .then(() => t.fail())
        .catch(assertFullStackIsMissing(t, 'native', 'immediate'));
});

test('[native] nexttick', t => {
    const { nexttick } = t.context;
    return nexttick()
        .then(() => t.fail())
        .catch(assertFullStackIsMissing(t, 'native', 'nexttick'));
});