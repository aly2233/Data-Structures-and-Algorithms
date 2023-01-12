function encode(plainStr, dictOfSubs) {
    // Replace letters of plain string with DictOfSubs if it matches
    // Cannot use Object.keys(), Object.values()
    let answer = "";
    for (let letter of plainStr) {
        if (letter.toLowerCase() in dictOfSubs) {
            answer += dictOfSubs[letter.toLowerCase()];
        } else {
            answer += letter; 
        }
    }
    return answer;
    // You do not have to iterate over object to solve this
  }
  
  var dictOfSubs1 = {
    e : '%',
    n : '#',
    o : '@',
    m : '*',
    p : '&'
  }
  
  function assertEqual(actual, expected, testName) {
    if (actual === expected) {
      console.log('passed')
    }
    else {
      console.log('Failed ['+testName+'], Expected '+expected+', but got '+actual+'.')
    }
  }
  
  var phrase = 'Encode Me!'
  var actual1 = encode(phrase, dictOfSubs1)
  var expected1 = '%#c@d% *%!'
  assertEqual(actual1, expected1, "should encode the phrase");


