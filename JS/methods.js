//map The map() method creates a new array by applying a function to each element of the original array.
const array1 =[1,2,3,4,5,6]
const result =array1.map(item=>item*2)
//console.log(result)


//filter  The map() method creates a new array by applying a function to each element of the original array.
//const result1 = array1.filter(item=>item>3)
//console.log(result1)

//reduce The reduce() method executes a function on each element to compute a single result
/*Syntax: 
	const result = array.reduce((accumulator, currentValue) => {
	    return newAccumulator;
}, initialValue);*/
const result1 = array1.reduce((accumulator, currentValue) => {
    return accumulator+currentValue;
}, 0);
//console.log(result1)

//for each
const fruits =["apple","banana","grapes","mango"]
//fruits.forEach(item=>console.log(item));
for (const item of fruits){
    console.log(item)
}

//////////////////////////////////////////////////////////////////////////////////////////////////
//objects
const person = {
    Name : "Sirisha",
    ID: 1,
    num: 9897558869,
    greet: function(){
        console.log(`hello ${this.Name}`)
    }
}
//person.greet()

//forin
/*for(const key in person){
    console.log(`${key}:${person[key]}`)
}*/



