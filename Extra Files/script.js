// function outer(){
//     const a = 6;
//     const b = 5;
//     function inner(){
//         console.log(a + b);
//      }
//      return inner
// }
// outer()

function parent() {
  const a = 6;
  const b = 4;
  function add() {
    console.log(a + b);
  }
  return add;
}

const add1 = parent();
console.dir(add1);
