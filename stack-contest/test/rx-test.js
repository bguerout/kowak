const test = require('ava');
const { assertFullStackIsMissing, assertFullStackIsPresent, assertFullStackIsPartial } = require('./utils');

test.beforeEach(t => {
    t.context = require('../lib/rx');
});

test.cb('[rx] microtask', t => {
    const { microtask } = t.context;
    return microtask()
    .subscribe(
        () => t.fail(),
        err => {
            assertFullStackIsPresent(t, 'rx', 'microtask')(err);
            t.end();
        }
    );
});

test.cb('[rx] timer', t => {
    const { timer } = t.context;
    return timer()
    .subscribe(
        () => t.fail(),
        err => {
            assertFullStackIsMissing(t, 'rx', 'timer')(err);
            t.end();
        }
    );
});

test.cb('[rx] immediate', t => {
    const { immediate } = t.context;
    return immediate()
    .subscribe(
        () => t.fail(),
        err => {
            assertFullStackIsMissing(t, 'rx', 'immediate')(err);
            t.end();
        }
    );
});

test.cb('[rx] nexttick', t => {
    const { nexttick } = t.context;
    return nexttick()
    .subscribe(
        () => t.fail(),
        err => {
            assertFullStackIsMissing(t, 'rx', 'nexttick')(err);
            t.end();
        }
    );
});