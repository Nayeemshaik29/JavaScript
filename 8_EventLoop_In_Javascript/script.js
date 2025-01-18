console.log("Code Starting"); // callstack

const id = setTimeout(() => {
    // WEB API
    console.log("Inside the timeout");
}, 2000);

console.log("Code ended"); // callstack

// let i = 0;
// function showTime() {
//     const time = new Date();
//     console.log(time.toISOString());

//     i++;
//     if (i == 5) clearInterval(id);
// }

// const id = setInterval(showTime, 1000);
