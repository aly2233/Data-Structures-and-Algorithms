const pairSum = (numbers, targetSum) => {
    const prev = {};
    
    for (let i = 0; i < numbers.length; i++) {
      const num = numbers[i];
      const complement = targetSum - num;
      if (complement in prev) return [i, prev[complement]];
      
      prev[num] = i;
    }
  };
  
  module.exports = {
    pairSum,
  };
  