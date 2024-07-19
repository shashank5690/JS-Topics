// example for callback function (syncronous)
const callback = () => {
    console.log('This is a callback function');
}
// example for callback function (asyncronous)
const callbackfucn=  (callbackfunction) => {
    console.log('This is callback again');
    setTimeout(() => {
        callbackfunction();
    },2000)
} 

callbackfucn(() => {
    console.log('This is a callback function');
})