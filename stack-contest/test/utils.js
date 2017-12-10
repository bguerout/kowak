module.exports = {
    assertFullStackIsMissing: (t, strategy, queue) => err => {
        t.true(err.stack.indexOf(`Error: ${queue} error`) !== -1);
        t.true(err.stack.indexOf(`stack-contest/lib/queues/${queue}.js`) !== -1);
        t.false(err.stack.indexOf(`stack-contest/lib/${strategy}.js`) !== -1);
        t.false(err.stack.indexOf(`stack-contest/test/${strategy}-test.js`) !== -1);
    },
    assertFullStackIsPresent: (t, strategy, queue) => err => {
        t.true(err.stack.indexOf(`Error: ${queue} error`) !== -1);
        t.true(err.stack.indexOf(`stack-contest/lib/queues/${queue}.js`) !== -1);
        t.true(err.stack.indexOf(`stack-contest/lib/${strategy}.js`) !== -1);
        t.true(err.stack.indexOf(`stack-contest/test/${strategy}-test.js`) !== -1);
    },
    assertFullStackIsPartial: (t, strategy, queue) => err => {
        t.true(err.stack.indexOf(`Error: ${queue} error`) !== -1);
        t.true(err.stack.indexOf(`stack-contest/lib/queues/${queue}.js`) !== -1);
        t.true(err.stack.indexOf(`stack-contest/lib/${strategy}.js`) !== -1);
        t.false(err.stack.indexOf(`stack-contest/test/${strategy}-test.js`) !== -1);
    }
};
