const axios = require('axios');

const getClima = async(lat, lon) => {
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&units=metric&appid=f322cbac77e379d1ef50ceb8ad6b4caf`);

    return respuesta.data.main.temp

}

module.exports = {
    getClima
}