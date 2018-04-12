const Rx = require('rx');
const timer = require('./queues/timer');
const immediate = require('./queues/immediate');
const nexttick = require('./queues/nexttick');
const microtask = require('./queues/microtask');

module.exports = {
    timer: () => Rx.Observable.fromPromise(timer()),
    microtask: () => Rx.Observable.fromPromise(microtask()),
    immediate: () => Rx.Observable.fromPromise(immediate()),
    nexttick: () => Rx.Observable.fromPromise(nexttick()),
};
