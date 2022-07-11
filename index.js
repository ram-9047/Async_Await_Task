console.log("person1: shows ticket");
console.log("person2: shows ticket");

let promiseWIfeBringTickets = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ticket");
  }, 3000);
});

promiseWIfeBringTickets.then(function ticketBought(ticket) {
  console.log(`person3 : shows ${ticket}`);
});

console.log("person4: shows ticket");
console.log("person5: shows ticket");
