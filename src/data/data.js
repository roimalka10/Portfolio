import portfolio from "../images/portfolio1.jpg";
import portfolio2 from "../images/portfolio2.jpg";
import trainer from "../images/training.jpg";
import trainer2 from "../images/training2.jpg";
import progress from "../images/workinprogress.jpg";
import nasa2 from "../images/nasa2.jpg";
import wildfire from "../images/wildfire.jpg";
import tesla from "../images/tesla.jpg";
import tesla2 from "../images/tesla2.jpg";
import distorted from "../images/distorted.jpg";
import distorted2 from "../images/distorted2.jpeg";
import distorted3 from "../images/distorted3.jpg";
import weather from "../images/weatherapp.jpg";
import darkWeather from "../images/darksky.jpg";

export const projects = [
  {
    id: 1,
    title: "Weather App",
    img: weather,
    img2: darkWeather,
    distort: distorted2,
    type: "React / Redux / Accuweather API / Sass",
    about:
      "A weather app built to show state management using redux and Api usage displaying dynamic weather data",
    github: "https://github.com/roimalka10/Weather-app",
    link: "https://roi-malka-weather-app.netlify.app/",
  },
  {
    id: 2,
    title: "Portfolio",
    img: portfolio,
    img2: portfolio2,
    distort: distorted,
    type: "React / Sass / Framer Motion",
    about: "My own personal portfolio to showcase my projects and skills.",
    github: "https://github.com/roimalka10/portfolio",
    link: "",
  },
  {
    id: 3,
    title: "Tesla Clone",
    img: tesla,
    img2: tesla2,
    distort: distorted,
    type: "React / Styled Components",
    about: "A tesla home page clone using Styled Components",
    github: "https://github.com/roimalka10/tesla-clone",
    link: "https://tesla-clone-roimalka.netlify.app",
  },
  {
    id: 4,
    title: "Wildfire Tracker",
    img: nasa2,
    img2: wildfire,
    distort: distorted2,
    type: "React / Sass / NASA API / Google Maps API",
    about:
      "A small project showing wildfires around the globe using nasa and google maps api's",
    github: "https://github.com/roimalka10/wildfire-tracker",
    link: "https://wildfires-tracker-roimalka.netlify.app",
  },
  {
    id: 5,
    title: "Personal Trainer Studio",
    img: progress,
    img2: trainer2,
    distort: distorted2,
    type: "React / Sass / Framer Motion",
    about: "",
    github: "https://github.com/roimalka10/Fitness-website",
    link: "",
  },
];
