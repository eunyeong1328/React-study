console.log('1. Equality --> ');
{
    const stringFive = '5';
    const numberFive = 5;
    console.log(stringFive == numberFive);
    console.log(stringFive != numberFive);
    console.log(stringFive === numberFive);
    console.log(stringFive !== numberFive);
}

console.log('2. Function(argument) --> ');
function chageName (obj){
    obj.name = 'dong';
}
const obj = {name: 'hong'};
console.log(obj.name);
chageName(obj);
console.log(obj.name);

console.log('3. Function(Default Argument) --> ');
function showMessage(name, age = 20){
    console.log(`${name} age is ${age}`);
}
showMessage('hong', 25);
showMessage('hong');
showMessage();

console.log('4. Function(Rest Argument) --> ');
function printAll(...args){
    for(let i = 0; i<args.length; i++){
        console.log(args[i]);
    }
}
printAll('hong','gil','dong');
printAll('hong',10,'dong');

console.log('4.1 -------------------> ');

function printAll2(...args){
    for(const arg of args){
        console.log(arg);
    }
}
printAll2('b','b','b');
printAll('b',20,'b');

console.log('4.2 -------------------> ');

function printAll3(...args){
    args.forEach((arg)=> console.log(arg));
}
printAll3('a','a','a');
printAll3('a',30,'a');

console.log('5. Function(callback) --> ');
function randomPrint(message, printYes, printNo){
    if(message === 'hong'){
        printYes();
    }
    else{
        printNo();
    }
}
function printYes(){
    console.log('Yes !!');
}
function printNo(){
    console.log('No !!');
}
randomPrint('hong',printYes,printNo);
randomPrint('gil',printYes,printNo);

console.log('6. Function(익명함수) --> ');
const print = function(){
    console.log('print');
}
print();
const printAgain = print;
printAgain();

console.log('6. Function(Arrow(=>) function --> ');
const simplePrint = function(){
    console.log('simple print !!');
}

const simplePrint2 = () => {
    console.log('simple print2 !!');
}

const simplePrint3 = () => console.log('simple print3 !!');
const addNumber = (a,b) => console.log(a+b);

simplePrint();
simplePrint2();
simplePrint3();
addNumber(2,3);

(function hello(){
    console.log('hello');
})();