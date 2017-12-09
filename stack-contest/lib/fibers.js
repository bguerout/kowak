const { wait, run } = require('f-promise');
const timer = require('./queues/timer');
const immediate = require('./queues/immediate');
const nexttick = require('./queues/nexttick');
const microtask = require('./queues/microtask');

module.exports = {
    timer: () => run(() => wait(timer())),
    microtask: () => run(() => wait(microtask())),
    immediate: () => run(() => wait(immediate())),
    nexttick: () => run(() => wait(nexttick())),
};

