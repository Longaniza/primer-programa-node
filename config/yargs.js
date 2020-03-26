const argv = require('yargs')
.command('listar','imprime en consola la tabla de multiplicar',
{
    base:
    {
    demand: true,
    alias:'b'
    },
    limite:{
        alias:'l',
        default:10
    }

}).command('crear','crea un archivo con los datos proporcionados',
    {
    base:
    {
    demand: true,
    alias:'b'
    },
    limite:{
        alias:'l',
        default:10
    }
}
).help().argv;

module.exports = {
    argv 
}