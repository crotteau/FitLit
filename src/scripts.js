// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';

// An example of how you tell webpack to use a JS file
import userData from './data/users';

// Example of one way to import functions from the domUpdates file.  You will delete these examples.
import { displayUserData } from './domUpdates';

import hydration from '../src/data/hydration';

function getUserInfo(userID) {
    let userInfo = userData.users.find((user) => {
        return user.id === userID
    })
    return displayUserData(userInfo)
}

function calculateAverageSteps(userData) {
    let totalSteps = 0
    userData.users.forEach(user => {
        totalSteps += user.dailyStepGoal
    })
    return totalSteps / userData.users.length
}

function getRandomUser(usersData) {
    let randomUserId = Math.floor(Math.random() * usersData.length)
    return getUserInfo(randomUserId)
}

function averageOunces(hydration, id) {
    var targetUser = hydration.hydrationData.filter(user => user.userID === id)
    var sum = targetUser.reduce((acc, user) => {
        acc += user.numOunces
        return acc
    }, 0)
   return Math.round(sum / targetUser.length)
}


export {
    getUserInfo,
    calculateAverageSteps,
    getRandomUser,
    averageOunces,
}