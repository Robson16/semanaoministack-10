module.exports = function parseStringAsArray(arrayAsstring) {
    return arrayAsstring.split(',').map(tech => tech.trim());
}