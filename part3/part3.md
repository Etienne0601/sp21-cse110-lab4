1. What was the bug?
   * The bug was that the code would just concatenate the two operands as strings instead of numbers, so `5 + 7` would give `57`.
2. How would you fix it? Include a screenshot of your fix.
   * I would fix it by putting `parseInt()` around both `num1` and `num2`.
3. What is the name of the new json file?
   * citylots.json
4. Which file initiated the download of the new file?
   * part2.js
5. What is its file size?
   * citylots.json is 11.7 MB
6. How long did it take to download?
   * It took 2.90 seconds
7. What was your User-Agent for the browser that made the request?
   * Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36
8. In the response, what type of server did it come from?
   * An Apache server
9.  When was the file last modified?
    * Tue, 26 Jan 2021 22:14:13 GMT
10. What was the Content-Type of the file?
    * application/json
11. Which method inside the initiating file made the request?
    * The `fetchData()` method makde the request using `fetch('./citylots.json')`