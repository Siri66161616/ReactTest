//Arrow Function to Calculate Square of a Number

const { spread } = require("axios");

// const functionname=(parameters)=>expression

const Squareofnum =(a)=>(a*a);

console.log(Squareofnum(4))

//Template literals
const a ="Siri"
console.log(`i am ${a}`)

//array destructuring

const array1 =[1,2,3];
const[a1,b,c] =array1
console.log(a1);

//obj dest

const studentdetail ={
    Name : "siri",
    ID : 1
}
const {Name,ID}=studentdetail
console.log(Name);
//spread operator arrays
const a2 =[1,2,3];
const a3=[5,6,8];

const a10 = [...a2,...a3]

console.log(a10);

//spreadoperator for obj

const student={...studentdetail,age:6}
console.log(student)

//rest operator obj
const Sum=(...Numbers)=>{
    return Numbers.reduce((acc, num) => acc + num, 0);
}
console.log(Sum(1,2,3))






