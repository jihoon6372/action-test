const fs = require("fs");
fs.writeFile("test.txt", new Date().toString(), (err) => console.log(err));
