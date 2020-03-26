const fs = require('fs');
const {crearArchivo,listarArchivo} = require('./mutiplicar/proceso');
const {argv} = require('./config/yargs')
const colors = require('colors');

let comando = argv._[0]
switch(comando){
    case 'listar':
        console.log(listarArchivo(argv.base,argv.limite).green);
        break;
    case 'crear':
        crearArchivo(argv.base,argv.limite).then((exito) => console.log(exito))
        .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}
//console.log(argv);

