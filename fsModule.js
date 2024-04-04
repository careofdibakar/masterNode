const { log } = require('console');
const fs = require('fs')

const createFile = function (file_name, file_content) {
    fs.writeFile(file_name, file_content, (err) => {
        if (err) throw err;
    });
    return 1;
}
const readFile = function (file_name) {
    const file_content = fs.readFile(file_name, 'utf8', (err, data) => {
        if (err) throw err;
        return data; 
    });
    return file_content;
}
module.exports = { createFile, readFile };