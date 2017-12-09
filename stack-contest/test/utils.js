module.exports = {
    assertFullStackIsMissing: (t, strategy, queue) => err => {
        t.true(err.stack.indexOf(`stack/lib/queues/${queue}.js`) !== -1);
        t.true(err.stack.indexOf(`stack/lib/${strategy}.js`) === -1);
        t.true(err.stack.indexOf(`stack/test/${strategy}-test.js`) === -1);
    },
    assertFullStackIsPresent: (t, strategy, queue) => err => {
        t.true(err.stack.indexOf(`stack/lib/queues/${queue}.js`) !== -1);
        t.true(err.stack.indexOf(`stack/lib/${strategy}.js`) !== -1);
        t.true(err.stack.indexOf(`stack/test/${strategy}-test.js`) !== -1);
    },
    assertFullStackIsPartial: (t, strategy, queue) => err => {
        t.true(err.stack.indexOf(`stack/lib/queues/${queue}.js`) !== -1);
        t.true(err.stack.indexOf(`stack/lib/${strategy}.js`) !== -1);
        t.true(err.stack.indexOf(`stack/test/${strategy}-test.js`) === -1);
    }
};
