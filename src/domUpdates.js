//NOTE: Your DOM manipulation will occur in this file
import { calculateAverageSteps, weeklyOunces, findDailySleep, findWeeklyHours, findRecentWeek, findWeeklyQuality, calculateAvgQuality, calculateAvgHours, grabHydrationData, animateMotivation, findTodaysDate } from './scripts.js';

import { getAllData } from './apiCalls.js';

import { currentDate } from './scripts.js'

const error = document.querySelector('.error')

const username = document.querySelector('.user-name')
const address = document.querySelector('.address-cont')
const strideData = document.querySelector('.stride-data')
const stepGoal = document.querySelector('.steps-goal-data')
const avgStepGoal = document.querySelector('.global-steps-goal-data')
const userFriends = document.querySelector('.user-friends')

const dailyHydration = document.querySelector('.daily-hydration-label')
const weeklyHydrationDate = document.querySelectorAll('.hydration-date')
const hydrationSelect = document.querySelector('.weekly-hydration-select')

const hydrationSubmit = document.querySelector('.hydration-submit')
const hydrationFormDate = document.querySelector('#hydration-date')
const hydrationFormOunces = document.querySelector('#hydration-volume')

const weeklySleepDate = document.querySelectorAll('.sleep-date')
const sleepSelect = document.querySelector('.weekly-sleep-select')

const avgQualityData = document.querySelector('.avg-quality-data')
const avgHoursData = document.querySelector('.avg-hours-data')

const dailySleep = document.querySelector('.daily-sleep-data')

const sliderInput = document.querySelector('#slider')
const takeOff = document.querySelector('.take-off')

window.addEventListener('load', getAllData)
hydrationSelect.addEventListener('change', () => { checkIfSelected(userHydration, weeklyHoursSlept, weeklyQualitySlept) })
sleepSelect.addEventListener('change', () => { checkIfSelected(userHydration, weeklyHoursSlept, weeklyQualitySlept) })
hydrationSubmit.addEventListener('click', function (event) {
  event.preventDefault()
  findTodaysDate()
  grabHydrationData(hydrationFormDate.value, hydrationFormOunces.value)
  resetInputField()
})

hydrationFormDate.addEventListener('click', removeError)
hydrationFormOunces.addEventListener('click', removeError)

sliderInput.addEventListener('change', () => { animateMotivation(sliderInput.value) })

function displayError() {
  error.innerHTML = "<span style='color: red'>There was an unexpected error please try again</span>"
}

function removeError() {
  error.innerText = ""
}

function displayUserData(userInfo) {
  username.innerText = userInfo.name
  strideData.innerText = userInfo.strideLength
  stepGoal.innerText = userInfo.dailyStepGoal
  address.innerHTML +=
    `<address class='contact-info'>
    Email: ${userInfo.email} <br>
    Address: ${userInfo.address} <br>
  </address>`
}
function displayFriends(friends) {
  var listContent = '';
  for (var i = 0; i < friends.length; i++) {
    listContent += `<li class='friend'>${friends[i]}</li>`;
  }
  userFriends.innerHTML = listContent;
}


function displaySteps(userData) {
  avgStepGoal.innerText = calculateAverageSteps(userData)
}

function checkIfSelected(a, b, c) {
  let p = document.getElementById('hydration-data')
  let x = document.querySelector('.weekly-hydration-select').value
  let tdHours = document.querySelector('.hours-slept')
  let tdQuality = document.querySelector('.quality-slept')
  let v = document.querySelector('.weekly-sleep-select').value

  if (x !== 'Click to Select a Date') {
    let targetObj = a.find((user) => {
      return user.date === x
    })
    let data = targetObj.numOunces
    p.innerText = data
  } else {
    p.innerText = '----'
  }

  if (v !== 'Click to Select a Date') {
    let targetObjHours = b.find((user) => {
      return user.date === v
    })
    let targetObjQuality = c.find((user) => {
      return user.date === v
    })
    let dataHours = targetObjHours.hours
    tdHours.innerText = dataHours

    let dataQuality = targetObjQuality.quality
    tdQuality.innerText = dataQuality
  } else {
    tdHours.innerText = '----'
    tdQuality.innerText = '----'
  }
}

let userHydration;

function displayHydrationData(hydration) {
  userHydration = weeklyOunces(hydration)


  let dates = userHydration.map((object) => {
    return object.date
  })
  weeklyHydrationDate[0].innerText = dates[0]
  weeklyHydrationDate[1].innerText = dates[1]
  weeklyHydrationDate[2].innerText = dates[2]
  weeklyHydrationDate[3].innerText = dates[3]
  weeklyHydrationDate[4].innerText = dates[4]
  weeklyHydrationDate[5].innerText = dates[5]
  weeklyHydrationDate[6].innerText = dates[6]

  weeklyHydrationDate[0].value = dates[0]
  weeklyHydrationDate[1].value = dates[1]
  weeklyHydrationDate[2].value = dates[2]
  weeklyHydrationDate[3].value = dates[3]
  weeklyHydrationDate[4].value = dates[4]
  weeklyHydrationDate[5].value = dates[5]
  weeklyHydrationDate[6].value = dates[6]
}

function displayDailyHydration(userPost) {
  if (userPost.numOunces && (userPost.date === currentDate)) {
    dailyHydration.innerText = `${userPost.numOunces} ounces of water!`
  } else if (userPost.date !== currentDate) {
    error.innerHTML = "<span style='color: red; font-size: 1.5rem;'>Please enter today's date!</span>"
  } else if (!userPost.numOunces) {
    error.innerHTML = "<span style='color: red; font-size: 1.5rem;'>Please enter ounces drank!</span>"
  }
}

function resetInputField() {
  hydrationFormDate.value = ''
  hydrationFormOunces.value = ''
}

let weeklyHoursSlept;
let weeklyQualitySlept;

function displaySleepData(sleep) {
  let date = findRecentWeek(sleep)
  weeklyHoursSlept = findWeeklyHours(sleep, date)
  weeklyQualitySlept = findWeeklyQuality(sleep, date)
  dailySleep.innerText = findDailySleep(sleep)

  let dates = weeklyHoursSlept.map((object) => {
    return object.date
  })
  weeklySleepDate[0].innerText = dates[0]
  weeklySleepDate[1].innerText = dates[1]
  weeklySleepDate[2].innerText = dates[2]
  weeklySleepDate[3].innerText = dates[3]
  weeklySleepDate[4].innerText = dates[4]
  weeklySleepDate[5].innerText = dates[5]
  weeklySleepDate[6].innerText = dates[6]

  weeklySleepDate[0].value = dates[0]
  weeklySleepDate[1].value = dates[1]
  weeklySleepDate[2].value = dates[2]
  weeklySleepDate[3].value = dates[3]
  weeklySleepDate[4].value = dates[4]
  weeklySleepDate[5].value = dates[5]
  weeklySleepDate[6].value = dates[6]

  avgQualityData.innerText = calculateAvgQuality(sleep)

  avgHoursData.innerText = calculateAvgHours(sleep)
}

export {
  displayUserData,
  displayHydrationData,
  displayDailyHydration,
  displaySleepData,
  displaySteps,
  calculateAvgQuality,
  displayError,
  displayFriends,
  takeOff
}