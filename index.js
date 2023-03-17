// question 1
// mutating array is basically changing the array itself instead of returning a new array  with the new  changes while non-mutating array is returning a whole new array which has all the changes

// examples of mutating array:-
// prototype.pop()
// prototype.push()
// prototype.shift()
// prototype.unshift()
// prototype.reverse()

// examples of non-mutating array:-
// prototype.slice()
// prototype.concat()
// prototype.map()
// prototype.filter()

// question 2
['C#', 'JavaScript', 'Ruby','PHP','Python']
let items = ['C#', 'JavaScript', 'Ruby','PHP','Python']
items.push('kotlin')
console.log(items)

items.splice(3, 0, 'JAVA')
console.log(items)

items.shift('C#')
console.log(items)

items.unshift('Scala', 'Swift')
console.log(items)

items.splice(5)
items.splice(6,0,'Go','Rust')
console.log(items)

// question 3
let fruit=['apple', 'mango','banana']
function changeFruit( fruit ){
fruit[2]='orange';
return fruit;

}
changeFruit(fruit)
console.log(fruit)

// question 4
Math.max(23,90,76)
console.log(Math.max(23, 90, 76))

// question 5
let arr=[1,2,5]
valTimeIndex(arr)
function valTimeIndex(arr){
    return arr.map((val, i)=>val * i);
}
console.log(valTimeIndex(arr))

