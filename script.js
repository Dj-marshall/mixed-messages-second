// Weather Prediction Tool //

// Seasons Array 

let seasonInfo = [
    {season: 'Spring',
    tempHigh: 22,
    tempLow: 8
  },
    {season: 'Summer',
    tempHigh: 36,
    tempLow: 16
  }, 
    {season: 'Autumn',
    tempHigh: 30,
    tempLow: 12
  },  
    {season: 'Winter',
    tempHigh: 12,
    tempLow: -6
  },  
];

// Season Selector

const getSeason = () => {

  let seasonRandomNumber = Math.floor(Math.random() * 4);

  let selectedSeason = seasonInfo[seasonRandomNumber];

  return selectedSeason;
}

let todaysSeason = getSeason();

// Wind Speed Section 

const getWindSpeed = (todaysSeason) => {

  let windSpeed = 0;

  if (todaysSeason.season === 'Spring') {
    windSpeed = Math.floor(Math.random() * 25)
  } else if (todaysSeason.season === 'Summer') {
    windSpeed = Math.floor(Math.random() * 15)
  } else if (todaysSeason.season === 'Autumn') {
    windSpeed = Math.floor(Math.random() * 35)
  } else if (todaysSeason.season === 'Winter') {
    windSpeed = Math.floor(Math.random() * 55)
  }

  return windSpeed;
}
let todaysWindSpeed = getWindSpeed(todaysSeason);

// Wind Direction Section

// Temperature Section

// Precipitation Section

// Weather Section

// Final string

let prediction = `The season today is ${todaysSeason.season}, we are predicting an average windspeed of ${todaysWindSpeed}mph from the `
console.log(prediction)