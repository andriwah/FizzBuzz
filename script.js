document.getElementById("check-number").addEventListener("click", checkNumber);

function checkNumber() {
    console.log("checkNumber");
    let number = document.getElementById("input-number")
    console.log(number.value);
    //if input empty show alert
    if (number.value === null || number.value === "" || number.value === "0") {
        alert("Please type number on input")
    } else {

        //if 100 then Buzz!
        //if 18 then Fizz!
        //if 75 then FizzBuzz!
        //if 89 then 89 
        //if second inputed number is modulo 3 then Fizz!
        //if second inputed number is modulo 5 then Buzz!
        //if second inputed number is modulo 3 and 5 then FizzBuzz!
        //if second inputed number show as it is
        //else Fizz!
        // if (number.value === 100)
        let checkInt = parseInt(number.value)
        let result = "Fizz!"
        if (checkInt === 100 ) {
            result = "Buzz!";
        } else if (checkInt === 75 || (checkInt % 3 === 0 && checkInt % 5 === 0)) {
            result = "FizzBuzz!";
        } else if (checkInt === 89) {
            result = "89";
        } else if (checkInt % 3 === 0) {
            result = "Fizz!";
        } else if (checkInt % 5 === 0) {
            result = "Buzz!";
        } else {
            result = checkInt;
        }
        console.log(result);

        let div = document.getElementById("result")
        div.innerHTML += `<p>${result}</p>`

    }

    number.value = null
}

