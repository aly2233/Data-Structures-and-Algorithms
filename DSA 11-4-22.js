const intersection = (a, b) => {
	let hash = {};
  solution = [];
  
  a.forEach(ele1 => {
  	hash[ele1] = 1
  })
  
  b.forEach(ele2 => {
  	if (hash[ele2]) {
    	hash[ele2] = 2
    }
  })
  
  console.log(hash)
  
  Object.keys(hash).forEach(key => {
  	if (hash[key] === 2) {
    	solution.concat(key)
    } 
  })
  
  return solution
}