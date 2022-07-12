console.log("person1: shows ticket");
console.log("person2: shows ticket");

//---------------- USING PROMISES------------//
// let promiseWIfeBringTickets = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("ticket");
//   }, 3000);
// });

// let getPopcorn = promiseWIfeBringTickets.then(function boughtTicket(ticket) {
//   console.log("husband: we should go in.");
//   console.log("wife: i'm hungry");

//   return new Promise((resolve, reject) => {
//     // resolve(`got the popcorn`)
//     setTimeout(() => {
//       resolve(`${ticket} and popcorn`);
//     }, 2000);
//   });
// });

// let getButter = getPopcorn.then(function boughtPopcorn(popcorn) {
//   console.log("husband: we should go in..");
//   console.log("wife: i need butter");
//   //   console.log(`here is your ${popcorn}`);
//   return new Promise((resolve, reject) => {
//     resolve(`${popcorn} with butter`);
//   });
// });

// let getColdDrink = getButter.then(function boughtButter(butter) {
//     console.log("husband: anything else baby");
//     console.log("wife: cold drinks !!!");

//     return new Promise((resolve,reject) => {
//         // resolve(`${butter} and coke`);
//         setTimeout(()=>{
//             resolve(`${butter} and coke`);
//         },1000)
//     })
// //   console.log(`here is your ${butter}`);
// });

// getColdDrink.then(function boughtDrinks(drinks){
//     console.log(`Husband: here is your${drinks}`);
//     console.log('husband: lets go, we are getting late');
//     console.log("wife: ya lets go");
// })

// -----------------USING  async- awaits---------------------
let preMovie = async () => {
  let wifeBringingTickets = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ticket");
    }, 3000);
  });

  let ticket = await wifeBringingTickets;

  console.log(`wife: I have ${ticket}`);
  console.log("husband: lets go in");
  console.log("wife: i am hungry");

  let getPopcorn = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("popcorn");
    }, 2500);
  });

  let popcorn = await getPopcorn;

  console.log(`husband: here, I bought ${popcorn}`);
  console.log("wife: i need butter also");

  let getButter = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("butter");
    }, 2000);
  });

  let butter = await getButter;

  console.log(`husband: got you some${butter}`);
  console.log("wife: need something to drink as well..");

  let getColdDrink = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("coke");
    }, 1500);
  });

  let coldDrink = await getColdDrink;
  console.log(`husband: here is your ${coldDrink}`);
  console.log("husband: lets go, we are gettin late.");
  console.log("wife: yep, lets go");
  console.log(`husband: shows ${ticket}`);
};

preMovie();

console.log("person4: shows ticket");
console.log("person5: shows ticket");
