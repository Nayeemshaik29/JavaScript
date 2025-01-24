// console.log("Calling the API");

// const response = fetch("https://dummyjson.com/users");

// response
//     .then((data) => {
//         console.log("Got the data", data);

//         const result = data.json();
//         result.then((res) => {
//             console.log("Got the users", res);

//             const users = res.users;

//             for (let user of users) {
//                 console.log(user.id, user.firstName);
//             }
//         });
//     })
//     .catch((err) => {
//         console.log("Got the error", err);
//     });

// console.log("Got the response", response);

// const promise = new Promise((resolve, reject) => {
//     const allGood = false;
//     setTimeout(() => {
//         console.log("Hello");
//         if (allGood) {
//             resolve("secret Data");
//         } else {
//             reject("All was not good");
//         }
//     }, 5000);
// });

// promise
//     .then((data) => {
//         console.log("Got the data", data);
//     })
//     .catch((err) => {
//         console.log("Got the error", err);
//     });

// const res = fetch("https://dummyjson.com/users")
//     .then((data) => {
//         console.log("got the data", data);
//         return data.json();
//     })
//     .then((data) => {
//         console.log("Got the json data", data);
//     })
//     .catch((err) => {
//         console.log("Got the error", err);
//     })
//     .finally(() => {
//         console.log("Finally always be executed");
//     });

// initiate the booking
// add the guest
// process the payment

function initBooking(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Booking initiated");
            resolve({
                bookingId: "9ausdflakjdsf",
                name,
            });
        }, 2000);
    });
}

function addTheGuests(booking, guest) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Added the guests");
            booking["guest"] = guest;
            // resolve(booking);
            reject("Guests are not valid", guest);
        }, 2000);
    });
}

function processPayments(booking, payment) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Payment processed");
            booking["payment"] = payment;
            resolve(booking);
        }, 2000);
    });
}

// initBooking("Anuj")
//     .then((booking) => {
//         console.log("Got the booking", booking);
//         return addTheGuests(booking, ["Shivam", "Anuj"]);
//     })
//     .then((booking) => {
//         console.log("Got the booking", booking);
//         return processPayments(booking, {
//             paymentId: "asdlfouas",
//             amount: 1244,
//         });
//     })
//     .then((booking) => {
//         console.log("Got the booking", booking);
//     })
//     .catch((err) => {
//         console.log("Got the error", err);
//     });

async function bookingFlow() {
    try {
        let booking = await initBooking("Anuj");
        booking = await addTheGuests(booking, ["Shivam", "Anuj"]);
        booking = await processPayments(booking, {
            paymentId: "asdlfouas",
            amount: 1244,
        });
        console.log(booking);
    } catch (err) {
        console.log("Got the error", err);
    }
}

bookingFlow();
