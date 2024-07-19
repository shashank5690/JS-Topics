function count(){
    let counter = 0;
    return function(){
        counter++;
        console.log(counter);
    };
}

const myCounter = count();
myCounter(); // 1
myCounter(); 