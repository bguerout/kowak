const timer = require('./queues/timer');
const immediate = require('./queues/immediate');
const nexttick = require('./queues/nexttick');
const microtask = require('./queues/microtask');

module.exports = {
    timer: () => timer(),
    microtask: () => microtask(),
    immediate: () => immediate(),
    nexttick: () => nexttick(),
};
