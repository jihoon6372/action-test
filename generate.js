const fs = require("fs");
fs.writeFileAsync("test.txt", new Date().toString(), (err) => console.log(err));
