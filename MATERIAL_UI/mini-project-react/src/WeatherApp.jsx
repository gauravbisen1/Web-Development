import SearchBox from './SearchBov';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp () {
    const [weatherInfo , setWeatherInfo] = useState({
        city: "Indore",
        feelsLike: 24.84,
        temp: 25.02,
        tempMax: 28.25,
        tempMin: 28.25,
        humidity: 47,
        weather: "Haze",
    });
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}