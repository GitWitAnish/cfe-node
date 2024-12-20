const fs = require('fs');


fs.open("name.txt", "r", (err, fd) => {
    if (err) return console.error(err);

    const buffer = Buffer.alloc(1024);


fs.read(fd, buffer, 0, buffer.length, 0, (err, bytes) => {
        if (err) return console.error(err);


 console.log(`Your name is ${buffer.toString("utf-8", 0, bytes)}`);
    });


 fs.close(fd, (err) => {
        if (err) console.error(err); 
        console.log("File closed successfully");
      });
    });