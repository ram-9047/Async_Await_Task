console.log("person1: shows ticket");
console.log("person2: shows ticket");

let promiseWIfeBringTickets = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ticket");
  }, 3000);
});

// let getSomePopcorn = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("popcorn");
//   }, 2000);
// });

// let getColdDrinks = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("coke");
//   }, 2000);
// });

let getPopcorn = promiseWIfeBringTickets.then(function boughtTicket(ticket) {
  console.log("husband: we should go in.");
  console.log("wife: i'm hungry");

  return new Promise((resolve, reject) => {
    // resolve(`got the popcorn`)
    setTimeout(() => {
      resolve(`${ticket} and popcorn`);
    }, 2000);
  });
});

let getButter = getPopcorn.then(function boughtPopcorn(popcorn) {
  console.log("husband: we should go in..");
  console.log("wife: i need butter");
  //   console.log(`here is your ${popcorn}`);
  return new Promise((resolve, reject) => {
    resolve(`${popcorn} with butter`);
  });
});

let getColdDrink = getButter.then(function boughtButter(butter) {
    console.log("husband: anything else baby");
    console.log("wife: cold drinks !!!");
    
    return new Promise((resolve,reject) => {
        // resolve(`${butter} and coke`);
        setTimeout(()=>{
            resolve(`${butter} and coke`);
        },1000)
    })
//   console.log(`here is your ${butter}`);
});

getColdDrink.then(function boughtDrinks(drinks){
    console.log(`Husband: here is your${drinks}`);
    console.log('husband: lets go, we are getting late');
    console.log("wife: ya lets go");
})

console.log("person4: shows ticket");
console.log("person5: shows ticket");
