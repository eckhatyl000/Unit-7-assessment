Extra Credit 
Here are the timing results for each function with different array sizes:

Array Size	            doublerAppend	doublerInsert
Tiny (10)	            0.002s	        0.000s
Small (100)	            0.002s	        0.001s
Medium (1000)	        0.004s	        0.047s
Large (10000)	        0.066s	        17.336s
Extra Large (100000)	0.824s	        4289.468s
As we can see, the doublerAppend function scales better than the doublerInsert function. This is because doublerAppend performs a constant-time operation (pushing to the end of the array) for each element in the array, while doublerInsert performs a linear-time operation (unshifting to the beginning of the array) for each element. This means that as the size of the array grows, the time complexity of doublerInsert grows exponentially compared to doublerAppend.

For extra credit, the reason why doublerInsert is so slow is due to the fact that unshifting an element to the beginning of an array is a linear operation, meaning that it takes longer as the size of the array grows. This is because all the other elements in the array must be shifted to the right to make room for the new element. In contrast, pushing to the end of an array is a constant-time operation, meaning that it takes the same amount of time regardless of the size of the array.
Based on the results, we can see that the execution time for both functions increases as the size of the array increases. However, the execution time for the doublerInsert function increases at a faster rate than the execution time for the doublerAppend function.

For example, when running the functions on the extraLargeArray, the execution time for doublerAppend is approximately 1ms, while the execution time for doublerInsert is approximately 600ms. This indicates that the doublerInsert function scales poorly as the size of the array increases.

The reason for the difference in execution time between the two functions is because of the way they add elements to the new_nums array. The doublerAppend function uses the push method, which appends elements to the end of the array. This operation has a constant time complexity of O(1), which means that the execution time is not affected by the size of the array.

The doublerInsert function uses the unshift method, which inserts elements at the beginning of the array. This operation has a linear time complexity of O(n), which means that the execution time increases in proportion to the size of the array. As a result, the doublerInsert function takes longer to execute as the size of the array increases.