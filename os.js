const os = require("os");
const current = {
  name: os.hostname(),
  freeMem: os.freemem(),
  totMem: os.totalmem(),
};

console.log(current);
