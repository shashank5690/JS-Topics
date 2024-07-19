// promises>>setTimeout() (priority)

function createPromise() {
    console.log("dkddjdjdjdjdjd");
    return new Promise(function exec(resolve, reject) {
        console.log("Resolving the promise");
        setTimeout(()=>{
            resolve("Done");
        },0);
    });
}

setTimeout(function process() {
    console.log("Timer1 completed");
}, 0);

let p = createPromise();

setTimeout(function process() {
    console.log("Timer2 completed");
}, 0);

p.then(function fulfillHandler1(value) {
    console.log("we fulfilled1 with a value", value);
}, function rejectHandler() {});
p.then(function fulfillHandler2(value) {
    console.log("we fulfilled2 with a value", value);
}, function rejectHandler() {});
p.then(function fulfillHandler3(value) {
    console.log("we fulfilled3 with a value", value);
}, function rejectHandler() {});