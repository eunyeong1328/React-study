console.log('1.오브젝트 생성');
function print(name, age){ //변수를 인자로 전달
    console.log(`name: ${name}, age: ${age}`);
}
print('hong', 20);

function print1(person){//Object를 인자로 전달
    console.log(person.name);
    console.log(person.age);
}

person = {name : 'gil' , age : 30};
print1(person);

person.job = 'engineer';
console.log('job : ' + person.job);

delete person.job; 
console.log(person.job);

console.log('2. 함수이용 객체 생성 --> ');
function makePerson(name,age){
    return {
        name:name,
        age:age
    }
}
const person4 = makePerson('hong4' , 13);
console.log(`person4 :  ${person4.name}`);


function makePerson(name,age){
    return {
        name,
        age
    }
}
const person5 = makePerson('hong5' , 13);
console.log(`person5 :  ${person5.name}`);

function Person(name,age){//대문자 사용
    this.name = name;
    this.age = age;
}
const person6 = new Person('hong6' , 13);
console.log(`person6 :  ${person6.name}`);

const person77 = new Person('hong77',77);
console.log(person77);

console.log('6 in operator ');
console.log('name' in person77);
console.log('age' in person77);

console.log(' 3. 계산된 속성.. ');
function printValue (obj, key){
    console.log(obj.key);//undefined
    console.log(obj[key]);//value
}

printValue(person,'name');

console.log('4. cloning(복사)');
{
    //1. 주소 복사
    const user = {name: 'hongg', age:22};
    const user2 = user; //user가 가리키는 오브젝트의 주소를 복사
    //그래서, 같은 오브젝트를 가리키고 있음
    user2.name = 'dongg';
    console.log(`user.name : ${user.name} user2.name : ${user2.name}`);
    
    //2. 객체 복사
    const user3 = {};
    for(key in user3){
        user3[key] = user[key];
    }
    user3.name = 'gil'
    console.log(user);
    console.log(user3);

    const user4 = {};
    Object.assign(user4, user);
    console.log(user4);

    const user5 = Object.assign({},user3);
    console.log(user5);

    const fruit1 = {color:'red'};
    const fruit2 = {color:'blue',size:'big'};
    const mixed = Object.assign({}, fruit1,fruit2);
    console.log(mixed.color);
    console.log(mixed.size);
}