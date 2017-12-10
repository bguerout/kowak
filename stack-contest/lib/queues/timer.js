module.exports = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('timer error'), 1000));
    });
};