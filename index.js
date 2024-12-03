// initialize the count as 0
// listen for clicks to increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to teflect the new count

// let count = 0
// let number = 42

// function increment() {
//     console.log("Button was clicked")
// }

// function decide() {
//     console.log(number)
// }

// function myLogger() {
//     console.log("42")
// }

// myLogger()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function theSum() {
//     console.log(lap1 + lap2 +)
// }

// theSum()

// let lapsCompleted = 0

// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1
// }

// incrementLap()

// function tripleLap() {
//     lapsCompleted = lapsCompleted * 3
// }

// tripleLap()

// console.log(lapsCompleted)

// let count = 0
// let countEl = document.getElementById("count-el")

// function incrementCount() {
//     count = count + 1
//     countEl.innerText = count
// }

// function save() {
//     console.log(count)
// }

// let username = "Per"
// let message = "You have three new notifications"
// let messageToUser = message + ", " + username + "!"

// console.log(messageToUser)

// let myName = "Dylan"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + myName

// console.log(myGreeting)

// console.log(4 + 5) // 9
// console.log("2" + "4") // 24
// console.log("5" + 1) // 51
// console.log(100 + "100") // 100100


// let welcomeEl = document.getElementById("welcome-el")

// let name = "Foksy"
// let greeting = "Welcome back, "

// welcomeEl.innerText = greeting + name

// welcomeEl.innerText += " 👋"

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save () {
    let countStr = count + " - "
    saveEl.textContent += countStr

    countEl.textContent = 0
    count = 0
}


