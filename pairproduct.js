const pairProduct = (numbers, targetProduct) => {
    const prev = {};
    
    for (let i = 0; i < numbers.length; i++) {
      let num = numbers[i];
      let complement = targetProduct/num;
      if (complement in prev) {
        return [i, prev[complement]]
      }
      
      prev[num] = i;
    }
  };