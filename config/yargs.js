const argv = require('yargs')
    .options({
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            demandOption: false,
            describe: 'Es la base de la tabla de multiplicar'
        },
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Muestra la tabla en consola'
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            demandOption: true,
            describe: 'Es el limite de la tabla de multiplicar'
        },
    }).check((argv, opions) => {
        if (isNaN(argv.b)) {
            throw ('La base tiene que ser un número');

        }
        if (isNaN(argv.h)) {
            throw ('El limite tiene que ser un número');

        }
        return true;
    })
    .argv;


module.exports = argv;