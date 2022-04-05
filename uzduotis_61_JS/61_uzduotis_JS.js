const fizzBuzzBem = (how_long) => {
    let currentItem = 0
    let result = []
    for (let i = 1; i <= how_long ; i++) {
        if (i%3 == 0){
            currentItem = "Fizz"
        }
        else if (i%5 == 0) {
            currentItem = "Buzz"
        }
        else if (i%3 == 0 || i%5 == 0) {
            currentItem = "FizzBuzz"
        }
        else{
            currentItem = i
        }

        result.push(currentItem)
      }
    return result
}

// function checkSign(num){
//     return num>0 ? "positive" :num < 0 ? "negative" : "zero"
// }

const fizzBuzzShort = (how_long) => {
    let currentItem = 0
    let result = []
    for (let i = 1; i <= how_long ; i++) {
        i%3 == 0 ? currentItem = "Fizz" : i%5 == 0 ? currentItem = "Buzz" : i%3 == 0 || i%5 == 0 ? currentItem = "FizzBuzz" : currentItem = i
        result.push(currentItem)
      }
    return result
}