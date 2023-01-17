const getNodeValue = (head, index) => {
    let counter = 0;
    let current = head;
    while (current !== null) {
      if (counter === index) return current.val;
      current = current.next;
      counter += 1;
    }
    return null;
  };
  
  module.exports = {
    getNodeValue,
  };
  