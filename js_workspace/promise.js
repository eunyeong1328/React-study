console.log('1. promise Ex !!');
//producer
const promise = new Promise((resolve, reject)=>{
    console.log('doing something ~~ !!');
    setTimeout(()=>{
        resolve('success!!');
    },2000);
})

//consumer
// promise
//     .then((value)=>{ 
//         console.log(`then() -> ${value}`);
//     })
//     .catch(()=>{
//         console.log(`catch() -> ${error}`);
//     })
//     .finally(()=>{
//         console.log('finally() ->Promise closed !! ');
//     })


console.log('2. Promise Ex2 !! ');
class UserCheck{
    loginUser(id){
        return new Promise((resolve,reject) =>{
            setTimeout(()=>{
                const user = {};
                user.id = id;
                user.role = 'admin';
    
                if(id === 'lee'){
                    resolve(user);
                }else{
                    reject(user);
                }
            },2000)
        });
    }
}

const userCheck = new UserCheck();
const id =  prompt('enter your id');
userCheck.loginUser(id)
.then((user)=>{
    alert(`${user.id} has a ${user.role} role`);
})
.catch((user)=>{
    alert(`${user.id} is not registered. please confirm !!`);
});
  
