// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

import {getTravelers, getTrips, getDetinations} from './API-fetch';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


// console.log('This is the JavaScript entry file - your code begins here.');


//GLOBAL VARIABLES
var globalData;
var thing;

//EVENT LISTENERS
window.addEventListener('load', resolvePromise);

//EVENT HANDLERS

function resolvePromise() {
  getTravelers().then((data) => {
    globalData = data;
    test();
  })
}

// console.log("28", resolvePromise())


console.log("globalData outside of method", globalData);
//
// console.log(globalData)

function test() {
  console.log("globalData in method", globalData.travelers[0]);
}



// Seems like I'm not using this
// let resolvedData = Promise.resolve(travelersData);
