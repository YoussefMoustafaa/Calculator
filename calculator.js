let calculatorHistory = []
const screenEl = document.getElementById("screen-el")
const ulEl = document.getElementById("ul-el")
const clearBtn = document.getElementById("clear-btn")

// all calculator buttons
// ====================================================
const allClearBtn = document.getElementById("all-clear")
const delBtn = document.querySelector(".del")
const divideBtn = document.getElementById("divide")
const oneBtn = document.getElementById("one")
const twoBtn = document.getElementById("two")
const threeBtn = document.getElementById("three")
const multiplyBtn = document.getElementById("multiply")
const fourBtn = document.getElementById("four")
const fiveBtn = document.getElementById("five")
const sixBtn = document.getElementById("six")
const plusBtn = document.getElementById("plus")
const sevenBtn = document.getElementById("seven")
const eightBtn = document.getElementById("eight")
const nineBtn = document.getElementById("nine")
const minusBtn = document.getElementById("minus")
const periodBtn = document.getElementById("period")
const zeroBtn = document.getElementById("zero")
const equalBtn = document.getElementById("equal")
// ====================================================

let isPeriodPressed = false       // for making the period pressed only two times
let isOperatorPressed = false     // to make operators pressed only one time
let result = false                // to check if the calculation is successful 
let isEquationCompelete = false   // to check if the equation is ready to be calculated 
let disablePeriod = false
let is

const history = JSON.parse( localStorage.getItem("History") )

if (history) {
    calculatorHistory = history
    displayHistory()
}     // to always display the history even after refreshing the page


allClearBtn.addEventListener("click", function() {
    screenEl.innerHTML = "0"
    isPeriodPressed = false
    isOperatorPressed = false
    result = false 
    isEquationCompelete = false   
})

delBtn.addEventListener("click", function() {
    if (screenEl.innerHTML != "0") {
        screenEl.innerHTML = screenEl.innerHTML.substring(0, screenEl.innerHTML.length - 1)
        result = false
        isOperatorPressed = false
    }
    if (screenEl.innerHTML.length < 1) {
        screenEl.innerHTML = "0"
        isPeriodPressed = false
        isOperatorPressed = false
        result = false 
        isEquationCompelete = false
    }
})

equalBtn.addEventListener("click", function() {
    if (screenEl.innerHTML != "0" && isEquationCompelete === true ) {
        screenEl.innerHTML = eval(screenEl.innerHTML)
        isPeriodPressed = false
        isOperatorPressed = false
        isEquationCompelete = false
        result = true
        calculatorHistory.push(screenEl.innerHTML)
        localStorage.setItem("History", JSON.stringify(calculatorHistory) )
        displayHistory()
    }    
})

periodBtn.addEventListener("click", function() {
    if (isPeriodPressed === false && result === false && disablePeriod === false) {
        screenEl.innerHTML += "."
        isPeriodPressed = true
        isOperatorPressed = true
    }
})

//                        -Operator buttons-
// ====================================================================
divideBtn.addEventListener("click", function() {
    if (isOperatorPressed === false && screenEl.innerHTML != "0") {
        screenEl.innerHTML += "/"
        isOperatorPressed = true
        isPeriodPressed = false
        result = false
        disablePeriod = true
        isEquationCompelete = true
    }
})

multiplyBtn.addEventListener("click", function() {
    if (isOperatorPressed === false && screenEl.innerHTML != "0") {
        screenEl.innerHTML += "*"
        isOperatorPressed = true
        isPeriodPressed = false
        result = false
        disablePeriod = true
        isEquationCompelete = true
    }
})

plusBtn.addEventListener("click", function() {
    if (isOperatorPressed === false && screenEl.innerHTML != "0") {
        screenEl.innerHTML += "+"
        isOperatorPressed = true
        isPeriodPressed = false
        result = false
        disablePeriod = true
        isEquationCompelete = true
    }
})

minusBtn.addEventListener("click", function() {
    if (isOperatorPressed === false && screenEl.innerHTML != "0") {
        screenEl.innerHTML += "-"
        isOperatorPressed = true
        isPeriodPressed = false
        result = false
        disablePeriod = true
        isEquationCompelete = true
    }
})
// ==========================================================================


//                            _Number Buttons_
// ==========================================================================
oneBtn.addEventListener("click", function() {
    if (result === false && screenEl.innerHTML != "0") {
        screenEl.innerHTML += "1"
        isOperatorPressed = false
        disablePeriod = false
    } else if (result === true || screenEl.innerHTML === "0") {
        screenEl.innerHTML = "1"
        result = false
        isEquationCompelete = false
    }
})

twoBtn.addEventListener("click", function() {
    if (result === false && screenEl.innerHTML != "0") {
        screenEl.innerHTML +="2"
        isOperatorPressed = false
        disablePeriod = false
    } else if (result === true || screenEl.innerHTML === "0") {
        screenEl.innerHTML = "2"
        result = false
        isEquationCompelete = false
    }
})

threeBtn.addEventListener("click", function() {
    if (result === false && screenEl.innerHTML != "0") {
        screenEl.innerHTML += "3"
        isOperatorPressed = false
        disablePeriod = false
    } else if (result === true || screenEl.innerHTML === "0") {
        screenEl.innerHTML = "3"
        result = false
        isEquationCompelete = false
    }
})

fourBtn.addEventListener("click", function() {
    if (result === false && screenEl.innerHTML != "0") {
        screenEl.innerHTML += "4"
        isOperatorPressed = false
        disablePeriod = false
    } else if (result === true || screenEl.innerHTML === "0") {
        screenEl.innerHTML = "4"
        result = false
        isEquationCompelete = false
    }
})

fiveBtn.addEventListener("click", function() {
    if (result === false && screenEl.innerHTML != "0") {
        screenEl.innerHTML += "5"
        isOperatorPressed = false
        disablePeriod = false
    } else if (result === true || screenEl.innerHTML === "0") {
        screenEl.innerHTML = "5"
        result = false
        isEquationCompelete = false
    }
})

sixBtn.addEventListener("click", function() {
    if (result === false && screenEl.innerHTML != "0") {
        screenEl.innerHTML += "6"
        isOperatorPressed = false
        disablePeriod = false
    } else if (result === true || screenEl.innerHTML === "0") {
        screenEl.innerHTML = "6"
        result = false
        isEquationCompelete = false
    }
})

sevenBtn.addEventListener("click", function() {
    if (result === false && screenEl.innerHTML != "0") {
        screenEl.innerHTML += "7"
        isOperatorPressed = false
        disablePeriod = false
    } else if (result === true || screenEl.innerHTML === "0") {
        screenEl.innerHTML = "7"
        result = false
        isEquationCompelete = false
    }
})

eightBtn.addEventListener("click", function() {
    if (result === false && screenEl.innerHTML != "0") {
        screenEl.innerHTML += "8"
        isOperatorPressed = false
        disablePeriod = false
    } else if (result === true || screenEl.innerHTML === "0") {
        screenEl.innerHTML = "8"
        result = false
        isEquationCompelete = false
    }
})

nineBtn.addEventListener("click", function() {
    if (result === false && screenEl.innerHTML != "0") {
        screenEl.innerHTML += "9"
        isOperatorPressed = false
        disablePeriod = false
    } else if (result === true || screenEl.innerHTML === "0") {
        screenEl.innerHTML = "9"
        result = false
        isEquationCompelete = false
    }
})

zeroBtn.addEventListener("click", function() {
    if (result === false && screenEl.innerHTML != "0") {
        screenEl.innerHTML += "0"
        isOperatorPressed = false
        disablePeriod = false
    } else if (result === true) {
        screenEl.innerHTML = "0"
        result = false
        isEquationCompelete = false
    }
})
// ==================================================================================


clearBtn.addEventListener("click", function() {
    localStorage.clear()
    ulEl.innerHTML = ""
    calculatorHistory = []
})


function displayHistory() {
    let historycalculatorHistory = ""
    for (let i = 0; i < calculatorHistory.length; i++) {
        historycalculatorHistory += `
        <li>
        ${calculatorHistory[i]}
        </li>
        `
    }
    ulEl.innerHTML = historycalculatorHistory
}



//                                  *failed attempt*
// ==========================================================================================
// function push(obj) {
//      let pushed = obj.innerHTML;
//      if (pushed == "=") {
//          screenEl.innerHTML = eval(screenEl.innerHTML)
//          isPeriodPressed = false
//          isOperatorPressed = false
//          result = true
//          calculatorHistory.push(screenEl.innerHTML)
//          localStorage.setItem("History", JSON.stringify(calculatorHistory) )
//         displayHistory()
//      } else if (pushed == "AC") {
//          screenEl.innerHTML = "0"
//          isPeriodPressed = false
//          isOperatorPressed = false
//          result = false
//      } else if (pushed === "." && isPeriodPressed === false && result === false) {
//         screenEl.innerHTML += pushed
//         isPeriodPressed = true
//     } else {
//          if (screenEl.innerHTML == "0") {
//              screenEl.innerHTML = pushed
//         } else if (pushed != "." && result === false) {
//              screenEl.innerHTML += pushed

//          } else if (result === true && pushed != ".") {
//              screenEl.innerHTML = pushed
//              result = false
//          }
//      }
// }
// =========================================================================================