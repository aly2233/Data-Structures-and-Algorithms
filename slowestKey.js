let slowestKey = function(keyTimes) {
  let pressTimes = [];
pressTimes.push(keyTimes[0][1])
for (let i = 0; i < keyTimes.length - 1; i++){
    pressTimes.push((keyTimes[i+1][1] - keyTimes[i][1]))
}
let max = Math.max(...pressTimes) 
let alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let index;
for (let i = 0; i < pressTimes.length; i++) {
    if (max === pressTimes[i]) {
      index = i;
  }
}
let newIdx = keyTimes[index][0]
return alpha[newIdx];
}

console.log(slowestKey([[0,2], [1,5], [0,9], [2,15]]))