# FitLit Week 8 Group Project
A site for users to view their fitness journey and track fitness goals.

### Background 
This website was made to implement the use of fetch API for the first time. This project had no comp so it was up to us to create  design and layout. We took inspiration from 80's fitness and 2000's graphics. Keeping the website simple in its functionality and robust in its colors. This website is not a 'functioning: website. All the data comes from a random data set made for this project. No users are real, and users cannot navigate to find specific information. Users are displayed in a random order.

### Deployed Link
To view the webpage, visit this [link](https://crotteau.github.io/FitLit/)

### Installation
- Visit the [FitLit repository](https://github.com/AsherSpurr/fitlit)
- $ `git clone git@github.com:AsherSpurr/fitlit.git`
- $ `npm install`
- $ `npm start`
- Navigate to http://localhost:8080/ in your browser

### Contributors 
[Asher Spurr](https://github.com/AsherSpurr)

[Laura Long](https://github.com/lalonggone)

[Megan Crotteau](https://github.com/crotteau)

### Technologies Used
Fitlit is made with JavaScript, HTML, and CSS. It's built using test-driven development with the Mocha Testing Framework & Chai Assertion Library.
- To run tests: `npm test` from the associated root directory 

### Original Project Spec Page
A two-part project for Turing School School of Software and Design: 
- [Fitlit part 1](https://frontend.turing.edu/projects/module-2/fitlit-part-one-agile.html)
- [Fitlit part 2](https://frontend.turing.edu/projects/module-2/fitlit-part-two-agile.html)

## FitLit: Part 1

### Screenshots: Initial CSS Styling
![Screenshot 2024-02-12 at 5 44 21 PM](https://github.com/AsherSpurr/fitlit/assets/144856487/cefcfe08-ebfa-4fb5-a610-14ef913e60c0)


### Next steps 
Additional enhancements could include:
- Incorporate user authorization for real people to use
- Adjust data placement and display to enhance readability
- Rethink selective color use to draw attention towards key information
- Provide a secure user portal that displays personal contact information
- Display friends list on a separate page with their current goals, allowing interaction between friends.
  

## FitLit: Part 2

### Screenshots - Updated CSS and Additional Features
#### Hydration Section:
![Hydration Section](https://github.com/AsherSpurr/fitlit/assets/149750476/18e515e7-1dd6-4528-93d9-8157bfe3a3ce)

#### Sleep and Motivation Section:
![Sleep and Motivation Section](https://github.com/AsherSpurr/fitlit/assets/149750476/10a95168-1a29-40ec-bbea-7b169c5e31a0)

### Motivation Feature
Our assigned feature for part 2 was to allow the user to input how motivated they're feeling for any given day. We chose to create a simple design where the user can input their motivation level using a sliding scale. A little rocket animation will rise based on the input.  
In the future, we would like to implement an API to display an encouraging quote if a user's motivation is below the halfway mark.

### Accessibility
To assess our app's accessibility, we used extensions such as WAVE, Lighthouse, and Colorblind to look for areas of improvement. We also ensured that the user can tab through the app without using a mouse and that a screen reader can effectively navigate through the site. Currently, our accessibility score is 100% according to Lighthouse. 

### Usability
We conducted user testing with our peers and listed below is some feedback we received.
- Users want interactivity with static elements. Eg: changing profile picture, changing address
- The correlation between the weekly date and data is not clear Eg: Click to select a date - then the data displayed next to it
- More clarity is needed for the sleep quality scale Eg: defining the range and meaning of the scale
- Exposed issues with creating dynamic and consistent CSS styling 
- Parameters for daily hydration input could be more strict - prevent negative numbers and excessive number length
- Links needed to be darker, the color was confusing to users since it matched the background
