console.log('1. Sync callback 순차적 진행!!');
console.log('1');
function printIm(print) {
    print();
};
printIm(()=>{console.log('sync callback!!')}); 
console.log('3');

console.log('2. Async callback 일정시간 후 진행!!');
console.log('1');
function printImDelay(print,delay) { //delay를 기다렸다가 호출
    setTimeout(print,delay);
};
printImDelay(()=>{console.log('sync callback!!')},1000); 
console.log('3');

console.log('3. Callback Ex !!');
class UserCheck{//클래스를 만들 때는 대문자
    loginUser(id, onSuccess, onError){   
        setTimeout(()=>{
            const user = {};
            user.id = id;
            user.role = 'admin';

            if(id === 'lee'){
                onSuccess(user);
            }else{
                onError(user);
            }
        },2000)
    }
}

const userCheck = new UserCheck();//객체를 만들 때는 소문자
const id =  prompt('enter your id');
userCheck.loginUser(
    id,
    (user) => {
        alert(`${user.id} has a ${user.role} role`);
    },
    (user) => {
        alert(`${user.id} is not registered. please confirm !!`);
    }
);