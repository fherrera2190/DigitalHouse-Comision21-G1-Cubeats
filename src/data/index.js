const { readFileSync, existsSync, writeFileSync, unlinkSync } = require('fs');

const leerJson = (path) => {
    return JSON.parse(readFileSync(path, 'utf-8'));
}
const escribirJson = (path, array) => {
    writeFileSync(path, JSON.stringify(array, null, 5), 'utf-8');
}

module.exports = {
    leerJson,
    escribirJson,
    existsSync,
    unlinkSync
}