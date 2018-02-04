const fs = require('fs');
const path = require('path');

module.exports = function (dirname, extname, callback) {
    fs.readdir(dirname, (err, list) => {
        if (err) {
            return callback(err);
        }
        
        list = list.filter((filename) => {
            return (path.extname(filename) == '.' + extname);
        });
        
        callback(null, list);
    });    
};