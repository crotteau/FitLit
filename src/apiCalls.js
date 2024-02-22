
import { initiateUserFunctions, initiateHydrationFunctions, initiateSleepFunctions } from "./scripts"
import { displayError } from "./domUpdates"

function getAllData() {
    const users = fetch('http://localhost:3001/api/v1/users')
        .then(resp => resp.json())

    const hydration = fetch('http://localhost:3001/api/v1/hydration')
        .then(resp => resp.json())

    const sleep = fetch('http://localhost:3001/api/v1/sleep')
        .then(resp => resp.json())

    Promise.all([users, hydration, sleep])
        .then((data) => {
            let [users, hydration, sleep] = data
            initiateUserFunctions(users)
            initiateHydrationFunctions(hydration)
            initiateSleepFunctions(sleep)
        })
        .catch(error => console.log(error))
}

function postData(userPost) {
    fetch('http://localhost:3001/api/v1/hydration', {
        method: 'POST',
        body: JSON.stringify(userPost),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(json => console.log('POST', json))
    .catch(err => {
        console.log(err)
        displayError()
    })
}


export {
    getAllData,
    postData
}