const test = require('ava');
const { assertFullStackIsMissing, assertFullStackIsPresent } = require('./utils');

test.beforeEach(t => {
    t.context = require('../lib/await');
});

test('[await] microtask', async t => {
    const { microtask } = t.context;
    try {
        await microtask();
    } catch (e) {
        assertFullStackIsPresent(t, 'await', 'microtask')(e)
    }
});

test('[await] timer', async t => {
    const { timer } = t.context;
    try {
        await timer();
    } catch (e) {
        assertFullStackIsMissing(t, 'await', 'timer')(e)
    }
});

test('[await] immediate', async t => {
    const { immediate } = t.context;
    try {
        await immediate();
    } catch (e) {
        assertFullStackIsMissing(t, 'await', 'immediate')(e)
    }
});

test('[await] nexttick', async t => {
    const { nexttick } = t.context;

    try {
        await nexttick();
    } catch (e) {
        assertFullStackIsMissing(t, 'await', 'nexttick')(e)
    }
});