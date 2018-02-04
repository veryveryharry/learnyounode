const fs = require('fs');
const path = require('path');

const dirpath = process.argv[2];
const filter_ext = '.' + process.argv[3];

fs.readdir(dirpath, (err, data) => {
    if (err) return console.error(err);
    data.forEach((filename) => {
        if (path.extname(filename) == filter_ext) {
            console.log(filename);
        }
    });
});