//Promises

const promsie = new Promise ((resolve,reject) =>{
    setTimeout(() => {
        resolve('we have the data shashank');
    },2000);
})

promsie.then(data => {
    console.log(data);
})
// promises sirf ek baar resolve ya reject hota hai, and dobara wahi resolve ki value milti hai jo pehle mili thi

// Promise chaining
const promise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('Data 1');
    },2000);
});

promise2.then(data => {
    console.log(data);
    return 'Data 2';
}).then(data => {
    console.log(data);
    return 'Data 3';
}).then(data => {
    console.log(data);
})  