console.log('1. 배열 접근 ---> ');
const fruits = ['사과','바나나'];
for(let fruit of fruits){
    console.log(fruit);
}
//forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
/**
 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
 * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
 * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
 */
fruits.forEach(function(fruit,index,array){
    console.log(fruit,index,array);
    
});

fruits.forEach((fruit, index)=>{console.log(fruit,index)});
fruits.forEach((fruit)=> console.log(fruit));

console.log('2. find() ---> ')

class Student{
    constructor(name,age,enrolled,score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}


const students = [
    new Student('a',10,true,40),
    new Student('b',20,false,60),
    new Student('c',30,true,70),
    new Student('d',40,true,80),
    new Student('e',40,true,80),
]

{
//결과가 다 출력됨
const result = students.find(function(student,index){
    console.log(student,index);
});
//조건이 참인 경우 "하나만" 결과가 출력됨
const result1 = students.find(function(student,index){
    return student.score === 80;
 });
 console.log('result1 ----> ');
 console.log(result1);

const result2 = students.find((student)=> student.score === 80);
console.log('result2 ---> ');
console.log(result2);
}

console.log('3.filter() ---> ');
{
    const result = students.filter((student) => student.enrolled === true);
    console.log(result);
}

console.log('4.map() ---> ');
{
    const result = students.map((student) => student.enrolled === true);
    console.log(result);
}
