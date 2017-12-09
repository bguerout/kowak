module.exports = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('timeout error'), 1000));
    });
};