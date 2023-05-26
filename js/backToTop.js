/*
Anderson Nouv
Created: 12/31/22
backToTop.js
*/

/* Function to allow user to return to top of webpage after scrolling down followed w3schools tutorial: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
*/

// Get button
let myButton = document.getElementById("topBtn");

// Show button after user has scrolled down 20 px from top of document
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    }
    else {
        myButton.style.display = "none";
    }
}

// Scroll to top of document after user clicks button
function returnToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
