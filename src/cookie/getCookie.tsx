interface returnedValueFromCookie {
  location: string;
  latitude: string;
  longitude: string;
}

export function getCookie(name: string): returnedValueFromCookie[] {
  const values = document.cookie.split('; ');
  const resultArray: returnedValueFromCookie[] = [];

  resultArray.push({location: 'Moscow', latitude: '13.51', longitude: '51.51'});

  if (values.length) {
    values.forEach((elem) => {
      if (elem) {
        if (elem.split('=')[0].toLowerCase().includes(name.toLowerCase())) {
          if (elem.split('=')[0] !== 'g_state') {
            resultArray.push({location: elem.split('=')[0], latitude: elem.split('=')[1].split('<>')[0], longitude: elem.split('=')[1].split('<>')[1]});
          }
        }
      }
    })
  }
  return resultArray;
}