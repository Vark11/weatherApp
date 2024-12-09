<a id="readme-top"></a>
![qr7-weather-high-resolution-logo (1) (1)](https://github.com/user-attachments/assets/69617ae5-1d57-4aec-b287-91e8897f423b)
  <p align="center">
    <a href="https://github.com/Vark11/weatherApp/issues/new?labels=bug&template=bug_report.md">Report Bug</a>
    ·
    <a href="https://github.com/Vark11/weatherApp/issues/new?labels=enhancement&template=feature_request.md">Request Feature</a>
  </p>

---

**DEAR READER! QR7 HAS WEBSITE: https://qr-7.ru/**
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#introduction">Introduction</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#installation">Installation</a>
      <ul>
        <li><a href="#cloning-sources">Cloning Sources</a></li>
        <li><a href="#run-the-project">Run the project</a></li>
      </ul>
    </li>
    <li><a href="#how-to-use">How to use</a>
     <ul>
        <li><a href="#search-location">Search location</a></li>
        <li><a href="#current-location">Current location</a></li>
        <li><a href="#add-location">Add location</a></li>
        <li><a href="#day-block-description">Day block description</a></li>
        <li><a href="#full-weather-information-about-day">Full weather information about day</a></li>
        <li><a href="#in-addition">In addition</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## Introduction![pin](https://github.com/user-attachments/assets/a22a54e1-cf98-4041-a491-c23b176a1e79)<?xml version="1.0" encoding="UTF-8"?>

**Weather App QR7** is an intuitive open source web application designed to provide you with weather forecasts and a comfortable user experience. It allows you add new locations by setting up latitude and longitude. Locations that were added manually available for 7 days. In my project weather data is given by [open-meteo API](https://open-meteo.com/). 


### Built with
  * [![Static Badge](https://img.shields.io/badge/typescript-white?style=for-the-badge&logo=typescript&logoColor=white&logoSize=20&color=%233178C6)](https://www.typescriptlang.org/)
  * [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  * [![Static Badge](https://img.shields.io/badge/sass-%23BF4080?style=for-the-badge&logo=sass&logoColor=white&logoSize=20&color=%23BF4080)](https://sass-lang.com/)
  * [![Static Badge](https://img.shields.io/badge/webpack-white?style=for-the-badge&logo=webpack&logoColor=white&logoSize=20&color=%2375AFCC)](https://webpack.js.org/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Installation![pin](https://github.com/user-attachments/assets/a22a54e1-cf98-4041-a491-c23b176a1e79)<?xml version="1.0" encoding="UTF-8"?>

*Despite the fact that QR7 has its own [web site](https://qr-7.ru/) you can install it and run on your PC.*
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

We provided to user an ability to delete locations, but only one he added. Click **X** in the right side of location that you want to delete.

![image](https://github.com/user-attachments/assets/1a982305-68a3-438b-a20e-0efc1abe885b)

**Keep in mind:** Weather QR7 uses cookies. All added by user locations are stored in cookies for **7 days.**
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Current location:
This part displays latitude, longitude and name of location which weather is shown now.

![image](https://github.com/user-attachments/assets/4c48bdfb-d7fb-4fd8-8b8d-851f2cfa649b)
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Add location:
This menu has three inputs for latitude, longitude and location name. Latitude must be between -90 and 90, longitude must be between -180 and 180. There is validation in inputs for more comfortable experience when using our site.

![image](https://github.com/user-attachments/assets/99c28f35-2577-4154-9a65-70c3d20ad375)
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Day block description:
Day block shows all general info about weather such as day of week, date, average temperature, weather icon, dominant wind direction and speed(10m on surface). Click on weather block to see more info.

![image](https://github.com/user-attachments/assets/2eaaeb2f-9efb-420a-8960-f303ca4731d9)
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Full weather information about day:
This page displays only one day weather information. Sunrise and sunset support will be added in next patches!

![image](https://github.com/user-attachments/assets/e32b7293-ddfd-42d4-923b-1c70462cf671)
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### In addition:

QR7 also has unique mark up for mobile devices!

![image](https://github.com/user-attachments/assets/0410761e-30c0-44dc-9713-85c4d109583c)
![image](https://github.com/user-attachments/assets/ae20baf6-6526-4e41-aa8e-e38442599d7f)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Contact![pin](https://github.com/user-attachments/assets/a22a54e1-cf98-4041-a491-c23b176a1e79)<?xml version="1.0" encoding="UTF-8"?>
  
  Telegram: @Vark102 - Alexandr
  
  Email: ap419837@gmail.com - Alexandr

Project Link: https://github.com/Vark11/weatherApp.git

<p align="right">(<a href="#readme-top">back to top</a>)</p>










