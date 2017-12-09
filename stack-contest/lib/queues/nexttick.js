module.exports = () => {
    return new Promise((resolve, reject) => {
        process.nextTick(() => reject(new Error('next tick error')));
    });
};