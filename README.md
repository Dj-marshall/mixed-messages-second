# Mixed Messages Project
---
A Simple javascript program to predict the weather. 
It changes the chances of rain / snow / temperature based on the season.
---
## Season Info
---
In this section an array storing all the seasons and their information
---
## Season Selector 
---
seasonRandomNumber generates a random number between 1 and 4. selectedSeason then looks at the season info array and uses bracket notation with the index of seasonRandomNumber to selected what season it is. 
The function then returns the value for the selectedSeason. 
todaysSeason is declared and is assigned the value of the function when run. 
---
## Wind Speed Selector
---
the function for getWindSpeed declares the variable windSpeed then uses an if statement looking at the todaysSeason.season (gets the season name) and changes the predicted wind speed based on this value. the function then returns the predicted wind speed. 
todaysWindSpeed is declared and given the value of the function passing todaysSeason as the parameter.
---
## Wind Direction Selector
---
the wind direction selector declares windDirection variable to store tha value. windDirectionRandomNumber then generates a random number for the switch statement to use to randomly select the value. A default value is added a the end incase of malfunction.
---
## Temperature Selector
---
the temperature selector section declares a function getTemp which takes todaysSeason as a parameter. An empty array of tempRange to store the ranges of temperatures for the day. A for loop is used to generate the options for the temperatures of the day based on todaysSeason max and min values as stopping points. This array is then used by todaysTempPrediction using bracket notation and a random number generated from tempRangeRandomNumber to generate a random temperature within the range. 
This is then assigned to the todays temp variable.
---
## Weather Section
---
the weather selection declares a new array of weather options. 
two if statements are used the first uses .pop() to remove snowy from the array if todaysSeason.season is not equal to winter.
the second is checking if todaysSeason.season is summer. If it is it uses mistyIndex which is the index of 'misty' and splice to cut 'misty' from the array.
a random number weatherRandomNumber is declared based on the weatherOptions.length of the array at the time. todaysWeather then uses bracket notation to randomly select todays weather. 
---
## Final String
---
prediction is declared which uses template literals to produce the final string of the weather today.