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