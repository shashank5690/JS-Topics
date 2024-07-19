//closure is a function that has access to the outer function scope even after the outer function has returned.

// function myfunc(){
//      const name ="Shashank";
//      function display(){
//         console.log(name);
//      }
//      return display;
// }

// const myClosure = myfunc();
// myClosure(); // Shashank

function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();