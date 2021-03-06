# BasketballShotChart
## Table of Content
1. [Project Information](#appinfo)
2. [Technologies](#technologies)
3. [Design](#design)
4. [Features](#features)

<a name="appinfo"></a>
## Project Information
Demo: https://basketball-shotchart.netlify.app/ <br>
It lets people input their shot data and generate their own shot chart and store it on the local storage.<br>
<img src="./doc/Dashboard.PNG" alt="dashboard" width="400px"><br>

<a name="technologies"></a>
## Technologies
- React Hook
- D3

<a name="design"></a>
## Design
<img src="./doc/design.png" alt="app design" width="500px">

<a name="features"></a>
## Features

### Dashboard 
- <b>Total</b> means all records will combine together.
- Can select different records in the storage.
- The shot threshold can be adjusted to fullfilled the need.
- Auto remove old data in local storage.<br>
<img src="./doc/Dashboard.PNG" alt="dashboard" width="400px"><br>

### Input Page
- Can create, edit and delete records.
- Can input <span style="color:green;">made</span> and <span style="color:red;">miss</span> shot by clicking on the chart.
- Knowing the spot position by pointing on it.
- Can load local storage data.
- Can undo by clicking <span style="color:grey;">BACK</span> button.<br>
 
List Page                                            |  Input Page
:---------------------------------------------------:|:---------------------------------------------------------:
<img src="./doc/List.PNG" alt="list" width="300px">  | <img src="./doc/ChartInput.PNG" alt="input" width="300px">
<br>

### Data Page
- Can edit local storage data and save it.<br>
<img src="./doc/ShotData.PNG" alt="data" width="400px"><br>
