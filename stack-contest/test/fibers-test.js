const test = require('ava');
const { assertFullStackIsPartial, assertFullStackIsPresent } = require('./utils');

test.beforeEach(t => {
    t.context = require('../lib/fibers');
});

test('[fibers] microtask', t => {
    const { microtask } = t.context;
    return microtask()
        .then(() => t.fail())
        .catch(assertFullStackIsPartial(t, 'fibers', 'microtask'));
});

test('[fibers] timer', t => {
    const { timer } = t.context;
    return timer()
        .then(() => t.fail())
        .catch(assertFullStackIsPartial(t, 'fibers', 'timer'));
});

test('[fibers] immediate', t => {
    const { immediate } = t.context;
    return immediate()
        .then(() => t.fail())
        .catch(assertFullStackIsPartial(t, 'fibers', 'immediate'));
});

test('[fibers] nexttick', t => {
    const { nexttick } = t.context;
    return nexttick()
        .then(() => t.fail())
        .catch(assertFullStackIsPartial(t, 'fibers', 'nexttick'));
});