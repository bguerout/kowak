const { microtask, timer, immediate, nexttick } = require('../lib/await');
const { assertFullStackIsMissing, assertFullStackIsPresent } = require('./utils');

describe(__filename, () => {

    it('[await] microtask', async () => {
        try {
            await microtask();
        } catch (e) {
            assertFullStackIsPresent('await', 'microtask', e)
        }
    });

    it('[await] timer', async () => {
        try {
            await timer();
        } catch (e) {
            assertFullStackIsMissing('await', 'timer', e)
        }
    });

    it('[await] immediate', async () => {
        try {
            await immediate();
        } catch (e) {
            assertFullStackIsMissing('await', 'immediate', e)
        }
    });

    it('[await] nexttick', async () => {

        try {
            await nexttick();
        } catch (e) {
            assertFullStackIsMissing('await', 'nexttick', e)
        }
    });
});
