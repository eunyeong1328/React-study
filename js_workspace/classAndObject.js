console.log('1.class ==> ');

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    speak(){
        console.log(`${this.name} speak hello~~`);
    }
}

const hong = new Person('hong', 10);
console.log(`${hong.name} age is ${hong.age}`);
hong.speak();

const gil = new Person('gil', 20);
console.log(`${gil.name} age is ${gil.age}`);
gil.speak();

const dong = new Person('dong', 30);
console.log(`${dong.name} age is ${dong.age}`);
dong.speak();
//실체가 없음
class User{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){ //_(언더바 사용 안하면 overflow : stack이 계속 돔)
        if( value < 0 ){
            throw Error('age can not negative !!');
        }
        this._age = value;
    }
}
//실체 만들기
const userTemp  = new User('hong',30);
console.log(userTemp.age)


console.log('3. class(extends) ==> ');
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`drawing using ${this.color}`);
    }
    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    draw(){ //draw()재정의
        super.draw();//부모의 메소드를 불러서 사용할 수 있음
        console.log('drawing using Triangle !! ');
    }
    getArea(){
        return (this.width*this.height*0.5);
    }
}
const rectangle = new Rectangle(10,10,'blue');
rectangle.draw();

const rectangle1 = new Rectangle(20,20,'red');
const triangle = new Triangle(20,20,'red');
console.log(rectangle1.getArea());
console.log(triangle.getArea());