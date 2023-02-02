Write a function, longestStreak, that takes in the head of a linked list as an argument. The function should return the length of the longest consecutive streak of the same value within the list.

const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 5 -> 5 -> 7 -> 7 -> 7 -> 6

longestStreak(a); // 3

// current_value 
// max
// count

current_node = head
max = 0
count = 0
while(current_node){
	count +=1
  max = Math.max(max, count)
  if(current_node && current_node.val !== current_node.next.val){
  	count = 0
  }
  current_node = current_node.next
  }
	
	
return max
	




Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

 

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

//two-pointer method
//set a variable called left, start at 0
//set a variable called right, start at numbers.length - 1
//use a while loop to check that left is less than right
//check the sums of each combination, check if equal to target
//if equal then return an array [left + 1, right + 1]
//if sum > target, right--
//else left++

function twoSum = function(numbers) {
	let left = 0;
  let right = numbers.length - 1;
  
  while (left < right) {
  	let sum = numbers[left] + numbers[right];
    if (sum === target) {
    	return [left + 1, right + 1];
    } else if (sum > target) {
    	right--
    } else {
    	left++
    }
  }
}

[2,7,11,15]

target = 9
leftVal = 2
rightVal = 7
sum = 9

returns [1, 2]