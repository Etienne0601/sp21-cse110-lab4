# Part 1. Intro to Javascript

## Part 1a. A Quick Introduction

1. What is printed by line 9? If the code returns an error, explain why.
   * Line 9 prints `values added: 20`
2. What is printed by line 13? If the code returns an error, explain why.
   * Line 13 prints `final result: 20`
3. What is printed by line 9? If the code returns an error, explain why.
   * Line 9 prints `values added: 20`
4. What is printed by line 13? If the code returns an error, explain why.
   * The code returns an error at line 13 because even though we tried to print `result` in the same function it was declared in, it is not in the same block scope because `result` was declared using `let` in the `if` statement, so it is only visible in the `if` statement.
5. What is printed by line 9? If the code returns an error, explain why.
   * The code returns an error at line 7 because we tried to reassign `result` when it was declared using `const` and it had already been assigned to. Therefore, line 9 doesn't run.
6. What is printed by line 13? If the code returns an error, explain why.
   * The code returns an error at line 7 because we tried to reassign `result` when it was declared using `const` and it had already been assigned to. Therefore, line 13 doesn't run.


## Part 1b. A Little More of a Challenge

1. What will happen at line 12 and why? If the code causes an error, explain why.
   * At line 12 it will print the number `3` because the variable `i` is incremented until it is no longer less than `prices.length`, which is `3`. Also, `i` is declared as a `var`, which is necessary in order for `i` to be visible outside of the `for` loop.
2. What will happen at line 13 and why? If the code causes an error, explain why.
   * At line 13 it will print `150` because that is 50% off of the last item in the array, because that is the last time `discountedPrice` is reassigned.
3. What will happen at line 14 and why? If the code causes an error, explain why.
   * At line 14 it will similarly print `150` because `finalPrice` is the same as `discountedPrice` rounded to two decimal places.
4. What will this function return? Give a brief explanation why. If the code causes an error, explain why.
   * The function will return `[50, 100, 150]` because that is each price discounted by 50%.
5. What will happen at line 12 and why?  If the code causes an error, explain why.
   * The code has an error at line 12 because the variable `i` was defined using `let` in the `for` loop, so it is not visible outside the `for` loop.
6. What will happen at line 13 and why? If the code causes an error, explain why.
   * The code has an error at line 13 because the variable `discountedPrice` was defined using `let` in the `for` loop, so it is not visible outside the `for` loop.
7. What will happen at line 14 and why? If the code causes an error, explain why.
   * At line 14 the code with print `150` because `finalPrice` was declared using `let` in the `discountPrices` function, so it is reassigned three times in the `for` loop and then printed after the last. The third price after taking 50% off and rounding it to two decimal places is `150`.
8. What will this function return? Give a brief explanation. If the code causes an error, explain why.
   * The function will return `[50, 100, 150]` because that is each price discounted by 50%, and the variable `discounted` was declared using `let` in the `discountPrices` function, which is the same function that returned the array.
9.  What will happen at line 11 and why? If the code causes an error, explain why.
    * The code causes an error at line 11 because the variable `i` can declared using `let` in the `for` loop so it is not visible outside the `for` loop.
10. What will happen at line 12 and why? If the code causes an error, explain why.
    * At line 12 the code will print `3` because the variable `length` was assigned the value `3` on line 4.
11. What will this function return? Give a brief explanation. If the code causes an error, explain why.
    * The function will return `[50, 100, 150]` because that is each price discounted by 50%, and the variable `discounted` was declared using `const` in the `discountPrices` function, which is the same function that returned the array. The `const` keyword simply means that the elements in the `discounted` array cannot be reassigned, but we can still use `push` to add element to the array, as we do in the `for` loop.
12. Given the above Object, write the notation for:
    A. Accessing the value of the name property in the student object
       * `student.name`
    B. Accessing the value of the Grad Year property in the student object
       * `student['Grad Year']`
    C. Calling the function for the greeting property in the student object
       * `student.greeting()`
    D. Accessing the name property of the object in the Favorite Teacher property in student
       * `student['Favorite Teacher'].name`
    E. Access the first index in the array of the courseLoad property of the student object
       * `student.courseLoad[0]`
13. Arithmetic
    A. `'32'`
    B. `1`
    C. `3`
    D. `'3null'`
    E. `4`
    F. `0`
    G. `'3undefined'`
    H. `NaN`
14. Comparison
    A. `true`
    B. `false`
    C. `true`
    D. `false`
    E. `false`
    F. `true`
15. Explain the difference between the == and === operators.
    * The == operator is the "regular equality" operator and uses type conversion before comparing the value of the operands. On the other hand, the === operator is the "strict equality" operator and only returns `true` if the two operands have the same value and the same type.
16. Given the above Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.  (This should be in a JS file part1b-question16.js)
17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part1.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development.
    * The result will be `[2, 4, 6]`. In the `for` loop, the new array is formed by calling the `doSomething` function (which is passed in as a parameter) on each element of the old array, and pushing the result onto the new array. The `doSomething` function simply multiplies its argument by two, so the new array will have each of its elements doubled.
18. The above program only prints out the time once when executed. Modify this code such that the program prints out the time every second.  (This should be a JS file - part1b-question18.js)
19. What is the output of the above code? (This should be in your part1.md)
    * The code outputs:
   ```
      1
      4
      3
      2
      ```