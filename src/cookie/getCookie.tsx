interface returnedValueFromCookie {
  location: string;
  latitude: string;
  longitude: string;
}

export function getCookie(name: string): returnedValueFromCookie[] {
  const values = document.cookie.split("; ");
  values.unshift("Ufa=54.7431<>55.9678");
  values.unshift("Sochi=43.59917<>39.72569");
  values.unshift("Saint-Pete=59.93863<>30.31413");
  values.unshift("Moscow=55.751244<>37.618423");
  const resultArray: returnedValueFromCookie[] = [];

  if (values.length) {
    values.forEach((elem) => {
      if (elem) {
        if (elem.split("=")[0].toLowerCase().includes(name.toLowerCase())) {
          if (
            elem.split("=")[0] !== "g_state" &&
            elem.split("=")[0] !== "currentLocation"
          ) {
            resultArray.push({
              location: elem.split("=")[0],
              latitude: elem.split("=")[1].split("<>")[0],
              longitude: elem.split("=")[1].split("<>")[1],
            });
          }
        }
      }
    });
  }

  return resultArray;
}
