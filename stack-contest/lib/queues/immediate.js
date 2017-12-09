module.exports = () => {
    return new Promise((resolve, reject) => {
        setImmediate(() => reject(new Error('immediate error')));
    });
};