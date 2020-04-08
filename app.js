const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'La dirección de la Ciudad cuyo clima deseamos saber'
    }
}).argv;
/* 
lugar.getLugarLatLon(argv.direccion)
    .then(console.log) */

/* clima.getClima(40.750000, -74.000000)
    .then(console.log)
    .catch(console.log); */

const getInfo = async(direccion) => {
    try {

        let coordenadas = await lugar.getLugarLatLon(direccion);
        let temperatura = await clima.getClima(coordenadas.lat, coordenadas.lon);
        return `La temperatura de ${ coordenadas.direccion } es de ${ temperatura }ºC`;

    } catch (error) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);