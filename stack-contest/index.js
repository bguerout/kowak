process.on('unhandledRejection', r => console.error(r));
process.on('uncaughtException', r => console.error(r));


console.log(`#################### ${process.env.STRATEGY} ######################`);
const { local, timer, microtask, immediate, nexttick } = require(`./lib/${process.env.STRATEGY}`);

local();
timer();
microtask();
immediate();
nexttick();

