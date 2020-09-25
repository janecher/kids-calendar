# Kids Schedule

#### React Redux FireBase application, 09/25/2020

#### By _**Evgeniya Chernaya**_

## Description

Kids Schedule application will help kids track their daily works and motivate them to do it on time. 

## Setup/Installation Requirements

* Clone the repository to your desired directory (in terminal: git clone https://github.com/janecher/kids-schedule.git)
* Do "npm install", then "npm run build" in the terminal
* Do "npm run start" in the terminal to see the result in browser

## Specification

<img src="public/component-tree.png"/><br>

* User can sign in and sign up
* Main user page incledes: greeting with user name, sign out buttton, sidebar with button to add a task and see the rewards, schedule table with day of the week columns 
* User can create a task and add it to corresponding part of the schedule table (such as school schedule and homework, after-school activities, etc.) 
* User can click on the task and see details, with edit, done, and delete buttons 
* For each “done” task user will get a reward (a star, a sticker, etc.), that appears on reward page

## FireBase

* User collection (userId)
* Collections of days of the week (userId, taskId -?)
* Collections of tasks (userId, weekId)

## Known Bugs

_No known bags_

## Support and contact details

Contact me at _evgenya.chernaya@gmail.com_

## Technologies Used

  * React
  * Redux
  * JavaScript
  * JSX
  * HTML
  * CSS
  * Bootstrap
  * FireBase

### License

_This software is licensed under the MIT license_

Copyright (c) 2020 **Evgeniya Chernaya**