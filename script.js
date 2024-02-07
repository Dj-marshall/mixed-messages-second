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
//console.log(seasonInfo); testing season info reading okay

// Season Selector

const getSeason = () => {
  let seasonRandomNumber = Math.floor(Math.random() * 4);
  //console.log(seasonRandomNumber) testing for random number functioning okay
  let selectedSeason = seasonInfo[seasonRandomNumber];
  //console.log(selectedSeason); testing selected season working okay
  return selectedSeason;
}

let todaysSeason = getSeason();

// Wind Speed Section 

// Wind Direction Section

// Temperature Section

// Precipitation Section

// Final string

let prediction = `The season today is ${todaysSeason.season}`
console.log(prediction)