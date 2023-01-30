console.log('person1: show ticket');
console.log('person2: show ticket');
const promiseWifeBringingTicks = new Promise((resolve,reject) => {
setTimeout(()=>{
    resolve('ticket');
},3000)
});
promiseWifeBringingTicks.then((t) =>{
    console.log(`person3: show ${t}`);
});
console.log('person4: show ticket');
console.log('person5: show ticket');


//2nd eg
const promiseWifeBringingTicks1 = new Promise((resolve,reject) => {
setTimeout(()=>{
    resolve('ticket');
},3000)
});

const getPopcorn = promiseWifeBringingTicks1.then((t)=>{
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    return new Promise((resolve,reject) => resolve(`${t} popcorn`));
});
getPopcorn.then((t)=> console.log(t));

const getButter = promiseWifeBringingTicks1.then((t)=>{
    console.log('husband: we should go in');
    console.log('wife: i need a butter on my popcorn');
    return new Promise((resolve,reject) => resolve(`${t} butter`));
});
getButter.then((t)=> console.log(t));

///Await
const preMovie = async() =>{
const promiseWifeBringingTicks3 = new Promise((resolve,reject) => {
setTimeout(()=>{
    resolve('ticket');
},3000)
});

let ticket = await promiseWifeBringingTicks3;
return ticket;
}
preMovie().then((m)=> console.log(m));

////2question

const getColdDrinks = promiseWifeBringingTicks1.then((t)=>{
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    return new Promise((resolve,reject) => resolve(`${t} colddrinks`));
});
getColdDrinks.then((t)=> console.log(t));

const getButters = promiseWifeBringingTicks1.then((t)=>{
    console.log('husband: we should go in');
    console.log('wife: i need a butter ');
    return new Promise((resolve,reject) => resolve(`${t} butter`));
});
getButters.then((t)=> console.log(t));


// promises.all
const preMovie1 = async() =>{

const promiseWifeBringingTicks4 = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve('ticket'),3000);
});
const getPopcorns = new Promise((resolve,reject)=> resolve(`popcorn`));
const getCandy = new Promise((resolve,reject)=> resolve(`candy`));
const getCoke = new Promise((resolve,reject)=> resolve(`coke`));

let ticket = await promiseWifeBringingTicks4;
let[popcorn, candy, coke] = await Promise.all([getPopcorns,getCandy,getCoke])

console.log(`${popcorn},${candy},${coke}`);
return ticket;
}
preMovie1 ().then((m)=>console.log(`person3:shows ${m}`));
console.log('person4: show ticket');
console.log('person5: show ticket');

//4 question
    
    
    


0