const timer = require('./queues/timer');
const immediate = require('./queues/immediate');
const nexttick = require('./queues/nexttick');
const microtask = require('./queues/microtask');

module.exports = {
    timer: async () => { await timer() },
    microtask: async () => await microtask(),
    immediate: async () => await immediate(),
    nexttick: async () => await nexttick(),
};
