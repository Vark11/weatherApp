import { fetchWeatherApi } from "openmeteo";

const month = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

export async function getWeatherDataOpenMeteo(
  latitude: number,
  longitude: number,
  pastDays: number,
  forecastDays: number
) {
  let dateB = new Date();
  dateB.setDate(dateB.getDate() - 1);
  const madeDate1 =
    dateB.getFullYear() + "-" + month[dateB.getMonth()] + "-" + (dateB.getDate().toString.length === 2 ? dateB.getDate() : '0' + dateB.getDate());
  dateB.setDate(dateB.getDate() + 4);
  const madeDate2 =
    dateB.getFullYear() + "-" + month[dateB.getMonth()] + "-" + (dateB.getDate().toString.length === 2 ? dateB.getDate() : '0' + dateB.getDate());
  console.log(madeDate1, madeDate2);
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
    start_date: madeDate1,
    end_date: madeDate2,
  };
  const url = "https://api.open-meteo.com/v1/forecast";

  try {
    const responses = await fetchWeatherApi(url, params);

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
  } catch (err) {
    return "error";
  }
}

export async function getOneDayWeatherDataOpenMeteo(
  latitude: string,
  longitude: string,
  date: string
) {
  const madeDate =
    new Date().getFullYear() +
    "-" +
    date.split(".")[0] +
    "-" +
    date.split(".")[1];
  const params = {
    latitude: Number(latitude),
    longitude: Number(longitude),
    current: "temperature_2m",
    hourly: ["temperature_2m", "surface_pressure"],
    daily: [
      "weather_code",
      "temperature_2m_max",
      "temperature_2m_min",
      "wind_speed_10m_max",
      "wind_direction_10m_dominant",
      "precipitation_probability_max",
    ],
    start_date: madeDate,
    end_date: madeDate,
    timezone: "auto",
  };
  const url = "https://api.open-meteo.com/v1/forecast";
  const responses = await fetchWeatherApi(url, params);

  const response = responses[0];
  const current = response.current()!;
  const hourly = response.hourly()!;
  const daily = response.daily()!;

  // Note: The order of weather variables in the URL query and the indices below need to match!
  const weatherData = {
    current: {
      temperature2m: current.variables(0)!.value(),
    },
    hourly: {
      temperature2m: hourly.variables(0)!.valuesArray()!,
      surfacePressure: hourly.variables(1)!.valuesArray()!,
    },
    daily: {
      weatherCode: daily.variables(0)!.valuesArray()!,
      temperature2mMax: daily.variables(1)!.valuesArray()!,
      temperature2mMin: daily.variables(2)!.valuesArray()!,
      windSpeed10mMax: daily.variables(3)!.valuesArray()!,
      windDirection10mDominant: daily.variables(4)!.valuesArray()!,
      precipitationProbabilityMax: daily.variables(5)!.valuesArray()!,
    },
  };

  return weatherData;
}
