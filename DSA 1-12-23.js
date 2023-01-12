You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

//initialize a new linked list
//use a while loop to traverse through both lists until one equals null
//compare the values of list1 and list2, add the lower value into a new list
//when one of the lists reaches null, add on the rest of the other list to the new list

function mergeTwoLists(list1, list2) {
	let node = new Node(null);
  let head = node;
  
  while (list1 !== null && list2 !== null) {
  	if (list1.val < list2.val) {
    	node.next = list1;
      list1 = list1.next;
    }
    else {
    	node.next = list2;
      list2 = list2.next;
    }
    node = node.next;
  }
  
  while (list1 !== null) {
  	node.next = list1;
    list1 = list1.next;
    node = node.next;
  }
  
  while (list2 !== null) {
  	node.next = list2;
    list2 = list2.next;
    node = node.next;
  }
  
  return head.next;
  
}