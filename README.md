# Weather App QR7
## Introduction![pin](https://github.com/user-attachments/assets/a22a54e1-cf98-4041-a491-c23b176a1e79)<?xml version="1.0" encoding="UTF-8"?>

**Weather App QR7** is an intuitive open source web application designed to provide you with weather forecasts and a comfortable user experience. It allows you add new locations by setting up latitude and longitude. Locations that were added manually available for 7 days. In my project weather data is given by [open-meteo API](https://open-meteo.com/). 

---

## Installation![pin](https://github.com/user-attachments/assets/a22a54e1-cf98-4041-a491-c23b176a1e79)<?xml version="1.0" encoding="UTF-8"?>

*Despite the fact that QR7 has its own web site you can install it and run on your PC.*
### Cloning Sources
```
git clone https://github.com/Vark11/weatherApp.git
```
### Run the project
```
npm start
```
---

## How to use![pin](https://github.com/user-attachments/assets/a22a54e1-cf98-4041-a491-c23b176a1e79)<?xml version="1.0" encoding="UTF-8"?>
**Weather QR7** website has two things on main page: settings and container, that consists of 3-5 dayblocks with general weather information.

![image](https://github.com/user-attachments/assets/64293b6c-4b4d-42eb-a3f7-42d505544faa)

### Search location:
Search location is an search field where user can choose location. There are four default locations: Moscow, Saint-Petersburg, Ufa, Sochi. Also user can add new locations by setting up it name, longitude and latitude. See more about adding locations in [the add location topic](#add-location).

![image](https://github.com/user-attachments/assets/967f195a-6cad-458f-9ed1-1dd36efa7823)


We provided to user an ability to delete locations, but only one he added. Click X in the right side of location that you want to delete.

![image](https://github.com/user-attachments/assets/1a982305-68a3-438b-a20e-0efc1abe885b)

**Keep in mind:** Weather QR7 uses cookies. All added by user locations are stored in cookies for **7 days.**

### Current location:
This part displays latitude, longitude and name of location which weather is shown now.

![image](https://github.com/user-attachments/assets/4c48bdfb-d7fb-4fd8-8b8d-851f2cfa649b)

### Add location:
This menu has three inputs for latitude, longitude and location name. Latitude must be between -90 and 90, longitude must be between -180 and 180. There is validation in inputs for more comfortable experience when using our site.

![image](https://github.com/user-attachments/assets/99c28f35-2577-4154-9a65-70c3d20ad375)

### Day block description:
day block shows all general info about weather such as day of week, date, average temperature, weather icon, dominant wind direction and speed(10m on surface). Click on weather block to see more info.

![image](https://github.com/user-attachments/assets/2eaaeb2f-9efb-420a-8960-f303ca4731d9)






