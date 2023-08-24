const { readFileSync, existsSync, writeFileSync } = require('fs');

const leerJson = (path) => {
    return JSON.parse(readFileSync(path, 'utf-8'));
}
const escribirJson = (path, array) => {
    writeFileSync(path, JSON.stringify(array, null, 5), 'utf-8');
}
const exists = (path) => {

}
module.exports = {
    leerJson,
    escribirJson,
    exists,
}