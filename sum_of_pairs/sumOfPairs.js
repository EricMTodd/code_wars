console.log("sum_of_pairs.js is running...");


// Challenge URL: https://www.codewars.com/kata/sum-of-pairs/train/javascript


// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.


// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * entire pair is earlier, and therefore is the correct answer
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * entire pair is earlier, and therefore is the correct answer
// == [3, 7]


// Negative numbers and duplicate numbers can and will appear.

// NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure ints[k]our code doesn't time out.


// Sample Lists
l1= [1, 4, 8, 7, 3, 15];
l2= [1, -2, 3, 0, -6, 1];
l3= [20, -13, 40];
l4= [1, 2, 3, 4, 1, 0];
l5= [10, 5, 2, 3, 7, 5];
l6= [4, -2, 3, 3, 4];
l7= [0, 2, 0];
l8= [5, 9, 13, -3];


// Function
const sumPairs = (ints, s) => {
    console.log(`List being tested: ${ints}`);
    console.log(`Required sum: ${s}`);
    let indicies =[];
    let sumSpace;
    let recordSumSpace;
    for (let i = 0; i < ints.length; i++) {
        ints[i] = ints[i];
        for (let k = 0; k < ints.length; k++) {
            ints[k] = ints[k];
            if (ints[i] + ints[k] === s && i !== k) {
                if (i > k) {
                    sumSpace = i - k;
                } else {
                    sumSpace = k - i;
                }
                if (recordSumSpace > sumSpace || recordSumSpace === undefined) {
                    recordSumSpace = sumSpace;
                    indicies = [ints[i], ints[k]];
                }
            }
        }
    }
    if (recordSumSpace === undefined) {
        return console.log("No viable sum found.");
    } else {
        console.log("Solution:", indicies);
        return indicies;
    }
}


sumPairs(l5, 10);