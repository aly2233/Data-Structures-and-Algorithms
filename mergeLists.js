function mergeLists(head1, head2) {
		
    let node = new Node(null); //null
    let first = node; // null 
    
    while (head1 !== null && head2 !== null) { // l1 = 5 -> 7 -> 10 -> 12 -> 20 -> 28; l2 = // 6 -> 8 -> 9 -> 25
    // node = null -> 5
    	
      if (head1.val < head2.val) {
    		node.next = head1;
        head1 = head1.next;
        
      }
      else {
      	node.next = head2;
        head2 = head2.next;
      }
      
      node = node.next;
    }
    
    while (head1 != null) {
    		
        node.next = head1;
        
        head1 = head1.next;
        node = node.next;
    }
    
    while (head2 != null) {
    		
        node.next = head2;
        
        head2 = head2.next;
        node = node.next;
    }
    
     return first.next;
}