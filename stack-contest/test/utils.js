const { ok } = require('assert');

module.exports = {
    assertFullStackIsMissing: (strategy, queue, err) => {
        ok(err.stack.indexOf(`Error: ${queue} error`) !== -1);
        ok(err.stack.indexOf(`stack-contest/lib/queues/${queue}.js`) !== -1);
        ok(err.stack.indexOf(`stack-contest/lib/${strategy}.js`) === -1);
        ok(err.stack.indexOf(`stack-contest/test/${strategy}-test.js`) === -1);
    },
    assertFullStackIsPresent: (strategy, queue, err) => {
        ok(err.stack.indexOf(`Error: ${queue} error`) !== -1);
        ok(err.stack.indexOf(`stack-contest/lib/queues/${queue}.js`) !== -1);
        ok(err.stack.indexOf(`stack-contest/lib/${strategy}.js`) !== -1);
        ok(err.stack.indexOf(`stack-contest/test/${strategy}-test.js`) !== -1);
    },
    assertFullStackIsPartial: (strategy, queue, err) => {
        ok(err.stack.indexOf(`Error: ${queue} error`) !== -1);
        ok(err.stack.indexOf(`stack-contest/lib/queues/${queue}.js`) !== -1);
        ok(err.stack.indexOf(`stack-contest/lib/${strategy}.js`) !== -1);
        ok(err.stack.indexOf(`stack-contest/test/${strategy}-test.js`) === -1);
    }
};
