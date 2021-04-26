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
7. sdifusb
8. sdvjbsk
9. dsfkhbskd
10. dskjbfksj
11. kjbsd
12. kdjbf
13. kdsfbk
14. dskfhbk
15. sdkfhbk
16. sdfkhbk
17. sbfdk
18. hsdfv
19. dskfjhvs