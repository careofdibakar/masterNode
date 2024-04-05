const { log } = require('console');
const fs = require('fs');
const { resolve } = require('path');

const createFile = function (file_name, file_content) {
    file_name = "./assets/" + file_name
    fs.writeFile(file_name, file_content, (err) => {
        if (err) throw err
    });
    return 1;
}
const readFile = async function (file_name) {
    return new Promise((resolve, reject) => {
        file_name = "./assets/" + file_name
        fs.readFile(file_name, 'utf8', (err, data) => {
            if (err) {
                reject(err)
                return
            }
            resolve(data)
        })
    })
}
const reWriteFile = async function (file_name, append_content) {
    return new Promise((resolve, reject) => {
        file_name = "./assets/" + file_name
        fs.appendFile(file_name, append_content, (err) => {
            if (err) {
                reject(err)
                return
            }
            resolve(1)
        })
    })
}
// log(readFile('Biodata.txt'))
module.exports = { createFile, readFile, reWriteFile };