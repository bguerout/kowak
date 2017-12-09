module.exports = () => {
    return new Promise((resolve, reject) => {
        reject(new Error('microtask error'), 1000);
    });
};