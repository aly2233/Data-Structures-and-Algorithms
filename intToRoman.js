var intToRoman = function(num) {
    //set a result as a string
    //set an i to move through values
    //use a while loop (until num = 0) to traverse
    //push symbol into result for each time the values[i] is taken out of num
    //if number can no longer be subtracted by values[i], continue to next value
    //return result
    let result = '';
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	const chars = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let i = 0;
    while (num > 0) {
        if (num - values[i] >= 0) {
            result += chars[i];
            num -= values[i];
        } else {
            i++;
        }
    }
    return result;

};