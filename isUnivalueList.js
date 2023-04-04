const isUnivalueList = (head) => {
    let current = head;
    
    while (current !== null) {
      if (current.val !== head.val) return false;
      current = current.next;
    }
    
    return true;
  }