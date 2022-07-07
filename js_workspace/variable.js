var age;
console.log('age : '+ age);
age = 10
console.log('age : ' + age);

name = "hong";
var name;
console.log('name: ' + name); //hosting 때문에 가능

{
    var hobby = 'swimming';
    console.log('hobby : ' | hobby);
}
console.log('hobby : ' + hobby) ;

// let name1 = 'hong';
// console.log('name1 : ' + name1);

// name2 = 'hong2'; //오류 발생.. 선언 후 할당해야 함.
// let name2;
// console.log('name2 : ' + name1);

// let globalName = 'hong';
// {
//     let localName = 'hongLocal'
// }
// console.log('globalName : ' + globalName);
// console.log('localName : ' + localName);

// console.log('constant--> ');
// {
//     const dayInWeek = 7;
//     const maxNumber = 5;
//     console.log('dayWeek : ' + dayInWeek);
//     maxNumber = 10; //이러면 에러 발생
// }

console.log('4. Dynamic type --> ');

{
    let text = 'hong';
    console.log('text :' + text +  ', type : ' + typeof(text));

    //빽틱
    text = 1;
    console.log(`text=>  ${text} ,type : ${typeof text} ` )

    text = '1' + 1;
    console.log(`text=>  ${text} ,type : ${typeof text} ` )

    text = '4' / '2';
    console.log(`text=>  ${text} ,type : ${typeof text} ` )
}

console.log('5. Object type --> ');
{
    const obj = {name: 'hong' , age:11}
    console.log(`obj.name=> ${obj.name}, obj.age=> ${obj.age}`);

    obj.name = 'dong';
    obj.age = 22
    console.log(`obj.name=> ${obj.name}, obj.age=> ${obj.age}`);
}