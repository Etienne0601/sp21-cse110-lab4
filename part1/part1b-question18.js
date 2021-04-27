function printDate() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

var timeoutID = setInterval(printDate, 1000);