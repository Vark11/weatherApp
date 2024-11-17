import { fetchWeatherApi } from "openmeteo";

export async function getWeatherDataOpenMeteo(
  latitude: number,
  longitude: number,
  pastDays: number,
  forecastDays: number
) {
  const params = {
    latitude: latitude,
    longitude: longitude,
    current: "temperature_2m",
    daily: [
      "weather_code",
      "temperature_2m_max",
      "temperature_2m_min",
      "wind_speed_10m_max",
      "wind_direction_10m_dominant",
    ],
    timezone: "auto",
    past_days: pastDays,
    forecast_days: forecastDays,
  };
  const url = "https://api.open-meteo.com/v1/forecast";
  const responses = await fetchWeatherApi(url, params);

  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

  const response = responses[0];
  const current = response.current()!;
  const daily = response.daily()!;

  const weatherData = {
    current: {
      temperature2m: current.variables(0)!.value(),
    },
    daily: {
      // time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
      //   (t) => new Date((t + utcOffsetSeconds) * 1000)
      // ),
      weatherCode: daily.variables(0)!.valuesArray()!,
      temperature2mMax: daily.variables(1)!.valuesArray()!,
      temperature2mMin: daily.variables(2)!.valuesArray()!,
      windSpeed10mMax: daily.variables(3)!.valuesArray()!,
      windDirection10mDominant: daily.variables(4)!.valuesArray()!,
    },
  };

  return weatherData;
}

export async function getOneDayWeatherDataOpenMeteo(latitude: string, longitude: string) {
  
}