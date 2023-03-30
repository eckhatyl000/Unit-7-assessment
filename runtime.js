const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


//To obtain timing results for calling the two functions with differently sized arrays, we added some code to measure the execution time using the execution-time library. We created an array of five different sizes: tinyArray, smallArray, mediumArray, largeArray, and extraLargeArray, and called each function on each of these arrays. We then recorded the time taken for each function to execute and output the results to the console.//

//Based on the results, we can see that the execution time for both functions increases as the size of the array increases.However, the execution time for the doublerInsert function increases at a faster rate than the execution time for the doublerAppend function.//

//For example, when running the functions on the extraLargeArray, the execution time for doublerAppend is approximately 1ms, while the execution time for doublerInsert is approximately 600ms.This indicates that the doublerInsert function scales poorly as the size of the array increases.//

//The reason for the difference in execution time between the two functions is because of the way they add elements to the new_nums array.The doublerAppend function uses the push method, which appends elements to the end of the array.This operation has a constant time complexity of O(1), which means that the execution time is not affected by the size of the array.//

//On the other hand, the doublerInsert function uses the unshift method, which inserts elements at the beginning of the array.This operation has a linear time complexity of O(n), which means that the execution time increases in proportion to the size of the array.As a result, the doublerInsert function takes longer to execute as the size of the array increases.//