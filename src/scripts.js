
import './apiCalls';
import './css/styles.css';
import { displayUserData, displayHydrationData, displaySteps, displaySleepData, takeOff, displayFriends } from './domUpdates';
import { postData } from './apiCalls.js';

//(also need to link to it in the index.html)
import './images/turing-logo.png';
import '../src/images/layered-dumbell.png'
import '../src/images/light-dumbell.png'
import '../src/images/profile-image1.png'
import '../src/images/profile-image2.png'
import '../src/images/profile-image3.png'
import '../src/images/profile-image4.png'
import '../src/images/profile-image5.png'
import '../src/images/profile-image6.png'
import '../src/images/profile-image7.png'
import '../src/images/profile-image8.png'
import '../src/images/profile-image9.png'
import '../src/images/profile-image10.png'
import '../src/images/water-drop.png'
import '../src/images/sleepy-star.png'
import '../src/images/water-droplet.png'
import '../src/images/moon.png'
import '../src/images/space-ship.png'
import '../src/images/wavy-corner.png'
import '../src/images/planet.png'
import '../src/images/splatter.png'


/* <><> API Data <><> */
function initiateUserFunctions(userData) {
    getRandomUser(userData)
    calculateAverageSteps(userData)
    displaySteps(userData)
}

function initiateHydrationFunctions(hydrationData) {
    averageOunces(hydrationData)
    displayHydrationData(hydrationData)
}

function initiateSleepFunctions(sleepData) {
    calculateAvgHours(sleepData)
    calculateAvgQuality(sleepData)
    findDailySleep(sleepData)
    displaySleepData(sleepData)
}

/* <><> Main User Info <><> */
var randomUserId;

function getRandomUser(userData) {
    randomUserId = Math.floor(Math.random() * userData.users.length)
    getUserInfo(randomUserId, userData)

}

function getUserInfo(randomUserId, userData) {
    let targetUser = userData.users.find((user) => {
        return user.id === randomUserId
    })
    displayUserData(targetUser)
    findFriends(targetUser, userData)
}

function findFriends(targetUser, userData) {
    var friends = [];
    let friendIds = targetUser.friends
    for (var i = 0; i < friendIds.length; i++) {
      let friend = userData.users.find(user => {
            return user.id === friendIds[i]
        })
        friends.push(friend.name)
    }
    displayFriends(friends)
}

/* <><> Average Steps <><> */
function calculateAverageSteps(userData) {
    let totalSteps = 0
    userData.users.forEach(user => {
        totalSteps += user.dailyStepGoal
    })
    return totalSteps / userData.users.length
}

/* <><> Hydration Functions <><> */
function averageOunces(hydration) {
    var targetUser = hydration.hydrationData.filter(user => user.userID === randomUserId)
    var sum = targetUser.reduce((acc, user) => {
        acc += user.numOunces
        return acc
    }, 0)
    return Math.round(sum / targetUser.length)
}

function weeklyOunces(hydration) {
    let week = []
    let targetUser = hydration.hydrationData.filter((user) => {
        return user.userID === randomUserId
    });
    for (var i = 0; i < 7; i++) {
        let day = {}
        day.date = targetUser[i].date
        day.numOunces = targetUser[i].numOunces
        week.push(day)
    }
    return week
};

/* <><> Sleep Functions */
function findDailySleep(sleep) {
    let targetUser = sleep.sleepData.filter((user) => {
        return user.userID === randomUserId
    });
    let index = targetUser.length - 1
    return `${targetUser[index].hoursSlept}hrs | ${targetUser[index].sleepQuality} quality`
};

function calculateAvgHours(sleep) {
    let totalHours = 0
    let userHoursSlept = sleep.sleepData.filter((user) => {
        return user.userID === randomUserId
    }).map((day) => { return day.hoursSlept })
    userHoursSlept.forEach((day) => {
        totalHours += day
    })
    return Math.round(totalHours / userHoursSlept.length)
}

function calculateAvgQuality(sleep) {
    let totalSleepQuality = 0
    let targetUser = sleep.sleepData.filter((user) => {
        return user.userID === randomUserId
    }).map((day) => { return day.sleepQuality })
    targetUser.forEach((day) => {
        totalSleepQuality += day
    })
    return Math.round(totalSleepQuality / targetUser.length)
}

function findRecentWeek(sleep) {
    let targetUser = sleep.sleepData.filter((user) => {
        return user.userID === randomUserId
    }).reverse()
    let recentWeekStart = targetUser[6].date
    return recentWeekStart
}

function findWeeklyHours(sleep, day) {
    let targetUser = sleep.sleepData.filter((user) => {
        return user.userID === randomUserId
    })
    let startDateIndex = targetUser.findIndex((log) => {
        return log.date === day
    })
    let weeklySleep = []
    for (var i = startDateIndex; i < (startDateIndex + 7); i++) {
        weeklySleep.push({ date: targetUser[i].date, hours: targetUser[i].hoursSlept })
    }
    return weeklySleep
}

function findWeeklyQuality(sleep, day) {
    let targetUser = sleep.sleepData.filter((user) => {
        return user.userID === randomUserId
    })
    let startDateIndex = targetUser.findIndex((log) => {
        return log.date === day
    })
    let weeklyQuality = []
    for (var i = startDateIndex; i < (startDateIndex + 7); i++) {
        weeklyQuality.push({ date: targetUser[i].date, quality: targetUser[i].sleepQuality })
    }
    return weeklyQuality
}

/* <><> POST Functions */
var userPost;
var currentDate;
console.log('userPost scripts', pull userPost)
function grabHydrationData(selectedDate, ounces) {
    let dateParsed = selectedDate.replace('-', '/').replace('-', '/')
     let userPost = {userID: randomUserId,
            date: dateParsed,
            numOunces: ounces}
            postData(userPost)
            return userPost
        }
        
function findTodaysDate() {
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    if (month < 10) {
        currentDate = `${year}/0${month}/${day}`
    } else {
        currentDate = `${year}/${month}/${day}`
    }
    return currentDate
}

function animateMotivation(inputValue) {
    storeMotivation(inputValue)
    let value = inputValue
    switch(value) {
      case '0': 
        takeOff.style.animationName = "anim-0";
        break;
      case '2': 
        takeOff.style.animationName = "anim-1";
        break;
      case '4': 
        takeOff.style.animationName = "anim-2";
        break;
      case '6': 
        takeOff.style.animationName = "anim-3";
        break;
      case '8': 
        takeOff.style.animationName = "anim-4";
        break;
      case '10': 
        takeOff.style.animationName = "anim-5";
        break;
    }
}

function storeMotivation(inputValue) {
    let dateN = new Date()
    let motivation = {
        userID: randomUserId,
        motivation: inputValue,
        date: dateN
    }
    return motivation
}












export {
    getUserInfo,
    calculateAverageSteps,
    getRandomUser,
    averageOunces,
    weeklyOunces,
    initiateUserFunctions,
    initiateHydrationFunctions,
    initiateSleepFunctions,
    findDailySleep,
    findWeeklyHours,
    findWeeklyQuality,
    findRecentWeek,
    calculateAvgQuality,
    calculateAvgHours,
    grabHydrationData,
    animateMotivation,
    findTodaysDate,
    userPost,
    currentDate
}