const { fail } = require('assert');
const { microtask, timer, immediate, nexttick } = require('../lib/rx');
const { assertFullStackIsMissing, assertFullStackIsPresent } = require('./utils');

describe(__filename, () => {

    it('[rx] microtask', done => {
        return microtask()
        .subscribe(
            () => fail(),
            err => {
                assertFullStackIsPresent('rx', 'microtask', err);
                done();
            }
        );
    });

    it('[rx] timer', done => {
        return timer()
        .subscribe(
            () => fail(),
            err => {
                assertFullStackIsMissing('rx', 'timer', err);
                done();
            }
        );
    });

    it('[rx] immediate', done => {
        return immediate()
        .subscribe(
            () => fail(),
            err => {
                assertFullStackIsMissing('rx', 'immediate', err);
                done();
            }
        );
    });

    it('[rx] nexttick', done => {
        return nexttick()
        .subscribe(
            () => fail(),
            err => {
                assertFullStackIsMissing('rx', 'nexttick', err);
                done();
            }
        );
    });
});
