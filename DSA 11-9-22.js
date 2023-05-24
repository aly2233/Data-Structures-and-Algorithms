You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 


Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */



//initialize a dummyHead to start a new linked list
//set tail = dummyHead
//initiliaze a current1 for the head of the first linked list
//initiliaze a current2 for the head of the second linked list
//while loop to traverse each linked list, with the condition that current1/current2 are not null
//use an if statement to compare if current1 < current2
//if true, set tail.next = current1
//else, set tail.next = current2

//if current1 !== null, tail.next = current1
//if current2 !== null, tail.next = current2

//return the dummyHead

var mergeTwoLists = function(list1, list2){
	let dummyHead = new listNode(null);
  let tail = dummyHead;
  let current1 = list1;
  let current2 = list2;
  
  while (current1 !== null && current2 !== null) {
  	if (current1.val < current2.val) {
    	tail.next = current1;
      current1 = current1.next;
    } else {
    	tail.next = current2;
      current2 = current2.next;
    }
    tail = tail.next;
  }
  if (current1 !== null) {
  	tail.next = current1;
  }
  if (current2 !== null) {
  	tail.next = current2;
  }
  return dummyHead.next;
}

Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

O(n) time
O(1) space

-----------------------------------------------------------------------------------------------------
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

leftside : [1, 1, 2 , 6]
rightside : 


//create a product pointer(1) to find all the product in the left side of this current num
	// product = 1
  // iterate through the nums array
  		// product = num * product
      // push this product to a leftside arr
//save this left product to an array
//use the prodcut in this array to multiply by the product in the right side of this current num
	// product = 1
  // create result arr
	// iterate through the nums array
    // product = product * current num //1, 4, 12, 24 
    // leftside[i] = leftside[i] * product 
    

const product = (nums) => {
	let product = 1
  let res = []
  for(let i = 0; i < nums.length; i ++){
    res.push(product)
  	product = nums[i] * product
  }
  // [1, 1, 2 , 6]
  product = 1
  for(let i = nums.length - 1; i >= 0; i --){
    res[i] = res[i] * product
  	product = product * nums[i]
  }
  return res

}

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

product: 24
res: [24, 12, 8, 6]
