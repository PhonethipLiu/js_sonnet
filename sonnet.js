// Take the contents of the sonnet div and place it in a variable.
// Find and output the starting position of the word "orphans".
// Output the number of characters in the sonnet.
// Replace the first occurance of the string "winter" with "yuletide".
// Replace all occurances of the string "the" with "a large".
// Set the content of the sonnet div with the new string.

var poem = document.getElementById('sonnet').innerHTML;
// var sonnet = poem.innerHTML;
console.log(sonnet);

var orphans = poem.indexOf("orphans");
console.log(orphans);

console.log(poem.length);

var replaceWinter = poem.replace("winter", "yuletide");
document.getElementById('sonnet').innerHTML = replaceWinter;
// console.log(replaceWinter);

var replaceThe = replaceWinter.replace(/ the /g, " a large ");
document.getElementById('sonnet').innerHTML = replaceThe; 





