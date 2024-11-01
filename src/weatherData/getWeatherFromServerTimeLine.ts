import axios from 'axios';

export function getWeatherDataTimeLine(): Promise<object> {
  const accessKey = '5KQHL9TM476T7KZK3S49J8W5Y';

  const [ dateStart, dateEnd ] = getDate(new Date());
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK/${dateStart.getFullYear()}-${dateStart.getMonth()}-${dateStart.getDate()}/${dateEnd.getFullYear()}-${dateEnd.getMonth()}-${dateEnd.getDate()}?key=${accessKey}`;

  return axios({
    method: 'get',
    url: url,
  }).then(
    (data) => {
      return data.data;
    }
  ).catch(err => { throw new Error(err) })
}
  
function getDate(date: Date): [Date, Date] {
	return [date, addDaysToDate(date, 5)]
}

function addDaysToDate(date: Date, days: number): Date {
  const newDate = new Date(date);

  newDate.setDate(date.getDate() + days);

  return newDate;
}

