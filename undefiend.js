/**
  8 ways to get Undefine
  1. variable that is not initialized will give undefined
  2. function with no return
  3. parameter that is not passed will be undefiend.
  4. if return has nothing on the right side will return undefined
  5. property that doesn't exists on an object will give you undefined
  6. accessing array elements outside of the index range will give you undefined
  7. deleting an element inside an array
  8. set a value directly to undefined
 */

let first;

function second(a, b) {
    const total = a + b;
}

const result = second();

function third(a, b, c, d) {
    const total = a + b + c + d;
    // console.log(a, b, c, d);

}
third(2, 5);

// console.log(result);

function noNegative(a, b) {
    if (a < 0 || b < 0) {
        return;
    }
    return a + b;
}

const total = noNegative(2, -5);
// console.log(total);
const fifth = { id: 2, name: 'ponchom', age: 40 };
//  console.log(fifth.age, fifth.salary);

const sisxth = [4, 89, 87, 56, 54];
// you should not do it. Instead use splice
delete sisxth[1];
// console.log(sisxth[1], sisxth[5], sisxth[200]);
// console.log(sisxth);

const eight = undefined;

const ninth = null;

const data = {result: [], updated: null};

// console.log(typeof undefined);
console.log(typeof null);
