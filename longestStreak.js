const longestStreak = (head) => {
    current_node = head
    max = 0
    count = 0
    while(current_node){
        count +=1
      max = Math.max(max, count)
      if (current_node.next && current_node.val !== current_node.next.val){
          count = 0
      }
      current_node = current_node.next
    }
     return max;
   }