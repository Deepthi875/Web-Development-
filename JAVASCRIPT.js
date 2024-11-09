function doubleEvenNumbers(arr) {
    let result = []; // Create an empty array to store the results
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) { // Check if the number is even
        result.push(arr[i] * 2); // If even, double the number and add to result
      } else {
        result.push(arr[i]); // If odd, keep the number the same and add to result
      }
    }
  
    return result; // Return the result array
  }
  