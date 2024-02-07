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

let windDirection = ''

let windDirectionRandomNumber = Math.floor(Math.random() * 8)

switch (windDirectionRandomNumber) {
  case 0 : windDirection = 'North'
  break;
  case 1 : windDirection = 'North East'
  break;
  case 2 : windDirection = 'East'
  break;
  case 3 : windDirection = 'South East'
  break;
  case 4 : windDirection = 'South'
  break;
  case 5 : windDirection = 'South West'
  break;
  case 6 : windDirection = 'West'
  break;
  case 7 : windDirection = 'North West'
  break;
  default : windDirection = 'Unknown, system malfunction'
};

// Temperature Section

const getTemp = (todaysSeason) => {

  tempRange = []

  for (let i = todaysSeason.tempLow; i < todaysSeason.tempHigh; i++) {
    tempRange.push(i)
  }

  let tempRangeRandomNumber = Math.floor(Math.random() * tempRange.length);

  let todaysTempPrediction = tempRange[tempRangeRandomNumber];

  return todaysTempPrediction
}

let todaysTemp = getTemp(todaysSeason);

// Weather Section

// Final string

let prediction = `The season today is ${todaysSeason.season}, we are predicting an average windspeed of ${todaysWindSpeed}mph from the ${windDirection}. The average temperature for today is ${todaysTemp}*C. `
console.log(prediction)