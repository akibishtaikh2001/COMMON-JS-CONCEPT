// primitivw types are pass by value


let num1 = 5;
let num2 = 7;
function multiply(a, b){
    a = 27;
    const result = a * b;
    return result;
}
console.log(num1);
multiply(num1, num2);
console.log(num1);

// object and array are pass by reference
let student1 = {name:'Jalil', patner: 'borsha'};
let student2 = {name:'Raj', patner:'anika'}

function MakeMovie(copule1, copule2){
    copule1.name = 'Ononto';
    copule2.patner = 'mim';

}

console.log(student1, student2);
MakeMovie(student1, student2);
console.log(student1, student2);
