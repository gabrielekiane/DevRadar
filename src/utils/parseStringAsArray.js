module.exports = function parseStringAsArray (arrayAsString) {
    return arrayAsString.split(',').map(tech => tech.trim()); //trim remove espacamentos antes de dps da string
}