let secretMessage = [
    "Learning",
    "is",
    "not",
    "about",
    "what",
    "you",
    "get",
    "easily",
    "the",
    "first",
    "time,",
    "it",
    "is",
    "about",
    "what",
    "you",
    "can",
    "figure",
    "out.",
    "-2015,",
    "Chris",
    "Pine,",
    "Learn",
    "JavaScript",
  ]
console.log(secretMessage.length)
secretMessage.push('to','program')
  console.log(secretMessage)
secretMessage[7]='right'
console.log(secretMessage)
secretMessage.unshift('programming','or','coding')
console.log(secretMessage)
const part1= secretMessage.slice(24)
console.log(part1)
console.log(part1.length)
function part2(A)
{if(A.length>2){return secretMessage}
else {return ''}}
console.log(part2(part1))
