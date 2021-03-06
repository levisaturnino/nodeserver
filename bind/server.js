'use strict'

const app = require('../src/app.js');
const http = require('http');
const debug = require('debug')('nodest:server');

const port = normalizePort(process.env.PORT || 3000);
app.set('port',port);

const server = http.createServer(app);

server.listen(port);
server.on('error',onError);
server.on('listening',onListening);

console.log("API rondando na porta "+port);

function normalizePort(val){
    const port = parseInt(val,10);

    if(isNaN(port)){
        return val;
    }

    if(port >= 0){
        return port;
    }

    return false;
}

function onError(error){

    if(error.sycall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ?
    'Pipe ' + port :
    'Port ' + port;

    switch(error.code){
        case 'EACCES':
            console.error(bind + 'requires elavated privileges');
            process.exit(1);
        break;

        case 'EADORINUSE':
            console.error(bind + 'is already in use');
            process.exit(1);
        break;
        default:
            throw error;
    }
}


function onListening(){
    const addr = server.address();
    const bind = typeof port === 'string' ?
    'Pipe ' + port :
    'Port ' + port;

    debug('Litening on '+bind);
}