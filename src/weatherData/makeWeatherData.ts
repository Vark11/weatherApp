interface weatherData {
  daily: {
    temperature2mMax: number[];
    temperature2mMin: number[];
    windSpeed10mMax: number[];
    windDirection10mDominant: number[];
    weatherCode: number[];
  };
  current: {
    temperature2m: number;
  };
}

interface weatherBeforeMadeIt {
  daily: {
    temperature2mMax: Float32Array;
    temperature2mMin: Float32Array;
    windSpeed10mMax: Float32Array;
    windDirection10mDominant: Float32Array;
    weatherCode: Float32Array;
  };
  current: {
    temperature2m: number;
  }
}

export function makeTemp(weatherData: weatherData): number[] {
  const madeTemp: number[] = [];

  for (let i = 0; i < weatherData.daily.temperature2mMax.length; i++) {
    if (i === 1) {
      madeTemp.push(Number(weatherData.current.temperature2m.toFixed(0)));
    } else {
      madeTemp.push(
        Math.round(
          (weatherData.daily.temperature2mMax[i] +
            weatherData.daily.temperature2mMin[i]) /
            2
        )
      );
    }
    
  }

  return madeTemp;
}

export function makeWeatherData(weather: weatherBeforeMadeIt): weatherData {
  return {
    current: {temperature2m: weather.current.temperature2m},
    daily: {
      temperature2mMax: [
        weather.daily.temperature2mMax[0],
        weather.daily.temperature2mMax[1],
        weather.daily.temperature2mMax[2],
        weather.daily.temperature2mMax[3],
        weather.daily.temperature2mMax[4],
      ],

      temperature2mMin: [
        weather.daily.temperature2mMin[0],
        weather.daily.temperature2mMin[1],
        weather.daily.temperature2mMin[2],
        weather.daily.temperature2mMin[3],
        weather.daily.temperature2mMin[4],
      ],

      windSpeed10mMax: [
        weather.daily.windSpeed10mMax[0],
        weather.daily.windSpeed10mMax[1],
        weather.daily.windSpeed10mMax[2],
        weather.daily.windSpeed10mMax[3],
        weather.daily.windSpeed10mMax[4],
      ],

      windDirection10mDominant: [
        weather.daily.windDirection10mDominant[0],
        weather.daily.windDirection10mDominant[1],
        weather.daily.windDirection10mDominant[2],
        weather.daily.windDirection10mDominant[3],
        weather.daily.windDirection10mDominant[4],
      ],

      weatherCode: [
        weather.daily.weatherCode[0],
        weather.daily.weatherCode[1],
        weather.daily.weatherCode[2],
        weather.daily.weatherCode[3],
        weather.daily.weatherCode[4],
      ],
    },
  };
}

export function makeDates(currentDate: Date, days: number): string[] {
  const dates: string[] = [];
  const newDate = new Date(currentDate);

  newDate.setDate(newDate.getDate() - 2);

  for (let i = 0; i < days; i++) {
    newDate.setDate(newDate.getDate() + 1);
    if (newDate.getDate().toString().length === 1) {
      dates.push(
        (newDate.getMonth() + 1).toString() +
          ".0" +
          newDate.getDate().toString()
      );
    } else {
      dates.push(
        (newDate.getMonth() + 1).toString() + "." + newDate.getDate().toString()
      );
    }
  }

  return dates;
}

export function makeWindSpeed(
  weatherData: weatherData,
  days: number
): string[] {
  const madeWindSpeed: string[] = [];

  for (let i = 0; i < days; i++) {
    madeWindSpeed.push(weatherData.daily.windSpeed10mMax[i].toFixed(1));
  }

  return madeWindSpeed;
}

export function makeWindDirection(
  weatherData: weatherData,
  days: number
): string[] {
  const madeWindDirection: string[] = [];

  for (let i = 0; i < days; i++) {
    if (weatherData.daily.windDirection10mDominant[i] <= 22.5) {
      madeWindDirection.push("east");
    } else if (weatherData.daily.windDirection10mDominant[i] <= 67.5) {
      madeWindDirection.push("north-east");
    } else if (weatherData.daily.windDirection10mDominant[i] <= 112.5) {
      madeWindDirection.push("north");
    } else if (weatherData.daily.windDirection10mDominant[i] <= 157.5) {
      madeWindDirection.push("north-west");
    } else if (weatherData.daily.windDirection10mDominant[i] <= 202.5) {
      madeWindDirection.push("west");
    } else if (weatherData.daily.windDirection10mDominant[i] <= 247.5) {
      madeWindDirection.push("south-west");
    } else if (weatherData.daily.windDirection10mDominant[i] <= 292.5) {
      madeWindDirection.push("south");
    } else if (weatherData.daily.windDirection10mDominant[i] <= 337.5) {
      madeWindDirection.push("south-east");
    } else {
      madeWindDirection.push("east");
    }
  }

  return madeWindDirection;
}
