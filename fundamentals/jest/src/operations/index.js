const sum = (a, b) => {
    const isNumber = [a, b].every((n) => typeof n === 'number');
    if(!isNumber) throw new Error('Valor inválido, somente números são aceitos')
    return a + b;
};


module.exports = sum;