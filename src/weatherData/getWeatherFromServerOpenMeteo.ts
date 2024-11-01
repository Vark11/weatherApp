import { fetchWeatherApi } from 'openmeteo';

export async function getWeatherDataOpenMeteo() {
  const params = {
    "latitude": 55.751244,
    "longitude": 37.618423,
    "current": "temperature_2m",
    "daily": ["temperature_2m_max", "temperature_2m_min", "uv_index_clear_sky_max", "precipitation_sum", "rain_sum", "showers_sum", "snowfall_sum", "wind_speed_10m_max", "wind_direction_10m_dominant"],
    "timezone": "Europe/Moscow",
    "past_days": 1,
    "forecast_days": 4
  };
  const url = "https://api.open-meteo.com/v1/forecast";
  const responses = await fetchWeatherApi(url, params);
  
  // Helper function to form time ranges
  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);
  
  // Process first location. Add a for-loop for multiple locations or weather models
  const response = responses[0];
  
  // Attributes for timezone and location
  const utcOffsetSeconds = response.utcOffsetSeconds();
  const timezone = response.timezone();
  const timezoneAbbreviation = response.timezoneAbbreviation();
  const latitude = response.latitude();
  const longitude = response.longitude();
  
  const current = response.current()!;
  const daily = response.daily()!;
  
  // Note: The order of weather variables in the URL query and the indices below need to match!
  const weatherData = {
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature2m: current.variables(0)!.value(),
    },
    daily: {
      time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
        (t) => new Date((t + utcOffsetSeconds) * 1000)
      ),
      temperature2mMax: daily.variables(0)!.valuesArray()!,
      temperature2mMin: daily.variables(1)!.valuesArray()!,
      uvIndexClearSkyMax: daily.variables(2)!.valuesArray()!,
      precipitationSum: daily.variables(3)!.valuesArray()!,
      rainSum: daily.variables(4)!.valuesArray()!,
      showersSum: daily.variables(5)!.valuesArray()!,
      snowfallSum: daily.variables(6)!.valuesArray()!,
      windSpeed10mMax: daily.variables(7)!.valuesArray()!,
      windDirection10mDominant: daily.variables(8)!.valuesArray()!,
    },
  
  };
  
  // `weatherData` now contains a simple structure with arrays for datetime and weather data
  for (let i = 0; i < weatherData.daily.time.length; i++) {
    console.log(
      weatherData.daily.time[i].toISOString(),
      weatherData.daily.temperature2mMax[i],
      weatherData.daily.temperature2mMin[i],
      weatherData.daily.uvIndexClearSkyMax[i],
      weatherData.daily.precipitationSum[i],
      weatherData.daily.rainSum[i],
      weatherData.daily.showersSum[i],
      weatherData.daily.snowfallSum[i],
      weatherData.daily.windSpeed10mMax[i],
      weatherData.daily.windDirection10mDominant[i]
    );
  }
}
