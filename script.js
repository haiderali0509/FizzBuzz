function fizzbuzz(num) {
    for (let index = 1; index <= num; index++) {
        if (index % 3 === 0) {
            console.log("Fizz")
        }
        else if (index % 5 === 0) {
            console.log("Buzz")
        }
        else if (index % 3 === 0 && index % 5 === 0) {
            console.log("FizzBuzz")
        }
        else {
            console.log(index)
        }
    }
}
fizzbuzz(12);