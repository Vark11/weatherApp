interface returnedValueFromCookie {
  location: string;
  latitude: string;
  longitude: string;
}

export function getCookie(name: string): returnedValueFromCookie[] {
  const values = document.cookie.split("; ");
  const resultArray: returnedValueFromCookie[] = [];

  if (name === "") {
    resultArray.push({
      location: "Moscow",
      latitude: "55.751244",
      longitude: "37.618423",
    });
  }

  if (values.length) {
    values.forEach((elem) => {
      if (elem) {
        if (elem.split("=")[0].toLowerCase().includes(name.toLowerCase())) {
          if (elem.split("=")[0] !== "g_state") {
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
