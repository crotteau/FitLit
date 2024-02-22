
import { initiateUserFunctions, initiateHydrationFunctions, initiateSleepFunctions } from "./scripts"

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




export {
    getAllData,
}