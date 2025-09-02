/**
  Truthy:
  1. true
  2. any number (+ve, -ve) will be truthy other than 0
  3. any string other than empty string
  4. '0', 'false'
  5. {}
  6. []

  Falsy:
  1. false  
  2. 0
  3. '' (empty string)
  4. undefiend
  5. null
 */
let x = [5, 5];
console.log(x);

if (x) {
    console.log('value of x is truthy');

}
else {
    console.log('value of x is falsy');

}

// optional
// check falsy
const y = null;
if (!y) {
    // console.log('value is falsy');

}

// check true
const z = {class: 9};
if (!!z) {
    console.log('value is truthy');

}