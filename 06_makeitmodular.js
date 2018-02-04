const filter = require('./06_module');
const pathname = process.argv[2];
const extname = process.argv[3];

filter(pathname, extname, (err, list) => {
    if (err) return console.error(err);
    console.log(list.join('\n'));
});