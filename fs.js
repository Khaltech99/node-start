const fs = require("fs");
const myFile = "azeez.txt";

fs.open(myFile, "r+", (err, fd) => {
  if (err) {
    console.log(`code: ${err.code}/ message: ${err.message}`);
  } else {
    console.log(`file ${fd}  opened success`);
  }
  fs.close(fd, (err) => {
    if (err) {
      console.log(`code:${err.code}/ message:${err.message}`);
    } else {
      console.log(`file ${fd} is closed success`);
    }
  });
});
